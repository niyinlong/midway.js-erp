import { UtmTagRel } from '../entity/utm/utm.utmtagrel.entity';

/**
 * UtmTagRel 实体接口
 * 对应数据库表: utm_tag_rel
 */
export interface UtmTagRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 UtmTagRel 的参数接口
 */
export interface CreateUtmTagRelDTO extends Partial<UtmTagRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 UtmTagRel 的参数接口
 */
export interface UpdateUtmTagRelDTO extends Partial<UtmTagRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 UtmTagRel 的参数接口
 */
export interface QueryUtmTagRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof UtmTagRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * UtmTagRel 分页查询结果接口
 */
export interface UtmTagRelPageResult {
  data: UtmTagRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * UtmTagRel API 响应接口
 */
export interface UtmTagRelResponse {
  success: boolean;
  message: string;
  data?: UtmTagRel | UtmTagRel[] | UtmTagRelPageResult;
  error?: string;
}
