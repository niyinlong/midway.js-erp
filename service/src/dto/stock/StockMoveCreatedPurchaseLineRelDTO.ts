import { Rule, RuleType, Required } from '@midwayjs/validate';
import { StockMoveCreatedPurchaseLineRel } from '../entity/stock/stock.stockmovecreatedpurchaselinerel.entity';
import { CreateStockMoveCreatedPurchaseLineRelDTO as CreateBaseDTO, UpdateStockMoveCreatedPurchaseLineRelDTO as UpdateBaseDTO } from '../interface/stock/StockMoveCreatedPurchaseLineRelInterface';

/**
 * 创建 StockMoveCreatedPurchaseLineRel 的DTO验证类
 * 对应数据库表: stock_move_created_purchase_line_rel
 */
export class CreateStockMoveCreatedPurchaseLineRelDTO implements CreateBaseDTO {
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
 * 更新 StockMoveCreatedPurchaseLineRel 的DTO验证类
 */
export class UpdateStockMoveCreatedPurchaseLineRelDTO implements UpdateBaseDTO {
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
 * 查询 StockMoveCreatedPurchaseLineRel 的DTO验证类
 */
export class QueryStockMoveCreatedPurchaseLineRelDTO {
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
 * 批量删除 StockMoveCreatedPurchaseLineRel 的DTO验证类
 */
export class BatchDeleteStockMoveCreatedPurchaseLineRelDTO {
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
