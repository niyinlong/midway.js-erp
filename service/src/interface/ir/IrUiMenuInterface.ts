import { IrUiMenu } from '../entity/ir/ir.iruimenu.entity';

/**
 * IrUiMenu 实体接口
 * 对应数据库表: ir_ui_menu
 */
export interface IrUiMenuInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 IrUiMenu 的参数接口
 */
export interface CreateIrUiMenuDTO extends Partial<IrUiMenuInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 IrUiMenu 的参数接口
 */
export interface UpdateIrUiMenuDTO extends Partial<IrUiMenuInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 IrUiMenu 的参数接口
 */
export interface QueryIrUiMenuDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof IrUiMenuInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * IrUiMenu 分页查询结果接口
 */
export interface IrUiMenuPageResult {
  data: IrUiMenu[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * IrUiMenu API 响应接口
 */
export interface IrUiMenuResponse {
  success: boolean;
  message: string;
  data?: IrUiMenu | IrUiMenu[] | IrUiMenuPageResult;
  error?: string;
}
