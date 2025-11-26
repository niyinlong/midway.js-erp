import { WebsiteTrack } from '../entity/website/website.websitetrack.entity';

/**
 * WebsiteTrack 实体接口
 * 对应数据库表: website_track
 */
export interface WebsiteTrackInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 WebsiteTrack 的参数接口
 */
export interface CreateWebsiteTrackDTO extends Partial<WebsiteTrackInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 WebsiteTrack 的参数接口
 */
export interface UpdateWebsiteTrackDTO extends Partial<WebsiteTrackInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 WebsiteTrack 的参数接口
 */
export interface QueryWebsiteTrackDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof WebsiteTrackInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * WebsiteTrack 分页查询结果接口
 */
export interface WebsiteTrackPageResult {
  data: WebsiteTrack[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * WebsiteTrack API 响应接口
 */
export interface WebsiteTrackResponse {
  success: boolean;
  message: string;
  data?: WebsiteTrack | WebsiteTrack[] | WebsiteTrackPageResult;
  error?: string;
}
