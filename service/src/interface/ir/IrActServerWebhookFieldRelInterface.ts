import { IrActServerWebhookFieldRel } from '../entity/ir/ir.iractserverwebhookfieldrel.entity';

/**
 * IrActServerWebhookFieldRel 实体接口
 * 对应数据库表: ir_act_server_webhook_field_rel
 */
export interface IrActServerWebhookFieldRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 IrActServerWebhookFieldRel 的参数接口
 */
export interface CreateIrActServerWebhookFieldRelDTO extends Partial<IrActServerWebhookFieldRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 IrActServerWebhookFieldRel 的参数接口
 */
export interface UpdateIrActServerWebhookFieldRelDTO extends Partial<IrActServerWebhookFieldRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 IrActServerWebhookFieldRel 的参数接口
 */
export interface QueryIrActServerWebhookFieldRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof IrActServerWebhookFieldRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * IrActServerWebhookFieldRel 分页查询结果接口
 */
export interface IrActServerWebhookFieldRelPageResult {
  data: IrActServerWebhookFieldRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * IrActServerWebhookFieldRel API 响应接口
 */
export interface IrActServerWebhookFieldRelResponse {
  success: boolean;
  message: string;
  data?: IrActServerWebhookFieldRel | IrActServerWebhookFieldRel[] | IrActServerWebhookFieldRelPageResult;
  error?: string;
}
