import { PickingTypeFavoriteUserRel } from '../entity/picking/picking.pickingtypefavoriteuserrel.entity';

/**
 * PickingTypeFavoriteUserRel 实体接口
 * 对应数据库表: picking_type_favorite_user_rel
 */
export interface PickingTypeFavoriteUserRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 PickingTypeFavoriteUserRel 的参数接口
 */
export interface CreatePickingTypeFavoriteUserRelDTO extends Partial<PickingTypeFavoriteUserRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 PickingTypeFavoriteUserRel 的参数接口
 */
export interface UpdatePickingTypeFavoriteUserRelDTO extends Partial<PickingTypeFavoriteUserRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 PickingTypeFavoriteUserRel 的参数接口
 */
export interface QueryPickingTypeFavoriteUserRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof PickingTypeFavoriteUserRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * PickingTypeFavoriteUserRel 分页查询结果接口
 */
export interface PickingTypeFavoriteUserRelPageResult {
  data: PickingTypeFavoriteUserRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * PickingTypeFavoriteUserRel API 响应接口
 */
export interface PickingTypeFavoriteUserRelResponse {
  success: boolean;
  message: string;
  data?: PickingTypeFavoriteUserRel | PickingTypeFavoriteUserRel[] | PickingTypeFavoriteUserRelPageResult;
  error?: string;
}
