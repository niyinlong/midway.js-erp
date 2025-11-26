import { MrpConsumptionWarning } from '../entity/mrp/mrp.mrpconsumptionwarning.entity';

/**
 * MrpConsumptionWarning 实体接口
 * 对应数据库表: mrp_consumption_warning
 */
export interface MrpConsumptionWarningInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 MrpConsumptionWarning 的参数接口
 */
export interface CreateMrpConsumptionWarningDTO extends Partial<MrpConsumptionWarningInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 MrpConsumptionWarning 的参数接口
 */
export interface UpdateMrpConsumptionWarningDTO extends Partial<MrpConsumptionWarningInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 MrpConsumptionWarning 的参数接口
 */
export interface QueryMrpConsumptionWarningDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof MrpConsumptionWarningInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * MrpConsumptionWarning 分页查询结果接口
 */
export interface MrpConsumptionWarningPageResult {
  data: MrpConsumptionWarning[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * MrpConsumptionWarning API 响应接口
 */
export interface MrpConsumptionWarningResponse {
  success: boolean;
  message: string;
  data?: MrpConsumptionWarning | MrpConsumptionWarning[] | MrpConsumptionWarningPageResult;
  error?: string;
}
