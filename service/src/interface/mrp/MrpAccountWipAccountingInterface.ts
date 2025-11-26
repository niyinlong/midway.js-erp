import { MrpAccountWipAccounting } from '../entity/mrp/mrp.mrpaccountwipaccounting.entity';

/**
 * MrpAccountWipAccounting 实体接口
 * 对应数据库表: mrp_account_wip_accounting
 */
export interface MrpAccountWipAccountingInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 MrpAccountWipAccounting 的参数接口
 */
export interface CreateMrpAccountWipAccountingDTO extends Partial<MrpAccountWipAccountingInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 MrpAccountWipAccounting 的参数接口
 */
export interface UpdateMrpAccountWipAccountingDTO extends Partial<MrpAccountWipAccountingInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 MrpAccountWipAccounting 的参数接口
 */
export interface QueryMrpAccountWipAccountingDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof MrpAccountWipAccountingInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * MrpAccountWipAccounting 分页查询结果接口
 */
export interface MrpAccountWipAccountingPageResult {
  data: MrpAccountWipAccounting[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * MrpAccountWipAccounting API 响应接口
 */
export interface MrpAccountWipAccountingResponse {
  success: boolean;
  message: string;
  data?: MrpAccountWipAccounting | MrpAccountWipAccounting[] | MrpAccountWipAccountingPageResult;
  error?: string;
}
