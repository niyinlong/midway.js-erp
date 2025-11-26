import { SlideChannelTagGroup } from '../entity/slide/slide.slidechanneltaggroup.entity';

/**
 * SlideChannelTagGroup 实体接口
 * 对应数据库表: slide_channel_tag_group
 */
export interface SlideChannelTagGroupInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 SlideChannelTagGroup 的参数接口
 */
export interface CreateSlideChannelTagGroupDTO extends Partial<SlideChannelTagGroupInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 SlideChannelTagGroup 的参数接口
 */
export interface UpdateSlideChannelTagGroupDTO extends Partial<SlideChannelTagGroupInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 SlideChannelTagGroup 的参数接口
 */
export interface QuerySlideChannelTagGroupDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof SlideChannelTagGroupInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * SlideChannelTagGroup 分页查询结果接口
 */
export interface SlideChannelTagGroupPageResult {
  data: SlideChannelTagGroup[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * SlideChannelTagGroup API 响应接口
 */
export interface SlideChannelTagGroupResponse {
  success: boolean;
  message: string;
  data?: SlideChannelTagGroup | SlideChannelTagGroup[] | SlideChannelTagGroupPageResult;
  error?: string;
}
