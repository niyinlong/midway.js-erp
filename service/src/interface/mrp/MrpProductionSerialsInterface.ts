import { MrpProductionSerials } from '../entity/mrp/mrp.mrpproductionserials.entity';

/**
 * MrpProductionSerials 实体接口
 * 对应数据库表: mrp_production_serials
 */
export interface MrpProductionSerialsInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 MrpProductionSerials 的参数接口
 */
export interface CreateMrpProductionSerialsDTO extends Partial<MrpProductionSerialsInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 MrpProductionSerials 的参数接口
 */
export interface UpdateMrpProductionSerialsDTO extends Partial<MrpProductionSerialsInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 MrpProductionSerials 的参数接口
 */
export interface QueryMrpProductionSerialsDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof MrpProductionSerialsInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * MrpProductionSerials 分页查询结果接口
 */
export interface MrpProductionSerialsPageResult {
  data: MrpProductionSerials[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * MrpProductionSerials API 响应接口
 */
export interface MrpProductionSerialsResponse {
  success: boolean;
  message: string;
  data?: MrpProductionSerials | MrpProductionSerials[] | MrpProductionSerialsPageResult;
  error?: string;
}
