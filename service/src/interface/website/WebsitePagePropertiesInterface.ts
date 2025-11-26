import { WebsitePageProperties } from '../entity/website/website.websitepageproperties.entity';

/**
 * WebsitePageProperties 实体接口
 * 对应数据库表: website_page_properties
 */
export interface WebsitePagePropertiesInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 WebsitePageProperties 的参数接口
 */
export interface CreateWebsitePagePropertiesDTO extends Partial<WebsitePagePropertiesInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 WebsitePageProperties 的参数接口
 */
export interface UpdateWebsitePagePropertiesDTO extends Partial<WebsitePagePropertiesInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 WebsitePageProperties 的参数接口
 */
export interface QueryWebsitePagePropertiesDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof WebsitePagePropertiesInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * WebsitePageProperties 分页查询结果接口
 */
export interface WebsitePagePropertiesPageResult {
  data: WebsitePageProperties[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * WebsitePageProperties API 响应接口
 */
export interface WebsitePagePropertiesResponse {
  success: boolean;
  message: string;
  data?: WebsitePageProperties | WebsitePageProperties[] | WebsitePagePropertiesPageResult;
  error?: string;
}
