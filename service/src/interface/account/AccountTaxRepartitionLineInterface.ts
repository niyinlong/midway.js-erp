import { AccountTaxRepartitionLine } from '../entity/account/account.accounttaxrepartitionline.entity';

/**
 * AccountTaxRepartitionLine 实体接口
 * 对应数据库表: account_tax_repartition_line
 */
export interface AccountTaxRepartitionLineInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 AccountTaxRepartitionLine 的参数接口
 */
export interface CreateAccountTaxRepartitionLineDTO extends Partial<AccountTaxRepartitionLineInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 AccountTaxRepartitionLine 的参数接口
 */
export interface UpdateAccountTaxRepartitionLineDTO extends Partial<AccountTaxRepartitionLineInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 AccountTaxRepartitionLine 的参数接口
 */
export interface QueryAccountTaxRepartitionLineDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof AccountTaxRepartitionLineInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * AccountTaxRepartitionLine 分页查询结果接口
 */
export interface AccountTaxRepartitionLinePageResult {
  data: AccountTaxRepartitionLine[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * AccountTaxRepartitionLine API 响应接口
 */
export interface AccountTaxRepartitionLineResponse {
  success: boolean;
  message: string;
  data?: AccountTaxRepartitionLine | AccountTaxRepartitionLine[] | AccountTaxRepartitionLinePageResult;
  error?: string;
}
