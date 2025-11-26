import { ProjectShareWizardResPartnerRel } from '../entity/project/project.projectsharewizardrespartnerrel.entity';

/**
 * ProjectShareWizardResPartnerRel 实体接口
 * 对应数据库表: project_share_wizard_res_partner_rel
 */
export interface ProjectShareWizardResPartnerRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 ProjectShareWizardResPartnerRel 的参数接口
 */
export interface CreateProjectShareWizardResPartnerRelDTO extends Partial<ProjectShareWizardResPartnerRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 ProjectShareWizardResPartnerRel 的参数接口
 */
export interface UpdateProjectShareWizardResPartnerRelDTO extends Partial<ProjectShareWizardResPartnerRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 ProjectShareWizardResPartnerRel 的参数接口
 */
export interface QueryProjectShareWizardResPartnerRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof ProjectShareWizardResPartnerRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * ProjectShareWizardResPartnerRel 分页查询结果接口
 */
export interface ProjectShareWizardResPartnerRelPageResult {
  data: ProjectShareWizardResPartnerRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * ProjectShareWizardResPartnerRel API 响应接口
 */
export interface ProjectShareWizardResPartnerRelResponse {
  success: boolean;
  message: string;
  data?: ProjectShareWizardResPartnerRel | ProjectShareWizardResPartnerRel[] | ProjectShareWizardResPartnerRelPageResult;
  error?: string;
}
