import { SmsTemplateSmsTemplateResetRel } from '../entity/sms/sms.smstemplatesmstemplateresetrel.entity';

/**
 * SmsTemplateSmsTemplateResetRel 实体接口
 * 对应数据库表: sms_template_sms_template_reset_rel
 */
export interface SmsTemplateSmsTemplateResetRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 SmsTemplateSmsTemplateResetRel 的参数接口
 */
export interface CreateSmsTemplateSmsTemplateResetRelDTO extends Partial<SmsTemplateSmsTemplateResetRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 SmsTemplateSmsTemplateResetRel 的参数接口
 */
export interface UpdateSmsTemplateSmsTemplateResetRelDTO extends Partial<SmsTemplateSmsTemplateResetRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 SmsTemplateSmsTemplateResetRel 的参数接口
 */
export interface QuerySmsTemplateSmsTemplateResetRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof SmsTemplateSmsTemplateResetRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * SmsTemplateSmsTemplateResetRel 分页查询结果接口
 */
export interface SmsTemplateSmsTemplateResetRelPageResult {
  data: SmsTemplateSmsTemplateResetRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * SmsTemplateSmsTemplateResetRel API 响应接口
 */
export interface SmsTemplateSmsTemplateResetRelResponse {
  success: boolean;
  message: string;
  data?: SmsTemplateSmsTemplateResetRel | SmsTemplateSmsTemplateResetRel[] | SmsTemplateSmsTemplateResetRelPageResult;
  error?: string;
}
