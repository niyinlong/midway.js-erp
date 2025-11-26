import { SaleOrderMassCancelWizardRel } from '../entity/sale/sale.saleordermasscancelwizardrel.entity';

/**
 * SaleOrderMassCancelWizardRel 实体接口
 * 对应数据库表: sale_order_mass_cancel_wizard_rel
 */
export interface SaleOrderMassCancelWizardRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 SaleOrderMassCancelWizardRel 的参数接口
 */
export interface CreateSaleOrderMassCancelWizardRelDTO extends Partial<SaleOrderMassCancelWizardRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 SaleOrderMassCancelWizardRel 的参数接口
 */
export interface UpdateSaleOrderMassCancelWizardRelDTO extends Partial<SaleOrderMassCancelWizardRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 SaleOrderMassCancelWizardRel 的参数接口
 */
export interface QuerySaleOrderMassCancelWizardRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof SaleOrderMassCancelWizardRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * SaleOrderMassCancelWizardRel 分页查询结果接口
 */
export interface SaleOrderMassCancelWizardRelPageResult {
  data: SaleOrderMassCancelWizardRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * SaleOrderMassCancelWizardRel API 响应接口
 */
export interface SaleOrderMassCancelWizardRelResponse {
  success: boolean;
  message: string;
  data?: SaleOrderMassCancelWizardRel | SaleOrderMassCancelWizardRel[] | SaleOrderMassCancelWizardRelPageResult;
  error?: string;
}
