import { MrpProductionGroupRel } from '../entity/mrp/mrp.mrpproductiongrouprel.entity';

/**
 * MrpProductionGroupRel 实体接口
 * 对应数据库表: mrp_production_group_rel
 */
export interface MrpProductionGroupRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 MrpProductionGroupRel 的参数接口
 */
export interface CreateMrpProductionGroupRelDTO extends Partial<MrpProductionGroupRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 MrpProductionGroupRel 的参数接口
 */
export interface UpdateMrpProductionGroupRelDTO extends Partial<MrpProductionGroupRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 MrpProductionGroupRel 的参数接口
 */
export interface QueryMrpProductionGroupRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof MrpProductionGroupRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * MrpProductionGroupRel 分页查询结果接口
 */
export interface MrpProductionGroupRelPageResult {
  data: MrpProductionGroupRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * MrpProductionGroupRel API 响应接口
 */
export interface MrpProductionGroupRelResponse {
  success: boolean;
  message: string;
  data?: MrpProductionGroupRel | MrpProductionGroupRel[] | MrpProductionGroupRelPageResult;
  error?: string;
}
