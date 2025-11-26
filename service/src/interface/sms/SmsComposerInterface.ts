import { SmsComposer } from '../entity/sms/sms.smscomposer.entity';

/**
 * SmsComposer 实体接口
 * 对应数据库表: sms_composer
 */
export interface SmsComposerInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 SmsComposer 的参数接口
 */
export interface CreateSmsComposerDTO extends Partial<SmsComposerInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 SmsComposer 的参数接口
 */
export interface UpdateSmsComposerDTO extends Partial<SmsComposerInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 SmsComposer 的参数接口
 */
export interface QuerySmsComposerDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof SmsComposerInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * SmsComposer 分页查询结果接口
 */
export interface SmsComposerPageResult {
  data: SmsComposer[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * SmsComposer API 响应接口
 */
export interface SmsComposerResponse {
  success: boolean;
  message: string;
  data?: SmsComposer | SmsComposer[] | SmsComposerPageResult;
  error?: string;
}
