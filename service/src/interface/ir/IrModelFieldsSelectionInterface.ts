import { IrModelFieldsSelection } from '../entity/ir/ir.irmodelfieldsselection.entity';

/**
 * IrModelFieldsSelection 实体接口
 * 对应数据库表: ir_model_fields_selection
 */
export interface IrModelFieldsSelectionInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 IrModelFieldsSelection 的参数接口
 */
export interface CreateIrModelFieldsSelectionDTO extends Partial<IrModelFieldsSelectionInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 IrModelFieldsSelection 的参数接口
 */
export interface UpdateIrModelFieldsSelectionDTO extends Partial<IrModelFieldsSelectionInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 IrModelFieldsSelection 的参数接口
 */
export interface QueryIrModelFieldsSelectionDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof IrModelFieldsSelectionInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * IrModelFieldsSelection 分页查询结果接口
 */
export interface IrModelFieldsSelectionPageResult {
  data: IrModelFieldsSelection[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * IrModelFieldsSelection API 响应接口
 */
export interface IrModelFieldsSelectionResponse {
  success: boolean;
  message: string;
  data?: IrModelFieldsSelection | IrModelFieldsSelection[] | IrModelFieldsSelectionPageResult;
  error?: string;
}
