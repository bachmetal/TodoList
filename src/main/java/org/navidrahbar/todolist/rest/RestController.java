package org.navidrahbar.todolist.rest;

import org.navidrahbar.todolist.entity.Todo;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@org.springframework.web.bind.annotation.RestController
@CrossOrigin(origins = "http://localhost:63342")
@RequestMapping("/api/todos")
public class RestController {
    private final org.navidrahbar.todolist.rest.todoService todoService;

    public RestController(todoService todoService) {
        this.todoService = todoService;
    }

    @GetMapping("/")
    public ResponseEntity<String> getTodos() {
        return ResponseEntity.ok(todoService.getTodos());
    }

    @GetMapping("/{id}")
    public ResponseEntity<String> getTodoById(@PathVariable int id) {
        return ResponseEntity.ok(todoService.getTodoById(id));
    }

    @PostMapping("/")
    public ResponseEntity<String> addTodo(@RequestBody Todo task) {
        todoService.addTodo(task);
        return ResponseEntity.ok("Todo added");
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteTodoById(@PathVariable int id) {
        todoService.deleteTodoById(id);
        return ResponseEntity.ok("Todo with id " + id + " deleted");
    }

    @PutMapping("/{id}")
    public ResponseEntity<String> updateTodoById(@PathVariable int id, @RequestBody Todo task) {
        todoService.updateTodoById(id, task);
        return ResponseEntity.ok("Todo with id " + id + " updated");
    }

    @PutMapping("/{id}/complete")
    public ResponseEntity<String> completeTodoById(@PathVariable int id) {
        todoService.completeTodoById(id);
        return ResponseEntity.ok("Todo with id " + id + " completed");
    }
}
