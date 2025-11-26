import { HrVersion } from '../entity/hr/hr.hrversion.entity';

/**
 * HrVersion 实体接口
 * 对应数据库表: hr_version
 */
export interface HrVersionInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 HrVersion 的参数接口
 */
export interface CreateHrVersionDTO extends Partial<HrVersionInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 HrVersion 的参数接口
 */
export interface UpdateHrVersionDTO extends Partial<HrVersionInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 HrVersion 的参数接口
 */
export interface QueryHrVersionDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof HrVersionInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * HrVersion 分页查询结果接口
 */
export interface HrVersionPageResult {
  data: HrVersion[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * HrVersion API 响应接口
 */
export interface HrVersionResponse {
  success: boolean;
  message: string;
  data?: HrVersion | HrVersion[] | HrVersionPageResult;
  error?: string;
}
