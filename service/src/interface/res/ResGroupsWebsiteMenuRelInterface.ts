import { ResGroupsWebsiteMenuRel } from '../entity/res/res.resgroupswebsitemenurel.entity';

/**
 * ResGroupsWebsiteMenuRel 实体接口
 * 对应数据库表: res_groups_website_menu_rel
 */
export interface ResGroupsWebsiteMenuRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 ResGroupsWebsiteMenuRel 的参数接口
 */
export interface CreateResGroupsWebsiteMenuRelDTO extends Partial<ResGroupsWebsiteMenuRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 ResGroupsWebsiteMenuRel 的参数接口
 */
export interface UpdateResGroupsWebsiteMenuRelDTO extends Partial<ResGroupsWebsiteMenuRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 ResGroupsWebsiteMenuRel 的参数接口
 */
export interface QueryResGroupsWebsiteMenuRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof ResGroupsWebsiteMenuRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * ResGroupsWebsiteMenuRel 分页查询结果接口
 */
export interface ResGroupsWebsiteMenuRelPageResult {
  data: ResGroupsWebsiteMenuRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * ResGroupsWebsiteMenuRel API 响应接口
 */
export interface ResGroupsWebsiteMenuRelResponse {
  success: boolean;
  message: string;
  data?: ResGroupsWebsiteMenuRel | ResGroupsWebsiteMenuRel[] | ResGroupsWebsiteMenuRelPageResult;
  error?: string;
}
