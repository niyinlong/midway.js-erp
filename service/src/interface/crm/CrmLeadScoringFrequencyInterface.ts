import { CrmLeadScoringFrequency } from '../entity/crm/crm.crmleadscoringfrequency.entity';

/**
 * CrmLeadScoringFrequency 实体接口
 * 对应数据库表: crm_lead_scoring_frequency
 */
export interface CrmLeadScoringFrequencyInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 CrmLeadScoringFrequency 的参数接口
 */
export interface CreateCrmLeadScoringFrequencyDTO extends Partial<CrmLeadScoringFrequencyInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 CrmLeadScoringFrequency 的参数接口
 */
export interface UpdateCrmLeadScoringFrequencyDTO extends Partial<CrmLeadScoringFrequencyInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 CrmLeadScoringFrequency 的参数接口
 */
export interface QueryCrmLeadScoringFrequencyDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof CrmLeadScoringFrequencyInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * CrmLeadScoringFrequency 分页查询结果接口
 */
export interface CrmLeadScoringFrequencyPageResult {
  data: CrmLeadScoringFrequency[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * CrmLeadScoringFrequency API 响应接口
 */
export interface CrmLeadScoringFrequencyResponse {
  success: boolean;
  message: string;
  data?: CrmLeadScoringFrequency | CrmLeadScoringFrequency[] | CrmLeadScoringFrequencyPageResult;
  error?: string;
}
