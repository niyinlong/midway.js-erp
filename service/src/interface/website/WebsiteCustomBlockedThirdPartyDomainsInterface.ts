import { WebsiteCustomBlockedThirdPartyDomains } from '../entity/website/website.websitecustomblockedthirdpartydomains.entity';

/**
 * WebsiteCustomBlockedThirdPartyDomains 实体接口
 * 对应数据库表: website_custom_blocked_third_party_domains
 */
export interface WebsiteCustomBlockedThirdPartyDomainsInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 WebsiteCustomBlockedThirdPartyDomains 的参数接口
 */
export interface CreateWebsiteCustomBlockedThirdPartyDomainsDTO extends Partial<WebsiteCustomBlockedThirdPartyDomainsInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 WebsiteCustomBlockedThirdPartyDomains 的参数接口
 */
export interface UpdateWebsiteCustomBlockedThirdPartyDomainsDTO extends Partial<WebsiteCustomBlockedThirdPartyDomainsInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 WebsiteCustomBlockedThirdPartyDomains 的参数接口
 */
export interface QueryWebsiteCustomBlockedThirdPartyDomainsDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof WebsiteCustomBlockedThirdPartyDomainsInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * WebsiteCustomBlockedThirdPartyDomains 分页查询结果接口
 */
export interface WebsiteCustomBlockedThirdPartyDomainsPageResult {
  data: WebsiteCustomBlockedThirdPartyDomains[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * WebsiteCustomBlockedThirdPartyDomains API 响应接口
 */
export interface WebsiteCustomBlockedThirdPartyDomainsResponse {
  success: boolean;
  message: string;
  data?: WebsiteCustomBlockedThirdPartyDomains | WebsiteCustomBlockedThirdPartyDomains[] | WebsiteCustomBlockedThirdPartyDomainsPageResult;
  error?: string;
}
