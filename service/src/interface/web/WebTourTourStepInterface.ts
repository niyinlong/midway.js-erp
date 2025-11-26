import { WebTourTourStep } from '../entity/web/web.webtourtourstep.entity';

/**
 * WebTourTourStep 实体接口
 * 对应数据库表: web_tour_tour_step
 */
export interface WebTourTourStepInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 WebTourTourStep 的参数接口
 */
export interface CreateWebTourTourStepDTO extends Partial<WebTourTourStepInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 WebTourTourStep 的参数接口
 */
export interface UpdateWebTourTourStepDTO extends Partial<WebTourTourStepInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 WebTourTourStep 的参数接口
 */
export interface QueryWebTourTourStepDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof WebTourTourStepInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * WebTourTourStep 分页查询结果接口
 */
export interface WebTourTourStepPageResult {
  data: WebTourTourStep[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * WebTourTourStep API 响应接口
 */
export interface WebTourTourStepResponse {
  success: boolean;
  message: string;
  data?: WebTourTourStep | WebTourTourStep[] | WebTourTourStepPageResult;
  error?: string;
}
