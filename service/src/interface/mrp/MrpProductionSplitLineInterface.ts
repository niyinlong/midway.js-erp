import { MrpProductionSplitLine } from '../entity/mrp/mrp.mrpproductionsplitline.entity';

/**
 * MrpProductionSplitLine 实体接口
 * 对应数据库表: mrp_production_split_line
 */
export interface MrpProductionSplitLineInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 MrpProductionSplitLine 的参数接口
 */
export interface CreateMrpProductionSplitLineDTO extends Partial<MrpProductionSplitLineInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 MrpProductionSplitLine 的参数接口
 */
export interface UpdateMrpProductionSplitLineDTO extends Partial<MrpProductionSplitLineInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 MrpProductionSplitLine 的参数接口
 */
export interface QueryMrpProductionSplitLineDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof MrpProductionSplitLineInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * MrpProductionSplitLine 分页查询结果接口
 */
export interface MrpProductionSplitLinePageResult {
  data: MrpProductionSplitLine[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * MrpProductionSplitLine API 响应接口
 */
export interface MrpProductionSplitLineResponse {
  success: boolean;
  message: string;
  data?: MrpProductionSplitLine | MrpProductionSplitLine[] | MrpProductionSplitLinePageResult;
  error?: string;
}
