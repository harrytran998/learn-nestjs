import { TodoStatus } from '../todos.model'
import { IsOptional, IsIn, IsNotEmpty } from 'class-validator'

export class FilterTodoDTO {
  @IsOptional()
  @IsIn(Object.values(TodoStatus))
  readonly status: TodoStatus

  @IsOptional()
  @IsNotEmpty()
  readonly search: string
}
