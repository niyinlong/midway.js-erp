import { ProjectProjectStageDeleteWizard } from '../entity/project/project.projectprojectstagedeletewizard.entity';

/**
 * ProjectProjectStageDeleteWizard 实体接口
 * 对应数据库表: project_project_stage_delete_wizard
 */
export interface ProjectProjectStageDeleteWizardInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 ProjectProjectStageDeleteWizard 的参数接口
 */
export interface CreateProjectProjectStageDeleteWizardDTO extends Partial<ProjectProjectStageDeleteWizardInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 ProjectProjectStageDeleteWizard 的参数接口
 */
export interface UpdateProjectProjectStageDeleteWizardDTO extends Partial<ProjectProjectStageDeleteWizardInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 ProjectProjectStageDeleteWizard 的参数接口
 */
export interface QueryProjectProjectStageDeleteWizardDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof ProjectProjectStageDeleteWizardInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * ProjectProjectStageDeleteWizard 分页查询结果接口
 */
export interface ProjectProjectStageDeleteWizardPageResult {
  data: ProjectProjectStageDeleteWizard[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * ProjectProjectStageDeleteWizard API 响应接口
 */
export interface ProjectProjectStageDeleteWizardResponse {
  success: boolean;
  message: string;
  data?: ProjectProjectStageDeleteWizard | ProjectProjectStageDeleteWizard[] | ProjectProjectStageDeleteWizardPageResult;
  error?: string;
}
