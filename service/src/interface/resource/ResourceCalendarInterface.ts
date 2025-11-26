import { ResourceCalendar } from '../entity/resource/resource.resourcecalendar.entity';

/**
 * ResourceCalendar 实体接口
 * 对应数据库表: resource_calendar
 */
export interface ResourceCalendarInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 ResourceCalendar 的参数接口
 */
export interface CreateResourceCalendarDTO extends Partial<ResourceCalendarInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 ResourceCalendar 的参数接口
 */
export interface UpdateResourceCalendarDTO extends Partial<ResourceCalendarInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 ResourceCalendar 的参数接口
 */
export interface QueryResourceCalendarDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof ResourceCalendarInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * ResourceCalendar 分页查询结果接口
 */
export interface ResourceCalendarPageResult {
  data: ResourceCalendar[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * ResourceCalendar API 响应接口
 */
export interface ResourceCalendarResponse {
  success: boolean;
  message: string;
  data?: ResourceCalendar | ResourceCalendar[] | ResourceCalendarPageResult;
  error?: string;
}
