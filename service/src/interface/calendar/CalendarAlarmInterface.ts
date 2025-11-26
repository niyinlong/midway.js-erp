import { CalendarAlarm } from '../entity/calendar/calendar.calendaralarm.entity';

/**
 * CalendarAlarm 实体接口
 * 对应数据库表: calendar_alarm
 */
export interface CalendarAlarmInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 CalendarAlarm 的参数接口
 */
export interface CreateCalendarAlarmDTO extends Partial<CalendarAlarmInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 CalendarAlarm 的参数接口
 */
export interface UpdateCalendarAlarmDTO extends Partial<CalendarAlarmInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 CalendarAlarm 的参数接口
 */
export interface QueryCalendarAlarmDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof CalendarAlarmInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * CalendarAlarm 分页查询结果接口
 */
export interface CalendarAlarmPageResult {
  data: CalendarAlarm[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * CalendarAlarm API 响应接口
 */
export interface CalendarAlarmResponse {
  success: boolean;
  message: string;
  data?: CalendarAlarm | CalendarAlarm[] | CalendarAlarmPageResult;
  error?: string;
}
