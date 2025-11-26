import { ResCompany } from '../entity/res/res.rescompany.entity';

/**
 * ResCompany 实体接口
 * 对应数据库表: res_company
 */
export interface ResCompanyInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 ResCompany 的参数接口
 */
export interface CreateResCompanyDTO extends Partial<ResCompanyInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 ResCompany 的参数接口
 */
export interface UpdateResCompanyDTO extends Partial<ResCompanyInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 ResCompany 的参数接口
 */
export interface QueryResCompanyDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof ResCompanyInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * ResCompany 分页查询结果接口
 */
export interface ResCompanyPageResult {
  data: ResCompany[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * ResCompany API 响应接口
 */
export interface ResCompanyResponse {
  success: boolean;
  message: string;
  data?: ResCompany | ResCompany[] | ResCompanyPageResult;
  error?: string;
}
