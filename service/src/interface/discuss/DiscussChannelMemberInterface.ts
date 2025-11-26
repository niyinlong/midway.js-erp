import { DiscussChannelMember } from '../entity/discuss/discuss.discusschannelmember.entity';

/**
 * DiscussChannelMember 实体接口
 * 对应数据库表: discuss_channel_member
 */
export interface DiscussChannelMemberInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 DiscussChannelMember 的参数接口
 */
export interface CreateDiscussChannelMemberDTO extends Partial<DiscussChannelMemberInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 DiscussChannelMember 的参数接口
 */
export interface UpdateDiscussChannelMemberDTO extends Partial<DiscussChannelMemberInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 DiscussChannelMember 的参数接口
 */
export interface QueryDiscussChannelMemberDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof DiscussChannelMemberInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * DiscussChannelMember 分页查询结果接口
 */
export interface DiscussChannelMemberPageResult {
  data: DiscussChannelMember[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * DiscussChannelMember API 响应接口
 */
export interface DiscussChannelMemberResponse {
  success: boolean;
  message: string;
  data?: DiscussChannelMember | DiscussChannelMember[] | DiscussChannelMemberPageResult;
  error?: string;
}
