import { OrmSignalingGroups } from '../entity/orm/orm.ormsignalinggroups.entity';

/**
 * OrmSignalingGroups 实体接口
 * 对应数据库表: orm_signaling_groups
 */
export interface OrmSignalingGroupsInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 OrmSignalingGroups 的参数接口
 */
export interface CreateOrmSignalingGroupsDTO extends Partial<OrmSignalingGroupsInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 OrmSignalingGroups 的参数接口
 */
export interface UpdateOrmSignalingGroupsDTO extends Partial<OrmSignalingGroupsInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 OrmSignalingGroups 的参数接口
 */
export interface QueryOrmSignalingGroupsDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof OrmSignalingGroupsInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * OrmSignalingGroups 分页查询结果接口
 */
export interface OrmSignalingGroupsPageResult {
  data: OrmSignalingGroups[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * OrmSignalingGroups API 响应接口
 */
export interface OrmSignalingGroupsResponse {
  success: boolean;
  message: string;
  data?: OrmSignalingGroups | OrmSignalingGroups[] | OrmSignalingGroupsPageResult;
  error?: string;
}
