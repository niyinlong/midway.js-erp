import { ProjectTaskTypeRel } from '../entity/project/project.projecttasktyperel.entity';

/**
 * ProjectTaskTypeRel 实体接口
 * 对应数据库表: project_task_type_rel
 */
export interface ProjectTaskTypeRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 ProjectTaskTypeRel 的参数接口
 */
export interface CreateProjectTaskTypeRelDTO extends Partial<ProjectTaskTypeRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 ProjectTaskTypeRel 的参数接口
 */
export interface UpdateProjectTaskTypeRelDTO extends Partial<ProjectTaskTypeRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 ProjectTaskTypeRel 的参数接口
 */
export interface QueryProjectTaskTypeRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof ProjectTaskTypeRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * ProjectTaskTypeRel 分页查询结果接口
 */
export interface ProjectTaskTypeRelPageResult {
  data: ProjectTaskTypeRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * ProjectTaskTypeRel API 响应接口
 */
export interface ProjectTaskTypeRelResponse {
  success: boolean;
  message: string;
  data?: ProjectTaskTypeRel | ProjectTaskTypeRel[] | ProjectTaskTypeRelPageResult;
  error?: string;
}
