import { RelUploadGroups } from '../entity/rel/rel.reluploadgroups.entity';

/**
 * RelUploadGroups 实体接口
 * 对应数据库表: rel_upload_groups
 */
export interface RelUploadGroupsInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 RelUploadGroups 的参数接口
 */
export interface CreateRelUploadGroupsDTO extends Partial<RelUploadGroupsInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 RelUploadGroups 的参数接口
 */
export interface UpdateRelUploadGroupsDTO extends Partial<RelUploadGroupsInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 RelUploadGroups 的参数接口
 */
export interface QueryRelUploadGroupsDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof RelUploadGroupsInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * RelUploadGroups 分页查询结果接口
 */
export interface RelUploadGroupsPageResult {
  data: RelUploadGroups[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * RelUploadGroups API 响应接口
 */
export interface RelUploadGroupsResponse {
  success: boolean;
  message: string;
  data?: RelUploadGroups | RelUploadGroups[] | RelUploadGroupsPageResult;
  error?: string;
}
