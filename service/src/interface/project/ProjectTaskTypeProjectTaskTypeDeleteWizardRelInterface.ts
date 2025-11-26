import { ProjectTaskTypeProjectTaskTypeDeleteWizardRel } from '../entity/project/project.projecttasktypeprojecttasktypedeletewizardrel.entity';

/**
 * ProjectTaskTypeProjectTaskTypeDeleteWizardRel 实体接口
 * 对应数据库表: project_task_type_project_task_type_delete_wizard_rel
 */
export interface ProjectTaskTypeProjectTaskTypeDeleteWizardRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 ProjectTaskTypeProjectTaskTypeDeleteWizardRel 的参数接口
 */
export interface CreateProjectTaskTypeProjectTaskTypeDeleteWizardRelDTO extends Partial<ProjectTaskTypeProjectTaskTypeDeleteWizardRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 ProjectTaskTypeProjectTaskTypeDeleteWizardRel 的参数接口
 */
export interface UpdateProjectTaskTypeProjectTaskTypeDeleteWizardRelDTO extends Partial<ProjectTaskTypeProjectTaskTypeDeleteWizardRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 ProjectTaskTypeProjectTaskTypeDeleteWizardRel 的参数接口
 */
export interface QueryProjectTaskTypeProjectTaskTypeDeleteWizardRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof ProjectTaskTypeProjectTaskTypeDeleteWizardRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * ProjectTaskTypeProjectTaskTypeDeleteWizardRel 分页查询结果接口
 */
export interface ProjectTaskTypeProjectTaskTypeDeleteWizardRelPageResult {
  data: ProjectTaskTypeProjectTaskTypeDeleteWizardRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * ProjectTaskTypeProjectTaskTypeDeleteWizardRel API 响应接口
 */
export interface ProjectTaskTypeProjectTaskTypeDeleteWizardRelResponse {
  success: boolean;
  message: string;
  data?: ProjectTaskTypeProjectTaskTypeDeleteWizardRel | ProjectTaskTypeProjectTaskTypeDeleteWizardRel[] | ProjectTaskTypeProjectTaskTypeDeleteWizardRelPageResult;
  error?: string;
}
