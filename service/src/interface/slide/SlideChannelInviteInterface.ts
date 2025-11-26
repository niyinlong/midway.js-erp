import { SlideChannelInvite } from '../entity/slide/slide.slidechannelinvite.entity';

/**
 * SlideChannelInvite 实体接口
 * 对应数据库表: slide_channel_invite
 */
export interface SlideChannelInviteInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 SlideChannelInvite 的参数接口
 */
export interface CreateSlideChannelInviteDTO extends Partial<SlideChannelInviteInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 SlideChannelInvite 的参数接口
 */
export interface UpdateSlideChannelInviteDTO extends Partial<SlideChannelInviteInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 SlideChannelInvite 的参数接口
 */
export interface QuerySlideChannelInviteDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof SlideChannelInviteInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * SlideChannelInvite 分页查询结果接口
 */
export interface SlideChannelInvitePageResult {
  data: SlideChannelInvite[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * SlideChannelInvite API 响应接口
 */
export interface SlideChannelInviteResponse {
  success: boolean;
  message: string;
  data?: SlideChannelInvite | SlideChannelInvite[] | SlideChannelInvitePageResult;
  error?: string;
}
