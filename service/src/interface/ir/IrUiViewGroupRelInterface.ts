import { IrUiViewGroupRel } from '../entity/ir/ir.iruiviewgrouprel.entity';

/**
 * IrUiViewGroupRel 实体接口
 * 对应数据库表: ir_ui_view_group_rel
 */
export interface IrUiViewGroupRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 IrUiViewGroupRel 的参数接口
 */
export interface CreateIrUiViewGroupRelDTO extends Partial<IrUiViewGroupRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 IrUiViewGroupRel 的参数接口
 */
export interface UpdateIrUiViewGroupRelDTO extends Partial<IrUiViewGroupRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 IrUiViewGroupRel 的参数接口
 */
export interface QueryIrUiViewGroupRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof IrUiViewGroupRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * IrUiViewGroupRel 分页查询结果接口
 */
export interface IrUiViewGroupRelPageResult {
  data: IrUiViewGroupRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * IrUiViewGroupRel API 响应接口
 */
export interface IrUiViewGroupRelResponse {
  success: boolean;
  message: string;
  data?: IrUiViewGroupRel | IrUiViewGroupRel[] | IrUiViewGroupRelPageResult;
  error?: string;
}
