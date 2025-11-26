import { ResPartner } from '../entity/res/res.respartner.entity';

/**
 * ResPartner 实体接口
 * 对应数据库表: res_partner
 */
export interface ResPartnerInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 ResPartner 的参数接口
 */
export interface CreateResPartnerDTO extends Partial<ResPartnerInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 ResPartner 的参数接口
 */
export interface UpdateResPartnerDTO extends Partial<ResPartnerInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 ResPartner 的参数接口
 */
export interface QueryResPartnerDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof ResPartnerInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * ResPartner 分页查询结果接口
 */
export interface ResPartnerPageResult {
  data: ResPartner[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * ResPartner API 响应接口
 */
export interface ResPartnerResponse {
  success: boolean;
  message: string;
  data?: ResPartner | ResPartner[] | ResPartnerPageResult;
  error?: string;
}
