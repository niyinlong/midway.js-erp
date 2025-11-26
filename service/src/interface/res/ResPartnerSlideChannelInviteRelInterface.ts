import { ResPartnerSlideChannelInviteRel } from '../entity/res/res.respartnerslidechannelinviterel.entity';

/**
 * ResPartnerSlideChannelInviteRel 实体接口
 * 对应数据库表: res_partner_slide_channel_invite_rel
 */
export interface ResPartnerSlideChannelInviteRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 ResPartnerSlideChannelInviteRel 的参数接口
 */
export interface CreateResPartnerSlideChannelInviteRelDTO extends Partial<ResPartnerSlideChannelInviteRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 ResPartnerSlideChannelInviteRel 的参数接口
 */
export interface UpdateResPartnerSlideChannelInviteRelDTO extends Partial<ResPartnerSlideChannelInviteRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 ResPartnerSlideChannelInviteRel 的参数接口
 */
export interface QueryResPartnerSlideChannelInviteRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof ResPartnerSlideChannelInviteRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * ResPartnerSlideChannelInviteRel 分页查询结果接口
 */
export interface ResPartnerSlideChannelInviteRelPageResult {
  data: ResPartnerSlideChannelInviteRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * ResPartnerSlideChannelInviteRel API 响应接口
 */
export interface ResPartnerSlideChannelInviteRelResponse {
  success: boolean;
  message: string;
  data?: ResPartnerSlideChannelInviteRel | ResPartnerSlideChannelInviteRel[] | ResPartnerSlideChannelInviteRelPageResult;
  error?: string;
}
