import { ProjectTagsProjectTaskRel } from '../entity/project/project.projecttagsprojecttaskrel.entity';

/**
 * ProjectTagsProjectTaskRel 实体接口
 * 对应数据库表: project_tags_project_task_rel
 */
export interface ProjectTagsProjectTaskRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 ProjectTagsProjectTaskRel 的参数接口
 */
export interface CreateProjectTagsProjectTaskRelDTO extends Partial<ProjectTagsProjectTaskRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 ProjectTagsProjectTaskRel 的参数接口
 */
export interface UpdateProjectTagsProjectTaskRelDTO extends Partial<ProjectTagsProjectTaskRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 ProjectTagsProjectTaskRel 的参数接口
 */
export interface QueryProjectTagsProjectTaskRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof ProjectTagsProjectTaskRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * ProjectTagsProjectTaskRel 分页查询结果接口
 */
export interface ProjectTagsProjectTaskRelPageResult {
  data: ProjectTagsProjectTaskRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * ProjectTagsProjectTaskRel API 响应接口
 */
export interface ProjectTagsProjectTaskRelResponse {
  success: boolean;
  message: string;
  data?: ProjectTagsProjectTaskRel | ProjectTagsProjectTaskRel[] | ProjectTagsProjectTaskRelPageResult;
  error?: string;
}
