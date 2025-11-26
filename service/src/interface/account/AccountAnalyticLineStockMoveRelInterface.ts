import { AccountAnalyticLineStockMoveRel } from '../entity/account/account.accountanalyticlinestockmoverel.entity';

/**
 * AccountAnalyticLineStockMoveRel 实体接口
 * 对应数据库表: account_analytic_line_stock_move_rel
 */
export interface AccountAnalyticLineStockMoveRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 AccountAnalyticLineStockMoveRel 的参数接口
 */
export interface CreateAccountAnalyticLineStockMoveRelDTO extends Partial<AccountAnalyticLineStockMoveRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 AccountAnalyticLineStockMoveRel 的参数接口
 */
export interface UpdateAccountAnalyticLineStockMoveRelDTO extends Partial<AccountAnalyticLineStockMoveRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 AccountAnalyticLineStockMoveRel 的参数接口
 */
export interface QueryAccountAnalyticLineStockMoveRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof AccountAnalyticLineStockMoveRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * AccountAnalyticLineStockMoveRel 分页查询结果接口
 */
export interface AccountAnalyticLineStockMoveRelPageResult {
  data: AccountAnalyticLineStockMoveRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * AccountAnalyticLineStockMoveRel API 响应接口
 */
export interface AccountAnalyticLineStockMoveRelResponse {
  success: boolean;
  message: string;
  data?: AccountAnalyticLineStockMoveRel | AccountAnalyticLineStockMoveRel[] | AccountAnalyticLineStockMoveRelPageResult;
  error?: string;
}
