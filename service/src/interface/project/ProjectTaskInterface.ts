import { ProjectTask } from '../entity/project/project.projecttask.entity';

/**
 * ProjectTask 实体接口
 * 对应数据库表: project_task
 */
export interface ProjectTaskInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 ProjectTask 的参数接口
 */
export interface CreateProjectTaskDTO extends Partial<ProjectTaskInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 ProjectTask 的参数接口
 */
export interface UpdateProjectTaskDTO extends Partial<ProjectTaskInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 ProjectTask 的参数接口
 */
export interface QueryProjectTaskDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof ProjectTaskInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * ProjectTask 分页查询结果接口
 */
export interface ProjectTaskPageResult {
  data: ProjectTask[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * ProjectTask API 响应接口
 */
export interface ProjectTaskResponse {
  success: boolean;
  message: string;
  data?: ProjectTask | ProjectTask[] | ProjectTaskPageResult;
  error?: string;
}
