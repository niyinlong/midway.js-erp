import { HeaderFooterQuotationTemplateRel } from '../entity/header/header.headerfooterquotationtemplaterel.entity';

/**
 * HeaderFooterQuotationTemplateRel 实体接口
 * 对应数据库表: header_footer_quotation_template_rel
 */
export interface HeaderFooterQuotationTemplateRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 HeaderFooterQuotationTemplateRel 的参数接口
 */
export interface CreateHeaderFooterQuotationTemplateRelDTO extends Partial<HeaderFooterQuotationTemplateRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 HeaderFooterQuotationTemplateRel 的参数接口
 */
export interface UpdateHeaderFooterQuotationTemplateRelDTO extends Partial<HeaderFooterQuotationTemplateRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 HeaderFooterQuotationTemplateRel 的参数接口
 */
export interface QueryHeaderFooterQuotationTemplateRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof HeaderFooterQuotationTemplateRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * HeaderFooterQuotationTemplateRel 分页查询结果接口
 */
export interface HeaderFooterQuotationTemplateRelPageResult {
  data: HeaderFooterQuotationTemplateRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * HeaderFooterQuotationTemplateRel API 响应接口
 */
export interface HeaderFooterQuotationTemplateRelResponse {
  success: boolean;
  message: string;
  data?: HeaderFooterQuotationTemplateRel | HeaderFooterQuotationTemplateRel[] | HeaderFooterQuotationTemplateRelPageResult;
  error?: string;
}
