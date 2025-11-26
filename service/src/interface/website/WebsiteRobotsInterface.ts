import { WebsiteRobots } from '../entity/website/website.websiterobots.entity';

/**
 * WebsiteRobots 实体接口
 * 对应数据库表: website_robots
 */
export interface WebsiteRobotsInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 WebsiteRobots 的参数接口
 */
export interface CreateWebsiteRobotsDTO extends Partial<WebsiteRobotsInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 WebsiteRobots 的参数接口
 */
export interface UpdateWebsiteRobotsDTO extends Partial<WebsiteRobotsInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 WebsiteRobots 的参数接口
 */
export interface QueryWebsiteRobotsDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof WebsiteRobotsInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * WebsiteRobots 分页查询结果接口
 */
export interface WebsiteRobotsPageResult {
  data: WebsiteRobots[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * WebsiteRobots API 响应接口
 */
export interface WebsiteRobotsResponse {
  success: boolean;
  message: string;
  data?: WebsiteRobots | WebsiteRobots[] | WebsiteRobotsPageResult;
  error?: string;
}
