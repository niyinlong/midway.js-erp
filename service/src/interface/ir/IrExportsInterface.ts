import { IrExports } from '../entity/ir/ir.irexports.entity';

/**
 * IrExports 实体接口
 * 对应数据库表: ir_exports
 */
export interface IrExportsInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 IrExports 的参数接口
 */
export interface CreateIrExportsDTO extends Partial<IrExportsInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 IrExports 的参数接口
 */
export interface UpdateIrExportsDTO extends Partial<IrExportsInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 IrExports 的参数接口
 */
export interface QueryIrExportsDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof IrExportsInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * IrExports 分页查询结果接口
 */
export interface IrExportsPageResult {
  data: IrExports[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * IrExports API 响应接口
 */
export interface IrExportsResponse {
  success: boolean;
  message: string;
  data?: IrExports | IrExports[] | IrExportsPageResult;
  error?: string;
}
