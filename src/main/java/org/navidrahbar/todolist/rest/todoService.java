package org.navidrahbar.todolist.rest;

import org.navidrahbar.todolist.entity.Todo;
import org.navidrahbar.todolist.repositories.TodoRepository;
import org.springframework.stereotype.Service;

@Service
public class todoService {

    private final TodoRepository todoRepository;

    public todoService(TodoRepository todoRepository) {
        this.todoRepository = todoRepository;
    }

    public String getTodos() {
        return todoRepository.findAll().toString();
    }

    public String getTodoById(int id) {
        return todoRepository.findById(id).orElseThrow().toString();
    }

    public void addTodo(Todo todo) {
        todoRepository.save(todo);
    }

    public void deleteTodoById(int id) {
        todoRepository.deleteById(id);
    }

    public void updateTodoById(int id, Todo todo) {
        Todo t = todoRepository.findById(id).orElseThrow();
        t.setItem(todo.getItem());
        todoRepository.save(t);
    }

    public void completeTodoById(int id) {
        Todo t = todoRepository.findById(id).orElseThrow();
        t.setCompleted(true);
        todoRepository.save(t);
    }

    public void deleteAll() {
        todoRepository.deleteAll();
    }
}
