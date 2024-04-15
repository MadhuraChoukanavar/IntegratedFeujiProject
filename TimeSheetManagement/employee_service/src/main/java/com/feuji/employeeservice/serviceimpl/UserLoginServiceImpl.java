package com.feuji.employeeservice.serviceimpl;

import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.feuji.employeeservice.entity.UserLoginEntity;
import com.feuji.employeeservice.repository.UserLoginRepo;
import com.feuji.employeeservice.service.UserLoginService;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
public class UserLoginServiceImpl implements UserLoginService {

	@Autowired
	private UserLoginRepo userLoginRepo;

//	@Autowired
//	private EmailService emailService;

	public UserLoginEntity loginUser(String userEmail, String userPassword) {
	    UserLoginEntity user = userLoginRepo.findByUserEmail(userEmail).get();

	    if (user != null && user.getUserPassword().equals(userPassword)) {
	        return user; // Return the UserLoginEntity if credentials are valid
	    } else {
	        return null; // Return null if credentials are invalid
	    }
	}

	@Override
	public boolean isEmailUnique(String email) {
		 UserLoginEntity existingEmployee = userLoginRepo.findByUserEmail(email).get();
	        return existingEmployee == null;
	}


//	public boolean forgotPassword(String userEmail) {
//		UserLoginEntity user = userLoginRepo.findByUserEmail(userEmail);
//
//		if (user != null) {
//			String resetToken = generateResetToken();
//
//			// Send reset token email
//			emailService.sendResetTokenEmail(userEmail, resetToken);
//			user.setResetToken(resetToken);
//			userLoginRepo.save(user);
//
//			return true;
//		} else {
//			return false;
//		}
//	}
//
//	private String generateResetToken() {
//		return UUID.randomUUID().toString();
//	}
}