import { ProjectProject } from '../entity/project/project.projectproject.entity';

/**
 * ProjectProject 实体接口
 * 对应数据库表: project_project
 */
export interface ProjectProjectInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 ProjectProject 的参数接口
 */
export interface CreateProjectProjectDTO extends Partial<ProjectProjectInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 ProjectProject 的参数接口
 */
export interface UpdateProjectProjectDTO extends Partial<ProjectProjectInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 ProjectProject 的参数接口
 */
export interface QueryProjectProjectDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof ProjectProjectInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * ProjectProject 分页查询结果接口
 */
export interface ProjectProjectPageResult {
  data: ProjectProject[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * ProjectProject API 响应接口
 */
export interface ProjectProjectResponse {
  success: boolean;
  message: string;
  data?: ProjectProject | ProjectProject[] | ProjectProjectPageResult;
  error?: string;
}
