package com.feuji.timesheetentryservice.serviceimpl;


import java.util.ArrayList;
import java.util.Calendar;

import java.util.Collections;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.feuji.timesheetentryservice.dto.AccountNameDto;
import com.feuji.timesheetentryservice.dto.ProjectNameDto;
import com.feuji.timesheetentryservice.dto.TimeSheeApprovalDto;
import com.feuji.timesheetentryservice.entity.TimesheetWeekSummaryViewEntity;
import com.feuji.timesheetentryservice.repository.TimesheetWeekSummaryRepo;
import com.feuji.timesheetentryservice.service.TimesheetWeekSummaryService;
@Service
public class TimesheetWeekSummaryViewServiceImpl implements TimesheetWeekSummaryService{
	private static Logger log = LoggerFactory.getLogger(TimesheetWeekSummaryViewServiceImpl.class);
	@Autowired
	private TimesheetWeekSummaryRepo timesheetWeekSummaryRepo;
	


	 @Override
	 public List<TimesheetWeekSummaryViewEntity> getTimesheetsForManager(Integer approvedBy, Integer accountId, Integer weekNumber) {
	     List<TimesheetWeekSummaryViewEntity> timesheets = null;
	     try {
	         timesheets = timesheetWeekSummaryRepo.getTimesheetsForManager(approvedBy, accountId, weekNumber);
	         log.info("Retrieved {} timesheets for manager {} for week {} on account/project {}", timesheets.size(), approvedBy, accountId, weekNumber);
	     } catch (Exception ex) {
	         log.error("An error occurred while retrieving timesheets for manager {} for week {} on account/project {}: {}", approvedBy, accountId, weekNumber, ex.getMessage());
	     }
	     return timesheets;
	 }
	 @Override
	 public List<ProjectNameDto> getAccountProjects(Integer accountId,Integer employeeId) {
	     try {
	         log.info("Fetching account projects for accountId: {}", accountId);
	         List<ProjectNameDto> accountProjects = timesheetWeekSummaryRepo.getAccountProjects(accountId,employeeId);
	         return accountProjects;
	     } catch (Exception e) {
	         log.error("Error occurred while fetching account projects: {}", e.getMessage());
	         return null;
	     }
	 }

	 @Override
	 public List<AccountNameDto> getAccounts(Integer approvedBy) {
	     try {
	         log.info("Fetching accounts for approvedBy: {}", approvedBy);
	         List<AccountNameDto> accounts = timesheetWeekSummaryRepo.getAccounts(approvedBy);
	         return accounts != null ? accounts : Collections.emptyList(); // Return empty list if accounts is null
	     } catch (Exception e) {
	         log.error("Error occurred while fetching accounts: {}", e.getMessage());
	         return Collections.emptyList(); // Return empty list in case of exception
	     }
	 }

	 public Integer getTotalHours(Integer employeeId, Integer accountProjectId,Integer weekNumber) {
	     try {
	         log.info("Fetching total hours for employeeId {} and accountProjectId {};", employeeId, accountProjectId);
	         Integer totalHours = timesheetWeekSummaryRepo.getTotalHours(employeeId, accountProjectId,weekNumber);
	         return totalHours;
	     } catch(Exception e) {
	         log.error("Error occurred while fetching total hours: {}", e.getMessage());
	         return null;
	     }    
	}
	 
	 @Override
	 public List<AccountNameDto> getAccounts(String approvedBy) {
	     try {
	         log.info("Fetching accounts for approvedBy: {}", approvedBy);
	         // Ensure that approvedBy is used as an integer if it's meant to be an integer
	         // If approvedBy is an integer, consider changing the parameter type to Integer instead of String
	         List<AccountNameDto> accounts = timesheetWeekSummaryRepo.getAccounts(approvedBy);
	         return accounts != null ? accounts : Collections.emptyList(); // Return empty list if accounts is null
	     } catch (Exception e) {
	         log.error("Error occurred while fetching accounts: {}", e.getMessage());
	         return Collections.emptyList(); // Return empty list in case of exception
	     }
	 }

