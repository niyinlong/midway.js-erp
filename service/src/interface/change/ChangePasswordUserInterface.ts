import { ChangePasswordUser } from '../entity/change/change.changepassworduser.entity';

/**
 * ChangePasswordUser 实体接口
 * 对应数据库表: change_password_user
 */
export interface ChangePasswordUserInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 ChangePasswordUser 的参数接口
 */
export interface CreateChangePasswordUserDTO extends Partial<ChangePasswordUserInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 ChangePasswordUser 的参数接口
 */
export interface UpdateChangePasswordUserDTO extends Partial<ChangePasswordUserInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 ChangePasswordUser 的参数接口
 */
export interface QueryChangePasswordUserDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof ChangePasswordUserInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * ChangePasswordUser 分页查询结果接口
 */
export interface ChangePasswordUserPageResult {
  data: ChangePasswordUser[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * ChangePasswordUser API 响应接口
 */
export interface ChangePasswordUserResponse {
  success: boolean;
  message: string;
  data?: ChangePasswordUser | ChangePasswordUser[] | ChangePasswordUserPageResult;
  error?: string;
}
