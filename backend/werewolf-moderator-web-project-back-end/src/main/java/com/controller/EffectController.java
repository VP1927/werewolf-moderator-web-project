package com.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.dao.EffectRepository;
import com.model.Effect;

@RestController
public class EffectController {
	private EffectRepository repository;

	public EffectController(EffectRepository repository) {
		super();
		this.repository = repository;
	}
	
	@GetMapping("/effect/{id}")
	@CrossOrigin(origins = "http://localhost:3000")
	public List<Effect> getEffectsByIdCard (@PathVariable int id) {
		return repository.findEffectByIdCard(id);
	}
}
