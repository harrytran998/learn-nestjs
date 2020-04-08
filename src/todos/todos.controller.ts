import { Controller, Get } from '@nestjs/common'
import { TodosService } from './todos.service'
import { Todo } from './todos.model'

@Controller('todos')
export class TodosController {
  constructor(private readonly todoService: TodosService) {}

  @Get()
  getAllTodos(): Todo[] {
    return this.todoService.getAllTodos()
  }
}
