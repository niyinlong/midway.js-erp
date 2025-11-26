import { SaleOrderTagRel } from '../entity/sale/sale.saleordertagrel.entity';

/**
 * SaleOrderTagRel 实体接口
 * 对应数据库表: sale_order_tag_rel
 */
export interface SaleOrderTagRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 SaleOrderTagRel 的参数接口
 */
export interface CreateSaleOrderTagRelDTO extends Partial<SaleOrderTagRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 SaleOrderTagRel 的参数接口
 */
export interface UpdateSaleOrderTagRelDTO extends Partial<SaleOrderTagRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 SaleOrderTagRel 的参数接口
 */
export interface QuerySaleOrderTagRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof SaleOrderTagRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * SaleOrderTagRel 分页查询结果接口
 */
export interface SaleOrderTagRelPageResult {
  data: SaleOrderTagRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * SaleOrderTagRel API 响应接口
 */
export interface SaleOrderTagRelResponse {
  success: boolean;
  message: string;
  data?: SaleOrderTagRel | SaleOrderTagRel[] | SaleOrderTagRelPageResult;
  error?: string;
}
