import { OrmSignalingAssets } from '../entity/orm/orm.ormsignalingassets.entity';

/**
 * OrmSignalingAssets 实体接口
 * 对应数据库表: orm_signaling_assets
 */
export interface OrmSignalingAssetsInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 OrmSignalingAssets 的参数接口
 */
export interface CreateOrmSignalingAssetsDTO extends Partial<OrmSignalingAssetsInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 OrmSignalingAssets 的参数接口
 */
export interface UpdateOrmSignalingAssetsDTO extends Partial<OrmSignalingAssetsInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 OrmSignalingAssets 的参数接口
 */
export interface QueryOrmSignalingAssetsDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof OrmSignalingAssetsInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * OrmSignalingAssets 分页查询结果接口
 */
export interface OrmSignalingAssetsPageResult {
  data: OrmSignalingAssets[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * OrmSignalingAssets API 响应接口
 */
export interface OrmSignalingAssetsResponse {
  success: boolean;
  message: string;
  data?: OrmSignalingAssets | OrmSignalingAssets[] | OrmSignalingAssetsPageResult;
  error?: string;
}
