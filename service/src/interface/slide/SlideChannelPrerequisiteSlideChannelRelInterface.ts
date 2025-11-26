import { SlideChannelPrerequisiteSlideChannelRel } from '../entity/slide/slide.slidechannelprerequisiteslidechannelrel.entity';

/**
 * SlideChannelPrerequisiteSlideChannelRel 实体接口
 * 对应数据库表: slide_channel_prerequisite_slide_channel_rel
 */
export interface SlideChannelPrerequisiteSlideChannelRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 SlideChannelPrerequisiteSlideChannelRel 的参数接口
 */
export interface CreateSlideChannelPrerequisiteSlideChannelRelDTO extends Partial<SlideChannelPrerequisiteSlideChannelRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 SlideChannelPrerequisiteSlideChannelRel 的参数接口
 */
export interface UpdateSlideChannelPrerequisiteSlideChannelRelDTO extends Partial<SlideChannelPrerequisiteSlideChannelRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 SlideChannelPrerequisiteSlideChannelRel 的参数接口
 */
export interface QuerySlideChannelPrerequisiteSlideChannelRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof SlideChannelPrerequisiteSlideChannelRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * SlideChannelPrerequisiteSlideChannelRel 分页查询结果接口
 */
export interface SlideChannelPrerequisiteSlideChannelRelPageResult {
  data: SlideChannelPrerequisiteSlideChannelRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * SlideChannelPrerequisiteSlideChannelRel API 响应接口
 */
export interface SlideChannelPrerequisiteSlideChannelRelResponse {
  success: boolean;
  message: string;
  data?: SlideChannelPrerequisiteSlideChannelRel | SlideChannelPrerequisiteSlideChannelRel[] | SlideChannelPrerequisiteSlideChannelRelPageResult;
  error?: string;
}
