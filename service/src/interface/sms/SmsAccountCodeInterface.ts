import { SmsAccountCode } from '../entity/sms/sms.smsaccountcode.entity';

/**
 * SmsAccountCode 实体接口
 * 对应数据库表: sms_account_code
 */
export interface SmsAccountCodeInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 SmsAccountCode 的参数接口
 */
export interface CreateSmsAccountCodeDTO extends Partial<SmsAccountCodeInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 SmsAccountCode 的参数接口
 */
export interface UpdateSmsAccountCodeDTO extends Partial<SmsAccountCodeInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 SmsAccountCode 的参数接口
 */
export interface QuerySmsAccountCodeDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof SmsAccountCodeInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * SmsAccountCode 分页查询结果接口
 */
export interface SmsAccountCodePageResult {
  data: SmsAccountCode[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * SmsAccountCode API 响应接口
 */
export interface SmsAccountCodeResponse {
  success: boolean;
  message: string;
  data?: SmsAccountCode | SmsAccountCode[] | SmsAccountCodePageResult;
  error?: string;
}
