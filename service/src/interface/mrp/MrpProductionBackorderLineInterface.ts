import { MrpProductionBackorderLine } from '../entity/mrp/mrp.mrpproductionbackorderline.entity';

/**
 * MrpProductionBackorderLine 实体接口
 * 对应数据库表: mrp_production_backorder_line
 */
export interface MrpProductionBackorderLineInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 MrpProductionBackorderLine 的参数接口
 */
export interface CreateMrpProductionBackorderLineDTO extends Partial<MrpProductionBackorderLineInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 MrpProductionBackorderLine 的参数接口
 */
export interface UpdateMrpProductionBackorderLineDTO extends Partial<MrpProductionBackorderLineInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 MrpProductionBackorderLine 的参数接口
 */
export interface QueryMrpProductionBackorderLineDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof MrpProductionBackorderLineInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * MrpProductionBackorderLine 分页查询结果接口
 */
export interface MrpProductionBackorderLinePageResult {
  data: MrpProductionBackorderLine[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * MrpProductionBackorderLine API 响应接口
 */
export interface MrpProductionBackorderLineResponse {
  success: boolean;
  message: string;
  data?: MrpProductionBackorderLine | MrpProductionBackorderLine[] | MrpProductionBackorderLinePageResult;
  error?: string;
}
