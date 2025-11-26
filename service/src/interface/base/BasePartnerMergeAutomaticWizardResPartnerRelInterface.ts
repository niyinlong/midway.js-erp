import { BasePartnerMergeAutomaticWizardResPartnerRel } from '../entity/base/base.basepartnermergeautomaticwizardrespartnerrel.entity';

/**
 * BasePartnerMergeAutomaticWizardResPartnerRel 实体接口
 * 对应数据库表: base_partner_merge_automatic_wizard_res_partner_rel
 */
export interface BasePartnerMergeAutomaticWizardResPartnerRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 BasePartnerMergeAutomaticWizardResPartnerRel 的参数接口
 */
export interface CreateBasePartnerMergeAutomaticWizardResPartnerRelDTO extends Partial<BasePartnerMergeAutomaticWizardResPartnerRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 BasePartnerMergeAutomaticWizardResPartnerRel 的参数接口
 */
export interface UpdateBasePartnerMergeAutomaticWizardResPartnerRelDTO extends Partial<BasePartnerMergeAutomaticWizardResPartnerRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 BasePartnerMergeAutomaticWizardResPartnerRel 的参数接口
 */
export interface QueryBasePartnerMergeAutomaticWizardResPartnerRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof BasePartnerMergeAutomaticWizardResPartnerRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * BasePartnerMergeAutomaticWizardResPartnerRel 分页查询结果接口
 */
export interface BasePartnerMergeAutomaticWizardResPartnerRelPageResult {
  data: BasePartnerMergeAutomaticWizardResPartnerRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * BasePartnerMergeAutomaticWizardResPartnerRel API 响应接口
 */
export interface BasePartnerMergeAutomaticWizardResPartnerRelResponse {
  success: boolean;
  message: string;
  data?: BasePartnerMergeAutomaticWizardResPartnerRel | BasePartnerMergeAutomaticWizardResPartnerRel[] | BasePartnerMergeAutomaticWizardResPartnerRelPageResult;
  error?: string;
}
