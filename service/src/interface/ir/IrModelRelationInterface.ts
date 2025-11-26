import { IrModelRelation } from '../entity/ir/ir.irmodelrelation.entity';

/**
 * IrModelRelation 实体接口
 * 对应数据库表: ir_model_relation
 */
export interface IrModelRelationInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 IrModelRelation 的参数接口
 */
export interface CreateIrModelRelationDTO extends Partial<IrModelRelationInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 IrModelRelation 的参数接口
 */
export interface UpdateIrModelRelationDTO extends Partial<IrModelRelationInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 IrModelRelation 的参数接口
 */
export interface QueryIrModelRelationDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof IrModelRelationInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * IrModelRelation 分页查询结果接口
 */
export interface IrModelRelationPageResult {
  data: IrModelRelation[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * IrModelRelation API 响应接口
 */
export interface IrModelRelationResponse {
  success: boolean;
  message: string;
  data?: IrModelRelation | IrModelRelation[] | IrModelRelationPageResult;
  error?: string;
}
