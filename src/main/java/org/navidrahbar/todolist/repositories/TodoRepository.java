package org.navidrahbar.todolist.repositories;

import org.navidrahbar.todolist.entity.Todo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TodoRepository extends JpaRepository<Todo, Integer> {
}