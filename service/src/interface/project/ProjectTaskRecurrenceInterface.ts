import { ProjectTaskRecurrence } from '../entity/project/project.projecttaskrecurrence.entity';

/**
 * ProjectTaskRecurrence 实体接口
 * 对应数据库表: project_task_recurrence
 */
export interface ProjectTaskRecurrenceInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 ProjectTaskRecurrence 的参数接口
 */
export interface CreateProjectTaskRecurrenceDTO extends Partial<ProjectTaskRecurrenceInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 ProjectTaskRecurrence 的参数接口
 */
export interface UpdateProjectTaskRecurrenceDTO extends Partial<ProjectTaskRecurrenceInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 ProjectTaskRecurrence 的参数接口
 */
export interface QueryProjectTaskRecurrenceDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof ProjectTaskRecurrenceInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * ProjectTaskRecurrence 分页查询结果接口
 */
export interface ProjectTaskRecurrencePageResult {
  data: ProjectTaskRecurrence[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * ProjectTaskRecurrence API 响应接口
 */
export interface ProjectTaskRecurrenceResponse {
  success: boolean;
  message: string;
  data?: ProjectTaskRecurrence | ProjectTaskRecurrence[] | ProjectTaskRecurrencePageResult;
  error?: string;
}
