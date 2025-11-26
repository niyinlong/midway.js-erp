import { SaleOrderTemplateLine } from '../entity/sale/sale.saleordertemplateline.entity';

/**
 * SaleOrderTemplateLine 实体接口
 * 对应数据库表: sale_order_template_line
 */
export interface SaleOrderTemplateLineInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 SaleOrderTemplateLine 的参数接口
 */
export interface CreateSaleOrderTemplateLineDTO extends Partial<SaleOrderTemplateLineInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 SaleOrderTemplateLine 的参数接口
 */
export interface UpdateSaleOrderTemplateLineDTO extends Partial<SaleOrderTemplateLineInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 SaleOrderTemplateLine 的参数接口
 */
export interface QuerySaleOrderTemplateLineDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof SaleOrderTemplateLineInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * SaleOrderTemplateLine 分页查询结果接口
 */
export interface SaleOrderTemplateLinePageResult {
  data: SaleOrderTemplateLine[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * SaleOrderTemplateLine API 响应接口
 */
export interface SaleOrderTemplateLineResponse {
  success: boolean;
  message: string;
  data?: SaleOrderTemplateLine | SaleOrderTemplateLine[] | SaleOrderTemplateLinePageResult;
  error?: string;
}
