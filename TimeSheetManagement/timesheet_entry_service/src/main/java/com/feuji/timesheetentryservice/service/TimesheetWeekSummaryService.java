package com.feuji.timesheetentryservice.service;

import java.util.List;

import com.feuji.timesheetentryservice.dto.AccountNameDto;
import com.feuji.timesheetentryservice.dto.ProjectNameDto;
import com.feuji.timesheetentryservice.dto.TimeSheeApprovalDto;
import com.feuji.timesheetentryservice.entity.TimesheetWeekSummaryViewEntity;

public interface TimesheetWeekSummaryService {

//	public List<TimesheetWeekSummaryViewEntity> getTimesheetsForManager(Integer approvedBy, Integer accountId,
//			Integer accountProjectId, Integer weekNumber);

//	public List<ProjectNameDto> getAccountProjects(Integer accountId);

	public List<AccountNameDto> getAccounts(String approvedBy);

	public Integer getTotalHours(Integer employeeId, Integer accountProjectId, Integer weekNumber);

	public List<TimeSheeApprovalDto> getTimesheetsForFirstAccountAndCurrentMonth(Integer approvedBy);

	List<TimesheetWeekSummaryViewEntity> getTimesheetsForManager(Integer approvedBy, Integer accountId,

			Integer weekNumber);

	public List<ProjectNameDto> getAccountProjects(Integer accountId, Integer employeeId);

	List<AccountNameDto> getAccounts(Integer approvedBy);

	List<TimeSheeApprovalDto> getTimeSheetApproval(Integer projectManagerId, Integer year, Integer accountId);

	List<TimeSheeApprovalDto> getTimeSheetApprovalByEmployeeId(Integer projectManagerId, String month, Integer year,
			Integer accountId, Integer employeeId);

}