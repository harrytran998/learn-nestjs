import { TodoStatus } from '../todos.model'

export class FilterTodoDTO {
  readonly status: TodoStatus
  readonly search: string
}
