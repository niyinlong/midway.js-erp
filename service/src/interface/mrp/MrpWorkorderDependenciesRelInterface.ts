import { MrpWorkorderDependenciesRel } from '../entity/mrp/mrp.mrpworkorderdependenciesrel.entity';

/**
 * MrpWorkorderDependenciesRel 实体接口
 * 对应数据库表: mrp_workorder_dependencies_rel
 */
export interface MrpWorkorderDependenciesRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 MrpWorkorderDependenciesRel 的参数接口
 */
export interface CreateMrpWorkorderDependenciesRelDTO extends Partial<MrpWorkorderDependenciesRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 MrpWorkorderDependenciesRel 的参数接口
 */
export interface UpdateMrpWorkorderDependenciesRelDTO extends Partial<MrpWorkorderDependenciesRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 MrpWorkorderDependenciesRel 的参数接口
 */
export interface QueryMrpWorkorderDependenciesRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof MrpWorkorderDependenciesRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * MrpWorkorderDependenciesRel 分页查询结果接口
 */
export interface MrpWorkorderDependenciesRelPageResult {
  data: MrpWorkorderDependenciesRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * MrpWorkorderDependenciesRel API 响应接口
 */
export interface MrpWorkorderDependenciesRelResponse {
  success: boolean;
  message: string;
  data?: MrpWorkorderDependenciesRel | MrpWorkorderDependenciesRel[] | MrpWorkorderDependenciesRelPageResult;
  error?: string;
}
