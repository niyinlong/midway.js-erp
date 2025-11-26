import { ProjectTemplateRoleToUsersMapResUsersRel } from '../entity/project/project.projecttemplateroletousersmapresusersrel.entity';

/**
 * ProjectTemplateRoleToUsersMapResUsersRel 实体接口
 * 对应数据库表: project_template_role_to_users_map_res_users_rel
 */
export interface ProjectTemplateRoleToUsersMapResUsersRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 ProjectTemplateRoleToUsersMapResUsersRel 的参数接口
 */
export interface CreateProjectTemplateRoleToUsersMapResUsersRelDTO extends Partial<ProjectTemplateRoleToUsersMapResUsersRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 ProjectTemplateRoleToUsersMapResUsersRel 的参数接口
 */
export interface UpdateProjectTemplateRoleToUsersMapResUsersRelDTO extends Partial<ProjectTemplateRoleToUsersMapResUsersRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 ProjectTemplateRoleToUsersMapResUsersRel 的参数接口
 */
export interface QueryProjectTemplateRoleToUsersMapResUsersRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof ProjectTemplateRoleToUsersMapResUsersRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * ProjectTemplateRoleToUsersMapResUsersRel 分页查询结果接口
 */
export interface ProjectTemplateRoleToUsersMapResUsersRelPageResult {
  data: ProjectTemplateRoleToUsersMapResUsersRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * ProjectTemplateRoleToUsersMapResUsersRel API 响应接口
 */
export interface ProjectTemplateRoleToUsersMapResUsersRelResponse {
  success: boolean;
  message: string;
  data?: ProjectTemplateRoleToUsersMapResUsersRel | ProjectTemplateRoleToUsersMapResUsersRel[] | ProjectTemplateRoleToUsersMapResUsersRelPageResult;
  error?: string;
}
