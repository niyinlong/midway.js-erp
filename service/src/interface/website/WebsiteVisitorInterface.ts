import { WebsiteVisitor } from '../entity/website/website.websitevisitor.entity';

/**
 * WebsiteVisitor 实体接口
 * 对应数据库表: website_visitor
 */
export interface WebsiteVisitorInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 WebsiteVisitor 的参数接口
 */
export interface CreateWebsiteVisitorDTO extends Partial<WebsiteVisitorInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 WebsiteVisitor 的参数接口
 */
export interface UpdateWebsiteVisitorDTO extends Partial<WebsiteVisitorInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 WebsiteVisitor 的参数接口
 */
export interface QueryWebsiteVisitorDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof WebsiteVisitorInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * WebsiteVisitor 分页查询结果接口
 */
export interface WebsiteVisitorPageResult {
  data: WebsiteVisitor[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * WebsiteVisitor API 响应接口
 */
export interface WebsiteVisitorResponse {
  success: boolean;
  message: string;
  data?: WebsiteVisitor | WebsiteVisitor[] | WebsiteVisitorPageResult;
  error?: string;
}
