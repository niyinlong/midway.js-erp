import { PrivacyLookupWizard } from '../entity/privacy/privacy.privacylookupwizard.entity';

/**
 * PrivacyLookupWizard 实体接口
 * 对应数据库表: privacy_lookup_wizard
 */
export interface PrivacyLookupWizardInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 PrivacyLookupWizard 的参数接口
 */
export interface CreatePrivacyLookupWizardDTO extends Partial<PrivacyLookupWizardInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 PrivacyLookupWizard 的参数接口
 */
export interface UpdatePrivacyLookupWizardDTO extends Partial<PrivacyLookupWizardInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 PrivacyLookupWizard 的参数接口
 */
export interface QueryPrivacyLookupWizardDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof PrivacyLookupWizardInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * PrivacyLookupWizard 分页查询结果接口
 */
export interface PrivacyLookupWizardPageResult {
  data: PrivacyLookupWizard[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * PrivacyLookupWizard API 响应接口
 */
export interface PrivacyLookupWizardResponse {
  success: boolean;
  message: string;
  data?: PrivacyLookupWizard | PrivacyLookupWizard[] | PrivacyLookupWizardPageResult;
  error?: string;
}
