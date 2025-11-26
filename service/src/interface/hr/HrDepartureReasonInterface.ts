import { HrDepartureReason } from '../entity/hr/hr.hrdeparturereason.entity';

/**
 * HrDepartureReason 实体接口
 * 对应数据库表: hr_departure_reason
 */
export interface HrDepartureReasonInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 HrDepartureReason 的参数接口
 */
export interface CreateHrDepartureReasonDTO extends Partial<HrDepartureReasonInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 HrDepartureReason 的参数接口
 */
export interface UpdateHrDepartureReasonDTO extends Partial<HrDepartureReasonInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 HrDepartureReason 的参数接口
 */
export interface QueryHrDepartureReasonDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof HrDepartureReasonInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * HrDepartureReason 分页查询结果接口
 */
export interface HrDepartureReasonPageResult {
  data: HrDepartureReason[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * HrDepartureReason API 响应接口
 */
export interface HrDepartureReasonResponse {
  success: boolean;
  message: string;
  data?: HrDepartureReason | HrDepartureReason[] | HrDepartureReasonPageResult;
  error?: string;
}
