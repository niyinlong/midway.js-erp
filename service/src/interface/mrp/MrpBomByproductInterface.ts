import { MrpBomByproduct } from '../entity/mrp/mrp.mrpbombyproduct.entity';

/**
 * MrpBomByproduct 实体接口
 * 对应数据库表: mrp_bom_byproduct
 */
export interface MrpBomByproductInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 MrpBomByproduct 的参数接口
 */
export interface CreateMrpBomByproductDTO extends Partial<MrpBomByproductInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 MrpBomByproduct 的参数接口
 */
export interface UpdateMrpBomByproductDTO extends Partial<MrpBomByproductInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 MrpBomByproduct 的参数接口
 */
export interface QueryMrpBomByproductDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof MrpBomByproductInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * MrpBomByproduct 分页查询结果接口
 */
export interface MrpBomByproductPageResult {
  data: MrpBomByproduct[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * MrpBomByproduct API 响应接口
 */
export interface MrpBomByproductResponse {
  success: boolean;
  message: string;
  data?: MrpBomByproduct | MrpBomByproduct[] | MrpBomByproductPageResult;
  error?: string;
}
