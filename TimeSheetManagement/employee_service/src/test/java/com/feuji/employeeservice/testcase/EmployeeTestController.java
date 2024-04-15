package com.feuji.employeeservice.testcase;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;


import com.feuji.employeeservice.bean.EmployeeBean;
import com.feuji.employeeservice.controller.EmployeeController;
import com.feuji.employeeservice.entity.EmployeeEntity;
import com.feuji.employeeservice.service.EmployeeService;

@ExtendWith(MockitoExtension.class)
public class EmployeeTestController {
	@Mock
private EmployeeService employeeService;
	@InjectMocks
	private EmployeeController employeeController;
//	@Test
//	public void testsaveEmployee() {
//		EmployeeBean employeeBean=EmployeeBean.builder().employeeId((Integer) 101).email("").firstName("").gender(1).build();
//		employeeService.saveEmployee(employeeBean);
//		verify(employeeService,times(1)).saveEmployee(employeeBean);
//		
//	}
	@Test
	public void testupdateEmployee() throws Throwable {
		EmployeeEntity employeeBean=EmployeeEntity.builder().employeeId((Integer) 101).email("").firstName("").gender(1).build();
		employeeService.updateEmployeeDetails(employeeBean, (Integer)101);
		verify(employeeService,times(1)).updateEmployeeDetails(employeeBean, (Integer)101);;
		
	}
	public void testgetByIdEmployee() {
		EmployeeEntity employeeBean=EmployeeEntity.builder().employeeId((Integer) 101).email("").firstName("").gender(1).build();
		 when(employeeService.getById((Integer)101)).thenReturn(employeeBean);

	        // Calling the method to test
	       
	        EmployeeEntity employeeEntitydata=employeeService.getById((Integer)101);

	        // Assertions
	        assertThat(employeeEntitydata).isNotNull();
	        assertThat(employeeEntitydata.getEmployeeId()).isEqualTo(101);
	}

}
