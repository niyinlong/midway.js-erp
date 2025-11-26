import { MrpWorkcenterTag } from '../entity/mrp/mrp.mrpworkcentertag.entity';

/**
 * MrpWorkcenterTag 实体接口
 * 对应数据库表: mrp_workcenter_tag
 */
export interface MrpWorkcenterTagInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 MrpWorkcenterTag 的参数接口
 */
export interface CreateMrpWorkcenterTagDTO extends Partial<MrpWorkcenterTagInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 MrpWorkcenterTag 的参数接口
 */
export interface UpdateMrpWorkcenterTagDTO extends Partial<MrpWorkcenterTagInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 MrpWorkcenterTag 的参数接口
 */
export interface QueryMrpWorkcenterTagDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof MrpWorkcenterTagInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * MrpWorkcenterTag 分页查询结果接口
 */
export interface MrpWorkcenterTagPageResult {
  data: MrpWorkcenterTag[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * MrpWorkcenterTag API 响应接口
 */
export interface MrpWorkcenterTagResponse {
  success: boolean;
  message: string;
  data?: MrpWorkcenterTag | MrpWorkcenterTag[] | MrpWorkcenterTagPageResult;
  error?: string;
}
