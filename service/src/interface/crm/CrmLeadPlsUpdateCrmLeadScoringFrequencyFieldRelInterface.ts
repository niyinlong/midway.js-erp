import { CrmLeadPlsUpdateCrmLeadScoringFrequencyFieldRel } from '../entity/crm/crm.crmleadplsupdatecrmleadscoringfrequencyfieldrel.entity';

/**
 * CrmLeadPlsUpdateCrmLeadScoringFrequencyFieldRel 实体接口
 * 对应数据库表: crm_lead_pls_update_crm_lead_scoring_frequency_field_rel
 */
export interface CrmLeadPlsUpdateCrmLeadScoringFrequencyFieldRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 CrmLeadPlsUpdateCrmLeadScoringFrequencyFieldRel 的参数接口
 */
export interface CreateCrmLeadPlsUpdateCrmLeadScoringFrequencyFieldRelDTO extends Partial<CrmLeadPlsUpdateCrmLeadScoringFrequencyFieldRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 CrmLeadPlsUpdateCrmLeadScoringFrequencyFieldRel 的参数接口
 */
export interface UpdateCrmLeadPlsUpdateCrmLeadScoringFrequencyFieldRelDTO extends Partial<CrmLeadPlsUpdateCrmLeadScoringFrequencyFieldRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 CrmLeadPlsUpdateCrmLeadScoringFrequencyFieldRel 的参数接口
 */
export interface QueryCrmLeadPlsUpdateCrmLeadScoringFrequencyFieldRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof CrmLeadPlsUpdateCrmLeadScoringFrequencyFieldRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * CrmLeadPlsUpdateCrmLeadScoringFrequencyFieldRel 分页查询结果接口
 */
export interface CrmLeadPlsUpdateCrmLeadScoringFrequencyFieldRelPageResult {
  data: CrmLeadPlsUpdateCrmLeadScoringFrequencyFieldRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * CrmLeadPlsUpdateCrmLeadScoringFrequencyFieldRel API 响应接口
 */
export interface CrmLeadPlsUpdateCrmLeadScoringFrequencyFieldRelResponse {
  success: boolean;
  message: string;
  data?: CrmLeadPlsUpdateCrmLeadScoringFrequencyFieldRel | CrmLeadPlsUpdateCrmLeadScoringFrequencyFieldRel[] | CrmLeadPlsUpdateCrmLeadScoringFrequencyFieldRelPageResult;
  error?: string;
}
