import { PurchaseOrderStockPickingRel } from '../entity/purchase/purchase.purchaseorderstockpickingrel.entity';

/**
 * PurchaseOrderStockPickingRel 实体接口
 * 对应数据库表: purchase_order_stock_picking_rel
 */
export interface PurchaseOrderStockPickingRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 PurchaseOrderStockPickingRel 的参数接口
 */
export interface CreatePurchaseOrderStockPickingRelDTO extends Partial<PurchaseOrderStockPickingRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 PurchaseOrderStockPickingRel 的参数接口
 */
export interface UpdatePurchaseOrderStockPickingRelDTO extends Partial<PurchaseOrderStockPickingRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 PurchaseOrderStockPickingRel 的参数接口
 */
export interface QueryPurchaseOrderStockPickingRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof PurchaseOrderStockPickingRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * PurchaseOrderStockPickingRel 分页查询结果接口
 */
export interface PurchaseOrderStockPickingRelPageResult {
  data: PurchaseOrderStockPickingRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * PurchaseOrderStockPickingRel API 响应接口
 */
export interface PurchaseOrderStockPickingRelResponse {
  success: boolean;
  message: string;
  data?: PurchaseOrderStockPickingRel | PurchaseOrderStockPickingRel[] | PurchaseOrderStockPickingRelPageResult;
  error?: string;
}
