import { CrmMergeOpportunity } from '../entity/crm/crm.crmmergeopportunity.entity';

/**
 * CrmMergeOpportunity 实体接口
 * 对应数据库表: crm_merge_opportunity
 */
export interface CrmMergeOpportunityInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 CrmMergeOpportunity 的参数接口
 */
export interface CreateCrmMergeOpportunityDTO extends Partial<CrmMergeOpportunityInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 CrmMergeOpportunity 的参数接口
 */
export interface UpdateCrmMergeOpportunityDTO extends Partial<CrmMergeOpportunityInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 CrmMergeOpportunity 的参数接口
 */
export interface QueryCrmMergeOpportunityDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof CrmMergeOpportunityInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * CrmMergeOpportunity 分页查询结果接口
 */
export interface CrmMergeOpportunityPageResult {
  data: CrmMergeOpportunity[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * CrmMergeOpportunity API 响应接口
 */
export interface CrmMergeOpportunityResponse {
  success: boolean;
  message: string;
  data?: CrmMergeOpportunity | CrmMergeOpportunity[] | CrmMergeOpportunityPageResult;
  error?: string;
}
