import { UtmMedium } from '../entity/utm/utm.utmmedium.entity';

/**
 * UtmMedium 实体接口
 * 对应数据库表: utm_medium
 */
export interface UtmMediumInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 UtmMedium 的参数接口
 */
export interface CreateUtmMediumDTO extends Partial<UtmMediumInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 UtmMedium 的参数接口
 */
export interface UpdateUtmMediumDTO extends Partial<UtmMediumInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 UtmMedium 的参数接口
 */
export interface QueryUtmMediumDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof UtmMediumInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * UtmMedium 分页查询结果接口
 */
export interface UtmMediumPageResult {
  data: UtmMedium[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * UtmMedium API 响应接口
 */
export interface UtmMediumResponse {
  success: boolean;
  message: string;
  data?: UtmMedium | UtmMedium[] | UtmMediumPageResult;
  error?: string;
}
