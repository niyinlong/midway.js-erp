import { ProjectTaskUserRel } from '../entity/project/project.projecttaskuserrel.entity';

/**
 * ProjectTaskUserRel 实体接口
 * 对应数据库表: project_task_user_rel
 */
export interface ProjectTaskUserRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 ProjectTaskUserRel 的参数接口
 */
export interface CreateProjectTaskUserRelDTO extends Partial<ProjectTaskUserRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 ProjectTaskUserRel 的参数接口
 */
export interface UpdateProjectTaskUserRelDTO extends Partial<ProjectTaskUserRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 ProjectTaskUserRel 的参数接口
 */
export interface QueryProjectTaskUserRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof ProjectTaskUserRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * ProjectTaskUserRel 分页查询结果接口
 */
export interface ProjectTaskUserRelPageResult {
  data: ProjectTaskUserRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * ProjectTaskUserRel API 响应接口
 */
export interface ProjectTaskUserRelResponse {
  success: boolean;
  message: string;
  data?: ProjectTaskUserRel | ProjectTaskUserRel[] | ProjectTaskUserRelPageResult;
  error?: string;
}
