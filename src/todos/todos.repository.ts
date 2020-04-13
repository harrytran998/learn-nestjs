import { Repository, EntityRepository } from 'typeorm'
import { Todo } from './todos.entity'

@EntityRepository(Todo)
export class TodoRepository extends Repository<Todo> {}
