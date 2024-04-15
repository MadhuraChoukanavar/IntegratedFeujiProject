package com.feuji.employeeservice.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.feuji.employeeservice.dto.AuthRequest;
import com.feuji.employeeservice.dto.JwtResponse;
import com.feuji.employeeservice.dto.RefreshTokenRequest;
import com.feuji.employeeservice.entity.RefreshToken;
import com.feuji.employeeservice.entity.UserLoginEntity;
import com.feuji.employeeservice.repository.UserLoginRepo;
import com.feuji.employeeservice.dto.RefreshTokenRequest;
import com.feuji.employeeservice.entity.RefreshToken;
import com.feuji.employeeservice.dto.RefreshTokenRequest;
import com.feuji.employeeservice.entity.RefreshToken;
import com.feuji.employeeservice.dto.RefreshTokenRequest;
import com.feuji.employeeservice.entity.RefreshToken;
import com.feuji.employeeservice.service.JwtService;
import com.feuji.employeeservice.service.RefreshTokenService;
import com.feuji.employeeservice.service.UserLoginService;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
@RequestMapping("/users")
@CrossOrigin(origins = "http://localhost:4200")
public class UserLoginController {

	@Autowired
	private UserLoginService userLoginService;

	@Autowired
	private UserLoginRepo loginRepo;
	@Autowired
	private JwtService jwtService;

	@Autowired
	private RefreshTokenService refreshTokenService;

	@Autowired
	private AuthenticationManager authenticationManager;
//
//	@PostMapping("/login")
//	public ResponseEntity<UserLoginEntity> loginUser(@RequestBody UserLoginEntity userCredentials) {
//		log.info("user details :{}",userCredentials);
//	    UserLoginEntity loggedInUser;
//			loggedInUser = userLoginService.loginUser(userCredentials.getUserEmail(), userCredentials.getUserPassword());
//	    if (loggedInUser != null) {
//	    	log.info("Login Success :{}",userCredentials);
//	        return ResponseEntity.ok(loggedInUser); // Return the UserLoginEntity if login is successful
//	    } else {
//	    	log.info("Login Fails :{}",userCredentials);
//	        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build(); // Return 401 Unauthorized if login fails
//	    }
//	}

//	@GetMapping("/checkUniqueEmail")
//    public ResponseEntity<Boolean> checkUniqueEmail(@RequestParam("email") String email) {
//        boolean isUnique = userLoginService.isEmailUnique(email);
//        return ResponseEntity.ok(isUnique);
//    }
//	
	
	@PostMapping("/login")
	public JwtResponse authenticateAndGetToken(@RequestBody AuthRequest authRequest) {
		Authentication authentication = authenticationManager.authenticate(
				new UsernamePasswordAuthenticationToken(authRequest.getEmail(), authRequest.getPassword()));
		if (authentication.isAuthenticated()) {
		
		    UserLoginEntity user = loginRepo.findByUserEmail(authRequest.getEmail()).get();
			
		    RefreshToken refreshToken = refreshTokenService.createRefreshToken(authRequest.getEmail());
			return JwtResponse.builder().accessToken(jwtService.generateToken(authRequest.getEmail()))
					.token(refreshToken.getToken()).userEntity(user).build();
		} else {
			throw new UsernameNotFoundException("invalid user request !");
		}
	}

	@PostMapping("/refreshToken")
	public JwtResponse refreshToken(@RequestBody RefreshTokenRequest refreshTokenRequest) {
		return refreshTokenService.findByToken(refreshTokenRequest.getToken())
				.map(refreshTokenService::verifyExpiration).map(RefreshToken::getUserLoginEntity).map(userEntity -> {
					String accessToken = jwtService.generateToken(userEntity.getUserName());
					return JwtResponse.builder().accessToken(accessToken).token(refreshTokenRequest.getToken()).build();
				}).orElseThrow(() -> new RuntimeException("Refresh token is not in database!"));
	}

}