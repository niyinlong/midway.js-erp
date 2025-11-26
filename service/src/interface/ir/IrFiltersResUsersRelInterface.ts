import { IrFiltersResUsersRel } from '../entity/ir/ir.irfiltersresusersrel.entity';

/**
 * IrFiltersResUsersRel 实体接口
 * 对应数据库表: ir_filters_res_users_rel
 */
export interface IrFiltersResUsersRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 IrFiltersResUsersRel 的参数接口
 */
export interface CreateIrFiltersResUsersRelDTO extends Partial<IrFiltersResUsersRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 IrFiltersResUsersRel 的参数接口
 */
export interface UpdateIrFiltersResUsersRelDTO extends Partial<IrFiltersResUsersRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 IrFiltersResUsersRel 的参数接口
 */
export interface QueryIrFiltersResUsersRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof IrFiltersResUsersRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * IrFiltersResUsersRel 分页查询结果接口
 */
export interface IrFiltersResUsersRelPageResult {
  data: IrFiltersResUsersRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * IrFiltersResUsersRel API 响应接口
 */
export interface IrFiltersResUsersRelResponse {
  success: boolean;
  message: string;
  data?: IrFiltersResUsersRel | IrFiltersResUsersRel[] | IrFiltersResUsersRelPageResult;
  error?: string;
}
