import { CalendarAttendee } from '../entity/calendar/calendar.calendarattendee.entity';

/**
 * CalendarAttendee 实体接口
 * 对应数据库表: calendar_attendee
 */
export interface CalendarAttendeeInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 CalendarAttendee 的参数接口
 */
export interface CreateCalendarAttendeeDTO extends Partial<CalendarAttendeeInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 CalendarAttendee 的参数接口
 */
export interface UpdateCalendarAttendeeDTO extends Partial<CalendarAttendeeInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 CalendarAttendee 的参数接口
 */
export interface QueryCalendarAttendeeDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof CalendarAttendeeInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * CalendarAttendee 分页查询结果接口
 */
export interface CalendarAttendeePageResult {
  data: CalendarAttendee[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * CalendarAttendee API 响应接口
 */
export interface CalendarAttendeeResponse {
  success: boolean;
  message: string;
  data?: CalendarAttendee | CalendarAttendee[] | CalendarAttendeePageResult;
  error?: string;
}
