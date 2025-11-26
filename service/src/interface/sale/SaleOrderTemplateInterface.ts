import { SaleOrderTemplate } from '../entity/sale/sale.saleordertemplate.entity';

/**
 * SaleOrderTemplate 实体接口
 * 对应数据库表: sale_order_template
 */
export interface SaleOrderTemplateInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 SaleOrderTemplate 的参数接口
 */
export interface CreateSaleOrderTemplateDTO extends Partial<SaleOrderTemplateInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 SaleOrderTemplate 的参数接口
 */
export interface UpdateSaleOrderTemplateDTO extends Partial<SaleOrderTemplateInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 SaleOrderTemplate 的参数接口
 */
export interface QuerySaleOrderTemplateDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof SaleOrderTemplateInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * SaleOrderTemplate 分页查询结果接口
 */
export interface SaleOrderTemplatePageResult {
  data: SaleOrderTemplate[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * SaleOrderTemplate API 响应接口
 */
export interface SaleOrderTemplateResponse {
  success: boolean;
  message: string;
  data?: SaleOrderTemplate | SaleOrderTemplate[] | SaleOrderTemplatePageResult;
  error?: string;
}
