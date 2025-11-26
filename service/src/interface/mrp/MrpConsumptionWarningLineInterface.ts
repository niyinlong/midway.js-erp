import { MrpConsumptionWarningLine } from '../entity/mrp/mrp.mrpconsumptionwarningline.entity';

/**
 * MrpConsumptionWarningLine 实体接口
 * 对应数据库表: mrp_consumption_warning_line
 */
export interface MrpConsumptionWarningLineInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 MrpConsumptionWarningLine 的参数接口
 */
export interface CreateMrpConsumptionWarningLineDTO extends Partial<MrpConsumptionWarningLineInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 MrpConsumptionWarningLine 的参数接口
 */
export interface UpdateMrpConsumptionWarningLineDTO extends Partial<MrpConsumptionWarningLineInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 MrpConsumptionWarningLine 的参数接口
 */
export interface QueryMrpConsumptionWarningLineDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof MrpConsumptionWarningLineInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * MrpConsumptionWarningLine 分页查询结果接口
 */
export interface MrpConsumptionWarningLinePageResult {
  data: MrpConsumptionWarningLine[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * MrpConsumptionWarningLine API 响应接口
 */
export interface MrpConsumptionWarningLineResponse {
  success: boolean;
  message: string;
  data?: MrpConsumptionWarningLine | MrpConsumptionWarningLine[] | MrpConsumptionWarningLinePageResult;
  error?: string;
}
