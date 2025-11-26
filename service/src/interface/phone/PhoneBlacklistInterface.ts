import { PhoneBlacklist } from '../entity/phone/phone.phoneblacklist.entity';

/**
 * PhoneBlacklist 实体接口
 * 对应数据库表: phone_blacklist
 */
export interface PhoneBlacklistInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 PhoneBlacklist 的参数接口
 */
export interface CreatePhoneBlacklistDTO extends Partial<PhoneBlacklistInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 PhoneBlacklist 的参数接口
 */
export interface UpdatePhoneBlacklistDTO extends Partial<PhoneBlacklistInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 PhoneBlacklist 的参数接口
 */
export interface QueryPhoneBlacklistDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof PhoneBlacklistInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * PhoneBlacklist 分页查询结果接口
 */
export interface PhoneBlacklistPageResult {
  data: PhoneBlacklist[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * PhoneBlacklist API 响应接口
 */
export interface PhoneBlacklistResponse {
  success: boolean;
  message: string;
  data?: PhoneBlacklist | PhoneBlacklist[] | PhoneBlacklistPageResult;
  error?: string;
}
