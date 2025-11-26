import { CrmTag } from '../entity/crm/crm.crmtag.entity';

/**
 * CrmTag 实体接口
 * 对应数据库表: crm_tag
 */
export interface CrmTagInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 CrmTag 的参数接口
 */
export interface CreateCrmTagDTO extends Partial<CrmTagInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 CrmTag 的参数接口
 */
export interface UpdateCrmTagDTO extends Partial<CrmTagInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 CrmTag 的参数接口
 */
export interface QueryCrmTagDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof CrmTagInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * CrmTag 分页查询结果接口
 */
export interface CrmTagPageResult {
  data: CrmTag[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * CrmTag API 响应接口
 */
export interface CrmTagResponse {
  success: boolean;
  message: string;
  data?: CrmTag | CrmTag[] | CrmTagPageResult;
  error?: string;
}
