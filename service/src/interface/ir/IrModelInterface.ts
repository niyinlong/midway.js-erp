import { IrModel } from '../entity/ir/ir.irmodel.entity';

/**
 * IrModel 实体接口
 * 对应数据库表: ir_model
 */
export interface IrModelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 IrModel 的参数接口
 */
export interface CreateIrModelDTO extends Partial<IrModelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 IrModel 的参数接口
 */
export interface UpdateIrModelDTO extends Partial<IrModelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 IrModel 的参数接口
 */
export interface QueryIrModelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof IrModelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * IrModel 分页查询结果接口
 */
export interface IrModelPageResult {
  data: IrModel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * IrModel API 响应接口
 */
export interface IrModelResponse {
  success: boolean;
  message: string;
  data?: IrModel | IrModel[] | IrModelPageResult;
  error?: string;
}
