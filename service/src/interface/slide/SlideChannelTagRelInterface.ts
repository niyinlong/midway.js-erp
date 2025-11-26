import { SlideChannelTagRel } from '../entity/slide/slide.slidechanneltagrel.entity';

/**
 * SlideChannelTagRel 实体接口
 * 对应数据库表: slide_channel_tag_rel
 */
export interface SlideChannelTagRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 SlideChannelTagRel 的参数接口
 */
export interface CreateSlideChannelTagRelDTO extends Partial<SlideChannelTagRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 SlideChannelTagRel 的参数接口
 */
export interface UpdateSlideChannelTagRelDTO extends Partial<SlideChannelTagRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 SlideChannelTagRel 的参数接口
 */
export interface QuerySlideChannelTagRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof SlideChannelTagRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * SlideChannelTagRel 分页查询结果接口
 */
export interface SlideChannelTagRelPageResult {
  data: SlideChannelTagRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * SlideChannelTagRel API 响应接口
 */
export interface SlideChannelTagRelResponse {
  success: boolean;
  message: string;
  data?: SlideChannelTagRel | SlideChannelTagRel[] | SlideChannelTagRelPageResult;
  error?: string;
}
