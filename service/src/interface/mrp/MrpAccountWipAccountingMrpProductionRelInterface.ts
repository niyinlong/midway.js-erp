import { MrpAccountWipAccountingMrpProductionRel } from '../entity/mrp/mrp.mrpaccountwipaccountingmrpproductionrel.entity';

/**
 * MrpAccountWipAccountingMrpProductionRel 实体接口
 * 对应数据库表: mrp_account_wip_accounting_mrp_production_rel
 */
export interface MrpAccountWipAccountingMrpProductionRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 MrpAccountWipAccountingMrpProductionRel 的参数接口
 */
export interface CreateMrpAccountWipAccountingMrpProductionRelDTO extends Partial<MrpAccountWipAccountingMrpProductionRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 MrpAccountWipAccountingMrpProductionRel 的参数接口
 */
export interface UpdateMrpAccountWipAccountingMrpProductionRelDTO extends Partial<MrpAccountWipAccountingMrpProductionRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 MrpAccountWipAccountingMrpProductionRel 的参数接口
 */
export interface QueryMrpAccountWipAccountingMrpProductionRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof MrpAccountWipAccountingMrpProductionRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * MrpAccountWipAccountingMrpProductionRel 分页查询结果接口
 */
export interface MrpAccountWipAccountingMrpProductionRelPageResult {
  data: MrpAccountWipAccountingMrpProductionRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * MrpAccountWipAccountingMrpProductionRel API 响应接口
 */
export interface MrpAccountWipAccountingMrpProductionRelResponse {
  success: boolean;
  message: string;
  data?: MrpAccountWipAccountingMrpProductionRel | MrpAccountWipAccountingMrpProductionRel[] | MrpAccountWipAccountingMrpProductionRelPageResult;
  error?: string;
}
