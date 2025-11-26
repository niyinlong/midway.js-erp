import { CalendarEvent } from '../entity/calendar/calendar.calendarevent.entity';

/**
 * CalendarEvent 实体接口
 * 对应数据库表: calendar_event
 */
export interface CalendarEventInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 CalendarEvent 的参数接口
 */
export interface CreateCalendarEventDTO extends Partial<CalendarEventInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 CalendarEvent 的参数接口
 */
export interface UpdateCalendarEventDTO extends Partial<CalendarEventInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 CalendarEvent 的参数接口
 */
export interface QueryCalendarEventDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof CalendarEventInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * CalendarEvent 分页查询结果接口
 */
export interface CalendarEventPageResult {
  data: CalendarEvent[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * CalendarEvent API 响应接口
 */
export interface CalendarEventResponse {
  success: boolean;
  message: string;
  data?: CalendarEvent | CalendarEvent[] | CalendarEventPageResult;
  error?: string;
}
