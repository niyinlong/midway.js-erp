import { AccountBankStatementIrAttachmentRel } from '../entity/account/account.accountbankstatementirattachmentrel.entity';

/**
 * AccountBankStatementIrAttachmentRel 实体接口
 * 对应数据库表: account_bank_statement_ir_attachment_rel
 */
export interface AccountBankStatementIrAttachmentRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 AccountBankStatementIrAttachmentRel 的参数接口
 */
export interface CreateAccountBankStatementIrAttachmentRelDTO extends Partial<AccountBankStatementIrAttachmentRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 AccountBankStatementIrAttachmentRel 的参数接口
 */
export interface UpdateAccountBankStatementIrAttachmentRelDTO extends Partial<AccountBankStatementIrAttachmentRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 AccountBankStatementIrAttachmentRel 的参数接口
 */
export interface QueryAccountBankStatementIrAttachmentRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof AccountBankStatementIrAttachmentRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * AccountBankStatementIrAttachmentRel 分页查询结果接口
 */
export interface AccountBankStatementIrAttachmentRelPageResult {
  data: AccountBankStatementIrAttachmentRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * AccountBankStatementIrAttachmentRel API 响应接口
 */
export interface AccountBankStatementIrAttachmentRelResponse {
  success: boolean;
  message: string;
  data?: AccountBankStatementIrAttachmentRel | AccountBankStatementIrAttachmentRel[] | AccountBankStatementIrAttachmentRelPageResult;
  error?: string;
}
