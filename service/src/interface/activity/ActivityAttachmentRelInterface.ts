import { ActivityAttachmentRel } from '../entity/activity/activity.activityattachmentrel.entity';

/**
 * ActivityAttachmentRel 实体接口
 * 对应数据库表: activity_attachment_rel
 */
export interface ActivityAttachmentRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 ActivityAttachmentRel 的参数接口
 */
export interface CreateActivityAttachmentRelDTO extends Partial<ActivityAttachmentRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 ActivityAttachmentRel 的参数接口
 */
export interface UpdateActivityAttachmentRelDTO extends Partial<ActivityAttachmentRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 ActivityAttachmentRel 的参数接口
 */
export interface QueryActivityAttachmentRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof ActivityAttachmentRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * ActivityAttachmentRel 分页查询结果接口
 */
export interface ActivityAttachmentRelPageResult {
  data: ActivityAttachmentRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * ActivityAttachmentRel API 响应接口
 */
export interface ActivityAttachmentRelResponse {
  success: boolean;
  message: string;
  data?: ActivityAttachmentRel | ActivityAttachmentRel[] | ActivityAttachmentRelPageResult;
  error?: string;
}
