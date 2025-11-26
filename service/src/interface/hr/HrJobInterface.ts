import { HrJob } from '../entity/hr/hr.hrjob.entity';

/**
 * HrJob 实体接口
 * 对应数据库表: hr_job
 */
export interface HrJobInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 HrJob 的参数接口
 */
export interface CreateHrJobDTO extends Partial<HrJobInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 HrJob 的参数接口
 */
export interface UpdateHrJobDTO extends Partial<HrJobInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 HrJob 的参数接口
 */
export interface QueryHrJobDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof HrJobInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * HrJob 分页查询结果接口
 */
export interface HrJobPageResult {
  data: HrJob[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * HrJob API 响应接口
 */
export interface HrJobResponse {
  success: boolean;
  message: string;
  data?: HrJob | HrJob[] | HrJobPageResult;
  error?: string;
}
