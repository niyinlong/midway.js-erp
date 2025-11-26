import { WebsiteMenu } from '../entity/website/website.websitemenu.entity';

/**
 * WebsiteMenu 实体接口
 * 对应数据库表: website_menu
 */
export interface WebsiteMenuInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 WebsiteMenu 的参数接口
 */
export interface CreateWebsiteMenuDTO extends Partial<WebsiteMenuInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 WebsiteMenu 的参数接口
 */
export interface UpdateWebsiteMenuDTO extends Partial<WebsiteMenuInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 WebsiteMenu 的参数接口
 */
export interface QueryWebsiteMenuDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof WebsiteMenuInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * WebsiteMenu 分页查询结果接口
 */
export interface WebsiteMenuPageResult {
  data: WebsiteMenu[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * WebsiteMenu API 响应接口
 */
export interface WebsiteMenuResponse {
  success: boolean;
  message: string;
  data?: WebsiteMenu | WebsiteMenu[] | WebsiteMenuPageResult;
  error?: string;
}
