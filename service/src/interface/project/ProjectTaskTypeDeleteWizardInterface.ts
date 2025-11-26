import { ProjectTaskTypeDeleteWizard } from '../entity/project/project.projecttasktypedeletewizard.entity';

/**
 * ProjectTaskTypeDeleteWizard 实体接口
 * 对应数据库表: project_task_type_delete_wizard
 */
export interface ProjectTaskTypeDeleteWizardInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 ProjectTaskTypeDeleteWizard 的参数接口
 */
export interface CreateProjectTaskTypeDeleteWizardDTO extends Partial<ProjectTaskTypeDeleteWizardInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 ProjectTaskTypeDeleteWizard 的参数接口
 */
export interface UpdateProjectTaskTypeDeleteWizardDTO extends Partial<ProjectTaskTypeDeleteWizardInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 ProjectTaskTypeDeleteWizard 的参数接口
 */
export interface QueryProjectTaskTypeDeleteWizardDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof ProjectTaskTypeDeleteWizardInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * ProjectTaskTypeDeleteWizard 分页查询结果接口
 */
export interface ProjectTaskTypeDeleteWizardPageResult {
  data: ProjectTaskTypeDeleteWizard[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * ProjectTaskTypeDeleteWizard API 响应接口
 */
export interface ProjectTaskTypeDeleteWizardResponse {
  success: boolean;
  message: string;
  data?: ProjectTaskTypeDeleteWizard | ProjectTaskTypeDeleteWizard[] | ProjectTaskTypeDeleteWizardPageResult;
  error?: string;
}
