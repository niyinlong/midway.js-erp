import { IrAttachment } from '../entity/ir/ir.irattachment.entity';

/**
 * IrAttachment 实体接口
 * 对应数据库表: ir_attachment
 */
export interface IrAttachmentInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 IrAttachment 的参数接口
 */
export interface CreateIrAttachmentDTO extends Partial<IrAttachmentInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 IrAttachment 的参数接口
 */
export interface UpdateIrAttachmentDTO extends Partial<IrAttachmentInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 IrAttachment 的参数接口
 */
export interface QueryIrAttachmentDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof IrAttachmentInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * IrAttachment 分页查询结果接口
 */
export interface IrAttachmentPageResult {
  data: IrAttachment[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * IrAttachment API 响应接口
 */
export interface IrAttachmentResponse {
  success: boolean;
  message: string;
  data?: IrAttachment | IrAttachment[] | IrAttachmentPageResult;
  error?: string;
}
