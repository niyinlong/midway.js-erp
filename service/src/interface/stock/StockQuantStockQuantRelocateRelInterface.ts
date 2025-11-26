import { StockQuantStockQuantRelocateRel } from '../entity/stock/stock.stockquantstockquantrelocaterel.entity';

/**
 * StockQuantStockQuantRelocateRel 实体接口
 * 对应数据库表: stock_quant_stock_quant_relocate_rel
 */
export interface StockQuantStockQuantRelocateRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 StockQuantStockQuantRelocateRel 的参数接口
 */
export interface CreateStockQuantStockQuantRelocateRelDTO extends Partial<StockQuantStockQuantRelocateRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 StockQuantStockQuantRelocateRel 的参数接口
 */
export interface UpdateStockQuantStockQuantRelocateRelDTO extends Partial<StockQuantStockQuantRelocateRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 StockQuantStockQuantRelocateRel 的参数接口
 */
export interface QueryStockQuantStockQuantRelocateRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof StockQuantStockQuantRelocateRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * StockQuantStockQuantRelocateRel 分页查询结果接口
 */
export interface StockQuantStockQuantRelocateRelPageResult {
  data: StockQuantStockQuantRelocateRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * StockQuantStockQuantRelocateRel API 响应接口
 */
export interface StockQuantStockQuantRelocateRelResponse {
  success: boolean;
  message: string;
  data?: StockQuantStockQuantRelocateRel | StockQuantStockQuantRelocateRel[] | StockQuantStockQuantRelocateRelPageResult;
  error?: string;
}
