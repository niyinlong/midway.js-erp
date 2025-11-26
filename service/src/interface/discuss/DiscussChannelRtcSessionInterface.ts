import { DiscussChannelRtcSession } from '../entity/discuss/discuss.discusschannelrtcsession.entity';

/**
 * DiscussChannelRtcSession 实体接口
 * 对应数据库表: discuss_channel_rtc_session
 */
export interface DiscussChannelRtcSessionInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 DiscussChannelRtcSession 的参数接口
 */
export interface CreateDiscussChannelRtcSessionDTO extends Partial<DiscussChannelRtcSessionInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 DiscussChannelRtcSession 的参数接口
 */
export interface UpdateDiscussChannelRtcSessionDTO extends Partial<DiscussChannelRtcSessionInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 DiscussChannelRtcSession 的参数接口
 */
export interface QueryDiscussChannelRtcSessionDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof DiscussChannelRtcSessionInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * DiscussChannelRtcSession 分页查询结果接口
 */
export interface DiscussChannelRtcSessionPageResult {
  data: DiscussChannelRtcSession[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * DiscussChannelRtcSession API 响应接口
 */
export interface DiscussChannelRtcSessionResponse {
  success: boolean;
  message: string;
  data?: DiscussChannelRtcSession | DiscussChannelRtcSession[] | DiscussChannelRtcSessionPageResult;
  error?: string;
}
