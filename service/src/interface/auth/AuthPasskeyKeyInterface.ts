import { AuthPasskeyKey } from '../entity/auth/auth.authpasskeykey.entity';

/**
 * AuthPasskeyKey 实体接口
 * 对应数据库表: auth_passkey_key
 */
export interface AuthPasskeyKeyInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 AuthPasskeyKey 的参数接口
 */
export interface CreateAuthPasskeyKeyDTO extends Partial<AuthPasskeyKeyInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 AuthPasskeyKey 的参数接口
 */
export interface UpdateAuthPasskeyKeyDTO extends Partial<AuthPasskeyKeyInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 AuthPasskeyKey 的参数接口
 */
export interface QueryAuthPasskeyKeyDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof AuthPasskeyKeyInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * AuthPasskeyKey 分页查询结果接口
 */
export interface AuthPasskeyKeyPageResult {
  data: AuthPasskeyKey[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * AuthPasskeyKey API 响应接口
 */
export interface AuthPasskeyKeyResponse {
  success: boolean;
  message: string;
  data?: AuthPasskeyKey | AuthPasskeyKey[] | AuthPasskeyKeyPageResult;
  error?: string;
}
