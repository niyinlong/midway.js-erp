import { MrpWorkcenterMrpWorkcenterTagRel } from '../entity/mrp/mrp.mrpworkcentermrpworkcentertagrel.entity';

/**
 * MrpWorkcenterMrpWorkcenterTagRel 实体接口
 * 对应数据库表: mrp_workcenter_mrp_workcenter_tag_rel
 */
export interface MrpWorkcenterMrpWorkcenterTagRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 MrpWorkcenterMrpWorkcenterTagRel 的参数接口
 */
export interface CreateMrpWorkcenterMrpWorkcenterTagRelDTO extends Partial<MrpWorkcenterMrpWorkcenterTagRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 MrpWorkcenterMrpWorkcenterTagRel 的参数接口
 */
export interface UpdateMrpWorkcenterMrpWorkcenterTagRelDTO extends Partial<MrpWorkcenterMrpWorkcenterTagRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 MrpWorkcenterMrpWorkcenterTagRel 的参数接口
 */
export interface QueryMrpWorkcenterMrpWorkcenterTagRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof MrpWorkcenterMrpWorkcenterTagRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * MrpWorkcenterMrpWorkcenterTagRel 分页查询结果接口
 */
export interface MrpWorkcenterMrpWorkcenterTagRelPageResult {
  data: MrpWorkcenterMrpWorkcenterTagRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * MrpWorkcenterMrpWorkcenterTagRel API 响应接口
 */
export interface MrpWorkcenterMrpWorkcenterTagRelResponse {
  success: boolean;
  message: string;
  data?: MrpWorkcenterMrpWorkcenterTagRel | MrpWorkcenterMrpWorkcenterTagRel[] | MrpWorkcenterMrpWorkcenterTagRelPageResult;
  error?: string;
}
