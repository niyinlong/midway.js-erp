import { IrModelFields } from '../entity/ir/ir.irmodelfields.entity';

/**
 * IrModelFields 实体接口
 * 对应数据库表: ir_model_fields
 */
export interface IrModelFieldsInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 IrModelFields 的参数接口
 */
export interface CreateIrModelFieldsDTO extends Partial<IrModelFieldsInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 IrModelFields 的参数接口
 */
export interface UpdateIrModelFieldsDTO extends Partial<IrModelFieldsInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 IrModelFields 的参数接口
 */
export interface QueryIrModelFieldsDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof IrModelFieldsInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * IrModelFields 分页查询结果接口
 */
export interface IrModelFieldsPageResult {
  data: IrModelFields[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * IrModelFields API 响应接口
 */
export interface IrModelFieldsResponse {
  success: boolean;
  message: string;
  data?: IrModelFields | IrModelFields[] | IrModelFieldsPageResult;
  error?: string;
}
