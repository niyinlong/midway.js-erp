import { SmsTemplatePreview } from '../entity/sms/sms.smstemplatepreview.entity';

/**
 * SmsTemplatePreview 实体接口
 * 对应数据库表: sms_template_preview
 */
export interface SmsTemplatePreviewInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 SmsTemplatePreview 的参数接口
 */
export interface CreateSmsTemplatePreviewDTO extends Partial<SmsTemplatePreviewInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 SmsTemplatePreview 的参数接口
 */
export interface UpdateSmsTemplatePreviewDTO extends Partial<SmsTemplatePreviewInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 SmsTemplatePreview 的参数接口
 */
export interface QuerySmsTemplatePreviewDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof SmsTemplatePreviewInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * SmsTemplatePreview 分页查询结果接口
 */
export interface SmsTemplatePreviewPageResult {
  data: SmsTemplatePreview[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * SmsTemplatePreview API 响应接口
 */
export interface SmsTemplatePreviewResponse {
  success: boolean;
  message: string;
  data?: SmsTemplatePreview | SmsTemplatePreview[] | SmsTemplatePreviewPageResult;
  error?: string;
}
