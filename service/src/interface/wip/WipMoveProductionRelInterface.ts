import { WipMoveProductionRel } from '../entity/wip/wip.wipmoveproductionrel.entity';

/**
 * WipMoveProductionRel 实体接口
 * 对应数据库表: wip_move_production_rel
 */
export interface WipMoveProductionRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 WipMoveProductionRel 的参数接口
 */
export interface CreateWipMoveProductionRelDTO extends Partial<WipMoveProductionRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 WipMoveProductionRel 的参数接口
 */
export interface UpdateWipMoveProductionRelDTO extends Partial<WipMoveProductionRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 WipMoveProductionRel 的参数接口
 */
export interface QueryWipMoveProductionRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof WipMoveProductionRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * WipMoveProductionRel 分页查询结果接口
 */
export interface WipMoveProductionRelPageResult {
  data: WipMoveProductionRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * WipMoveProductionRel API 响应接口
 */
export interface WipMoveProductionRelResponse {
  success: boolean;
  message: string;
  data?: WipMoveProductionRel | WipMoveProductionRel[] | WipMoveProductionRelPageResult;
  error?: string;
}
