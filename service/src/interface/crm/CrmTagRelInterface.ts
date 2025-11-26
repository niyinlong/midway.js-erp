import { CrmTagRel } from '../entity/crm/crm.crmtagrel.entity';

/**
 * CrmTagRel 实体接口
 * 对应数据库表: crm_tag_rel
 */
export interface CrmTagRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 CrmTagRel 的参数接口
 */
export interface CreateCrmTagRelDTO extends Partial<CrmTagRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 CrmTagRel 的参数接口
 */
export interface UpdateCrmTagRelDTO extends Partial<CrmTagRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 CrmTagRel 的参数接口
 */
export interface QueryCrmTagRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof CrmTagRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * CrmTagRel 分页查询结果接口
 */
export interface CrmTagRelPageResult {
  data: CrmTagRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * CrmTagRel API 响应接口
 */
export interface CrmTagRelResponse {
  success: boolean;
  message: string;
  data?: CrmTagRel | CrmTagRel[] | CrmTagRelPageResult;
  error?: string;
}
