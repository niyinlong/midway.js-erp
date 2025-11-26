import { CalendarProviderConfig } from '../entity/calendar/calendar.calendarproviderconfig.entity';

/**
 * CalendarProviderConfig 实体接口
 * 对应数据库表: calendar_provider_config
 */
export interface CalendarProviderConfigInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 CalendarProviderConfig 的参数接口
 */
export interface CreateCalendarProviderConfigDTO extends Partial<CalendarProviderConfigInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 CalendarProviderConfig 的参数接口
 */
export interface UpdateCalendarProviderConfigDTO extends Partial<CalendarProviderConfigInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 CalendarProviderConfig 的参数接口
 */
export interface QueryCalendarProviderConfigDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof CalendarProviderConfigInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * CalendarProviderConfig 分页查询结果接口
 */
export interface CalendarProviderConfigPageResult {
  data: CalendarProviderConfig[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * CalendarProviderConfig API 响应接口
 */
export interface CalendarProviderConfigResponse {
  success: boolean;
  message: string;
  data?: CalendarProviderConfig | CalendarProviderConfig[] | CalendarProviderConfigPageResult;
  error?: string;
}
