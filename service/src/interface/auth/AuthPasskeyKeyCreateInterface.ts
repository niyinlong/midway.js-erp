import { AuthPasskeyKeyCreate } from '../entity/auth/auth.authpasskeykeycreate.entity';

/**
 * AuthPasskeyKeyCreate 实体接口
 * 对应数据库表: auth_passkey_key_create
 */
export interface AuthPasskeyKeyCreateInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 AuthPasskeyKeyCreate 的参数接口
 */
export interface CreateAuthPasskeyKeyCreateDTO extends Partial<AuthPasskeyKeyCreateInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 AuthPasskeyKeyCreate 的参数接口
 */
export interface UpdateAuthPasskeyKeyCreateDTO extends Partial<AuthPasskeyKeyCreateInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 AuthPasskeyKeyCreate 的参数接口
 */
export interface QueryAuthPasskeyKeyCreateDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof AuthPasskeyKeyCreateInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * AuthPasskeyKeyCreate 分页查询结果接口
 */
export interface AuthPasskeyKeyCreatePageResult {
  data: AuthPasskeyKeyCreate[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * AuthPasskeyKeyCreate API 响应接口
 */
export interface AuthPasskeyKeyCreateResponse {
  success: boolean;
  message: string;
  data?: AuthPasskeyKeyCreate | AuthPasskeyKeyCreate[] | AuthPasskeyKeyCreatePageResult;
  error?: string;
}
