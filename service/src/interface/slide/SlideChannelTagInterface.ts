import { SlideChannelTag } from '../entity/slide/slide.slidechanneltag.entity';

/**
 * SlideChannelTag 实体接口
 * 对应数据库表: slide_channel_tag
 */
export interface SlideChannelTagInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 SlideChannelTag 的参数接口
 */
export interface CreateSlideChannelTagDTO extends Partial<SlideChannelTagInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 SlideChannelTag 的参数接口
 */
export interface UpdateSlideChannelTagDTO extends Partial<SlideChannelTagInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 SlideChannelTag 的参数接口
 */
export interface QuerySlideChannelTagDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof SlideChannelTagInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * SlideChannelTag 分页查询结果接口
 */
export interface SlideChannelTagPageResult {
  data: SlideChannelTag[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * SlideChannelTag API 响应接口
 */
export interface SlideChannelTagResponse {
  success: boolean;
  message: string;
  data?: SlideChannelTag | SlideChannelTag[] | SlideChannelTagPageResult;
  error?: string;
}
