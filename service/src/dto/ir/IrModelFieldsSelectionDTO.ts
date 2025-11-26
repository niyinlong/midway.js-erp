import { Rule, RuleType, Required } from '@midwayjs/validate';
import { IrModelFieldsSelection } from '../entity/ir/ir.irmodelfieldsselection.entity';
import { CreateIrModelFieldsSelectionDTO as CreateBaseDTO, UpdateIrModelFieldsSelectionDTO as UpdateBaseDTO } from '../interface/ir/IrModelFieldsSelectionInterface';

/**
 * 创建 IrModelFieldsSelection 的DTO验证类
 * 对应数据库表: ir_model_fields_selection
 */
export class CreateIrModelFieldsSelectionDTO implements CreateBaseDTO {
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
 * 更新 IrModelFieldsSelection 的DTO验证类
 */
export class UpdateIrModelFieldsSelectionDTO implements UpdateBaseDTO {
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
 * 查询 IrModelFieldsSelection 的DTO验证类
 */
export class QueryIrModelFieldsSelectionDTO {
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
 * 批量删除 IrModelFieldsSelection 的DTO验证类
 */
export class BatchDeleteIrModelFieldsSelectionDTO {
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
