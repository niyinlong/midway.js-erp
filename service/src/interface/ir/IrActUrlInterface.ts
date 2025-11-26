import { IrActUrl } from '../entity/ir/ir.iracturl.entity';

/**
 * IrActUrl 实体接口
 * 对应数据库表: ir_act_url
 */
export interface IrActUrlInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 IrActUrl 的参数接口
 */
export interface CreateIrActUrlDTO extends Partial<IrActUrlInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 IrActUrl 的参数接口
 */
export interface UpdateIrActUrlDTO extends Partial<IrActUrlInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 IrActUrl 的参数接口
 */
export interface QueryIrActUrlDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof IrActUrlInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * IrActUrl 分页查询结果接口
 */
export interface IrActUrlPageResult {
  data: IrActUrl[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * IrActUrl API 响应接口
 */
export interface IrActUrlResponse {
  success: boolean;
  message: string;
  data?: IrActUrl | IrActUrl[] | IrActUrlPageResult;
  error?: string;
}
