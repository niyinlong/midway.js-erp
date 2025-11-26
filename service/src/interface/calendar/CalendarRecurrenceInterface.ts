import { CalendarRecurrence } from '../entity/calendar/calendar.calendarrecurrence.entity';

/**
 * CalendarRecurrence 实体接口
 * 对应数据库表: calendar_recurrence
 */
export interface CalendarRecurrenceInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 CalendarRecurrence 的参数接口
 */
export interface CreateCalendarRecurrenceDTO extends Partial<CalendarRecurrenceInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 CalendarRecurrence 的参数接口
 */
export interface UpdateCalendarRecurrenceDTO extends Partial<CalendarRecurrenceInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 CalendarRecurrence 的参数接口
 */
export interface QueryCalendarRecurrenceDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof CalendarRecurrenceInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * CalendarRecurrence 分页查询结果接口
 */
export interface CalendarRecurrencePageResult {
  data: CalendarRecurrence[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * CalendarRecurrence API 响应接口
 */
export interface CalendarRecurrenceResponse {
  success: boolean;
  message: string;
  data?: CalendarRecurrence | CalendarRecurrence[] | CalendarRecurrencePageResult;
  error?: string;
}
