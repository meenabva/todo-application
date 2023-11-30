package com.springboot.todo.service;

import com.springboot.todo.models.UserDetails;

public interface UserDetailsService {
	 UserDetails loadUserByUsername(String username) throws UsernameNotFoundException;
}
