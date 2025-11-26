import { ResGroupsImpliedRel } from '../entity/res/res.resgroupsimpliedrel.entity';

/**
 * ResGroupsImpliedRel 实体接口
 * 对应数据库表: res_groups_implied_rel
 */
export interface ResGroupsImpliedRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 ResGroupsImpliedRel 的参数接口
 */
export interface CreateResGroupsImpliedRelDTO extends Partial<ResGroupsImpliedRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 ResGroupsImpliedRel 的参数接口
 */
export interface UpdateResGroupsImpliedRelDTO extends Partial<ResGroupsImpliedRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 ResGroupsImpliedRel 的参数接口
 */
export interface QueryResGroupsImpliedRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof ResGroupsImpliedRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * ResGroupsImpliedRel 分页查询结果接口
 */
export interface ResGroupsImpliedRelPageResult {
  data: ResGroupsImpliedRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * ResGroupsImpliedRel API 响应接口
 */
export interface ResGroupsImpliedRelResponse {
  success: boolean;
  message: string;
  data?: ResGroupsImpliedRel | ResGroupsImpliedRel[] | ResGroupsImpliedRelPageResult;
  error?: string;
}
