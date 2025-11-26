import { IrSequence } from '../entity/ir/ir.irsequence.entity';

/**
 * IrSequence 实体接口
 * 对应数据库表: ir_sequence
 */
export interface IrSequenceInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 IrSequence 的参数接口
 */
export interface CreateIrSequenceDTO extends Partial<IrSequenceInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 IrSequence 的参数接口
 */
export interface UpdateIrSequenceDTO extends Partial<IrSequenceInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 IrSequence 的参数接口
 */
export interface QueryIrSequenceDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof IrSequenceInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * IrSequence 分页查询结果接口
 */
export interface IrSequencePageResult {
  data: IrSequence[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * IrSequence API 响应接口
 */
export interface IrSequenceResponse {
  success: boolean;
  message: string;
  data?: IrSequence | IrSequence[] | IrSequencePageResult;
  error?: string;
}
