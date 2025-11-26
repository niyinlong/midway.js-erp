import { IrFilters } from '../entity/ir/ir.irfilters.entity';

/**
 * IrFilters 实体接口
 * 对应数据库表: ir_filters
 */
export interface IrFiltersInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 IrFilters 的参数接口
 */
export interface CreateIrFiltersDTO extends Partial<IrFiltersInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 IrFilters 的参数接口
 */
export interface UpdateIrFiltersDTO extends Partial<IrFiltersInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 IrFilters 的参数接口
 */
export interface QueryIrFiltersDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof IrFiltersInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * IrFilters 分页查询结果接口
 */
export interface IrFiltersPageResult {
  data: IrFilters[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * IrFilters API 响应接口
 */
export interface IrFiltersResponse {
  success: boolean;
  message: string;
  data?: IrFilters | IrFilters[] | IrFiltersPageResult;
  error?: string;
}
