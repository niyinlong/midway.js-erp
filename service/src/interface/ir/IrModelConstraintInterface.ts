import { IrModelConstraint } from '../entity/ir/ir.irmodelconstraint.entity';

/**
 * IrModelConstraint 实体接口
 * 对应数据库表: ir_model_constraint
 */
export interface IrModelConstraintInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 IrModelConstraint 的参数接口
 */
export interface CreateIrModelConstraintDTO extends Partial<IrModelConstraintInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 IrModelConstraint 的参数接口
 */
export interface UpdateIrModelConstraintDTO extends Partial<IrModelConstraintInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 IrModelConstraint 的参数接口
 */
export interface QueryIrModelConstraintDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof IrModelConstraintInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * IrModelConstraint 分页查询结果接口
 */
export interface IrModelConstraintPageResult {
  data: IrModelConstraint[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * IrModelConstraint API 响应接口
 */
export interface IrModelConstraintResponse {
  success: boolean;
  message: string;
  data?: IrModelConstraint | IrModelConstraint[] | IrModelConstraintPageResult;
  error?: string;
}
