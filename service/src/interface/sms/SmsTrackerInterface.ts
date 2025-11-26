import { SmsTracker } from '../entity/sms/sms.smstracker.entity';

/**
 * SmsTracker 实体接口
 * 对应数据库表: sms_tracker
 */
export interface SmsTrackerInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 SmsTracker 的参数接口
 */
export interface CreateSmsTrackerDTO extends Partial<SmsTrackerInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 SmsTracker 的参数接口
 */
export interface UpdateSmsTrackerDTO extends Partial<SmsTrackerInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 SmsTracker 的参数接口
 */
export interface QuerySmsTrackerDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof SmsTrackerInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * SmsTracker 分页查询结果接口
 */
export interface SmsTrackerPageResult {
  data: SmsTracker[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * SmsTracker API 响应接口
 */
export interface SmsTrackerResponse {
  success: boolean;
  message: string;
  data?: SmsTracker | SmsTracker[] | SmsTrackerPageResult;
  error?: string;
}
