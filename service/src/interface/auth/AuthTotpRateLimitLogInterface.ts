import { AuthTotpRateLimitLog } from '../entity/auth/auth.authtotpratelimitlog.entity';

/**
 * AuthTotpRateLimitLog 实体接口
 * 对应数据库表: auth_totp_rate_limit_log
 */
export interface AuthTotpRateLimitLogInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 AuthTotpRateLimitLog 的参数接口
 */
export interface CreateAuthTotpRateLimitLogDTO extends Partial<AuthTotpRateLimitLogInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 AuthTotpRateLimitLog 的参数接口
 */
export interface UpdateAuthTotpRateLimitLogDTO extends Partial<AuthTotpRateLimitLogInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 AuthTotpRateLimitLog 的参数接口
 */
export interface QueryAuthTotpRateLimitLogDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof AuthTotpRateLimitLogInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * AuthTotpRateLimitLog 分页查询结果接口
 */
export interface AuthTotpRateLimitLogPageResult {
  data: AuthTotpRateLimitLog[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * AuthTotpRateLimitLog API 响应接口
 */
export interface AuthTotpRateLimitLogResponse {
  success: boolean;
  message: string;
  data?: AuthTotpRateLimitLog | AuthTotpRateLimitLog[] | AuthTotpRateLimitLogPageResult;
  error?: string;
}
