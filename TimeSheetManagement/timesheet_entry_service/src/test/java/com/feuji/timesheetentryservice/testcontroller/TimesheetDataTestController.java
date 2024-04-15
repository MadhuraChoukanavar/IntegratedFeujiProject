package com.feuji.timesheetentryservice.testcontroller;

import static org.assertj.core.api.Assertions.assertThat;

import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.sql.Date;
import java.time.LocalDate;
import java.util.Collections;
import java.util.List;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import com.feuji.timesheetentryservice.bean.WeekAndDayDataBean;
import com.feuji.timesheetentryservice.controller.TimesheetDataController;
import com.feuji.timesheetentryservice.dto.WeekAndDayDto;
import com.feuji.timesheetentryservice.entity.TimesheetWeekEntity;
import com.feuji.timesheetentryservice.service.TimeSheetDataService;

import static org.mockito.ArgumentMatchers.anyInt;
import static org.mockito.ArgumentMatchers.anyString;

@ExtendWith(MockitoExtension.class)
public class TimesheetDataTestController {
	@Mock
	private TimeSheetDataService timeSheetDataService;
	@InjectMocks
	private TimesheetDataController timesheetDataController;

//	@Test
//	public void testsaveTimesheetData() {
//	    LocalDate weekStartDate = LocalDate.parse("2024-03-05");
//	    WeekAndDayDto weekAndDayDto = WeekAndDayDto.builder()
//	                                        .timesheetWeekId(1)
//	                                        .timesheetStatus(1)
//	                                        .weekStartDate(Date.valueOf(weekStartDate))
//	                                        .build();
//	    WeekAndDayDataBean dataBean = new WeekAndDayDataBean(); // Assuming there's a constructor or builder that accepts WeekAndDayDto
//	    List<WeekAndDayDataBean> dataList = Collections.singletonList(dataBean);
//	    timeSheetDataService.saveAll(dataList);
//	    verify(timeSheetDataService, times(1)).saveAll(dataList);
//	}
	@Test
	public void testFetchAllWeekDayRecordsById() {
		// Prepare test data
		LocalDate weekStartDate = LocalDate.parse("2024-03-05");
		LocalDate weekEndDate = LocalDate.parse("2024-04-05");
		List<WeekAndDayDto> expectedResultList = Collections.singletonList(WeekAndDayDto.builder().timesheetWeekId(1)
				.timesheetStatus(1).weekStartDate(Date.valueOf(weekStartDate)).accountId(1).employeeId(1).build());

		// Mock the service method to return the test data
		when(timeSheetDataService.fetchAllWeekDayRecordsById(anyInt(), anyInt(), anyString(), anyString()))
				.thenReturn(expectedResultList);

		// Call the service method
		List<WeekAndDayDto> actualResultList = timeSheetDataService.fetchAllWeekDayRecordsById(1, 1, "2024-03-05",
				"2024-04-05");

		// Assertions
		assertThat(actualResultList).isNotNull();
		assertThat(actualResultList).hasSize(1);
		assertThat(actualResultList.get(0).getAccountId()).isEqualTo(1);
		// Add more assertions as needed
	}

	@Test
	public void testdelteDayRecor() {
		LocalDate weekStartDate = LocalDate.parse("2024-03-05");
		WeekAndDayDto weekAndDayDto = WeekAndDayDto.builder().timesheetWeekId(1).timesheetStatus(1)
				.weekStartDate(Date.valueOf(weekStartDate)).build();
		WeekAndDayDataBean dataBean = new WeekAndDayDataBean(); // Assuming there's a constructor or builder that
																// accepts WeekAndDayDto
		List<WeekAndDayDataBean> dataList = Collections.singletonList(dataBean);
		timeSheetDataService.deleteDayRecord(weekAndDayDto);
		verify(timeSheetDataService, times(1)).deleteDayRecord(weekAndDayDto);
	}

	@Test
	public void testSubmittingTimesheet() {
		// Input data
		String weekStartDate = "2024-03-05";
		Integer timesheetStatus = 1;
		Integer accountId = 1;
		Integer employeeId = 123; // Sample employeeId

		// Mocking the behavior of the submittingTimesheet method
		when(timeSheetDataService.submittingTimesheet(weekStartDate, timesheetStatus, accountId, employeeId))
				.thenReturn(Collections.singletonList(TimesheetWeekEntity.builder().accountId(accountId).build()));

		// Calling the method to test
		List<TimesheetWeekEntity> actualResultList = timeSheetDataService.submittingTimesheet(weekStartDate,
				timesheetStatus, accountId, employeeId);

		// Assertions
		assertThat(actualResultList).isNotNull();
		assertThat(actualResultList).hasSize(1);
		assertThat(actualResultList.get(0).getAccountId()).isEqualTo(accountId);
		// Add more assertions as needed
	}
}
