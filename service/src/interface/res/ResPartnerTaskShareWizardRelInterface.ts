import { ResPartnerTaskShareWizardRel } from '../entity/res/res.respartnertasksharewizardrel.entity';

/**
 * ResPartnerTaskShareWizardRel 实体接口
 * 对应数据库表: res_partner_task_share_wizard_rel
 */
export interface ResPartnerTaskShareWizardRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 ResPartnerTaskShareWizardRel 的参数接口
 */
export interface CreateResPartnerTaskShareWizardRelDTO extends Partial<ResPartnerTaskShareWizardRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 ResPartnerTaskShareWizardRel 的参数接口
 */
export interface UpdateResPartnerTaskShareWizardRelDTO extends Partial<ResPartnerTaskShareWizardRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 ResPartnerTaskShareWizardRel 的参数接口
 */
export interface QueryResPartnerTaskShareWizardRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof ResPartnerTaskShareWizardRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * ResPartnerTaskShareWizardRel 分页查询结果接口
 */
export interface ResPartnerTaskShareWizardRelPageResult {
  data: ResPartnerTaskShareWizardRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * ResPartnerTaskShareWizardRel API 响应接口
 */
export interface ResPartnerTaskShareWizardRelResponse {
  success: boolean;
  message: string;
  data?: ResPartnerTaskShareWizardRel | ResPartnerTaskShareWizardRel[] | ResPartnerTaskShareWizardRelPageResult;
  error?: string;
}
