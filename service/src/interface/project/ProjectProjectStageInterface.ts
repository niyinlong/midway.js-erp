import { ProjectProjectStage } from '../entity/project/project.projectprojectstage.entity';

/**
 * ProjectProjectStage 实体接口
 * 对应数据库表: project_project_stage
 */
export interface ProjectProjectStageInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 ProjectProjectStage 的参数接口
 */
export interface CreateProjectProjectStageDTO extends Partial<ProjectProjectStageInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 ProjectProjectStage 的参数接口
 */
export interface UpdateProjectProjectStageDTO extends Partial<ProjectProjectStageInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 ProjectProjectStage 的参数接口
 */
export interface QueryProjectProjectStageDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof ProjectProjectStageInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * ProjectProjectStage 分页查询结果接口
 */
export interface ProjectProjectStagePageResult {
  data: ProjectProjectStage[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * ProjectProjectStage API 响应接口
 */
export interface ProjectProjectStageResponse {
  success: boolean;
  message: string;
  data?: ProjectProjectStage | ProjectProjectStage[] | ProjectProjectStagePageResult;
  error?: string;
}
