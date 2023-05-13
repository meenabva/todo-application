package com.springboot.todo.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.springboot.todo.models.Task;

public interface TaskRepository extends MongoRepository<Task, String>{

}
