package com.springboot.todo.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.springboot.todo.models.Task;
import com.springboot.todo.repository.TaskRepository;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/tasks")
public class TaskController {
	
	@Autowired
	private TaskRepository taskRepo;
	
	@PostMapping("/add")
	public ResponseEntity<?> createTask(@RequestBody Task task){
		try {
			taskRepo.save(task);
			return new ResponseEntity<>(HttpStatus.CREATED);
		} catch(Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@GetMapping
	public ResponseEntity<?> getAllTasks(){
		try{
			List<Task> tasks = taskRepo.findAll();
			return ResponseEntity.ok(tasks);
		} catch(Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<?> getTaskById(@PathVariable String id){
		Optional<Task> task = taskRepo.findById(id);
		if(task.isPresent()) {
			return ResponseEntity.ok(task);
		}
		
		return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<?> updateTask(@PathVariable String id, @RequestBody Task updatedTask){
		Optional<Task> task = taskRepo.findById(id);
		if(task.isPresent()) {
			Task newTask = task.get();
			newTask.setTitle(updatedTask.getTitle());
			newTask.setDescription(updatedTask.getDescription());
			newTask.setCompleted(updatedTask.isCompleted());
			taskRepo.save(newTask);
			return ResponseEntity.ok(task);
		}
		
		return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	}
	
	@DeleteMapping("/{id}")
	  public ResponseEntity<HttpStatus> deleteTask(@PathVariable String id) {
	    try {
	      taskRepo.deleteById(id);
	      return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	    } catch (Exception e) {
	      return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
	    }
	  }

}