	 @Override
	 public List<TimeSheeApprovalDto> getTimesheetsForFirstAccountAndCurrentMonth(Integer approvedBy) {
	     // Implement logic to get the ID of the first account from the dropdown
	     Integer accountId = getFirstAccountId(approvedBy);

	     // Implement logic to get the current month and year
	     Calendar now = Calendar.getInstance();
	     int month = now.get(Calendar.MONTH) + 1; // Adding 1 because Calendar.MONTH is zero-based
	     int year = now.get(Calendar.YEAR);

	     // Retrieve timesheets from repository for the first account and current month/year
	     if (accountId != null) { 

	         List<TimesheetWeekSummaryViewEntity> timesheets = timesheetWeekSummaryRepo.findByApprovedByAndAccountIdAndMonth(approvedBy, accountId, month);
	         List<TimeSheeApprovalDto> dtos = new ArrayList<>();
	         for (TimesheetWeekSummaryViewEntity timesheet : timesheets) {
	             TimeSheeApprovalDto dto = new TimeSheeApprovalDto();
	             dto.setWeekStartDate(timesheet.getWeekStartDate());
	             dto.setEmail(timesheet.getEmail());
	             dto.setPlannedStartDate(timesheet.getPlannedStartDate());
	             dto.setPlannedEndDate(timesheet.getPlannedEndDate());
	             dto.setWeekEndDate(timesheet.getWeekEndDate());
	             dto.setProjectName(timesheet.getProjectName());
	             // Set other attributes similarly
	             dtos.add(dto);
	         }
	         return dtos;
	     } else {
	         log.error("Failed to retrieve accountId. Unable to fetch timesheets.");
	         return Collections.emptyList();
	     }
	 }

	 
	 private Integer getFirstAccountId(Integer approvedBy) {
		    try {
		        log.info("Fetching accounts to get the ID of the first account.");
		        List<AccountNameDto> accounts = getAccounts(approvedBy.toString()); // Convert integer to string

		        // Check if accounts list is not empty and retrieve the ID of the first account
		        if (accounts != null && !accounts.isEmpty() && accounts.size() > 1) { // Check size before accessing elements
		            return accounts.get(0).getAccountId(); // Return the ID of the first account (index 0)
		        } else {
		            // Handle the case where no accounts are available or list size is insufficient
		            log.warn("No accounts found or insufficient accounts. Returning null for accountId.");
		            return null; // Or any default value that suits your requirements
		        }
		    } catch (Exception e) {
		        log.error("Error occurred while fetching accounts: {}", e.getMessage());
		        return null; // Return null in case of exception
		    }
		}
	 
	


	 @Override
	 public List<TimeSheeApprovalDto> getTimeSheetApproval(Integer projectManagerId, Integer year, Integer accountId) {
	     try {
	         List<TimeSheeApprovalDto> timeSheetHistory = timesheetWeekSummaryRepo.getTimeSheetApproval(projectManagerId, year, accountId);
	         log.info("timeSheetHistory: {}", timeSheetHistory);
	         return timeSheetHistory;
	     } catch (Exception e) {
	         log.error("An error occurred while fetching time sheet approvals: {}", e.getMessage());
	     }
	     return null;
	 }

	 @Override
	 public List<TimeSheeApprovalDto> getTimeSheetApprovalByEmployeeId(Integer projectManagerId, String month, Integer year,
	         Integer accountId, Integer employeeId) {
	     try {
	         List<TimeSheeApprovalDto> timeSheetHistory = timesheetWeekSummaryRepo.getTimeSheetApprovalByEmployeeId(projectManagerId, month, year, accountId, employeeId);
	         log.info("timeSheetHistory: {}", timeSheetHistory);
	         return timeSheetHistory;
	     } catch (Exception e) {
	         log.error("An error occurred while fetching time sheet approvals by employee ID: {}", e.getMessage());
	     }
	     return null;
	 }
}
