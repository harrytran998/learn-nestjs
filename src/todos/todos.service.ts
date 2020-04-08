import { Injectable } from '@nestjs/common'
import { Todo, TodoStatus } from './todos.model'
import { v4 as uuidV4 } from 'uuid'
import { CreateTodoDTO } from './dto/create-todo.dto'

@Injectable()
export class TodosService {
  private todos: Todo[] = []

  getAllTodos(): Todo[] {
    return this.todos
  }

  createTodo(createTodo: CreateTodoDTO): Todo {
    const { title, description } = createTodo
    const newTodo: Todo = {
      id: uuidV4(),
      title,
      description,
      status: TodoStatus.OPEN,
    }
    this.todos.push(newTodo)
    return newTodo
  }
  getTodoByID(todoID: string): Todo {
    return this.todos.find(todo => todo.id === todoID)
  }
  updateTodo(args: CreateTodoDTO, todoID: string): void {
    const updateTodo = this.todos.find(todo => todo.id === todoID)
    const { title, description } = args
    updateTodo.title = title
    updateTodo.description = description
  }
  deleteTodo(todoID: string): void {
    const index = this.todos.findIndex(todo => todo.id === todoID)
    this.todos.splice(index, 1)
  }
}
