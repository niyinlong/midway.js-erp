import { MessageAttachmentRel } from '../entity/message/message.messageattachmentrel.entity';

/**
 * MessageAttachmentRel 实体接口
 * 对应数据库表: message_attachment_rel
 */
export interface MessageAttachmentRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 MessageAttachmentRel 的参数接口
 */
export interface CreateMessageAttachmentRelDTO extends Partial<MessageAttachmentRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 MessageAttachmentRel 的参数接口
 */
export interface UpdateMessageAttachmentRelDTO extends Partial<MessageAttachmentRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 MessageAttachmentRel 的参数接口
 */
export interface QueryMessageAttachmentRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof MessageAttachmentRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * MessageAttachmentRel 分页查询结果接口
 */
export interface MessageAttachmentRelPageResult {
  data: MessageAttachmentRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * MessageAttachmentRel API 响应接口
 */
export interface MessageAttachmentRelResponse {
  success: boolean;
  message: string;
  data?: MessageAttachmentRel | MessageAttachmentRel[] | MessageAttachmentRelPageResult;
  error?: string;
}
