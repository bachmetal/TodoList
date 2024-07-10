package org.navidrahbar.todolist.rest;

import org.navidrahbar.todolist.entity.Todo;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@org.springframework.web.bind.annotation.RestController
@CrossOrigin(origins = "http://localhost:63342")
@RequestMapping("/api/todos")
public class RestController {
    private final org.navidrahbar.todolist.rest.todoService todoService;

    public RestController(todoService todoService) {
        this.todoService = todoService;
    }

    @GetMapping("/")
    public ResponseEntity<List<Todo>> getTodos() {
        return ResponseEntity.ok(todoService.getTodos());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Todo> getTodoById(@PathVariable int id) {
        return ResponseEntity.ok(todoService.getTodoById(id).orElseThrow());
    }

    @PostMapping("/")
    public ResponseEntity<Todo> addTodo(@RequestBody Todo task) {
        todoService.addTodo(task);
        return ResponseEntity.ok(task);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Optional<Todo>> deleteTodoById(@PathVariable int id) {
        Optional<Todo> d = todoService.getTodoById(id);
        todoService.deleteTodoById(id);
        return ResponseEntity.ok(d);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Todo> updateTodoById(@PathVariable int id, @RequestBody Todo task) {
        todoService.updateTodoById(id, task);
        return ResponseEntity.ok(todoService.getTodoById(id).orElseThrow());
    }

    @PutMapping("/{id}/complete")
    public ResponseEntity<Todo> completeTodoById(@PathVariable int id) {
        todoService.completeTodoById(id);
        return ResponseEntity.ok(todoService.getTodoById(id).orElseThrow());
    }

    @DeleteMapping("/all")
    public ResponseEntity<List<Todo>> deleteAllTodos() {
        List<Todo> todos = todoService.getTodos();
        todoService.deleteAll();
        return ResponseEntity.ok(todos);
    }
}
