import { ProjectMilestone } from '../entity/project/project.projectmilestone.entity';

/**
 * ProjectMilestone 实体接口
 * 对应数据库表: project_milestone
 */
export interface ProjectMilestoneInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 ProjectMilestone 的参数接口
 */
export interface CreateProjectMilestoneDTO extends Partial<ProjectMilestoneInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 ProjectMilestone 的参数接口
 */
export interface UpdateProjectMilestoneDTO extends Partial<ProjectMilestoneInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 ProjectMilestone 的参数接口
 */
export interface QueryProjectMilestoneDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof ProjectMilestoneInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * ProjectMilestone 分页查询结果接口
 */
export interface ProjectMilestonePageResult {
  data: ProjectMilestone[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * ProjectMilestone API 响应接口
 */
export interface ProjectMilestoneResponse {
  success: boolean;
  message: string;
  data?: ProjectMilestone | ProjectMilestone[] | ProjectMilestonePageResult;
  error?: string;
}
