import { MrpWorkcenterProductivityLoss } from '../entity/mrp/mrp.mrpworkcenterproductivityloss.entity';

/**
 * MrpWorkcenterProductivityLoss 实体接口
 * 对应数据库表: mrp_workcenter_productivity_loss
 */
export interface MrpWorkcenterProductivityLossInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 MrpWorkcenterProductivityLoss 的参数接口
 */
export interface CreateMrpWorkcenterProductivityLossDTO extends Partial<MrpWorkcenterProductivityLossInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 MrpWorkcenterProductivityLoss 的参数接口
 */
export interface UpdateMrpWorkcenterProductivityLossDTO extends Partial<MrpWorkcenterProductivityLossInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 MrpWorkcenterProductivityLoss 的参数接口
 */
export interface QueryMrpWorkcenterProductivityLossDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof MrpWorkcenterProductivityLossInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * MrpWorkcenterProductivityLoss 分页查询结果接口
 */
export interface MrpWorkcenterProductivityLossPageResult {
  data: MrpWorkcenterProductivityLoss[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * MrpWorkcenterProductivityLoss API 响应接口
 */
export interface MrpWorkcenterProductivityLossResponse {
  success: boolean;
  message: string;
  data?: MrpWorkcenterProductivityLoss | MrpWorkcenterProductivityLoss[] | MrpWorkcenterProductivityLossPageResult;
  error?: string;
}
