import { HrBankAccountAllocationWizardLine } from '../entity/hr/hr.hrbankaccountallocationwizardline.entity';

/**
 * HrBankAccountAllocationWizardLine 实体接口
 * 对应数据库表: hr_bank_account_allocation_wizard_line
 */
export interface HrBankAccountAllocationWizardLineInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 HrBankAccountAllocationWizardLine 的参数接口
 */
export interface CreateHrBankAccountAllocationWizardLineDTO extends Partial<HrBankAccountAllocationWizardLineInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 HrBankAccountAllocationWizardLine 的参数接口
 */
export interface UpdateHrBankAccountAllocationWizardLineDTO extends Partial<HrBankAccountAllocationWizardLineInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 HrBankAccountAllocationWizardLine 的参数接口
 */
export interface QueryHrBankAccountAllocationWizardLineDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof HrBankAccountAllocationWizardLineInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * HrBankAccountAllocationWizardLine 分页查询结果接口
 */
export interface HrBankAccountAllocationWizardLinePageResult {
  data: HrBankAccountAllocationWizardLine[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * HrBankAccountAllocationWizardLine API 响应接口
 */
export interface HrBankAccountAllocationWizardLineResponse {
  success: boolean;
  message: string;
  data?: HrBankAccountAllocationWizardLine | HrBankAccountAllocationWizardLine[] | HrBankAccountAllocationWizardLinePageResult;
  error?: string;
}
