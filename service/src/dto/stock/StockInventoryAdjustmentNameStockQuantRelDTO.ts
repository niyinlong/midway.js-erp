import { Rule, RuleType, Required } from '@midwayjs/validate';
import { StockInventoryAdjustmentNameStockQuantRel } from '../entity/stock/stock.stockinventoryadjustmentnamestockquantrel.entity';
import { CreateStockInventoryAdjustmentNameStockQuantRelDTO as CreateBaseDTO, UpdateStockInventoryAdjustmentNameStockQuantRelDTO as UpdateBaseDTO } from '../interface/stock/StockInventoryAdjustmentNameStockQuantRelInterface';

/**
 * 创建 StockInventoryAdjustmentNameStockQuantRel 的DTO验证类
 * 对应数据库表: stock_inventory_adjustment_name_stock_quant_rel
 */
export class CreateStockInventoryAdjustmentNameStockQuantRelDTO implements CreateBaseDTO {
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
 * 更新 StockInventoryAdjustmentNameStockQuantRel 的DTO验证类
 */
export class UpdateStockInventoryAdjustmentNameStockQuantRelDTO implements UpdateBaseDTO {
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
 * 查询 StockInventoryAdjustmentNameStockQuantRel 的DTO验证类
 */
export class QueryStockInventoryAdjustmentNameStockQuantRelDTO {
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
 * 批量删除 StockInventoryAdjustmentNameStockQuantRel 的DTO验证类
 */
export class BatchDeleteStockInventoryAdjustmentNameStockQuantRelDTO {
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
