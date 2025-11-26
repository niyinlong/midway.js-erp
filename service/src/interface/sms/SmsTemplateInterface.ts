import { SmsTemplate } from '../entity/sms/sms.smstemplate.entity';

/**
 * SmsTemplate 实体接口
 * 对应数据库表: sms_template
 */
export interface SmsTemplateInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 SmsTemplate 的参数接口
 */
export interface CreateSmsTemplateDTO extends Partial<SmsTemplateInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 SmsTemplate 的参数接口
 */
export interface UpdateSmsTemplateDTO extends Partial<SmsTemplateInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 SmsTemplate 的参数接口
 */
export interface QuerySmsTemplateDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof SmsTemplateInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * SmsTemplate 分页查询结果接口
 */
export interface SmsTemplatePageResult {
  data: SmsTemplate[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * SmsTemplate API 响应接口
 */
export interface SmsTemplateResponse {
  success: boolean;
  message: string;
  data?: SmsTemplate | SmsTemplate[] | SmsTemplatePageResult;
  error?: string;
}
