import { TaskStatus } from '../task-status.enum';
import { IsOptional, IsIn, IsNotEmpty } from '../../../node_modules/class-validator';

export class GetTasksFilterDto {
  @IsOptional()
  @IsIn([TaskStatus.OPEN, TaskStatus.IN_PROGRESS, TaskStatus.IN_PROGRESS])
  status: TaskStatus;

  @IsOptional()
  @IsNotEmpty()
  search: string;
}
