import { ProjectTaskType } from '../entity/project/project.projecttasktype.entity';

/**
 * ProjectTaskType 实体接口
 * 对应数据库表: project_task_type
 */
export interface ProjectTaskTypeInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 ProjectTaskType 的参数接口
 */
export interface CreateProjectTaskTypeDTO extends Partial<ProjectTaskTypeInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 ProjectTaskType 的参数接口
 */
export interface UpdateProjectTaskTypeDTO extends Partial<ProjectTaskTypeInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 ProjectTaskType 的参数接口
 */
export interface QueryProjectTaskTypeDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof ProjectTaskTypeInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * ProjectTaskType 分页查询结果接口
 */
export interface ProjectTaskTypePageResult {
  data: ProjectTaskType[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * ProjectTaskType API 响应接口
 */
export interface ProjectTaskTypeResponse {
  success: boolean;
  message: string;
  data?: ProjectTaskType | ProjectTaskType[] | ProjectTaskTypePageResult;
  error?: string;
}
