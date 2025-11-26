import { MrpProductionBackorder } from '../entity/mrp/mrp.mrpproductionbackorder.entity';

/**
 * MrpProductionBackorder 实体接口
 * 对应数据库表: mrp_production_backorder
 */
export interface MrpProductionBackorderInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 MrpProductionBackorder 的参数接口
 */
export interface CreateMrpProductionBackorderDTO extends Partial<MrpProductionBackorderInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 MrpProductionBackorder 的参数接口
 */
export interface UpdateMrpProductionBackorderDTO extends Partial<MrpProductionBackorderInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 MrpProductionBackorder 的参数接口
 */
export interface QueryMrpProductionBackorderDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof MrpProductionBackorderInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * MrpProductionBackorder 分页查询结果接口
 */
export interface MrpProductionBackorderPageResult {
  data: MrpProductionBackorder[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * MrpProductionBackorder API 响应接口
 */
export interface MrpProductionBackorderResponse {
  success: boolean;
  message: string;
  data?: MrpProductionBackorder | MrpProductionBackorder[] | MrpProductionBackorderPageResult;
  error?: string;
}
