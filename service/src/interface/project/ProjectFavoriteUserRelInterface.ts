import { ProjectFavoriteUserRel } from '../entity/project/project.projectfavoriteuserrel.entity';

/**
 * ProjectFavoriteUserRel 实体接口
 * 对应数据库表: project_favorite_user_rel
 */
export interface ProjectFavoriteUserRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 ProjectFavoriteUserRel 的参数接口
 */
export interface CreateProjectFavoriteUserRelDTO extends Partial<ProjectFavoriteUserRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 ProjectFavoriteUserRel 的参数接口
 */
export interface UpdateProjectFavoriteUserRelDTO extends Partial<ProjectFavoriteUserRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 ProjectFavoriteUserRel 的参数接口
 */
export interface QueryProjectFavoriteUserRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof ProjectFavoriteUserRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * ProjectFavoriteUserRel 分页查询结果接口
 */
export interface ProjectFavoriteUserRelPageResult {
  data: ProjectFavoriteUserRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * ProjectFavoriteUserRel API 响应接口
 */
export interface ProjectFavoriteUserRelResponse {
  success: boolean;
  message: string;
  data?: ProjectFavoriteUserRel | ProjectFavoriteUserRel[] | ProjectFavoriteUserRelPageResult;
  error?: string;
}
