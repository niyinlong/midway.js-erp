import { WebsitePagePropertiesBase } from '../entity/website/website.websitepagepropertiesbase.entity';

/**
 * WebsitePagePropertiesBase 实体接口
 * 对应数据库表: website_page_properties_base
 */
export interface WebsitePagePropertiesBaseInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 WebsitePagePropertiesBase 的参数接口
 */
export interface CreateWebsitePagePropertiesBaseDTO extends Partial<WebsitePagePropertiesBaseInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 WebsitePagePropertiesBase 的参数接口
 */
export interface UpdateWebsitePagePropertiesBaseDTO extends Partial<WebsitePagePropertiesBaseInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 WebsitePagePropertiesBase 的参数接口
 */
export interface QueryWebsitePagePropertiesBaseDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof WebsitePagePropertiesBaseInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * WebsitePagePropertiesBase 分页查询结果接口
 */
export interface WebsitePagePropertiesBasePageResult {
  data: WebsitePagePropertiesBase[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * WebsitePagePropertiesBase API 响应接口
 */
export interface WebsitePagePropertiesBaseResponse {
  success: boolean;
  message: string;
  data?: WebsitePagePropertiesBase | WebsitePagePropertiesBase[] | WebsitePagePropertiesBasePageResult;
  error?: string;
}
