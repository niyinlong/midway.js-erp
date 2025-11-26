import { SlideSlidePartner } from '../entity/slide/slide.slideslidepartner.entity';

/**
 * SlideSlidePartner 实体接口
 * 对应数据库表: slide_slide_partner
 */
export interface SlideSlidePartnerInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 SlideSlidePartner 的参数接口
 */
export interface CreateSlideSlidePartnerDTO extends Partial<SlideSlidePartnerInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 SlideSlidePartner 的参数接口
 */
export interface UpdateSlideSlidePartnerDTO extends Partial<SlideSlidePartnerInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 SlideSlidePartner 的参数接口
 */
export interface QuerySlideSlidePartnerDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof SlideSlidePartnerInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * SlideSlidePartner 分页查询结果接口
 */
export interface SlideSlidePartnerPageResult {
  data: SlideSlidePartner[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * SlideSlidePartner API 响应接口
 */
export interface SlideSlidePartnerResponse {
  success: boolean;
  message: string;
  data?: SlideSlidePartner | SlideSlidePartner[] | SlideSlidePartnerPageResult;
  error?: string;
}
