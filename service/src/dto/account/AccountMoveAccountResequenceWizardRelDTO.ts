import { Rule, RuleType, Required } from '@midwayjs/validate';
import { AccountMoveAccountResequenceWizardRel } from '../entity/account/account.accountmoveaccountresequencewizardrel.entity';
import { CreateAccountMoveAccountResequenceWizardRelDTO as CreateBaseDTO, UpdateAccountMoveAccountResequenceWizardRelDTO as UpdateBaseDTO } from '../interface/account/AccountMoveAccountResequenceWizardRelInterface';

/**
 * 创建 AccountMoveAccountResequenceWizardRel 的DTO验证类
 * 对应数据库表: account_move_account_resequence_wizard_rel
 */
export class CreateAccountMoveAccountResequenceWizardRelDTO implements CreateBaseDTO {
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
 * 更新 AccountMoveAccountResequenceWizardRel 的DTO验证类
 */
export class UpdateAccountMoveAccountResequenceWizardRelDTO implements UpdateBaseDTO {
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
 * 查询 AccountMoveAccountResequenceWizardRel 的DTO验证类
 */
export class QueryAccountMoveAccountResequenceWizardRelDTO {
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
 * 批量删除 AccountMoveAccountResequenceWizardRel 的DTO验证类
 */
export class BatchDeleteAccountMoveAccountResequenceWizardRelDTO {
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
