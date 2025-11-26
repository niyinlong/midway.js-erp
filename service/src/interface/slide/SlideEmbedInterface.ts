import { SlideEmbed } from '../entity/slide/slide.slideembed.entity';

/**
 * SlideEmbed 实体接口
 * 对应数据库表: slide_embed
 */
export interface SlideEmbedInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 SlideEmbed 的参数接口
 */
export interface CreateSlideEmbedDTO extends Partial<SlideEmbedInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 SlideEmbed 的参数接口
 */
export interface UpdateSlideEmbedDTO extends Partial<SlideEmbedInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 SlideEmbed 的参数接口
 */
export interface QuerySlideEmbedDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof SlideEmbedInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * SlideEmbed 分页查询结果接口
 */
export interface SlideEmbedPageResult {
  data: SlideEmbed[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * SlideEmbed API 响应接口
 */
export interface SlideEmbedResponse {
  success: boolean;
  message: string;
  data?: SlideEmbed | SlideEmbed[] | SlideEmbedPageResult;
  error?: string;
}
