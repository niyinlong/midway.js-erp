import { ResourceResource } from '../entity/resource/resource.resourceresource.entity';

/**
 * ResourceResource 实体接口
 * 对应数据库表: resource_resource
 */
export interface ResourceResourceInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 ResourceResource 的参数接口
 */
export interface CreateResourceResourceDTO extends Partial<ResourceResourceInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 ResourceResource 的参数接口
 */
export interface UpdateResourceResourceDTO extends Partial<ResourceResourceInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 ResourceResource 的参数接口
 */
export interface QueryResourceResourceDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof ResourceResourceInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * ResourceResource 分页查询结果接口
 */
export interface ResourceResourcePageResult {
  data: ResourceResource[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * ResourceResource API 响应接口
 */
export interface ResourceResourceResponse {
  success: boolean;
  message: string;
  data?: ResourceResource | ResourceResource[] | ResourceResourcePageResult;
  error?: string;
}
