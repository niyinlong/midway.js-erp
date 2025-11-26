import { MrpWorkorderMoAnalyticRel } from '../entity/mrp/mrp.mrpworkordermoanalyticrel.entity';

/**
 * MrpWorkorderMoAnalyticRel 实体接口
 * 对应数据库表: mrp_workorder_mo_analytic_rel
 */
export interface MrpWorkorderMoAnalyticRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 MrpWorkorderMoAnalyticRel 的参数接口
 */
export interface CreateMrpWorkorderMoAnalyticRelDTO extends Partial<MrpWorkorderMoAnalyticRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 MrpWorkorderMoAnalyticRel 的参数接口
 */
export interface UpdateMrpWorkorderMoAnalyticRelDTO extends Partial<MrpWorkorderMoAnalyticRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 MrpWorkorderMoAnalyticRel 的参数接口
 */
export interface QueryMrpWorkorderMoAnalyticRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof MrpWorkorderMoAnalyticRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * MrpWorkorderMoAnalyticRel 分页查询结果接口
 */
export interface MrpWorkorderMoAnalyticRelPageResult {
  data: MrpWorkorderMoAnalyticRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * MrpWorkorderMoAnalyticRel API 响应接口
 */
export interface MrpWorkorderMoAnalyticRelResponse {
  success: boolean;
  message: string;
  data?: MrpWorkorderMoAnalyticRel | MrpWorkorderMoAnalyticRel[] | MrpWorkorderMoAnalyticRelPageResult;
  error?: string;
}
