import { IrActClient } from '../entity/ir/ir.iractclient.entity';

/**
 * IrActClient 实体接口
 * 对应数据库表: ir_act_client
 */
export interface IrActClientInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 IrActClient 的参数接口
 */
export interface CreateIrActClientDTO extends Partial<IrActClientInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 IrActClient 的参数接口
 */
export interface UpdateIrActClientDTO extends Partial<IrActClientInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 IrActClient 的参数接口
 */
export interface QueryIrActClientDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof IrActClientInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * IrActClient 分页查询结果接口
 */
export interface IrActClientPageResult {
  data: IrActClient[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * IrActClient API 响应接口
 */
export interface IrActClientResponse {
  success: boolean;
  message: string;
  data?: IrActClient | IrActClient[] | IrActClientPageResult;
  error?: string;
}
