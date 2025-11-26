import { IrModelFieldsGroupRel } from '../entity/ir/ir.irmodelfieldsgrouprel.entity';

/**
 * IrModelFieldsGroupRel 实体接口
 * 对应数据库表: ir_model_fields_group_rel
 */
export interface IrModelFieldsGroupRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 IrModelFieldsGroupRel 的参数接口
 */
export interface CreateIrModelFieldsGroupRelDTO extends Partial<IrModelFieldsGroupRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 IrModelFieldsGroupRel 的参数接口
 */
export interface UpdateIrModelFieldsGroupRelDTO extends Partial<IrModelFieldsGroupRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 IrModelFieldsGroupRel 的参数接口
 */
export interface QueryIrModelFieldsGroupRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof IrModelFieldsGroupRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * IrModelFieldsGroupRel 分页查询结果接口
 */
export interface IrModelFieldsGroupRelPageResult {
  data: IrModelFieldsGroupRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * IrModelFieldsGroupRel API 响应接口
 */
export interface IrModelFieldsGroupRelResponse {
  success: boolean;
  message: string;
  data?: IrModelFieldsGroupRel | IrModelFieldsGroupRel[] | IrModelFieldsGroupRelPageResult;
  error?: string;
}
