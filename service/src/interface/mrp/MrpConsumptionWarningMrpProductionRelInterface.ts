import { MrpConsumptionWarningMrpProductionRel } from '../entity/mrp/mrp.mrpconsumptionwarningmrpproductionrel.entity';

/**
 * MrpConsumptionWarningMrpProductionRel 实体接口
 * 对应数据库表: mrp_consumption_warning_mrp_production_rel
 */
export interface MrpConsumptionWarningMrpProductionRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 MrpConsumptionWarningMrpProductionRel 的参数接口
 */
export interface CreateMrpConsumptionWarningMrpProductionRelDTO extends Partial<MrpConsumptionWarningMrpProductionRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 MrpConsumptionWarningMrpProductionRel 的参数接口
 */
export interface UpdateMrpConsumptionWarningMrpProductionRelDTO extends Partial<MrpConsumptionWarningMrpProductionRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 MrpConsumptionWarningMrpProductionRel 的参数接口
 */
export interface QueryMrpConsumptionWarningMrpProductionRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof MrpConsumptionWarningMrpProductionRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * MrpConsumptionWarningMrpProductionRel 分页查询结果接口
 */
export interface MrpConsumptionWarningMrpProductionRelPageResult {
  data: MrpConsumptionWarningMrpProductionRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * MrpConsumptionWarningMrpProductionRel API 响应接口
 */
export interface MrpConsumptionWarningMrpProductionRelResponse {
  success: boolean;
  message: string;
  data?: MrpConsumptionWarningMrpProductionRel | MrpConsumptionWarningMrpProductionRel[] | MrpConsumptionWarningMrpProductionRelPageResult;
  error?: string;
}
