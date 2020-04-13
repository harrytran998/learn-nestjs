import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from 'typeorm'
import { TodoStatus } from './todos.model'

@Entity()
export class Todo extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  title: string

  @Column()
  description: string

  @Column()
  status: TodoStatus
}
