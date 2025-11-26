import { LotLabelLayout } from '../entity/lot/lot.lotlabellayout.entity';

/**
 * LotLabelLayout 实体接口
 * 对应数据库表: lot_label_layout
 */
export interface LotLabelLayoutInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 LotLabelLayout 的参数接口
 */
export interface CreateLotLabelLayoutDTO extends Partial<LotLabelLayoutInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 LotLabelLayout 的参数接口
 */
export interface UpdateLotLabelLayoutDTO extends Partial<LotLabelLayoutInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 LotLabelLayout 的参数接口
 */
export interface QueryLotLabelLayoutDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof LotLabelLayoutInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * LotLabelLayout 分页查询结果接口
 */
export interface LotLabelLayoutPageResult {
  data: LotLabelLayout[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * LotLabelLayout API 响应接口
 */
export interface LotLabelLayoutResponse {
  success: boolean;
  message: string;
  data?: LotLabelLayout | LotLabelLayout[] | LotLabelLayoutPageResult;
  error?: string;
}
