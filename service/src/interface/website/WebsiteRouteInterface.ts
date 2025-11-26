import { WebsiteRoute } from '../entity/website/website.websiteroute.entity';

/**
 * WebsiteRoute 实体接口
 * 对应数据库表: website_route
 */
export interface WebsiteRouteInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 WebsiteRoute 的参数接口
 */
export interface CreateWebsiteRouteDTO extends Partial<WebsiteRouteInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 WebsiteRoute 的参数接口
 */
export interface UpdateWebsiteRouteDTO extends Partial<WebsiteRouteInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 WebsiteRoute 的参数接口
 */
export interface QueryWebsiteRouteDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof WebsiteRouteInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * WebsiteRoute 分页查询结果接口
 */
export interface WebsiteRoutePageResult {
  data: WebsiteRoute[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * WebsiteRoute API 响应接口
 */
export interface WebsiteRouteResponse {
  success: boolean;
  message: string;
  data?: WebsiteRoute | WebsiteRoute[] | WebsiteRoutePageResult;
  error?: string;
}
