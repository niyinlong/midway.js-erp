import { OrmSignalingDefault } from '../entity/orm/orm.ormsignalingdefault.entity';

/**
 * OrmSignalingDefault 实体接口
 * 对应数据库表: orm_signaling_default
 */
export interface OrmSignalingDefaultInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 OrmSignalingDefault 的参数接口
 */
export interface CreateOrmSignalingDefaultDTO extends Partial<OrmSignalingDefaultInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 OrmSignalingDefault 的参数接口
 */
export interface UpdateOrmSignalingDefaultDTO extends Partial<OrmSignalingDefaultInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 OrmSignalingDefault 的参数接口
 */
export interface QueryOrmSignalingDefaultDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof OrmSignalingDefaultInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * OrmSignalingDefault 分页查询结果接口
 */
export interface OrmSignalingDefaultPageResult {
  data: OrmSignalingDefault[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * OrmSignalingDefault API 响应接口
 */
export interface OrmSignalingDefaultResponse {
  success: boolean;
  message: string;
  data?: OrmSignalingDefault | OrmSignalingDefault[] | OrmSignalingDefaultPageResult;
  error?: string;
}
