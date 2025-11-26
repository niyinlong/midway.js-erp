import { ProjectCollaborator } from '../entity/project/project.projectcollaborator.entity';

/**
 * ProjectCollaborator 实体接口
 * 对应数据库表: project_collaborator
 */
export interface ProjectCollaboratorInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 ProjectCollaborator 的参数接口
 */
export interface CreateProjectCollaboratorDTO extends Partial<ProjectCollaboratorInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 ProjectCollaborator 的参数接口
 */
export interface UpdateProjectCollaboratorDTO extends Partial<ProjectCollaboratorInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 ProjectCollaborator 的参数接口
 */
export interface QueryProjectCollaboratorDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof ProjectCollaboratorInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * ProjectCollaborator 分页查询结果接口
 */
export interface ProjectCollaboratorPageResult {
  data: ProjectCollaborator[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * ProjectCollaborator API 响应接口
 */
export interface ProjectCollaboratorResponse {
  success: boolean;
  message: string;
  data?: ProjectCollaborator | ProjectCollaborator[] | ProjectCollaboratorPageResult;
  error?: string;
}
