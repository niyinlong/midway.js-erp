import { PortalShare } from '../entity/portal/portal.portalshare.entity';

/**
 * PortalShare 实体接口
 * 对应数据库表: portal_share
 */
export interface PortalShareInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 PortalShare 的参数接口
 */
export interface CreatePortalShareDTO extends Partial<PortalShareInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 PortalShare 的参数接口
 */
export interface UpdatePortalShareDTO extends Partial<PortalShareInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 PortalShare 的参数接口
 */
export interface QueryPortalShareDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof PortalShareInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * PortalShare 分页查询结果接口
 */
export interface PortalSharePageResult {
  data: PortalShare[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * PortalShare API 响应接口
 */
export interface PortalShareResponse {
  success: boolean;
  message: string;
  data?: PortalShare | PortalShare[] | PortalSharePageResult;
  error?: string;
}
