import { MrpWorkorder } from '../entity/mrp/mrp.mrpworkorder.entity';

/**
 * MrpWorkorder 实体接口
 * 对应数据库表: mrp_workorder
 */
export interface MrpWorkorderInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 MrpWorkorder 的参数接口
 */
export interface CreateMrpWorkorderDTO extends Partial<MrpWorkorderInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 MrpWorkorder 的参数接口
 */
export interface UpdateMrpWorkorderDTO extends Partial<MrpWorkorderInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 MrpWorkorder 的参数接口
 */
export interface QueryMrpWorkorderDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof MrpWorkorderInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * MrpWorkorder 分页查询结果接口
 */
export interface MrpWorkorderPageResult {
  data: MrpWorkorder[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * MrpWorkorder API 响应接口
 */
export interface MrpWorkorderResponse {
  success: boolean;
  message: string;
  data?: MrpWorkorder | MrpWorkorder[] | MrpWorkorderPageResult;
  error?: string;
}
