import { Rule, RuleType, Required } from '@midwayjs/validate';
import { CrmLeadCrmLead2opportunityPartnerMassRel } from '../entity/crm/crm.crmleadcrmlead2opportunitypartnermassrel.entity';
import { CreateCrmLeadCrmLead2opportunityPartnerMassRelDTO as CreateBaseDTO, UpdateCrmLeadCrmLead2opportunityPartnerMassRelDTO as UpdateBaseDTO } from '../interface/crm/CrmLeadCrmLead2opportunityPartnerMassRelInterface';

/**
 * 创建 CrmLeadCrmLead2opportunityPartnerMassRel 的DTO验证类
 * 对应数据库表: crm_lead_crm_lead2opportunity_partner_mass_rel
 */
export class CreateCrmLeadCrmLead2opportunityPartnerMassRelDTO implements CreateBaseDTO {
  @Rule(RuleType.string())
  name?: string;
  @Rule(RuleType.string())
  code?: string;
  
  /**
   * 可以添加自定义验证方法
   */
  validate() {
    // 自定义验证逻辑
    return true;
  }
}

/**
 * 更新 CrmLeadCrmLead2opportunityPartnerMassRel 的DTO验证类
 */
export class UpdateCrmLeadCrmLead2opportunityPartnerMassRelDTO implements UpdateBaseDTO {
  @Rule(RuleType.string())
  name?: string;
  @Rule(RuleType.string())
  code?: string;
  
  /**
   * 可以添加自定义验证方法
   */
  validate() {
    // 自定义验证逻辑
    return true;
  }
}

/**
 * 查询 CrmLeadCrmLead2opportunityPartnerMassRel 的DTO验证类
 */
export class QueryCrmLeadCrmLead2opportunityPartnerMassRelDTO {
  @Rule(RuleType.number().integer().min(1))
  page?: number = 1;
  
  @Rule(RuleType.number().integer().min(1).max(100))
  pageSize?: number = 10;
  
  @Rule(RuleType.string())
  sortBy?: string = 'id';
  
  @Rule(RuleType.string().valid('ASC', 'DESC'))
  sortOrder?: 'ASC' | 'DESC' = 'DESC';
  
  @Rule(RuleType.string())
  keyword?: string;
  
  // 可以根据实体字段扩展更多查询条件验证
}

/**
 * 批量删除 CrmLeadCrmLead2opportunityPartnerMassRel 的DTO验证类
 */
export class BatchDeleteCrmLeadCrmLead2opportunityPartnerMassRelDTO {
  @Required()
  @Rule(RuleType.array().required().items(RuleType.union([RuleType.string(), RuleType.number()])))
  ids: (string | number)[];
}

/**
 * ID参数验证类
 */
export class IdParamDTO {
  @Required()
  @Rule(RuleType.union([RuleType.string(), RuleType.number()]))
  id: string | number;
}
