import { ProjectProjectProjectTagsRel } from '../entity/project/project.projectprojectprojecttagsrel.entity';

/**
 * ProjectProjectProjectTagsRel 实体接口
 * 对应数据库表: project_project_project_tags_rel
 */
export interface ProjectProjectProjectTagsRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 ProjectProjectProjectTagsRel 的参数接口
 */
export interface CreateProjectProjectProjectTagsRelDTO extends Partial<ProjectProjectProjectTagsRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 ProjectProjectProjectTagsRel 的参数接口
 */
export interface UpdateProjectProjectProjectTagsRelDTO extends Partial<ProjectProjectProjectTagsRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 ProjectProjectProjectTagsRel 的参数接口
 */
export interface QueryProjectProjectProjectTagsRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof ProjectProjectProjectTagsRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * ProjectProjectProjectTagsRel 分页查询结果接口
 */
export interface ProjectProjectProjectTagsRelPageResult {
  data: ProjectProjectProjectTagsRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * ProjectProjectProjectTagsRel API 响应接口
 */
export interface ProjectProjectProjectTagsRelResponse {
  success: boolean;
  message: string;
  data?: ProjectProjectProjectTagsRel | ProjectProjectProjectTagsRel[] | ProjectProjectProjectTagsRelPageResult;
  error?: string;
}
