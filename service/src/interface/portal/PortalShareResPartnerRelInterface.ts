import { PortalShareResPartnerRel } from '../entity/portal/portal.portalsharerespartnerrel.entity';

/**
 * PortalShareResPartnerRel 实体接口
 * 对应数据库表: portal_share_res_partner_rel
 */
export interface PortalShareResPartnerRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 PortalShareResPartnerRel 的参数接口
 */
export interface CreatePortalShareResPartnerRelDTO extends Partial<PortalShareResPartnerRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 PortalShareResPartnerRel 的参数接口
 */
export interface UpdatePortalShareResPartnerRelDTO extends Partial<PortalShareResPartnerRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 PortalShareResPartnerRel 的参数接口
 */
export interface QueryPortalShareResPartnerRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof PortalShareResPartnerRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * PortalShareResPartnerRel 分页查询结果接口
 */
export interface PortalShareResPartnerRelPageResult {
  data: PortalShareResPartnerRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * PortalShareResPartnerRel API 响应接口
 */
export interface PortalShareResPartnerRelResponse {
  success: boolean;
  message: string;
  data?: PortalShareResPartnerRel | PortalShareResPartnerRel[] | PortalShareResPartnerRelPageResult;
  error?: string;
}
