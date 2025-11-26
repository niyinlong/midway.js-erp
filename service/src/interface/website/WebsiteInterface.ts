import { Website } from '../entity/website/website.website.entity';

/**
 * Website 实体接口
 * 对应数据库表: website
 */
export interface WebsiteInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 Website 的参数接口
 */
export interface CreateWebsiteDTO extends Partial<WebsiteInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 Website 的参数接口
 */
export interface UpdateWebsiteDTO extends Partial<WebsiteInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 Website 的参数接口
 */
export interface QueryWebsiteDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof WebsiteInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * Website 分页查询结果接口
 */
export interface WebsitePageResult {
  data: Website[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * Website API 响应接口
 */
export interface WebsiteResponse {
  success: boolean;
  message: string;
  data?: Website | Website[] | WebsitePageResult;
  error?: string;
}
