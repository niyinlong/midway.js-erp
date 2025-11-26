import { AccountPaymentRegisterMoveLineRel } from '../entity/account/account.accountpaymentregistermovelinerel.entity';

/**
 * AccountPaymentRegisterMoveLineRel 实体接口
 * 对应数据库表: account_payment_register_move_line_rel
 */
export interface AccountPaymentRegisterMoveLineRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 AccountPaymentRegisterMoveLineRel 的参数接口
 */
export interface CreateAccountPaymentRegisterMoveLineRelDTO extends Partial<AccountPaymentRegisterMoveLineRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 AccountPaymentRegisterMoveLineRel 的参数接口
 */
export interface UpdateAccountPaymentRegisterMoveLineRelDTO extends Partial<AccountPaymentRegisterMoveLineRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 AccountPaymentRegisterMoveLineRel 的参数接口
 */
export interface QueryAccountPaymentRegisterMoveLineRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof AccountPaymentRegisterMoveLineRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * AccountPaymentRegisterMoveLineRel 分页查询结果接口
 */
export interface AccountPaymentRegisterMoveLineRelPageResult {
  data: AccountPaymentRegisterMoveLineRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * AccountPaymentRegisterMoveLineRel API 响应接口
 */
export interface AccountPaymentRegisterMoveLineRelResponse {
  success: boolean;
  message: string;
  data?: AccountPaymentRegisterMoveLineRel | AccountPaymentRegisterMoveLineRel[] | AccountPaymentRegisterMoveLineRelPageResult;
  error?: string;
}
