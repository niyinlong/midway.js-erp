import { ProjectRoleProjectTaskRel } from '../entity/project/project.projectroleprojecttaskrel.entity';

/**
 * ProjectRoleProjectTaskRel 实体接口
 * 对应数据库表: project_role_project_task_rel
 */
export interface ProjectRoleProjectTaskRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 ProjectRoleProjectTaskRel 的参数接口
 */
export interface CreateProjectRoleProjectTaskRelDTO extends Partial<ProjectRoleProjectTaskRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 ProjectRoleProjectTaskRel 的参数接口
 */
export interface UpdateProjectRoleProjectTaskRelDTO extends Partial<ProjectRoleProjectTaskRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 ProjectRoleProjectTaskRel 的参数接口
 */
export interface QueryProjectRoleProjectTaskRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof ProjectRoleProjectTaskRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * ProjectRoleProjectTaskRel 分页查询结果接口
 */
export interface ProjectRoleProjectTaskRelPageResult {
  data: ProjectRoleProjectTaskRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * ProjectRoleProjectTaskRel API 响应接口
 */
export interface ProjectRoleProjectTaskRelResponse {
  success: boolean;
  message: string;
  data?: ProjectRoleProjectTaskRel | ProjectRoleProjectTaskRel[] | ProjectRoleProjectTaskRelPageResult;
  error?: string;
}
