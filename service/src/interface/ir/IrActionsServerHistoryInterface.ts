import { IrActionsServerHistory } from '../entity/ir/ir.iractionsserverhistory.entity';

/**
 * IrActionsServerHistory 实体接口
 * 对应数据库表: ir_actions_server_history
 */
export interface IrActionsServerHistoryInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 IrActionsServerHistory 的参数接口
 */
export interface CreateIrActionsServerHistoryDTO extends Partial<IrActionsServerHistoryInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 IrActionsServerHistory 的参数接口
 */
export interface UpdateIrActionsServerHistoryDTO extends Partial<IrActionsServerHistoryInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 IrActionsServerHistory 的参数接口
 */
export interface QueryIrActionsServerHistoryDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof IrActionsServerHistoryInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * IrActionsServerHistory 分页查询结果接口
 */
export interface IrActionsServerHistoryPageResult {
  data: IrActionsServerHistory[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * IrActionsServerHistory API 响应接口
 */
export interface IrActionsServerHistoryResponse {
  success: boolean;
  message: string;
  data?: IrActionsServerHistory | IrActionsServerHistory[] | IrActionsServerHistoryPageResult;
  error?: string;
}
