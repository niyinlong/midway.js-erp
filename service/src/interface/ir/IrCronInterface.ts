import { IrCron } from '../entity/ir/ir.ircron.entity';

/**
 * IrCron 实体接口
 * 对应数据库表: ir_cron
 */
export interface IrCronInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 IrCron 的参数接口
 */
export interface CreateIrCronDTO extends Partial<IrCronInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 IrCron 的参数接口
 */
export interface UpdateIrCronDTO extends Partial<IrCronInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 IrCron 的参数接口
 */
export interface QueryIrCronDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof IrCronInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * IrCron 分页查询结果接口
 */
export interface IrCronPageResult {
  data: IrCron[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * IrCron API 响应接口
 */
export interface IrCronResponse {
  success: boolean;
  message: string;
  data?: IrCron | IrCron[] | IrCronPageResult;
  error?: string;
}
