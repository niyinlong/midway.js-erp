import { MrpProductionSplitMulti } from '../entity/mrp/mrp.mrpproductionsplitmulti.entity';

/**
 * MrpProductionSplitMulti 实体接口
 * 对应数据库表: mrp_production_split_multi
 */
export interface MrpProductionSplitMultiInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 MrpProductionSplitMulti 的参数接口
 */
export interface CreateMrpProductionSplitMultiDTO extends Partial<MrpProductionSplitMultiInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 MrpProductionSplitMulti 的参数接口
 */
export interface UpdateMrpProductionSplitMultiDTO extends Partial<MrpProductionSplitMultiInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 MrpProductionSplitMulti 的参数接口
 */
export interface QueryMrpProductionSplitMultiDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof MrpProductionSplitMultiInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * MrpProductionSplitMulti 分页查询结果接口
 */
export interface MrpProductionSplitMultiPageResult {
  data: MrpProductionSplitMulti[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * MrpProductionSplitMulti API 响应接口
 */
export interface MrpProductionSplitMultiResponse {
  success: boolean;
  message: string;
  data?: MrpProductionSplitMulti | MrpProductionSplitMulti[] | MrpProductionSplitMultiPageResult;
  error?: string;
}
