import { IsNotEmpty } from 'class-validator'

export class ArgsTodoDTO {
  @IsNotEmpty()
  readonly title: string

  @IsNotEmpty()
  readonly description?: string
}
