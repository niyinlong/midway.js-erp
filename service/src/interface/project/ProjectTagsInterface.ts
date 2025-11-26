import { ProjectTags } from '../entity/project/project.projecttags.entity';

/**
 * ProjectTags 实体接口
 * 对应数据库表: project_tags
 */
export interface ProjectTagsInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 ProjectTags 的参数接口
 */
export interface CreateProjectTagsDTO extends Partial<ProjectTagsInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 ProjectTags 的参数接口
 */
export interface UpdateProjectTagsDTO extends Partial<ProjectTagsInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 ProjectTags 的参数接口
 */
export interface QueryProjectTagsDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof ProjectTagsInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * ProjectTags 分页查询结果接口
 */
export interface ProjectTagsPageResult {
  data: ProjectTags[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * ProjectTags API 响应接口
 */
export interface ProjectTagsResponse {
  success: boolean;
  message: string;
  data?: ProjectTags | ProjectTags[] | ProjectTagsPageResult;
  error?: string;
}
