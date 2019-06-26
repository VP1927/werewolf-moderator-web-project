package com.controller;


import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dao.CardRepository;
import com.model.Card;

@RestController
public class CardController {
	private CardRepository repository;

	public CardController(CardRepository repository) {
		super();
		this.repository = repository;
	}

	@GetMapping("/cardlist")
    @CrossOrigin(origins = "http://localhost:3000")
	public List<Card> getAllCards() {
		return repository.findAll();
	}
	
}
