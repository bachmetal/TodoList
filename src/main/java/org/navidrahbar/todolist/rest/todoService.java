package org.navidrahbar.todolist.rest;

import org.navidrahbar.todolist.entity.Todo;
import org.navidrahbar.todolist.repositories.TodoRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class todoService {

    private final TodoRepository todoRepository;

    public todoService(TodoRepository todoRepository) {
        this.todoRepository = todoRepository;
    }

    public List<Todo> getTodos() {
        return todoRepository.findAll();
    }

    public Optional<Todo> getTodoById(int id) {
        return todoRepository.findById(id);
    }

    public Todo addTodo(Todo todo) {
        todoRepository.save(todo);
        return todo;
    }

    public Optional<Todo> deleteTodoById(int id) {
        todoRepository.deleteById(id);
        return getTodoById(id);
    }

    public Todo updateTodoById(int id, Todo todo) {
        Todo t = todoRepository.findById(id).orElseThrow();
        t.setItem(todo.getItem());
        todoRepository.save(t);
        return t;
    }

    public Todo completeTodoById(int id) {
        Todo t = todoRepository.findById(id).orElseThrow();
        t.setCompleted(!t.getCompleted());
        todoRepository.save(t);
        return t;
    }

    public List<Todo> deleteAll() {
        List<Todo> all = todoRepository.findAll();
        todoRepository.deleteAll();
        return all;
    }
}
