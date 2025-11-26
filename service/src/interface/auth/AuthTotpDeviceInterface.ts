import { AuthTotpDevice } from '../entity/auth/auth.authtotpdevice.entity';

/**
 * AuthTotpDevice 实体接口
 * 对应数据库表: auth_totp_device
 */
export interface AuthTotpDeviceInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 AuthTotpDevice 的参数接口
 */
export interface CreateAuthTotpDeviceDTO extends Partial<AuthTotpDeviceInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 AuthTotpDevice 的参数接口
 */
export interface UpdateAuthTotpDeviceDTO extends Partial<AuthTotpDeviceInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 AuthTotpDevice 的参数接口
 */
export interface QueryAuthTotpDeviceDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof AuthTotpDeviceInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * AuthTotpDevice 分页查询结果接口
 */
export interface AuthTotpDevicePageResult {
  data: AuthTotpDevice[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * AuthTotpDevice API 响应接口
 */
export interface AuthTotpDeviceResponse {
  success: boolean;
  message: string;
  data?: AuthTotpDevice | AuthTotpDevice[] | AuthTotpDevicePageResult;
  error?: string;
}
