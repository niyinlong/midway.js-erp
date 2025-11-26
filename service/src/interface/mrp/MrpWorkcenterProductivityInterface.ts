import { MrpWorkcenterProductivity } from '../entity/mrp/mrp.mrpworkcenterproductivity.entity';

/**
 * MrpWorkcenterProductivity 实体接口
 * 对应数据库表: mrp_workcenter_productivity
 */
export interface MrpWorkcenterProductivityInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 MrpWorkcenterProductivity 的参数接口
 */
export interface CreateMrpWorkcenterProductivityDTO extends Partial<MrpWorkcenterProductivityInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 MrpWorkcenterProductivity 的参数接口
 */
export interface UpdateMrpWorkcenterProductivityDTO extends Partial<MrpWorkcenterProductivityInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 MrpWorkcenterProductivity 的参数接口
 */
export interface QueryMrpWorkcenterProductivityDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof MrpWorkcenterProductivityInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * MrpWorkcenterProductivity 分页查询结果接口
 */
export interface MrpWorkcenterProductivityPageResult {
  data: MrpWorkcenterProductivity[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * MrpWorkcenterProductivity API 响应接口
 */
export interface MrpWorkcenterProductivityResponse {
  success: boolean;
  message: string;
  data?: MrpWorkcenterProductivity | MrpWorkcenterProductivity[] | MrpWorkcenterProductivityPageResult;
  error?: string;
}
