import { PhoneBlacklistRemove } from '../entity/phone/phone.phoneblacklistremove.entity';

/**
 * PhoneBlacklistRemove 实体接口
 * 对应数据库表: phone_blacklist_remove
 */
export interface PhoneBlacklistRemoveInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 PhoneBlacklistRemove 的参数接口
 */
export interface CreatePhoneBlacklistRemoveDTO extends Partial<PhoneBlacklistRemoveInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 PhoneBlacklistRemove 的参数接口
 */
export interface UpdatePhoneBlacklistRemoveDTO extends Partial<PhoneBlacklistRemoveInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 PhoneBlacklistRemove 的参数接口
 */
export interface QueryPhoneBlacklistRemoveDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof PhoneBlacklistRemoveInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * PhoneBlacklistRemove 分页查询结果接口
 */
export interface PhoneBlacklistRemovePageResult {
  data: PhoneBlacklistRemove[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * PhoneBlacklistRemove API 响应接口
 */
export interface PhoneBlacklistRemoveResponse {
  success: boolean;
  message: string;
  data?: PhoneBlacklistRemove | PhoneBlacklistRemove[] | PhoneBlacklistRemovePageResult;
  error?: string;
}
