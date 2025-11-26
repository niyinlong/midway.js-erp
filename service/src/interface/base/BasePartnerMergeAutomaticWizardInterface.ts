import { BasePartnerMergeAutomaticWizard } from '../entity/base/base.basepartnermergeautomaticwizard.entity';

/**
 * BasePartnerMergeAutomaticWizard 实体接口
 * 对应数据库表: base_partner_merge_automatic_wizard
 */
export interface BasePartnerMergeAutomaticWizardInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 BasePartnerMergeAutomaticWizard 的参数接口
 */
export interface CreateBasePartnerMergeAutomaticWizardDTO extends Partial<BasePartnerMergeAutomaticWizardInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 BasePartnerMergeAutomaticWizard 的参数接口
 */
export interface UpdateBasePartnerMergeAutomaticWizardDTO extends Partial<BasePartnerMergeAutomaticWizardInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 BasePartnerMergeAutomaticWizard 的参数接口
 */
export interface QueryBasePartnerMergeAutomaticWizardDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof BasePartnerMergeAutomaticWizardInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * BasePartnerMergeAutomaticWizard 分页查询结果接口
 */
export interface BasePartnerMergeAutomaticWizardPageResult {
  data: BasePartnerMergeAutomaticWizard[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * BasePartnerMergeAutomaticWizard API 响应接口
 */
export interface BasePartnerMergeAutomaticWizardResponse {
  success: boolean;
  message: string;
  data?: BasePartnerMergeAutomaticWizard | BasePartnerMergeAutomaticWizard[] | BasePartnerMergeAutomaticWizardPageResult;
  error?: string;
}
