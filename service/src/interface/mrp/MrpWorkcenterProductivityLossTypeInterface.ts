import { MrpWorkcenterProductivityLossType } from '../entity/mrp/mrp.mrpworkcenterproductivitylosstype.entity';

/**
 * MrpWorkcenterProductivityLossType 实体接口
 * 对应数据库表: mrp_workcenter_productivity_loss_type
 */
export interface MrpWorkcenterProductivityLossTypeInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 MrpWorkcenterProductivityLossType 的参数接口
 */
export interface CreateMrpWorkcenterProductivityLossTypeDTO extends Partial<MrpWorkcenterProductivityLossTypeInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 MrpWorkcenterProductivityLossType 的参数接口
 */
export interface UpdateMrpWorkcenterProductivityLossTypeDTO extends Partial<MrpWorkcenterProductivityLossTypeInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 MrpWorkcenterProductivityLossType 的参数接口
 */
export interface QueryMrpWorkcenterProductivityLossTypeDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof MrpWorkcenterProductivityLossTypeInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * MrpWorkcenterProductivityLossType 分页查询结果接口
 */
export interface MrpWorkcenterProductivityLossTypePageResult {
  data: MrpWorkcenterProductivityLossType[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * MrpWorkcenterProductivityLossType API 响应接口
 */
export interface MrpWorkcenterProductivityLossTypeResponse {
  success: boolean;
  message: string;
  data?: MrpWorkcenterProductivityLossType | MrpWorkcenterProductivityLossType[] | MrpWorkcenterProductivityLossTypePageResult;
  error?: string;
}
