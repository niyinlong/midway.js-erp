import { MrpProductionMrpProductionBackorderRel } from '../entity/mrp/mrp.mrpproductionmrpproductionbackorderrel.entity';

/**
 * MrpProductionMrpProductionBackorderRel 实体接口
 * 对应数据库表: mrp_production_mrp_production_backorder_rel
 */
export interface MrpProductionMrpProductionBackorderRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 MrpProductionMrpProductionBackorderRel 的参数接口
 */
export interface CreateMrpProductionMrpProductionBackorderRelDTO extends Partial<MrpProductionMrpProductionBackorderRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 MrpProductionMrpProductionBackorderRel 的参数接口
 */
export interface UpdateMrpProductionMrpProductionBackorderRelDTO extends Partial<MrpProductionMrpProductionBackorderRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 MrpProductionMrpProductionBackorderRel 的参数接口
 */
export interface QueryMrpProductionMrpProductionBackorderRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof MrpProductionMrpProductionBackorderRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * MrpProductionMrpProductionBackorderRel 分页查询结果接口
 */
export interface MrpProductionMrpProductionBackorderRelPageResult {
  data: MrpProductionMrpProductionBackorderRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * MrpProductionMrpProductionBackorderRel API 响应接口
 */
export interface MrpProductionMrpProductionBackorderRelResponse {
  success: boolean;
  message: string;
  data?: MrpProductionMrpProductionBackorderRel | MrpProductionMrpProductionBackorderRel[] | MrpProductionMrpProductionBackorderRelPageResult;
  error?: string;
}
