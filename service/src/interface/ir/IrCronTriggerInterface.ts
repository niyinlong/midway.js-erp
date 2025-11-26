import { IrCronTrigger } from '../entity/ir/ir.ircrontrigger.entity';

/**
 * IrCronTrigger 实体接口
 * 对应数据库表: ir_cron_trigger
 */
export interface IrCronTriggerInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 IrCronTrigger 的参数接口
 */
export interface CreateIrCronTriggerDTO extends Partial<IrCronTriggerInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 IrCronTrigger 的参数接口
 */
export interface UpdateIrCronTriggerDTO extends Partial<IrCronTriggerInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 IrCronTrigger 的参数接口
 */
export interface QueryIrCronTriggerDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof IrCronTriggerInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * IrCronTrigger 分页查询结果接口
 */
export interface IrCronTriggerPageResult {
  data: IrCronTrigger[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * IrCronTrigger API 响应接口
 */
export interface IrCronTriggerResponse {
  success: boolean;
  message: string;
  data?: IrCronTrigger | IrCronTrigger[] | IrCronTriggerPageResult;
  error?: string;
}
