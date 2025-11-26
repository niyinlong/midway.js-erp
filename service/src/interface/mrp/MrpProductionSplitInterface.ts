import { MrpProductionSplit } from '../entity/mrp/mrp.mrpproductionsplit.entity';

/**
 * MrpProductionSplit 实体接口
 * 对应数据库表: mrp_production_split
 */
export interface MrpProductionSplitInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 MrpProductionSplit 的参数接口
 */
export interface CreateMrpProductionSplitDTO extends Partial<MrpProductionSplitInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 MrpProductionSplit 的参数接口
 */
export interface UpdateMrpProductionSplitDTO extends Partial<MrpProductionSplitInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 MrpProductionSplit 的参数接口
 */
export interface QueryMrpProductionSplitDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof MrpProductionSplitInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * MrpProductionSplit 分页查询结果接口
 */
export interface MrpProductionSplitPageResult {
  data: MrpProductionSplit[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * MrpProductionSplit API 响应接口
 */
export interface MrpProductionSplitResponse {
  success: boolean;
  message: string;
  data?: MrpProductionSplit | MrpProductionSplit[] | MrpProductionSplitPageResult;
  error?: string;
}
