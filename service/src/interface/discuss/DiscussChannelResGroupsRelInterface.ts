import { DiscussChannelResGroupsRel } from '../entity/discuss/discuss.discusschannelresgroupsrel.entity';

/**
 * DiscussChannelResGroupsRel 实体接口
 * 对应数据库表: discuss_channel_res_groups_rel
 */
export interface DiscussChannelResGroupsRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 DiscussChannelResGroupsRel 的参数接口
 */
export interface CreateDiscussChannelResGroupsRelDTO extends Partial<DiscussChannelResGroupsRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 DiscussChannelResGroupsRel 的参数接口
 */
export interface UpdateDiscussChannelResGroupsRelDTO extends Partial<DiscussChannelResGroupsRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 DiscussChannelResGroupsRel 的参数接口
 */
export interface QueryDiscussChannelResGroupsRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof DiscussChannelResGroupsRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * DiscussChannelResGroupsRel 分页查询结果接口
 */
export interface DiscussChannelResGroupsRelPageResult {
  data: DiscussChannelResGroupsRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * DiscussChannelResGroupsRel API 响应接口
 */
export interface DiscussChannelResGroupsRelResponse {
  success: boolean;
  message: string;
  data?: DiscussChannelResGroupsRel | DiscussChannelResGroupsRel[] | DiscussChannelResGroupsRelPageResult;
  error?: string;
}
