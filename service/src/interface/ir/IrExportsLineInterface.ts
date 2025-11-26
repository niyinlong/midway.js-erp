import { IrExportsLine } from '../entity/ir/ir.irexportsline.entity';

/**
 * IrExportsLine 实体接口
 * 对应数据库表: ir_exports_line
 */
export interface IrExportsLineInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 IrExportsLine 的参数接口
 */
export interface CreateIrExportsLineDTO extends Partial<IrExportsLineInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 IrExportsLine 的参数接口
 */
export interface UpdateIrExportsLineDTO extends Partial<IrExportsLineInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 IrExportsLine 的参数接口
 */
export interface QueryIrExportsLineDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof IrExportsLineInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * IrExportsLine 分页查询结果接口
 */
export interface IrExportsLinePageResult {
  data: IrExportsLine[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * IrExportsLine API 响应接口
 */
export interface IrExportsLineResponse {
  success: boolean;
  message: string;
  data?: IrExportsLine | IrExportsLine[] | IrExportsLinePageResult;
  error?: string;
}
