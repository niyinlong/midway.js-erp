import { SlideChannel } from '../entity/slide/slide.slidechannel.entity';

/**
 * SlideChannel 实体接口
 * 对应数据库表: slide_channel
 */
export interface SlideChannelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 SlideChannel 的参数接口
 */
export interface CreateSlideChannelDTO extends Partial<SlideChannelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 SlideChannel 的参数接口
 */
export interface UpdateSlideChannelDTO extends Partial<SlideChannelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 SlideChannel 的参数接口
 */
export interface QuerySlideChannelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof SlideChannelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * SlideChannel 分页查询结果接口
 */
export interface SlideChannelPageResult {
  data: SlideChannel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * SlideChannel API 响应接口
 */
export interface SlideChannelResponse {
  success: boolean;
  message: string;
  data?: SlideChannel | SlideChannel[] | SlideChannelPageResult;
  error?: string;
}
