import { ProjectShareCollaboratorWizard } from '../entity/project/project.projectsharecollaboratorwizard.entity';

/**
 * ProjectShareCollaboratorWizard 实体接口
 * 对应数据库表: project_share_collaborator_wizard
 */
export interface ProjectShareCollaboratorWizardInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 ProjectShareCollaboratorWizard 的参数接口
 */
export interface CreateProjectShareCollaboratorWizardDTO extends Partial<ProjectShareCollaboratorWizardInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 ProjectShareCollaboratorWizard 的参数接口
 */
export interface UpdateProjectShareCollaboratorWizardDTO extends Partial<ProjectShareCollaboratorWizardInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 ProjectShareCollaboratorWizard 的参数接口
 */
export interface QueryProjectShareCollaboratorWizardDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof ProjectShareCollaboratorWizardInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * ProjectShareCollaboratorWizard 分页查询结果接口
 */
export interface ProjectShareCollaboratorWizardPageResult {
  data: ProjectShareCollaboratorWizard[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * ProjectShareCollaboratorWizard API 响应接口
 */
export interface ProjectShareCollaboratorWizardResponse {
  success: boolean;
  message: string;
  data?: ProjectShareCollaboratorWizard | ProjectShareCollaboratorWizard[] | ProjectShareCollaboratorWizardPageResult;
  error?: string;
}
