import { CalendarEventType } from '../entity/calendar/calendar.calendareventtype.entity';

/**
 * CalendarEventType 实体接口
 * 对应数据库表: calendar_event_type
 */
export interface CalendarEventTypeInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 CalendarEventType 的参数接口
 */
export interface CreateCalendarEventTypeDTO extends Partial<CalendarEventTypeInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 CalendarEventType 的参数接口
 */
export interface UpdateCalendarEventTypeDTO extends Partial<CalendarEventTypeInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 CalendarEventType 的参数接口
 */
export interface QueryCalendarEventTypeDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof CalendarEventTypeInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * CalendarEventType 分页查询结果接口
 */
export interface CalendarEventTypePageResult {
  data: CalendarEventType[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * CalendarEventType API 响应接口
 */
export interface CalendarEventTypeResponse {
  success: boolean;
  message: string;
  data?: CalendarEventType | CalendarEventType[] | CalendarEventTypePageResult;
  error?: string;
}
