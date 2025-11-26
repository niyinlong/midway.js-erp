import { WebsitePage } from '../entity/website/website.websitepage.entity';

/**
 * WebsitePage 实体接口
 * 对应数据库表: website_page
 */
export interface WebsitePageInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 WebsitePage 的参数接口
 */
export interface CreateWebsitePageDTO extends Partial<WebsitePageInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 WebsitePage 的参数接口
 */
export interface UpdateWebsitePageDTO extends Partial<WebsitePageInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 WebsitePage 的参数接口
 */
export interface QueryWebsitePageDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof WebsitePageInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * WebsitePage 分页查询结果接口
 */
export interface WebsitePagePageResult {
  data: WebsitePage[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * WebsitePage API 响应接口
 */
export interface WebsitePageResponse {
  success: boolean;
  message: string;
  data?: WebsitePage | WebsitePage[] | WebsitePagePageResult;
  error?: string;
}
