import { IrEmbeddedActions } from '../entity/ir/ir.irembeddedactions.entity';

/**
 * IrEmbeddedActions 实体接口
 * 对应数据库表: ir_embedded_actions
 */
export interface IrEmbeddedActionsInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 IrEmbeddedActions 的参数接口
 */
export interface CreateIrEmbeddedActionsDTO extends Partial<IrEmbeddedActionsInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 IrEmbeddedActions 的参数接口
 */
export interface UpdateIrEmbeddedActionsDTO extends Partial<IrEmbeddedActionsInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 IrEmbeddedActions 的参数接口
 */
export interface QueryIrEmbeddedActionsDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof IrEmbeddedActionsInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * IrEmbeddedActions 分页查询结果接口
 */
export interface IrEmbeddedActionsPageResult {
  data: IrEmbeddedActions[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * IrEmbeddedActions API 响应接口
 */
export interface IrEmbeddedActionsResponse {
  success: boolean;
  message: string;
  data?: IrEmbeddedActions | IrEmbeddedActions[] | IrEmbeddedActionsPageResult;
  error?: string;
}
