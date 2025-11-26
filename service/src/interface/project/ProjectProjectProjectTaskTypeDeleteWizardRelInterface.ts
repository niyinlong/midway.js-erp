import { ProjectProjectProjectTaskTypeDeleteWizardRel } from '../entity/project/project.projectprojectprojecttasktypedeletewizardrel.entity';

/**
 * ProjectProjectProjectTaskTypeDeleteWizardRel 实体接口
 * 对应数据库表: project_project_project_task_type_delete_wizard_rel
 */
export interface ProjectProjectProjectTaskTypeDeleteWizardRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 ProjectProjectProjectTaskTypeDeleteWizardRel 的参数接口
 */
export interface CreateProjectProjectProjectTaskTypeDeleteWizardRelDTO extends Partial<ProjectProjectProjectTaskTypeDeleteWizardRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 ProjectProjectProjectTaskTypeDeleteWizardRel 的参数接口
 */
export interface UpdateProjectProjectProjectTaskTypeDeleteWizardRelDTO extends Partial<ProjectProjectProjectTaskTypeDeleteWizardRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 ProjectProjectProjectTaskTypeDeleteWizardRel 的参数接口
 */
export interface QueryProjectProjectProjectTaskTypeDeleteWizardRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof ProjectProjectProjectTaskTypeDeleteWizardRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * ProjectProjectProjectTaskTypeDeleteWizardRel 分页查询结果接口
 */
export interface ProjectProjectProjectTaskTypeDeleteWizardRelPageResult {
  data: ProjectProjectProjectTaskTypeDeleteWizardRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * ProjectProjectProjectTaskTypeDeleteWizardRel API 响应接口
 */
export interface ProjectProjectProjectTaskTypeDeleteWizardRelResponse {
  success: boolean;
  message: string;
  data?: ProjectProjectProjectTaskTypeDeleteWizardRel | ProjectProjectProjectTaskTypeDeleteWizardRel[] | ProjectProjectProjectTaskTypeDeleteWizardRelPageResult;
  error?: string;
}
