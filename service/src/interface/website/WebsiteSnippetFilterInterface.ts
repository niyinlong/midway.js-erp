import { WebsiteSnippetFilter } from '../entity/website/website.websitesnippetfilter.entity';

/**
 * WebsiteSnippetFilter 实体接口
 * 对应数据库表: website_snippet_filter
 */
export interface WebsiteSnippetFilterInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 WebsiteSnippetFilter 的参数接口
 */
export interface CreateWebsiteSnippetFilterDTO extends Partial<WebsiteSnippetFilterInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 WebsiteSnippetFilter 的参数接口
 */
export interface UpdateWebsiteSnippetFilterDTO extends Partial<WebsiteSnippetFilterInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 WebsiteSnippetFilter 的参数接口
 */
export interface QueryWebsiteSnippetFilterDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof WebsiteSnippetFilterInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * WebsiteSnippetFilter 分页查询结果接口
 */
export interface WebsiteSnippetFilterPageResult {
  data: WebsiteSnippetFilter[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * WebsiteSnippetFilter API 响应接口
 */
export interface WebsiteSnippetFilterResponse {
  success: boolean;
  message: string;
  data?: WebsiteSnippetFilter | WebsiteSnippetFilter[] | WebsiteSnippetFilterPageResult;
  error?: string;
}
