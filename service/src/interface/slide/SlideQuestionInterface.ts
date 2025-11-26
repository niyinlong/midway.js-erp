import { SlideQuestion } from '../entity/slide/slide.slidequestion.entity';

/**
 * SlideQuestion 实体接口
 * 对应数据库表: slide_question
 */
export interface SlideQuestionInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 SlideQuestion 的参数接口
 */
export interface CreateSlideQuestionDTO extends Partial<SlideQuestionInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 SlideQuestion 的参数接口
 */
export interface UpdateSlideQuestionDTO extends Partial<SlideQuestionInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 SlideQuestion 的参数接口
 */
export interface QuerySlideQuestionDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof SlideQuestionInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * SlideQuestion 分页查询结果接口
 */
export interface SlideQuestionPageResult {
  data: SlideQuestion[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * SlideQuestion API 响应接口
 */
export interface SlideQuestionResponse {
  success: boolean;
  message: string;
  data?: SlideQuestion | SlideQuestion[] | SlideQuestionPageResult;
  error?: string;
}
