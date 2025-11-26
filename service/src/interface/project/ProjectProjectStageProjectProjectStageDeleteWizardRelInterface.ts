import { ProjectProjectStageProjectProjectStageDeleteWizardRel } from '../entity/project/project.projectprojectstageprojectprojectstagedeletewizardrel.entity';

/**
 * ProjectProjectStageProjectProjectStageDeleteWizardRel 实体接口
 * 对应数据库表: project_project_stage_project_project_stage_delete_wizard_rel
 */
export interface ProjectProjectStageProjectProjectStageDeleteWizardRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 ProjectProjectStageProjectProjectStageDeleteWizardRel 的参数接口
 */
export interface CreateProjectProjectStageProjectProjectStageDeleteWizardRelDTO extends Partial<ProjectProjectStageProjectProjectStageDeleteWizardRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 ProjectProjectStageProjectProjectStageDeleteWizardRel 的参数接口
 */
export interface UpdateProjectProjectStageProjectProjectStageDeleteWizardRelDTO extends Partial<ProjectProjectStageProjectProjectStageDeleteWizardRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 ProjectProjectStageProjectProjectStageDeleteWizardRel 的参数接口
 */
export interface QueryProjectProjectStageProjectProjectStageDeleteWizardRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof ProjectProjectStageProjectProjectStageDeleteWizardRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * ProjectProjectStageProjectProjectStageDeleteWizardRel 分页查询结果接口
 */
export interface ProjectProjectStageProjectProjectStageDeleteWizardRelPageResult {
  data: ProjectProjectStageProjectProjectStageDeleteWizardRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * ProjectProjectStageProjectProjectStageDeleteWizardRel API 响应接口
 */
export interface ProjectProjectStageProjectProjectStageDeleteWizardRelResponse {
  success: boolean;
  message: string;
  data?: ProjectProjectStageProjectProjectStageDeleteWizardRel | ProjectProjectStageProjectProjectStageDeleteWizardRel[] | ProjectProjectStageProjectProjectStageDeleteWizardRelPageResult;
  error?: string;
}
