import { ChangePasswordWizard } from '../entity/change/change.changepasswordwizard.entity';

/**
 * ChangePasswordWizard 实体接口
 * 对应数据库表: change_password_wizard
 */
export interface ChangePasswordWizardInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 ChangePasswordWizard 的参数接口
 */
export interface CreateChangePasswordWizardDTO extends Partial<ChangePasswordWizardInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 ChangePasswordWizard 的参数接口
 */
export interface UpdateChangePasswordWizardDTO extends Partial<ChangePasswordWizardInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 ChangePasswordWizard 的参数接口
 */
export interface QueryChangePasswordWizardDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof ChangePasswordWizardInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * ChangePasswordWizard 分页查询结果接口
 */
export interface ChangePasswordWizardPageResult {
  data: ChangePasswordWizard[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * ChangePasswordWizard API 响应接口
 */
export interface ChangePasswordWizardResponse {
  success: boolean;
  message: string;
  data?: ChangePasswordWizard | ChangePasswordWizard[] | ChangePasswordWizardPageResult;
  error?: string;
}
