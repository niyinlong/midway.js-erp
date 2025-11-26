import { ProjectShareWizard } from '../entity/project/project.projectsharewizard.entity';

/**
 * ProjectShareWizard 实体接口
 * 对应数据库表: project_share_wizard
 */
export interface ProjectShareWizardInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 ProjectShareWizard 的参数接口
 */
export interface CreateProjectShareWizardDTO extends Partial<ProjectShareWizardInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 ProjectShareWizard 的参数接口
 */
export interface UpdateProjectShareWizardDTO extends Partial<ProjectShareWizardInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 ProjectShareWizard 的参数接口
 */
export interface QueryProjectShareWizardDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof ProjectShareWizardInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * ProjectShareWizard 分页查询结果接口
 */
export interface ProjectShareWizardPageResult {
  data: ProjectShareWizard[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * ProjectShareWizard API 响应接口
 */
export interface ProjectShareWizardResponse {
  success: boolean;
  message: string;
  data?: ProjectShareWizard | ProjectShareWizard[] | ProjectShareWizardPageResult;
  error?: string;
}
