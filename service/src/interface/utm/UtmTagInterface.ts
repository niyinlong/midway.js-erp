import { UtmTag } from '../entity/utm/utm.utmtag.entity';

/**
 * UtmTag 实体接口
 * 对应数据库表: utm_tag
 */
export interface UtmTagInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 UtmTag 的参数接口
 */
export interface CreateUtmTagDTO extends Partial<UtmTagInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 UtmTag 的参数接口
 */
export interface UpdateUtmTagDTO extends Partial<UtmTagInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 UtmTag 的参数接口
 */
export interface QueryUtmTagDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof UtmTagInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * UtmTag 分页查询结果接口
 */
export interface UtmTagPageResult {
  data: UtmTag[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * UtmTag API 响应接口
 */
export interface UtmTagResponse {
  success: boolean;
  message: string;
  data?: UtmTag | UtmTag[] | UtmTagPageResult;
  error?: string;
}
