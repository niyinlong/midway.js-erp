import { ConfirmStockSms } from '../entity/confirm/confirm.confirmstocksms.entity';

/**
 * ConfirmStockSms 实体接口
 * 对应数据库表: confirm_stock_sms
 */
export interface ConfirmStockSmsInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 ConfirmStockSms 的参数接口
 */
export interface CreateConfirmStockSmsDTO extends Partial<ConfirmStockSmsInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 ConfirmStockSms 的参数接口
 */
export interface UpdateConfirmStockSmsDTO extends Partial<ConfirmStockSmsInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 ConfirmStockSms 的参数接口
 */
export interface QueryConfirmStockSmsDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof ConfirmStockSmsInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * ConfirmStockSms 分页查询结果接口
 */
export interface ConfirmStockSmsPageResult {
  data: ConfirmStockSms[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * ConfirmStockSms API 响应接口
 */
export interface ConfirmStockSmsResponse {
  success: boolean;
  message: string;
  data?: ConfirmStockSms | ConfirmStockSms[] | ConfirmStockSmsPageResult;
  error?: string;
}
