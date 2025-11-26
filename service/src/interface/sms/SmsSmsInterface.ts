import { SmsSms } from '../entity/sms/sms.smssms.entity';

/**
 * SmsSms 实体接口
 * 对应数据库表: sms_sms
 */
export interface SmsSmsInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 SmsSms 的参数接口
 */
export interface CreateSmsSmsDTO extends Partial<SmsSmsInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 SmsSms 的参数接口
 */
export interface UpdateSmsSmsDTO extends Partial<SmsSmsInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 SmsSms 的参数接口
 */
export interface QuerySmsSmsDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof SmsSmsInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * SmsSms 分页查询结果接口
 */
export interface SmsSmsPageResult {
  data: SmsSms[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * SmsSms API 响应接口
 */
export interface SmsSmsResponse {
  success: boolean;
  message: string;
  data?: SmsSms | SmsSms[] | SmsSmsPageResult;
  error?: string;
}
