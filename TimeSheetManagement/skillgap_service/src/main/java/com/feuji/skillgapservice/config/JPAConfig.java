package com.feuji.skillgapservice.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.transaction.annotation.EnableTransactionManagement;



	@Configuration
	@EnableJpaRepositories(basePackages = {"com.feuji.skillgapservice"})
	@EnableTransactionManagement
	public class JPAConfig {

	}



