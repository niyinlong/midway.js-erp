import { IrSequenceDateRange } from '../entity/ir/ir.irsequencedaterange.entity';

/**
 * IrSequenceDateRange 实体接口
 * 对应数据库表: ir_sequence_date_range
 */
export interface IrSequenceDateRangeInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 IrSequenceDateRange 的参数接口
 */
export interface CreateIrSequenceDateRangeDTO extends Partial<IrSequenceDateRangeInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 IrSequenceDateRange 的参数接口
 */
export interface UpdateIrSequenceDateRangeDTO extends Partial<IrSequenceDateRangeInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 IrSequenceDateRange 的参数接口
 */
export interface QueryIrSequenceDateRangeDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof IrSequenceDateRangeInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * IrSequenceDateRange 分页查询结果接口
 */
export interface IrSequenceDateRangePageResult {
  data: IrSequenceDateRange[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * IrSequenceDateRange API 响应接口
 */
export interface IrSequenceDateRangeResponse {
  success: boolean;
  message: string;
  data?: IrSequenceDateRange | IrSequenceDateRange[] | IrSequenceDateRangePageResult;
  error?: string;
}
