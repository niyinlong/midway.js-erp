import { ResourceCalendarLeaves } from '../entity/resource/resource.resourcecalendarleaves.entity';

/**
 * ResourceCalendarLeaves 实体接口
 * 对应数据库表: resource_calendar_leaves
 */
export interface ResourceCalendarLeavesInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 ResourceCalendarLeaves 的参数接口
 */
export interface CreateResourceCalendarLeavesDTO extends Partial<ResourceCalendarLeavesInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 ResourceCalendarLeaves 的参数接口
 */
export interface UpdateResourceCalendarLeavesDTO extends Partial<ResourceCalendarLeavesInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 ResourceCalendarLeaves 的参数接口
 */
export interface QueryResourceCalendarLeavesDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof ResourceCalendarLeavesInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * ResourceCalendarLeaves 分页查询结果接口
 */
export interface ResourceCalendarLeavesPageResult {
  data: ResourceCalendarLeaves[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * ResourceCalendarLeaves API 响应接口
 */
export interface ResourceCalendarLeavesResponse {
  success: boolean;
  message: string;
  data?: ResourceCalendarLeaves | ResourceCalendarLeaves[] | ResourceCalendarLeavesPageResult;
  error?: string;
}
