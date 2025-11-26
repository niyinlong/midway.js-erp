import { DiscussChannelHrDepartmentRel } from '../entity/discuss/discuss.discusschannelhrdepartmentrel.entity';

/**
 * DiscussChannelHrDepartmentRel 实体接口
 * 对应数据库表: discuss_channel_hr_department_rel
 */
export interface DiscussChannelHrDepartmentRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 DiscussChannelHrDepartmentRel 的参数接口
 */
export interface CreateDiscussChannelHrDepartmentRelDTO extends Partial<DiscussChannelHrDepartmentRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 DiscussChannelHrDepartmentRel 的参数接口
 */
export interface UpdateDiscussChannelHrDepartmentRelDTO extends Partial<DiscussChannelHrDepartmentRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 DiscussChannelHrDepartmentRel 的参数接口
 */
export interface QueryDiscussChannelHrDepartmentRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof DiscussChannelHrDepartmentRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * DiscussChannelHrDepartmentRel 分页查询结果接口
 */
export interface DiscussChannelHrDepartmentRelPageResult {
  data: DiscussChannelHrDepartmentRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * DiscussChannelHrDepartmentRel API 响应接口
 */
export interface DiscussChannelHrDepartmentRelResponse {
  success: boolean;
  message: string;
  data?: DiscussChannelHrDepartmentRel | DiscussChannelHrDepartmentRel[] | DiscussChannelHrDepartmentRelPageResult;
  error?: string;
}
