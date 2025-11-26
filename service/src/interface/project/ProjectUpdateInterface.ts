import { ProjectUpdate } from '../entity/project/project.projectupdate.entity';

/**
 * ProjectUpdate 实体接口
 * 对应数据库表: project_update
 */
export interface ProjectUpdateInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 ProjectUpdate 的参数接口
 */
export interface CreateProjectUpdateDTO extends Partial<ProjectUpdateInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 ProjectUpdate 的参数接口
 */
export interface UpdateProjectUpdateDTO extends Partial<ProjectUpdateInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 ProjectUpdate 的参数接口
 */
export interface QueryProjectUpdateDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof ProjectUpdateInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * ProjectUpdate 分页查询结果接口
 */
export interface ProjectUpdatePageResult {
  data: ProjectUpdate[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * ProjectUpdate API 响应接口
 */
export interface ProjectUpdateResponse {
  success: boolean;
  message: string;
  data?: ProjectUpdate | ProjectUpdate[] | ProjectUpdatePageResult;
  error?: string;
}
