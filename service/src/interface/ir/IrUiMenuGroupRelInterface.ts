import { IrUiMenuGroupRel } from '../entity/ir/ir.iruimenugrouprel.entity';

/**
 * IrUiMenuGroupRel 实体接口
 * 对应数据库表: ir_ui_menu_group_rel
 */
export interface IrUiMenuGroupRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 IrUiMenuGroupRel 的参数接口
 */
export interface CreateIrUiMenuGroupRelDTO extends Partial<IrUiMenuGroupRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 IrUiMenuGroupRel 的参数接口
 */
export interface UpdateIrUiMenuGroupRelDTO extends Partial<IrUiMenuGroupRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 IrUiMenuGroupRel 的参数接口
 */
export interface QueryIrUiMenuGroupRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof IrUiMenuGroupRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * IrUiMenuGroupRel 分页查询结果接口
 */
export interface IrUiMenuGroupRelPageResult {
  data: IrUiMenuGroupRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * IrUiMenuGroupRel API 响应接口
 */
export interface IrUiMenuGroupRelResponse {
  success: boolean;
  message: string;
  data?: IrUiMenuGroupRel | IrUiMenuGroupRel[] | IrUiMenuGroupRelPageResult;
  error?: string;
}
