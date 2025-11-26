import { HrBankAccountAllocationWizard } from '../entity/hr/hr.hrbankaccountallocationwizard.entity';

/**
 * HrBankAccountAllocationWizard 实体接口
 * 对应数据库表: hr_bank_account_allocation_wizard
 */
export interface HrBankAccountAllocationWizardInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 HrBankAccountAllocationWizard 的参数接口
 */
export interface CreateHrBankAccountAllocationWizardDTO extends Partial<HrBankAccountAllocationWizardInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 HrBankAccountAllocationWizard 的参数接口
 */
export interface UpdateHrBankAccountAllocationWizardDTO extends Partial<HrBankAccountAllocationWizardInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 HrBankAccountAllocationWizard 的参数接口
 */
export interface QueryHrBankAccountAllocationWizardDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof HrBankAccountAllocationWizardInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * HrBankAccountAllocationWizard 分页查询结果接口
 */
export interface HrBankAccountAllocationWizardPageResult {
  data: HrBankAccountAllocationWizard[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * HrBankAccountAllocationWizard API 响应接口
 */
export interface HrBankAccountAllocationWizardResponse {
  success: boolean;
  message: string;
  data?: HrBankAccountAllocationWizard | HrBankAccountAllocationWizard[] | HrBankAccountAllocationWizardPageResult;
  error?: string;
}
