export interface Todo {
  id: string
  title: string
  description?: string
  status: TodoStatus
}

export enum TodoStatus {
  OPEN = 'OPEN',
  WIP = 'WIP',
  DONE = 'DONE',
}
