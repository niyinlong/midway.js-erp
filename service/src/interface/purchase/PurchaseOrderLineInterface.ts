import { PurchaseOrderLine } from '../entity/purchase/purchase.purchaseorderline.entity';

/**
 * PurchaseOrderLine 实体接口
 * 对应数据库表: purchase_order_line
 */
export interface PurchaseOrderLineInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 PurchaseOrderLine 的参数接口
 */
export interface CreatePurchaseOrderLineDTO extends Partial<PurchaseOrderLineInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 PurchaseOrderLine 的参数接口
 */
export interface UpdatePurchaseOrderLineDTO extends Partial<PurchaseOrderLineInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 PurchaseOrderLine 的参数接口
 */
export interface QueryPurchaseOrderLineDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof PurchaseOrderLineInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * PurchaseOrderLine 分页查询结果接口
 */
export interface PurchaseOrderLinePageResult {
  data: PurchaseOrderLine[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * PurchaseOrderLine API 响应接口
 */
export interface PurchaseOrderLineResponse {
  success: boolean;
  message: string;
  data?: PurchaseOrderLine | PurchaseOrderLine[] | PurchaseOrderLinePageResult;
  error?: string;
}
