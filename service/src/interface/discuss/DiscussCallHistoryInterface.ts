import { DiscussCallHistory } from '../entity/discuss/discuss.discusscallhistory.entity';

/**
 * DiscussCallHistory 实体接口
 * 对应数据库表: discuss_call_history
 */
export interface DiscussCallHistoryInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 DiscussCallHistory 的参数接口
 */
export interface CreateDiscussCallHistoryDTO extends Partial<DiscussCallHistoryInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 DiscussCallHistory 的参数接口
 */
export interface UpdateDiscussCallHistoryDTO extends Partial<DiscussCallHistoryInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 DiscussCallHistory 的参数接口
 */
export interface QueryDiscussCallHistoryDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof DiscussCallHistoryInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * DiscussCallHistory 分页查询结果接口
 */
export interface DiscussCallHistoryPageResult {
  data: DiscussCallHistory[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * DiscussCallHistory API 响应接口
 */
export interface DiscussCallHistoryResponse {
  success: boolean;
  message: string;
  data?: DiscussCallHistory | DiscussCallHistory[] | DiscussCallHistoryPageResult;
  error?: string;
}
