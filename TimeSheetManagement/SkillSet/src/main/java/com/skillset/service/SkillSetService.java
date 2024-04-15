package com.skillset.service;

import java.util.List;

import com.feuji.skillset.exception.RecordNotFoundException;
import com.skillset.dto.GapDto;
import com.skillset.dto.SkillGapDto;

public interface SkillSetService {
	
	public List<GapDto> fetchSkillDto(String email, Integer skillCategoryId) throws RecordNotFoundException;

	public List<SkillGapDto> findEmployeeSkills(String email) throws RecordNotFoundException;
}