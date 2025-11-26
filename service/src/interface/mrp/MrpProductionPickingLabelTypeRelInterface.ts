import { MrpProductionPickingLabelTypeRel } from '../entity/mrp/mrp.mrpproductionpickinglabeltyperel.entity';

/**
 * MrpProductionPickingLabelTypeRel 实体接口
 * 对应数据库表: mrp_production_picking_label_type_rel
 */
export interface MrpProductionPickingLabelTypeRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 MrpProductionPickingLabelTypeRel 的参数接口
 */
export interface CreateMrpProductionPickingLabelTypeRelDTO extends Partial<MrpProductionPickingLabelTypeRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 MrpProductionPickingLabelTypeRel 的参数接口
 */
export interface UpdateMrpProductionPickingLabelTypeRelDTO extends Partial<MrpProductionPickingLabelTypeRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 MrpProductionPickingLabelTypeRel 的参数接口
 */
export interface QueryMrpProductionPickingLabelTypeRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof MrpProductionPickingLabelTypeRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * MrpProductionPickingLabelTypeRel 分页查询结果接口
 */
export interface MrpProductionPickingLabelTypeRelPageResult {
  data: MrpProductionPickingLabelTypeRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * MrpProductionPickingLabelTypeRel API 响应接口
 */
export interface MrpProductionPickingLabelTypeRelResponse {
  success: boolean;
  message: string;
  data?: MrpProductionPickingLabelTypeRel | MrpProductionPickingLabelTypeRel[] | MrpProductionPickingLabelTypeRelPageResult;
  error?: string;
}
