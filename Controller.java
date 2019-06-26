package com.example.demo;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Controller {
	private CardRepository repository;

	public Controller(CardRepository repository) {
		super();
		this.repository = repository;
	}
	
	@GetMapping("/")
    @CrossOrigin(origins = "http://localhost:3000")
	public List<Card> getAllCards() {
		return repository.findAll();
	}
	
}
