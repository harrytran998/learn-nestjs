import { Injectable, ConflictException } from '@nestjs/common'
import { Todo, TodoStatus } from './todos.model'
import { v4 as uuidV4 } from 'uuid'
import { ArgsTodoDTO } from './dto/argsTodo.dto'
import { FilterTodoDTO } from './dto/filterTodo.dto'

@Injectable()
export class TodosService {
  private todos: Todo[] = []

  getAllTodos(): Todo[] {
    return this.todos
  }

  getFilterTodos(filterDto: FilterTodoDTO): Todo[] {
    let allTodos = this.getAllTodos()
    const { status, search } = filterDto
    if (status) {
      allTodos = allTodos.filter(todo => todo.status === status)
    }
    if (search) {
      allTodos = allTodos.filter(todo => {
        return todo.title.includes(search) || todo.description.includes(search)
      })
    }
    return allTodos
  }

  createTodo(createTodo: ArgsTodoDTO): Todo {
    const { title, description } = createTodo
    const newTodo: Todo = {
      id: uuidV4(),
      title,
      description,
      status: TodoStatus.OPEN,
    }
    this.todos.push(newTodo)
    // this.todos = [...this.todos, { ...newTodo }]
    return newTodo
  }

  getTodoByID(todoID: string): Todo {
    return this.todos.find(todo => todo.id === todoID)
  }

  updateTodo(args: ArgsTodoDTO, todoID: string): Todo {
    const todo = this.getTodoByID(todoID)
    const { title, description } = args
    todo.title = title
    todo.description = description
    return todo
  }

  updateTodoStatus(status: TodoStatus, todoID: string): Todo {
    const todo = this.getTodoByID(todoID)
    if (Object.values(TodoStatus).includes(status)) {
      todo.status = status
    } else {
      throw new ConflictException('Fuck')
    }
    return todo
  }

  deleteTodo(todoID: string): void {
    const index = this.todos.findIndex(todo => todo.id === todoID)
    this.todos.splice(index, 1)
  }
}
