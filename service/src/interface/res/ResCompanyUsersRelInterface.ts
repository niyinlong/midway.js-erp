import { ResCompanyUsersRel } from '../entity/res/res.rescompanyusersrel.entity';

/**
 * ResCompanyUsersRel 实体接口
 * 对应数据库表: res_company_users_rel
 */
export interface ResCompanyUsersRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 ResCompanyUsersRel 的参数接口
 */
export interface CreateResCompanyUsersRelDTO extends Partial<ResCompanyUsersRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 ResCompanyUsersRel 的参数接口
 */
export interface UpdateResCompanyUsersRelDTO extends Partial<ResCompanyUsersRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 ResCompanyUsersRel 的参数接口
 */
export interface QueryResCompanyUsersRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof ResCompanyUsersRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * ResCompanyUsersRel 分页查询结果接口
 */
export interface ResCompanyUsersRelPageResult {
  data: ResCompanyUsersRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * ResCompanyUsersRel API 响应接口
 */
export interface ResCompanyUsersRelResponse {
  success: boolean;
  message: string;
  data?: ResCompanyUsersRel | ResCompanyUsersRel[] | ResCompanyUsersRelPageResult;
  error?: string;
}
