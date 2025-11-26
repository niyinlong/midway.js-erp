import { IrActServer } from '../entity/ir/ir.iractserver.entity';

/**
 * IrActServer 实体接口
 * 对应数据库表: ir_act_server
 */
export interface IrActServerInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 IrActServer 的参数接口
 */
export interface CreateIrActServerDTO extends Partial<IrActServerInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 IrActServer 的参数接口
 */
export interface UpdateIrActServerDTO extends Partial<IrActServerInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 IrActServer 的参数接口
 */
export interface QueryIrActServerDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof IrActServerInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * IrActServer 分页查询结果接口
 */
export interface IrActServerPageResult {
  data: IrActServer[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * IrActServer API 响应接口
 */
export interface IrActServerResponse {
  success: boolean;
  message: string;
  data?: IrActServer | IrActServer[] | IrActServerPageResult;
  error?: string;
}
