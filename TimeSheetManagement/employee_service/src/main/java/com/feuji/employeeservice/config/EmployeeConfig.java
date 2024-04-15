package com.feuji.employeeservice.config;

import org.springframework.context.annotation.Bean;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

public class EmployeeConfig {
	@Bean
	WebMvcConfigurer mvcConfigurer() {
		return new WebMvcConfigurer() {
			@Override
			public void addCorsMappings(CorsRegistry registry) {
				registry.addMapping("/**").allowedHeaders("*").allowedMethods("*")
						.allowedOrigins("*");
			}
		};
	}

	
	@Bean
    public RestTemplate restTemplate() {
        return new RestTemplate();
    }

}
