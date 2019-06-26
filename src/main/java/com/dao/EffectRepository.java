package com.dao;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.model.Effect;

public interface EffectRepository extends CrudRepository<Effect, Long> {
	List<Effect> findAll();
	
	@Query(value = "SELECT * FROM effect e WHERE e.idcard = ?1", 
			nativeQuery = true)
	List<Effect> findEffectByIdCard (int id);
}
