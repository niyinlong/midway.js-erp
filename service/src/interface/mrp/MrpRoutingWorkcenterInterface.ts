import { MrpRoutingWorkcenter } from '../entity/mrp/mrp.mrproutingworkcenter.entity';

/**
 * MrpRoutingWorkcenter 实体接口
 * 对应数据库表: mrp_routing_workcenter
 */
export interface MrpRoutingWorkcenterInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 MrpRoutingWorkcenter 的参数接口
 */
export interface CreateMrpRoutingWorkcenterDTO extends Partial<MrpRoutingWorkcenterInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 MrpRoutingWorkcenter 的参数接口
 */
export interface UpdateMrpRoutingWorkcenterDTO extends Partial<MrpRoutingWorkcenterInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 MrpRoutingWorkcenter 的参数接口
 */
export interface QueryMrpRoutingWorkcenterDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof MrpRoutingWorkcenterInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * MrpRoutingWorkcenter 分页查询结果接口
 */
export interface MrpRoutingWorkcenterPageResult {
  data: MrpRoutingWorkcenter[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * MrpRoutingWorkcenter API 响应接口
 */
export interface MrpRoutingWorkcenterResponse {
  success: boolean;
  message: string;
  data?: MrpRoutingWorkcenter | MrpRoutingWorkcenter[] | MrpRoutingWorkcenterPageResult;
  error?: string;
}
