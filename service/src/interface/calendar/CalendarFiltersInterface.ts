import { CalendarFilters } from '../entity/calendar/calendar.calendarfilters.entity';

/**
 * CalendarFilters 实体接口
 * 对应数据库表: calendar_filters
 */
export interface CalendarFiltersInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 CalendarFilters 的参数接口
 */
export interface CreateCalendarFiltersDTO extends Partial<CalendarFiltersInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 CalendarFilters 的参数接口
 */
export interface UpdateCalendarFiltersDTO extends Partial<CalendarFiltersInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 CalendarFilters 的参数接口
 */
export interface QueryCalendarFiltersDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof CalendarFiltersInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * CalendarFilters 分页查询结果接口
 */
export interface CalendarFiltersPageResult {
  data: CalendarFilters[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * CalendarFilters API 响应接口
 */
export interface CalendarFiltersResponse {
  success: boolean;
  message: string;
  data?: CalendarFilters | CalendarFilters[] | CalendarFiltersPageResult;
  error?: string;
}
