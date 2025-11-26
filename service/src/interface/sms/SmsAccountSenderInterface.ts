import { SmsAccountSender } from '../entity/sms/sms.smsaccountsender.entity';

/**
 * SmsAccountSender 实体接口
 * 对应数据库表: sms_account_sender
 */
export interface SmsAccountSenderInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 SmsAccountSender 的参数接口
 */
export interface CreateSmsAccountSenderDTO extends Partial<SmsAccountSenderInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 SmsAccountSender 的参数接口
 */
export interface UpdateSmsAccountSenderDTO extends Partial<SmsAccountSenderInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 SmsAccountSender 的参数接口
 */
export interface QuerySmsAccountSenderDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof SmsAccountSenderInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * SmsAccountSender 分页查询结果接口
 */
export interface SmsAccountSenderPageResult {
  data: SmsAccountSender[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * SmsAccountSender API 响应接口
 */
export interface SmsAccountSenderResponse {
  success: boolean;
  message: string;
  data?: SmsAccountSender | SmsAccountSender[] | SmsAccountSenderPageResult;
  error?: string;
}
