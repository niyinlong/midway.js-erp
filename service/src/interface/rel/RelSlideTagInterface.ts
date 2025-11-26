import { RelSlideTag } from '../entity/rel/rel.relslidetag.entity';

/**
 * RelSlideTag 实体接口
 * 对应数据库表: rel_slide_tag
 */
export interface RelSlideTagInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 RelSlideTag 的参数接口
 */
export interface CreateRelSlideTagDTO extends Partial<RelSlideTagInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 RelSlideTag 的参数接口
 */
export interface UpdateRelSlideTagDTO extends Partial<RelSlideTagInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 RelSlideTag 的参数接口
 */
export interface QueryRelSlideTagDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof RelSlideTagInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * RelSlideTag 分页查询结果接口
 */
export interface RelSlideTagPageResult {
  data: RelSlideTag[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * RelSlideTag API 响应接口
 */
export interface RelSlideTagResponse {
  success: boolean;
  message: string;
  data?: RelSlideTag | RelSlideTag[] | RelSlideTagPageResult;
  error?: string;
}
