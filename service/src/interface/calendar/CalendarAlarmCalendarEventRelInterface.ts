import { CalendarAlarmCalendarEventRel } from '../entity/calendar/calendar.calendaralarmcalendareventrel.entity';

/**
 * CalendarAlarmCalendarEventRel 实体接口
 * 对应数据库表: calendar_alarm_calendar_event_rel
 */
export interface CalendarAlarmCalendarEventRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 CalendarAlarmCalendarEventRel 的参数接口
 */
export interface CreateCalendarAlarmCalendarEventRelDTO extends Partial<CalendarAlarmCalendarEventRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 CalendarAlarmCalendarEventRel 的参数接口
 */
export interface UpdateCalendarAlarmCalendarEventRelDTO extends Partial<CalendarAlarmCalendarEventRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 CalendarAlarmCalendarEventRel 的参数接口
 */
export interface QueryCalendarAlarmCalendarEventRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof CalendarAlarmCalendarEventRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * CalendarAlarmCalendarEventRel 分页查询结果接口
 */
export interface CalendarAlarmCalendarEventRelPageResult {
  data: CalendarAlarmCalendarEventRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * CalendarAlarmCalendarEventRel API 响应接口
 */
export interface CalendarAlarmCalendarEventRelResponse {
  success: boolean;
  message: string;
  data?: CalendarAlarmCalendarEventRel | CalendarAlarmCalendarEventRel[] | CalendarAlarmCalendarEventRelPageResult;
  error?: string;
}
