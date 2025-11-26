import { PrivacyLookupWizardLine } from '../entity/privacy/privacy.privacylookupwizardline.entity';

/**
 * PrivacyLookupWizardLine 实体接口
 * 对应数据库表: privacy_lookup_wizard_line
 */
export interface PrivacyLookupWizardLineInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 PrivacyLookupWizardLine 的参数接口
 */
export interface CreatePrivacyLookupWizardLineDTO extends Partial<PrivacyLookupWizardLineInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 PrivacyLookupWizardLine 的参数接口
 */
export interface UpdatePrivacyLookupWizardLineDTO extends Partial<PrivacyLookupWizardLineInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 PrivacyLookupWizardLine 的参数接口
 */
export interface QueryPrivacyLookupWizardLineDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof PrivacyLookupWizardLineInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * PrivacyLookupWizardLine 分页查询结果接口
 */
export interface PrivacyLookupWizardLinePageResult {
  data: PrivacyLookupWizardLine[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * PrivacyLookupWizardLine API 响应接口
 */
export interface PrivacyLookupWizardLineResponse {
  success: boolean;
  message: string;
  data?: PrivacyLookupWizardLine | PrivacyLookupWizardLine[] | PrivacyLookupWizardLinePageResult;
  error?: string;
}
