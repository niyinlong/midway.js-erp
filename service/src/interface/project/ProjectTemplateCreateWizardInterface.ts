import { ProjectTemplateCreateWizard } from '../entity/project/project.projecttemplatecreatewizard.entity';

/**
 * ProjectTemplateCreateWizard 实体接口
 * 对应数据库表: project_template_create_wizard
 */
export interface ProjectTemplateCreateWizardInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 ProjectTemplateCreateWizard 的参数接口
 */
export interface CreateProjectTemplateCreateWizardDTO extends Partial<ProjectTemplateCreateWizardInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 ProjectTemplateCreateWizard 的参数接口
 */
export interface UpdateProjectTemplateCreateWizardDTO extends Partial<ProjectTemplateCreateWizardInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 ProjectTemplateCreateWizard 的参数接口
 */
export interface QueryProjectTemplateCreateWizardDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof ProjectTemplateCreateWizardInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * ProjectTemplateCreateWizard 分页查询结果接口
 */
export interface ProjectTemplateCreateWizardPageResult {
  data: ProjectTemplateCreateWizard[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * ProjectTemplateCreateWizard API 响应接口
 */
export interface ProjectTemplateCreateWizardResponse {
  success: boolean;
  message: string;
  data?: ProjectTemplateCreateWizard | ProjectTemplateCreateWizard[] | ProjectTemplateCreateWizardPageResult;
  error?: string;
}
