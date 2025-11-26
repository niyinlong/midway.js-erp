import { IrDefault } from '../entity/ir/ir.irdefault.entity';

/**
 * IrDefault 实体接口
 * 对应数据库表: ir_default
 */
export interface IrDefaultInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 IrDefault 的参数接口
 */
export interface CreateIrDefaultDTO extends Partial<IrDefaultInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 IrDefault 的参数接口
 */
export interface UpdateIrDefaultDTO extends Partial<IrDefaultInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 IrDefault 的参数接口
 */
export interface QueryIrDefaultDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof IrDefaultInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * IrDefault 分页查询结果接口
 */
export interface IrDefaultPageResult {
  data: IrDefault[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * IrDefault API 响应接口
 */
export interface IrDefaultResponse {
  success: boolean;
  message: string;
  data?: IrDefault | IrDefault[] | IrDefaultPageResult;
  error?: string;
}
