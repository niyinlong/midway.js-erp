import { PortalWizardResPartnerRel } from '../entity/portal/portal.portalwizardrespartnerrel.entity';

/**
 * PortalWizardResPartnerRel 实体接口
 * 对应数据库表: portal_wizard_res_partner_rel
 */
export interface PortalWizardResPartnerRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 PortalWizardResPartnerRel 的参数接口
 */
export interface CreatePortalWizardResPartnerRelDTO extends Partial<PortalWizardResPartnerRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 PortalWizardResPartnerRel 的参数接口
 */
export interface UpdatePortalWizardResPartnerRelDTO extends Partial<PortalWizardResPartnerRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 PortalWizardResPartnerRel 的参数接口
 */
export interface QueryPortalWizardResPartnerRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof PortalWizardResPartnerRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * PortalWizardResPartnerRel 分页查询结果接口
 */
export interface PortalWizardResPartnerRelPageResult {
  data: PortalWizardResPartnerRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * PortalWizardResPartnerRel API 响应接口
 */
export interface PortalWizardResPartnerRelResponse {
  success: boolean;
  message: string;
  data?: PortalWizardResPartnerRel | PortalWizardResPartnerRel[] | PortalWizardResPartnerRelPageResult;
  error?: string;
}
