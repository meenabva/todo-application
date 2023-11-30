package com.springboot.todo.service;

public class UsernameNotFoundException extends Exception {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	public UsernameNotFoundException() {}

	public UsernameNotFoundException(String message) {
		super(message);
		// TODO Auto-generated constructor stub
	}
}
