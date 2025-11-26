import { PickingLabelTypeStockPickingRel } from '../entity/picking/picking.pickinglabeltypestockpickingrel.entity';

/**
 * PickingLabelTypeStockPickingRel 实体接口
 * 对应数据库表: picking_label_type_stock_picking_rel
 */
export interface PickingLabelTypeStockPickingRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 PickingLabelTypeStockPickingRel 的参数接口
 */
export interface CreatePickingLabelTypeStockPickingRelDTO extends Partial<PickingLabelTypeStockPickingRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 PickingLabelTypeStockPickingRel 的参数接口
 */
export interface UpdatePickingLabelTypeStockPickingRelDTO extends Partial<PickingLabelTypeStockPickingRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 PickingLabelTypeStockPickingRel 的参数接口
 */
export interface QueryPickingLabelTypeStockPickingRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof PickingLabelTypeStockPickingRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * PickingLabelTypeStockPickingRel 分页查询结果接口
 */
export interface PickingLabelTypeStockPickingRelPageResult {
  data: PickingLabelTypeStockPickingRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * PickingLabelTypeStockPickingRel API 响应接口
 */
export interface PickingLabelTypeStockPickingRelResponse {
  success: boolean;
  message: string;
  data?: PickingLabelTypeStockPickingRel | PickingLabelTypeStockPickingRel[] | PickingLabelTypeStockPickingRelPageResult;
  error?: string;
}
