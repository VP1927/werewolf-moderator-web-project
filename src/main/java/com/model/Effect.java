package com.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "effect")
public class Effect {

	@Id
	private long ideffect;

	@Column(name = "name", length = 11, nullable = false)
	private String name;

	@Column(name = "idcard", length = 11, nullable = false)
	private long idcard;

	@Column(name = "one_turn_effect", length = 2, nullable = false)
	private int oneTurnEffect;

	@Column(name = "first_turn_cast", length = 2, nullable = false)
	private int firstTurnEffect;

	@Column(name = "multitime", length = 2, nullable = false)
	private int multitime;

	@Column(name = "image_link", length = 45, nullable = false)
	private String iconLink;

	public long getIdeffect() {
		return ideffect;
	}

	public void setIdeffect(long ideffect) {
		this.ideffect = ideffect;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public long getIdcard() {
		return idcard;
	}

	public void setIdcard(long idcard) {
		this.idcard = idcard;
	}

	public int getOneTurnEffect() {
		return oneTurnEffect;
	}

	public void setOneTurnEffect(int oneTurnEffect) {
		this.oneTurnEffect = oneTurnEffect;
	}

	public int getFirstTurnEffect() {
		return firstTurnEffect;
	}

	public void setFirstTurnEffect(int firstTurnEffect) {
		this.firstTurnEffect = firstTurnEffect;
	}

	public int getMultitime() {
		return multitime;
	}

	public void setMultitime(int multitime) {
		this.multitime = multitime;
	}

	public String getIconLink() {
		return iconLink;
	}

	public void setIconLink(String iconLink) {
		this.iconLink = iconLink;
	}

}
