import { IrModelAccess } from '../entity/ir/ir.irmodelaccess.entity';

/**
 * IrModelAccess 实体接口
 * 对应数据库表: ir_model_access
 */
export interface IrModelAccessInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 IrModelAccess 的参数接口
 */
export interface CreateIrModelAccessDTO extends Partial<IrModelAccessInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 IrModelAccess 的参数接口
 */
export interface UpdateIrModelAccessDTO extends Partial<IrModelAccessInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 IrModelAccess 的参数接口
 */
export interface QueryIrModelAccessDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof IrModelAccessInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * IrModelAccess 分页查询结果接口
 */
export interface IrModelAccessPageResult {
  data: IrModelAccess[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * IrModelAccess API 响应接口
 */
export interface IrModelAccessResponse {
  success: boolean;
  message: string;
  data?: IrModelAccess | IrModelAccess[] | IrModelAccessPageResult;
  error?: string;
}
