import { MrpRoutingWorkcenterDependenciesRel } from '../entity/mrp/mrp.mrproutingworkcenterdependenciesrel.entity';

/**
 * MrpRoutingWorkcenterDependenciesRel 实体接口
 * 对应数据库表: mrp_routing_workcenter_dependencies_rel
 */
export interface MrpRoutingWorkcenterDependenciesRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 MrpRoutingWorkcenterDependenciesRel 的参数接口
 */
export interface CreateMrpRoutingWorkcenterDependenciesRelDTO extends Partial<MrpRoutingWorkcenterDependenciesRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 MrpRoutingWorkcenterDependenciesRel 的参数接口
 */
export interface UpdateMrpRoutingWorkcenterDependenciesRelDTO extends Partial<MrpRoutingWorkcenterDependenciesRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 MrpRoutingWorkcenterDependenciesRel 的参数接口
 */
export interface QueryMrpRoutingWorkcenterDependenciesRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof MrpRoutingWorkcenterDependenciesRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * MrpRoutingWorkcenterDependenciesRel 分页查询结果接口
 */
export interface MrpRoutingWorkcenterDependenciesRelPageResult {
  data: MrpRoutingWorkcenterDependenciesRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * MrpRoutingWorkcenterDependenciesRel API 响应接口
 */
export interface MrpRoutingWorkcenterDependenciesRelResponse {
  success: boolean;
  message: string;
  data?: MrpRoutingWorkcenterDependenciesRel | MrpRoutingWorkcenterDependenciesRel[] | MrpRoutingWorkcenterDependenciesRelPageResult;
  error?: string;
}
