import { WebsiteRewrite } from '../entity/website/website.websiterewrite.entity';

/**
 * WebsiteRewrite 实体接口
 * 对应数据库表: website_rewrite
 */
export interface WebsiteRewriteInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 WebsiteRewrite 的参数接口
 */
export interface CreateWebsiteRewriteDTO extends Partial<WebsiteRewriteInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 WebsiteRewrite 的参数接口
 */
export interface UpdateWebsiteRewriteDTO extends Partial<WebsiteRewriteInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 WebsiteRewrite 的参数接口
 */
export interface QueryWebsiteRewriteDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof WebsiteRewriteInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * WebsiteRewrite 分页查询结果接口
 */
export interface WebsiteRewritePageResult {
  data: WebsiteRewrite[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * WebsiteRewrite API 响应接口
 */
export interface WebsiteRewriteResponse {
  success: boolean;
  message: string;
  data?: WebsiteRewrite | WebsiteRewrite[] | WebsiteRewritePageResult;
  error?: string;
}
