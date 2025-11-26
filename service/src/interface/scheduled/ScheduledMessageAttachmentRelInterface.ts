import { ScheduledMessageAttachmentRel } from '../entity/scheduled/scheduled.scheduledmessageattachmentrel.entity';

/**
 * ScheduledMessageAttachmentRel 实体接口
 * 对应数据库表: scheduled_message_attachment_rel
 */
export interface ScheduledMessageAttachmentRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 ScheduledMessageAttachmentRel 的参数接口
 */
export interface CreateScheduledMessageAttachmentRelDTO extends Partial<ScheduledMessageAttachmentRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 ScheduledMessageAttachmentRel 的参数接口
 */
export interface UpdateScheduledMessageAttachmentRelDTO extends Partial<ScheduledMessageAttachmentRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 ScheduledMessageAttachmentRel 的参数接口
 */
export interface QueryScheduledMessageAttachmentRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof ScheduledMessageAttachmentRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * ScheduledMessageAttachmentRel 分页查询结果接口
 */
export interface ScheduledMessageAttachmentRelPageResult {
  data: ScheduledMessageAttachmentRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * ScheduledMessageAttachmentRel API 响应接口
 */
export interface ScheduledMessageAttachmentRelResponse {
  success: boolean;
  message: string;
  data?: ScheduledMessageAttachmentRel | ScheduledMessageAttachmentRel[] | ScheduledMessageAttachmentRelPageResult;
  error?: string;
}
