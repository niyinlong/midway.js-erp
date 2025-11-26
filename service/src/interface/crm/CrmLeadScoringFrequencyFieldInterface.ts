import { CrmLeadScoringFrequencyField } from '../entity/crm/crm.crmleadscoringfrequencyfield.entity';

/**
 * CrmLeadScoringFrequencyField 实体接口
 * 对应数据库表: crm_lead_scoring_frequency_field
 */
export interface CrmLeadScoringFrequencyFieldInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 CrmLeadScoringFrequencyField 的参数接口
 */
export interface CreateCrmLeadScoringFrequencyFieldDTO extends Partial<CrmLeadScoringFrequencyFieldInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 CrmLeadScoringFrequencyField 的参数接口
 */
export interface UpdateCrmLeadScoringFrequencyFieldDTO extends Partial<CrmLeadScoringFrequencyFieldInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 CrmLeadScoringFrequencyField 的参数接口
 */
export interface QueryCrmLeadScoringFrequencyFieldDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof CrmLeadScoringFrequencyFieldInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * CrmLeadScoringFrequencyField 分页查询结果接口
 */
export interface CrmLeadScoringFrequencyFieldPageResult {
  data: CrmLeadScoringFrequencyField[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * CrmLeadScoringFrequencyField API 响应接口
 */
export interface CrmLeadScoringFrequencyFieldResponse {
  success: boolean;
  message: string;
  data?: CrmLeadScoringFrequencyField | CrmLeadScoringFrequencyField[] | CrmLeadScoringFrequencyFieldPageResult;
  error?: string;
}
