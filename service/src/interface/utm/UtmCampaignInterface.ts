import { UtmCampaign } from '../entity/utm/utm.utmcampaign.entity';

/**
 * UtmCampaign 实体接口
 * 对应数据库表: utm_campaign
 */
export interface UtmCampaignInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 UtmCampaign 的参数接口
 */
export interface CreateUtmCampaignDTO extends Partial<UtmCampaignInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 UtmCampaign 的参数接口
 */
export interface UpdateUtmCampaignDTO extends Partial<UtmCampaignInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 UtmCampaign 的参数接口
 */
export interface QueryUtmCampaignDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof UtmCampaignInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * UtmCampaign 分页查询结果接口
 */
export interface UtmCampaignPageResult {
  data: UtmCampaign[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * UtmCampaign API 响应接口
 */
export interface UtmCampaignResponse {
  success: boolean;
  message: string;
  data?: UtmCampaign | UtmCampaign[] | UtmCampaignPageResult;
  error?: string;
}
