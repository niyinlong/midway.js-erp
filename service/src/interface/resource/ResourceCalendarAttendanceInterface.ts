import { ResourceCalendarAttendance } from '../entity/resource/resource.resourcecalendarattendance.entity';

/**
 * ResourceCalendarAttendance 实体接口
 * 对应数据库表: resource_calendar_attendance
 */
export interface ResourceCalendarAttendanceInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 ResourceCalendarAttendance 的参数接口
 */
export interface CreateResourceCalendarAttendanceDTO extends Partial<ResourceCalendarAttendanceInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 ResourceCalendarAttendance 的参数接口
 */
export interface UpdateResourceCalendarAttendanceDTO extends Partial<ResourceCalendarAttendanceInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 ResourceCalendarAttendance 的参数接口
 */
export interface QueryResourceCalendarAttendanceDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof ResourceCalendarAttendanceInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * ResourceCalendarAttendance 分页查询结果接口
 */
export interface ResourceCalendarAttendancePageResult {
  data: ResourceCalendarAttendance[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * ResourceCalendarAttendance API 响应接口
 */
export interface ResourceCalendarAttendanceResponse {
  success: boolean;
  message: string;
  data?: ResourceCalendarAttendance | ResourceCalendarAttendance[] | ResourceCalendarAttendancePageResult;
  error?: string;
}
