import { PipeTransform, BadRequestException } from '@nestjs/common'
import { TodoStatus } from '../todos.model'

export class TodoStatusValidationPipe implements PipeTransform {
  transform(value: any) {
    value = value.toUpperCase()
    if (!this.isStatusValid(value)) {
      throw new BadRequestException(`Status ${value} is invalid!`)
    }
    return value
  }
  private isStatusValid(status: any): boolean {
    if (Object.values(TodoStatus).includes(status)) {
      return true
    }
    return false
  }
}
