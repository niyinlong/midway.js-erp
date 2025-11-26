import { MrpBomStockReplenishmentInfoRel } from '../entity/mrp/mrp.mrpbomstockreplenishmentinforel.entity';

/**
 * MrpBomStockReplenishmentInfoRel 实体接口
 * 对应数据库表: mrp_bom_stock_replenishment_info_rel
 */
export interface MrpBomStockReplenishmentInfoRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 MrpBomStockReplenishmentInfoRel 的参数接口
 */
export interface CreateMrpBomStockReplenishmentInfoRelDTO extends Partial<MrpBomStockReplenishmentInfoRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 MrpBomStockReplenishmentInfoRel 的参数接口
 */
export interface UpdateMrpBomStockReplenishmentInfoRelDTO extends Partial<MrpBomStockReplenishmentInfoRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 MrpBomStockReplenishmentInfoRel 的参数接口
 */
export interface QueryMrpBomStockReplenishmentInfoRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof MrpBomStockReplenishmentInfoRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * MrpBomStockReplenishmentInfoRel 分页查询结果接口
 */
export interface MrpBomStockReplenishmentInfoRelPageResult {
  data: MrpBomStockReplenishmentInfoRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * MrpBomStockReplenishmentInfoRel API 响应接口
 */
export interface MrpBomStockReplenishmentInfoRelResponse {
  success: boolean;
  message: string;
  data?: MrpBomStockReplenishmentInfoRel | MrpBomStockReplenishmentInfoRel[] | MrpBomStockReplenishmentInfoRelPageResult;
  error?: string;
}
