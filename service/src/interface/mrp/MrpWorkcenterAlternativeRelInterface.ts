import { MrpWorkcenterAlternativeRel } from '../entity/mrp/mrp.mrpworkcenteralternativerel.entity';

/**
 * MrpWorkcenterAlternativeRel 实体接口
 * 对应数据库表: mrp_workcenter_alternative_rel
 */
export interface MrpWorkcenterAlternativeRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 MrpWorkcenterAlternativeRel 的参数接口
 */
export interface CreateMrpWorkcenterAlternativeRelDTO extends Partial<MrpWorkcenterAlternativeRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 MrpWorkcenterAlternativeRel 的参数接口
 */
export interface UpdateMrpWorkcenterAlternativeRelDTO extends Partial<MrpWorkcenterAlternativeRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 MrpWorkcenterAlternativeRel 的参数接口
 */
export interface QueryMrpWorkcenterAlternativeRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof MrpWorkcenterAlternativeRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * MrpWorkcenterAlternativeRel 分页查询结果接口
 */
export interface MrpWorkcenterAlternativeRelPageResult {
  data: MrpWorkcenterAlternativeRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * MrpWorkcenterAlternativeRel API 响应接口
 */
export interface MrpWorkcenterAlternativeRelResponse {
  success: boolean;
  message: string;
  data?: MrpWorkcenterAlternativeRel | MrpWorkcenterAlternativeRel[] | MrpWorkcenterAlternativeRelPageResult;
  error?: string;
}
