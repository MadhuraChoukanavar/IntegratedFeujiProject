package com.feuji.referenceservice.controller;

import java.util.Collections;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.feuji.referenceservice.bean.CommonReferenceTypeBean;
import com.feuji.referenceservice.dto.ReferenceDto;
import com.feuji.referenceservice.entity.CommonReferenceTypeEntity;
import com.feuji.referenceservice.exception.ReferenceNotFoundException;
import com.feuji.referenceservice.repository.CommonReferenceTypeRepo;
import com.feuji.referenceservice.service.CommonReferenceType;
import com.feuji.referenceservice.serviceImpl.CommonReferenceTypeImpl;

@RestController
@RequestMapping("/referencetype")
@CrossOrigin(origins = "http://localhost:4200")
public class CommonReferenceTypeController {

	private static Logger log = LoggerFactory.getLogger(CommonReferenceTypeImpl.class);

	@Autowired
	CommonReferenceTypeRepo commonReferenceTypeRepo;
	@Autowired
	CommonReferenceType commonReferenceType;

//	@PostMapping("/save")
//	public ResponseEntity<CommonReferenceTypeEntity> saveTimesheetWeek(
//			@RequestBody CommonReferenceTypeBean commonReferenceTypeBean) {
//		try {
//			log.info("timesheet week controller", commonReferenceTypeBean);
//			CommonReferenceTypeEntity save = commonReferenceType.save(commonReferenceTypeBean);
//			return new ResponseEntity<>(save, HttpStatus.CREATED);
//
//		} catch (Exception e) {
//
//			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
//
//		}
//	}
	@PostMapping("/save")
	public ResponseEntity<CommonReferenceTypeEntity> saveTimesheetWeek(
	        @RequestBody CommonReferenceTypeBean commonReferenceTypeBean) {
	    try {
	        log.info("Saving timesheet week in controller: {}", commonReferenceTypeBean);
	        CommonReferenceTypeEntity save = commonReferenceType.save(commonReferenceTypeBean);
	        log.info("Saved timesheet week: {}", save);
	        return new ResponseEntity<>(save, HttpStatus.CREATED);
	    } catch (Exception e) {
	        log.error("An error occurred while saving timesheet week: {}", e.getMessage());
	        return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
	    }
	}

	
	@GetMapping("/getref/{name}")
	public ResponseEntity<CommonReferenceTypeEntity> getReferenceTypeByName(@PathVariable String name) {
	    try {
	        log.info("Fetching reference type by name: {}", name);
	        CommonReferenceTypeEntity commonReferenceTypeEntity = commonReferenceType.getByTypeName(name);
	        log.info("Retrieved reference type: {}", commonReferenceTypeEntity);
	        return ResponseEntity.ok(commonReferenceTypeEntity);
	    } catch (Exception e) {
	        log.error("An error occurred while fetching reference type by name {}: {}", name, e.getMessage());
	        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
	    }
	}

	
//	@GetMapping("/all")
//    public List<ReferenceDto> getAllReferences() {
//        log.info("Fetching all references");
//        List<ReferenceDto> references = commonReferenceType.getAllReferences();
//        log.info("Retrieved {} references", references.size());
//        return references;
//    }
	@GetMapping("/all")
	public ResponseEntity<List<ReferenceDto>> getAllReferences() {
	    try {
	        log.info("Fetching all references");
	        List<ReferenceDto> references = commonReferenceType.getAllReferences();
	        log.info("Retrieved {} references", references.size());
	        return ResponseEntity.ok(references);
	    } catch (Exception e) {
	        log.error("An error occurred while fetching all references: {}", e.getMessage());
	        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(Collections.emptyList());
	    }
	}

	@GetMapping("/getById/{id}")
	public ResponseEntity<String> getById(@PathVariable int id) {
		log.info("getById() started");
		String name = null;
		try {
			name = commonReferenceType.getNameById(id);
			log.info("getById() ended");
			return new ResponseEntity<String>(name, HttpStatus.OK);
		} catch (ReferenceNotFoundException e) {
			log.info(e.getMessage());
			return new ResponseEntity<String>(name, HttpStatus.NOT_FOUND);

		}
	}
	
	
	@GetMapping("/getreference/{typeName}")
	public ResponseEntity<CommonReferenceTypeBean> getReferenceTypeByRefName(@PathVariable String typeName) {
		log.info("getReferenceTypeByName start");
		CommonReferenceTypeBean commonReferenceTypeEntity = null;
		try {
			commonReferenceTypeEntity = commonReferenceType.getRefByTypeName(typeName);
			log.info("getReferenceTypeByName end");
			log.info(commonReferenceTypeEntity.toString());
			return new ResponseEntity<>(commonReferenceTypeEntity, HttpStatus.OK);
		} catch (ReferenceNotFoundException e) {
			log.info(e.getMessage());
			return new ResponseEntity<>(commonReferenceTypeEntity, HttpStatus.NOT_FOUND);
		}
	}
	
}
