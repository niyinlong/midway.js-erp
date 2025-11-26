import { SlideAnswer } from '../entity/slide/slide.slideanswer.entity';

/**
 * SlideAnswer 实体接口
 * 对应数据库表: slide_answer
 */
export interface SlideAnswerInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 SlideAnswer 的参数接口
 */
export interface CreateSlideAnswerDTO extends Partial<SlideAnswerInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 SlideAnswer 的参数接口
 */
export interface UpdateSlideAnswerDTO extends Partial<SlideAnswerInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 SlideAnswer 的参数接口
 */
export interface QuerySlideAnswerDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof SlideAnswerInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * SlideAnswer 分页查询结果接口
 */
export interface SlideAnswerPageResult {
  data: SlideAnswer[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * SlideAnswer API 响应接口
 */
export interface SlideAnswerResponse {
  success: boolean;
  message: string;
  data?: SlideAnswer | SlideAnswer[] | SlideAnswerPageResult;
  error?: string;
}
