import { Rule, RuleType, Required } from '@midwayjs/validate';
import { SaleAdvancePaymentInv } from '../entity/sale/sale.saleadvancepaymentinv.entity';
import { CreateSaleAdvancePaymentInvDTO as CreateBaseDTO, UpdateSaleAdvancePaymentInvDTO as UpdateBaseDTO } from '../interface/sale/SaleAdvancePaymentInvInterface';

/**
 * 创建 SaleAdvancePaymentInv 的DTO验证类
 * 对应数据库表: sale_advance_payment_inv
 */
export class CreateSaleAdvancePaymentInvDTO implements CreateBaseDTO {
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
 * 更新 SaleAdvancePaymentInv 的DTO验证类
 */
export class UpdateSaleAdvancePaymentInvDTO implements UpdateBaseDTO {
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
 * 查询 SaleAdvancePaymentInv 的DTO验证类
 */
export class QuerySaleAdvancePaymentInvDTO {
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
 * 批量删除 SaleAdvancePaymentInv 的DTO验证类
 */
export class BatchDeleteSaleAdvancePaymentInvDTO {
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
