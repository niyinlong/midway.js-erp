import { CrmConvertLeadMassLeadRel } from '../entity/crm/crm.crmconvertleadmassleadrel.entity';

/**
 * CrmConvertLeadMassLeadRel 实体接口
 * 对应数据库表: crm_convert_lead_mass_lead_rel
 */
export interface CrmConvertLeadMassLeadRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 CrmConvertLeadMassLeadRel 的参数接口
 */
export interface CreateCrmConvertLeadMassLeadRelDTO extends Partial<CrmConvertLeadMassLeadRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 CrmConvertLeadMassLeadRel 的参数接口
 */
export interface UpdateCrmConvertLeadMassLeadRelDTO extends Partial<CrmConvertLeadMassLeadRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 CrmConvertLeadMassLeadRel 的参数接口
 */
export interface QueryCrmConvertLeadMassLeadRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof CrmConvertLeadMassLeadRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * CrmConvertLeadMassLeadRel 分页查询结果接口
 */
export interface CrmConvertLeadMassLeadRelPageResult {
  data: CrmConvertLeadMassLeadRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * CrmConvertLeadMassLeadRel API 响应接口
 */
export interface CrmConvertLeadMassLeadRelResponse {
  success: boolean;
  message: string;
  data?: CrmConvertLeadMassLeadRel | CrmConvertLeadMassLeadRel[] | CrmConvertLeadMassLeadRelPageResult;
  error?: string;
}
