import { PickingLabelType } from '../entity/picking/picking.pickinglabeltype.entity';

/**
 * PickingLabelType 实体接口
 * 对应数据库表: picking_label_type
 */
export interface PickingLabelTypeInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 PickingLabelType 的参数接口
 */
export interface CreatePickingLabelTypeDTO extends Partial<PickingLabelTypeInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 PickingLabelType 的参数接口
 */
export interface UpdatePickingLabelTypeDTO extends Partial<PickingLabelTypeInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 PickingLabelType 的参数接口
 */
export interface QueryPickingLabelTypeDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof PickingLabelTypeInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * PickingLabelType 分页查询结果接口
 */
export interface PickingLabelTypePageResult {
  data: PickingLabelType[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * PickingLabelType API 响应接口
 */
export interface PickingLabelTypeResponse {
  success: boolean;
  message: string;
  data?: PickingLabelType | PickingLabelType[] | PickingLabelTypePageResult;
  error?: string;
}
