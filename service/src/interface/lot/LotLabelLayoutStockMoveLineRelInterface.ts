import { LotLabelLayoutStockMoveLineRel } from '../entity/lot/lot.lotlabellayoutstockmovelinerel.entity';

/**
 * LotLabelLayoutStockMoveLineRel 实体接口
 * 对应数据库表: lot_label_layout_stock_move_line_rel
 */
export interface LotLabelLayoutStockMoveLineRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 LotLabelLayoutStockMoveLineRel 的参数接口
 */
export interface CreateLotLabelLayoutStockMoveLineRelDTO extends Partial<LotLabelLayoutStockMoveLineRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 LotLabelLayoutStockMoveLineRel 的参数接口
 */
export interface UpdateLotLabelLayoutStockMoveLineRelDTO extends Partial<LotLabelLayoutStockMoveLineRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 LotLabelLayoutStockMoveLineRel 的参数接口
 */
export interface QueryLotLabelLayoutStockMoveLineRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof LotLabelLayoutStockMoveLineRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * LotLabelLayoutStockMoveLineRel 分页查询结果接口
 */
export interface LotLabelLayoutStockMoveLineRelPageResult {
  data: LotLabelLayoutStockMoveLineRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * LotLabelLayoutStockMoveLineRel API 响应接口
 */
export interface LotLabelLayoutStockMoveLineRelResponse {
  success: boolean;
  message: string;
  data?: LotLabelLayoutStockMoveLineRel | LotLabelLayoutStockMoveLineRel[] | LotLabelLayoutStockMoveLineRelPageResult;
  error?: string;
}
