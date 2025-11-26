import { SlideTag } from '../entity/slide/slide.slidetag.entity';

/**
 * SlideTag 实体接口
 * 对应数据库表: slide_tag
 */
export interface SlideTagInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 SlideTag 的参数接口
 */
export interface CreateSlideTagDTO extends Partial<SlideTagInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 SlideTag 的参数接口
 */
export interface UpdateSlideTagDTO extends Partial<SlideTagInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 SlideTag 的参数接口
 */
export interface QuerySlideTagDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof SlideTagInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * SlideTag 分页查询结果接口
 */
export interface SlideTagPageResult {
  data: SlideTag[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * SlideTag API 响应接口
 */
export interface SlideTagResponse {
  success: boolean;
  message: string;
  data?: SlideTag | SlideTag[] | SlideTagPageResult;
  error?: string;
}
