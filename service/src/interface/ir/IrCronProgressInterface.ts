import { IrCronProgress } from '../entity/ir/ir.ircronprogress.entity';

/**
 * IrCronProgress 实体接口
 * 对应数据库表: ir_cron_progress
 */
export interface IrCronProgressInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 IrCronProgress 的参数接口
 */
export interface CreateIrCronProgressDTO extends Partial<IrCronProgressInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 IrCronProgress 的参数接口
 */
export interface UpdateIrCronProgressDTO extends Partial<IrCronProgressInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 IrCronProgress 的参数接口
 */
export interface QueryIrCronProgressDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof IrCronProgressInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * IrCronProgress 分页查询结果接口
 */
export interface IrCronProgressPageResult {
  data: IrCronProgress[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * IrCronProgress API 响应接口
 */
export interface IrCronProgressResponse {
  success: boolean;
  message: string;
  data?: IrCronProgress | IrCronProgress[] | IrCronProgressPageResult;
  error?: string;
}
