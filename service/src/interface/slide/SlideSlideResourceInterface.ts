import { SlideSlideResource } from '../entity/slide/slide.slideslideresource.entity';

/**
 * SlideSlideResource 实体接口
 * 对应数据库表: slide_slide_resource
 */
export interface SlideSlideResourceInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 SlideSlideResource 的参数接口
 */
export interface CreateSlideSlideResourceDTO extends Partial<SlideSlideResourceInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 SlideSlideResource 的参数接口
 */
export interface UpdateSlideSlideResourceDTO extends Partial<SlideSlideResourceInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 SlideSlideResource 的参数接口
 */
export interface QuerySlideSlideResourceDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof SlideSlideResourceInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * SlideSlideResource 分页查询结果接口
 */
export interface SlideSlideResourcePageResult {
  data: SlideSlideResource[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * SlideSlideResource API 响应接口
 */
export interface SlideSlideResourceResponse {
  success: boolean;
  message: string;
  data?: SlideSlideResource | SlideSlideResource[] | SlideSlideResourcePageResult;
  error?: string;
}
