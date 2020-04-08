import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common'
import { TodosService } from './todos.service'
import { Todo } from './todos.model'
import { CreateTodoDTO } from './dto/create-todo.dto'

@Controller('todos')
export class TodosController {
  constructor(private readonly todoService: TodosService) {}

  @Get()
  getAllTodos(): Todo[] {
    return this.todoService.getAllTodos()
  }

  @Post()
  createTodo(@Body() createTodo: CreateTodoDTO): Todo {
    return this.todoService.createTodo(createTodo)
  }

  @Get('/:id')
  getTodoByID(@Param('id') id: string): Todo {
    return this.todoService.getTodoByID(id)
  }

  @Put('/:id')
  updateTodoByID(@Body() args: CreateTodoDTO, @Param('id') id: string) {
    return this.todoService.updateTodo(args, id)
  }

  @Delete('/:id')
  deleteTodoById(@Param('id') id: string) {
    return this.todoService.deleteTodo(id)
  }
}
