import { SlideSlide } from '../entity/slide/slide.slideslide.entity';

/**
 * SlideSlide 实体接口
 * 对应数据库表: slide_slide
 */
export interface SlideSlideInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 SlideSlide 的参数接口
 */
export interface CreateSlideSlideDTO extends Partial<SlideSlideInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 SlideSlide 的参数接口
 */
export interface UpdateSlideSlideDTO extends Partial<SlideSlideInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 SlideSlide 的参数接口
 */
export interface QuerySlideSlideDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof SlideSlideInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * SlideSlide 分页查询结果接口
 */
export interface SlideSlidePageResult {
  data: SlideSlide[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * SlideSlide API 响应接口
 */
export interface SlideSlideResponse {
  success: boolean;
  message: string;
  data?: SlideSlide | SlideSlide[] | SlideSlidePageResult;
  error?: string;
}
