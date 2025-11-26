import { AuthTotpWizard } from '../entity/auth/auth.authtotpwizard.entity';

/**
 * AuthTotpWizard 实体接口
 * 对应数据库表: auth_totp_wizard
 */
export interface AuthTotpWizardInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 AuthTotpWizard 的参数接口
 */
export interface CreateAuthTotpWizardDTO extends Partial<AuthTotpWizardInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 AuthTotpWizard 的参数接口
 */
export interface UpdateAuthTotpWizardDTO extends Partial<AuthTotpWizardInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 AuthTotpWizard 的参数接口
 */
export interface QueryAuthTotpWizardDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof AuthTotpWizardInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * AuthTotpWizard 分页查询结果接口
 */
export interface AuthTotpWizardPageResult {
  data: AuthTotpWizard[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * AuthTotpWizard API 响应接口
 */
export interface AuthTotpWizardResponse {
  success: boolean;
  message: string;
  data?: AuthTotpWizard | AuthTotpWizard[] | AuthTotpWizardPageResult;
  error?: string;
}
