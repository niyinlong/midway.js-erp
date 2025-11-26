import { AdjustingEntriesAccountMove } from '../entity/adjusting/adjusting.adjustingentriesaccountmove.entity';

/**
 * AdjustingEntriesAccountMove 实体接口
 * 对应数据库表: adjusting_entries__account_move
 */
export interface AdjustingEntriesAccountMoveInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 AdjustingEntriesAccountMove 的参数接口
 */
export interface CreateAdjustingEntriesAccountMoveDTO extends Partial<AdjustingEntriesAccountMoveInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 AdjustingEntriesAccountMove 的参数接口
 */
export interface UpdateAdjustingEntriesAccountMoveDTO extends Partial<AdjustingEntriesAccountMoveInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 AdjustingEntriesAccountMove 的参数接口
 */
export interface QueryAdjustingEntriesAccountMoveDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof AdjustingEntriesAccountMoveInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * AdjustingEntriesAccountMove 分页查询结果接口
 */
export interface AdjustingEntriesAccountMovePageResult {
  data: AdjustingEntriesAccountMove[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * AdjustingEntriesAccountMove API 响应接口
 */
export interface AdjustingEntriesAccountMoveResponse {
  success: boolean;
  message: string;
  data?: AdjustingEntriesAccountMove | AdjustingEntriesAccountMove[] | AdjustingEntriesAccountMovePageResult;
  error?: string;
}
