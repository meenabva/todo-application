package com.springboot.todo.models;

import java.util.Objects;

import com.fasterxml.jackson.annotation.JsonIgnore;

public class UserDetails {
	private String id;

	  private String username;

	  private String email;

	  @JsonIgnore
	  private String password;

	  public UserDetails(String id, String username, String email, String password) {
	    this.id = id;
	    this.username = username;
	    this.email = email;
	    this.password = password;
	  }

	  public static UserDetails build(User user) {

	    return new UserDetails(
	        user.getId(), 
	        user.getUsername(), 
	        user.getEmail(),
	        user.getPassword()
	      );
	  }

	  public String getId() {
	    return id;
	  }

	  public String getEmail() {
	    return email;
	  }

	  public String getPassword() {
	    return password;
	  }

	  public String getUsername() {
	    return username;
	  }

	  public boolean isAccountNonExpired() {
	    return true;
	  }

	  public boolean isAccountNonLocked() {
	    return true;
	  }

	  public boolean isCredentialsNonExpired() {
	    return true;
	  }

	  public boolean isEnabled() {
	    return true;
	  }

	  @Override
	  public boolean equals(Object o) {
	    if (this == o)
	      return true;
	    if (o == null || getClass() != o.getClass())
	      return false;
	    UserDetails user = (UserDetails) o;
	    return Objects.equals(id, user.id);
	  }
}
