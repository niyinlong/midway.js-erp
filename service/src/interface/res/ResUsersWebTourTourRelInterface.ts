import { ResUsersWebTourTourRel } from '../entity/res/res.resuserswebtourtourrel.entity';

/**
 * ResUsersWebTourTourRel 实体接口
 * 对应数据库表: res_users_web_tour_tour_rel
 */
export interface ResUsersWebTourTourRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 ResUsersWebTourTourRel 的参数接口
 */
export interface CreateResUsersWebTourTourRelDTO extends Partial<ResUsersWebTourTourRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 ResUsersWebTourTourRel 的参数接口
 */
export interface UpdateResUsersWebTourTourRelDTO extends Partial<ResUsersWebTourTourRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 ResUsersWebTourTourRel 的参数接口
 */
export interface QueryResUsersWebTourTourRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof ResUsersWebTourTourRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * ResUsersWebTourTourRel 分页查询结果接口
 */
export interface ResUsersWebTourTourRelPageResult {
  data: ResUsersWebTourTourRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * ResUsersWebTourTourRel API 响应接口
 */
export interface ResUsersWebTourTourRelResponse {
  success: boolean;
  message: string;
  data?: ResUsersWebTourTourRel | ResUsersWebTourTourRel[] | ResUsersWebTourTourRelPageResult;
  error?: string;
}
