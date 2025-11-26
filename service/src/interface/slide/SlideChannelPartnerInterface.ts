import { SlideChannelPartner } from '../entity/slide/slide.slidechannelpartner.entity';

/**
 * SlideChannelPartner 实体接口
 * 对应数据库表: slide_channel_partner
 */
export interface SlideChannelPartnerInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 SlideChannelPartner 的参数接口
 */
export interface CreateSlideChannelPartnerDTO extends Partial<SlideChannelPartnerInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 SlideChannelPartner 的参数接口
 */
export interface UpdateSlideChannelPartnerDTO extends Partial<SlideChannelPartnerInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 SlideChannelPartner 的参数接口
 */
export interface QuerySlideChannelPartnerDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof SlideChannelPartnerInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * SlideChannelPartner 分页查询结果接口
 */
export interface SlideChannelPartnerPageResult {
  data: SlideChannelPartner[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * SlideChannelPartner API 响应接口
 */
export interface SlideChannelPartnerResponse {
  success: boolean;
  message: string;
  data?: SlideChannelPartner | SlideChannelPartner[] | SlideChannelPartnerPageResult;
  error?: string;
}
