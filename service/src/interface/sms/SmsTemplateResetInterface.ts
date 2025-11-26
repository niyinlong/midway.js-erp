import { SmsTemplateReset } from '../entity/sms/sms.smstemplatereset.entity';

/**
 * SmsTemplateReset 实体接口
 * 对应数据库表: sms_template_reset
 */
export interface SmsTemplateResetInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 SmsTemplateReset 的参数接口
 */
export interface CreateSmsTemplateResetDTO extends Partial<SmsTemplateResetInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 SmsTemplateReset 的参数接口
 */
export interface UpdateSmsTemplateResetDTO extends Partial<SmsTemplateResetInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 SmsTemplateReset 的参数接口
 */
export interface QuerySmsTemplateResetDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof SmsTemplateResetInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * SmsTemplateReset 分页查询结果接口
 */
export interface SmsTemplateResetPageResult {
  data: SmsTemplateReset[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * SmsTemplateReset API 响应接口
 */
export interface SmsTemplateResetResponse {
  success: boolean;
  message: string;
  data?: SmsTemplateReset | SmsTemplateReset[] | SmsTemplateResetPageResult;
  error?: string;
}
