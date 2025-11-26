import { UtmSource } from '../entity/utm/utm.utmsource.entity';

/**
 * UtmSource 实体接口
 * 对应数据库表: utm_source
 */
export interface UtmSourceInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 UtmSource 的参数接口
 */
export interface CreateUtmSourceDTO extends Partial<UtmSourceInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 UtmSource 的参数接口
 */
export interface UpdateUtmSourceDTO extends Partial<UtmSourceInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 UtmSource 的参数接口
 */
export interface QueryUtmSourceDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof UtmSourceInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * UtmSource 分页查询结果接口
 */
export interface UtmSourcePageResult {
  data: UtmSource[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * UtmSource API 响应接口
 */
export interface UtmSourceResponse {
  success: boolean;
  message: string;
  data?: UtmSource | UtmSource[] | UtmSourcePageResult;
  error?: string;
}
