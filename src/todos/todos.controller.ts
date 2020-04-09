import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Query,
  Patch,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common'
import { TodosService } from './todos.service'
import { Todo, TodoStatus } from './todos.model'
import { ArgsTodoDTO } from './dto/argsTodo.dto'
import { FilterTodoDTO } from './dto/filterTodo.dto'
import { TodoStatusValidationPipe } from './pipes/todoStatusPipe'

@Controller('todos')
export class TodosController {
  constructor(private readonly todoService: TodosService) {}

  @Get()
  getTodos(@Query() filterDto: FilterTodoDTO): Todo[] {
    if (Object.keys(filterDto).length) {
      return this.todoService.getFilterTodos(filterDto)
    }
    return this.todoService.getAllTodos()
  }

  @Post()
  @UsePipes(ValidationPipe)
  createTodo(@Body() createTodo: ArgsTodoDTO): Todo {
    return this.todoService.createTodo(createTodo)
  }

  @Get('/:id')
  getTodoByID(@Param('id') id: string): Todo {
    return this.todoService.getTodoByID(id)
  }

  @Patch('/:id')
  updateTodoByID(@Body() args: ArgsTodoDTO, @Param('id') id: string) {
    return this.todoService.updateTodo(args, id)
  }

  @Patch('/:id/status')
  updateStatusTodo(
    @Body('status', TodoStatusValidationPipe) status: TodoStatus,
    @Param('id') id: string,
  ) {
    return this.todoService.updateTodoStatus(status, id)
  }

  @Delete('/:id')
  deleteTodoById(@Param('id') id: string) {
    return this.todoService.deleteTodo(id)
  }
}
