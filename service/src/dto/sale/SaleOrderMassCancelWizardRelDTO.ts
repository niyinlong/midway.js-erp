import { Rule, RuleType, Required } from '@midwayjs/validate';
import { SaleOrderMassCancelWizardRel } from '../entity/sale/sale.saleordermasscancelwizardrel.entity';
import { CreateSaleOrderMassCancelWizardRelDTO as CreateBaseDTO, UpdateSaleOrderMassCancelWizardRelDTO as UpdateBaseDTO } from '../interface/sale/SaleOrderMassCancelWizardRelInterface';

/**
 * 创建 SaleOrderMassCancelWizardRel 的DTO验证类
 * 对应数据库表: sale_order_mass_cancel_wizard_rel
 */
export class CreateSaleOrderMassCancelWizardRelDTO implements CreateBaseDTO {
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
 * 更新 SaleOrderMassCancelWizardRel 的DTO验证类
 */
export class UpdateSaleOrderMassCancelWizardRelDTO implements UpdateBaseDTO {
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
 * 查询 SaleOrderMassCancelWizardRel 的DTO验证类
 */
export class QuerySaleOrderMassCancelWizardRelDTO {
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
 * 批量删除 SaleOrderMassCancelWizardRel 的DTO验证类
 */
export class BatchDeleteSaleOrderMassCancelWizardRelDTO {
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
