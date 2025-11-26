import { WebTourTour } from '../entity/web/web.webtourtour.entity';

/**
 * WebTourTour 实体接口
 * 对应数据库表: web_tour_tour
 */
export interface WebTourTourInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 WebTourTour 的参数接口
 */
export interface CreateWebTourTourDTO extends Partial<WebTourTourInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 WebTourTour 的参数接口
 */
export interface UpdateWebTourTourDTO extends Partial<WebTourTourInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 WebTourTour 的参数接口
 */
export interface QueryWebTourTourDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof WebTourTourInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * WebTourTour 分页查询结果接口
 */
export interface WebTourTourPageResult {
  data: WebTourTour[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * WebTourTour API 响应接口
 */
export interface WebTourTourResponse {
  success: boolean;
  message: string;
  data?: WebTourTour | WebTourTour[] | WebTourTourPageResult;
  error?: string;
}
