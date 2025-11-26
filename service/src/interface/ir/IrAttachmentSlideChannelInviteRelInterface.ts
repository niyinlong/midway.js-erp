import { IrAttachmentSlideChannelInviteRel } from '../entity/ir/ir.irattachmentslidechannelinviterel.entity';

/**
 * IrAttachmentSlideChannelInviteRel 实体接口
 * 对应数据库表: ir_attachment_slide_channel_invite_rel
 */
export interface IrAttachmentSlideChannelInviteRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 IrAttachmentSlideChannelInviteRel 的参数接口
 */
export interface CreateIrAttachmentSlideChannelInviteRelDTO extends Partial<IrAttachmentSlideChannelInviteRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 IrAttachmentSlideChannelInviteRel 的参数接口
 */
export interface UpdateIrAttachmentSlideChannelInviteRelDTO extends Partial<IrAttachmentSlideChannelInviteRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 IrAttachmentSlideChannelInviteRel 的参数接口
 */
export interface QueryIrAttachmentSlideChannelInviteRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof IrAttachmentSlideChannelInviteRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * IrAttachmentSlideChannelInviteRel 分页查询结果接口
 */
export interface IrAttachmentSlideChannelInviteRelPageResult {
  data: IrAttachmentSlideChannelInviteRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * IrAttachmentSlideChannelInviteRel API 响应接口
 */
export interface IrAttachmentSlideChannelInviteRelResponse {
  success: boolean;
  message: string;
  data?: IrAttachmentSlideChannelInviteRel | IrAttachmentSlideChannelInviteRel[] | IrAttachmentSlideChannelInviteRelPageResult;
  error?: string;
}
