package com.example.demo;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "card")
public class Card {
	@Id
	private long idcard;

	@Column(name = "role", length = 11, nullable = false)
	private String role;

	@Column(name = "point", length = 11)
	private String point;

	@Column(name = "description", nullable = false)
	private String description;
	
	@Column(name = "image_link", length = 45, nullable = false)
	private String imageLink;

	public long getIdCard() {
		return idcard;
	}

	public void setIdCard(long id) {
		this.idcard = id;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public String getPoint() {
		return point;
	}

	public void setPoint(String point) {
		this.point = point;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getImageLink() {
		return imageLink;
	}

	public void setImageLink(String imageLink) {
		this.imageLink = imageLink;
	}

	
}
