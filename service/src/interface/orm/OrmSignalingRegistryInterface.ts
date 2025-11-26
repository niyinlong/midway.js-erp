import { OrmSignalingRegistry } from '../entity/orm/orm.ormsignalingregistry.entity';

/**
 * OrmSignalingRegistry 实体接口
 * 对应数据库表: orm_signaling_registry
 */
export interface OrmSignalingRegistryInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 OrmSignalingRegistry 的参数接口
 */
export interface CreateOrmSignalingRegistryDTO extends Partial<OrmSignalingRegistryInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 OrmSignalingRegistry 的参数接口
 */
export interface UpdateOrmSignalingRegistryDTO extends Partial<OrmSignalingRegistryInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 OrmSignalingRegistry 的参数接口
 */
export interface QueryOrmSignalingRegistryDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof OrmSignalingRegistryInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * OrmSignalingRegistry 分页查询结果接口
 */
export interface OrmSignalingRegistryPageResult {
  data: OrmSignalingRegistry[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * OrmSignalingRegistry API 响应接口
 */
export interface OrmSignalingRegistryResponse {
  success: boolean;
  message: string;
  data?: OrmSignalingRegistry | OrmSignalingRegistry[] | OrmSignalingRegistryPageResult;
  error?: string;
}
