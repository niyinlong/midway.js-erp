import { ProjectTemplateRoleToUsersMap } from '../entity/project/project.projecttemplateroletousersmap.entity';

/**
 * ProjectTemplateRoleToUsersMap 实体接口
 * 对应数据库表: project_template_role_to_users_map
 */
export interface ProjectTemplateRoleToUsersMapInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 ProjectTemplateRoleToUsersMap 的参数接口
 */
export interface CreateProjectTemplateRoleToUsersMapDTO extends Partial<ProjectTemplateRoleToUsersMapInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 ProjectTemplateRoleToUsersMap 的参数接口
 */
export interface UpdateProjectTemplateRoleToUsersMapDTO extends Partial<ProjectTemplateRoleToUsersMapInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 ProjectTemplateRoleToUsersMap 的参数接口
 */
export interface QueryProjectTemplateRoleToUsersMapDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof ProjectTemplateRoleToUsersMapInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * ProjectTemplateRoleToUsersMap 分页查询结果接口
 */
export interface ProjectTemplateRoleToUsersMapPageResult {
  data: ProjectTemplateRoleToUsersMap[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * ProjectTemplateRoleToUsersMap API 响应接口
 */
export interface ProjectTemplateRoleToUsersMapResponse {
  success: boolean;
  message: string;
  data?: ProjectTemplateRoleToUsersMap | ProjectTemplateRoleToUsersMap[] | ProjectTemplateRoleToUsersMapPageResult;
  error?: string;
}
