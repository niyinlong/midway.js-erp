import { PurchaseOrder } from '../entity/purchase/purchase.purchaseorder.entity';

/**
 * PurchaseOrder 实体接口
 * 对应数据库表: purchase_order
 */
export interface PurchaseOrderInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 PurchaseOrder 的参数接口
 */
export interface CreatePurchaseOrderDTO extends Partial<PurchaseOrderInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 PurchaseOrder 的参数接口
 */
export interface UpdatePurchaseOrderDTO extends Partial<PurchaseOrderInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 PurchaseOrder 的参数接口
 */
export interface QueryPurchaseOrderDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof PurchaseOrderInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * PurchaseOrder 分页查询结果接口
 */
export interface PurchaseOrderPageResult {
  data: PurchaseOrder[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * PurchaseOrder API 响应接口
 */
export interface PurchaseOrderResponse {
  success: boolean;
  message: string;
  data?: PurchaseOrder | PurchaseOrder[] | PurchaseOrderPageResult;
  error?: string;
}
