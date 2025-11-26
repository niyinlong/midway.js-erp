import { ProjectRole } from '../entity/project/project.projectrole.entity';

/**
 * ProjectRole 实体接口
 * 对应数据库表: project_role
 */
export interface ProjectRoleInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 ProjectRole 的参数接口
 */
export interface CreateProjectRoleDTO extends Partial<ProjectRoleInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 ProjectRole 的参数接口
 */
export interface UpdateProjectRoleDTO extends Partial<ProjectRoleInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 ProjectRole 的参数接口
 */
export interface QueryProjectRoleDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof ProjectRoleInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * ProjectRole 分页查询结果接口
 */
export interface ProjectRolePageResult {
  data: ProjectRole[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * ProjectRole API 响应接口
 */
export interface ProjectRoleResponse {
  success: boolean;
  message: string;
  data?: ProjectRole | ProjectRole[] | ProjectRolePageResult;
  error?: string;
}
