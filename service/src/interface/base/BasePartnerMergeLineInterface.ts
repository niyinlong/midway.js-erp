import { BasePartnerMergeLine } from '../entity/base/base.basepartnermergeline.entity';

/**
 * BasePartnerMergeLine 实体接口
 * 对应数据库表: base_partner_merge_line
 */
export interface BasePartnerMergeLineInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 BasePartnerMergeLine 的参数接口
 */
export interface CreateBasePartnerMergeLineDTO extends Partial<BasePartnerMergeLineInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 BasePartnerMergeLine 的参数接口
 */
export interface UpdateBasePartnerMergeLineDTO extends Partial<BasePartnerMergeLineInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 BasePartnerMergeLine 的参数接口
 */
export interface QueryBasePartnerMergeLineDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof BasePartnerMergeLineInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * BasePartnerMergeLine 分页查询结果接口
 */
export interface BasePartnerMergeLinePageResult {
  data: BasePartnerMergeLine[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * BasePartnerMergeLine API 响应接口
 */
export interface BasePartnerMergeLineResponse {
  success: boolean;
  message: string;
  data?: BasePartnerMergeLine | BasePartnerMergeLine[] | BasePartnerMergeLinePageResult;
  error?: string;
}
