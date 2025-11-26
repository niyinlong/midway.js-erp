import { MeetingCategoryRel } from '../entity/meeting/meeting.meetingcategoryrel.entity';

/**
 * MeetingCategoryRel 实体接口
 * 对应数据库表: meeting_category_rel
 */
export interface MeetingCategoryRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 MeetingCategoryRel 的参数接口
 */
export interface CreateMeetingCategoryRelDTO extends Partial<MeetingCategoryRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 MeetingCategoryRel 的参数接口
 */
export interface UpdateMeetingCategoryRelDTO extends Partial<MeetingCategoryRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 MeetingCategoryRel 的参数接口
 */
export interface QueryMeetingCategoryRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof MeetingCategoryRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * MeetingCategoryRel 分页查询结果接口
 */
export interface MeetingCategoryRelPageResult {
  data: MeetingCategoryRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * MeetingCategoryRel API 响应接口
 */
export interface MeetingCategoryRelResponse {
  success: boolean;
  message: string;
  data?: MeetingCategoryRel | MeetingCategoryRel[] | MeetingCategoryRelPageResult;
  error?: string;
}
