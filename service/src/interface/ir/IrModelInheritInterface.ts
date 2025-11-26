import { IrModelInherit } from '../entity/ir/ir.irmodelinherit.entity';

/**
 * IrModelInherit 实体接口
 * 对应数据库表: ir_model_inherit
 */
export interface IrModelInheritInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 IrModelInherit 的参数接口
 */
export interface CreateIrModelInheritDTO extends Partial<IrModelInheritInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 IrModelInherit 的参数接口
 */
export interface UpdateIrModelInheritDTO extends Partial<IrModelInheritInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 IrModelInherit 的参数接口
 */
export interface QueryIrModelInheritDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof IrModelInheritInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * IrModelInherit 分页查询结果接口
 */
export interface IrModelInheritPageResult {
  data: IrModelInherit[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * IrModelInherit API 响应接口
 */
export interface IrModelInheritResponse {
  success: boolean;
  message: string;
  data?: IrModelInherit | IrModelInherit[] | IrModelInheritPageResult;
  error?: string;
}
