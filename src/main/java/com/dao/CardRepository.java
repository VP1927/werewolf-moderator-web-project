package com.dao;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.model.Card;

@RepositoryRestResource
public interface CardRepository extends CrudRepository<Card, Long> {
	List<Card> findAll();
}
