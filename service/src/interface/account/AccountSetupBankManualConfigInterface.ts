import { AccountSetupBankManualConfig } from '../entity/account/account.accountsetupbankmanualconfig.entity';

/**
 * AccountSetupBankManualConfig 实体接口
 * 对应数据库表: account_setup_bank_manual_config
 */
export interface AccountSetupBankManualConfigInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 AccountSetupBankManualConfig 的参数接口
 */
export interface CreateAccountSetupBankManualConfigDTO extends Partial<AccountSetupBankManualConfigInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 AccountSetupBankManualConfig 的参数接口
 */
export interface UpdateAccountSetupBankManualConfigDTO extends Partial<AccountSetupBankManualConfigInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 AccountSetupBankManualConfig 的参数接口
 */
export interface QueryAccountSetupBankManualConfigDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof AccountSetupBankManualConfigInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * AccountSetupBankManualConfig 分页查询结果接口
 */
export interface AccountSetupBankManualConfigPageResult {
  data: AccountSetupBankManualConfig[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * AccountSetupBankManualConfig API 响应接口
 */
export interface AccountSetupBankManualConfigResponse {
  success: boolean;
  message: string;
  data?: AccountSetupBankManualConfig | AccountSetupBankManualConfig[] | AccountSetupBankManualConfigPageResult;
  error?: string;
}
