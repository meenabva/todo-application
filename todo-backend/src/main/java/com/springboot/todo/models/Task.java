package com.springboot.todo.models;

import java.util.Date;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.format.annotation.DateTimeFormat;

import lombok.Data;

@Data
@Document(collection = "tasks")
public class Task {
	
	@Id 
	private String id;
	private String title;
	private String description;
	private boolean completed;
	private @DateTimeFormat(pattern = "yyyy-MM-dd")Date deadline;
}
