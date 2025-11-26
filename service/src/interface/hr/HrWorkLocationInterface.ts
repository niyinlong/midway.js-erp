import { HrWorkLocation } from '../entity/hr/hr.hrworklocation.entity';

/**
 * HrWorkLocation 实体接口
 * 对应数据库表: hr_work_location
 */
export interface HrWorkLocationInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 HrWorkLocation 的参数接口
 */
export interface CreateHrWorkLocationDTO extends Partial<HrWorkLocationInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 HrWorkLocation 的参数接口
 */
export interface UpdateHrWorkLocationDTO extends Partial<HrWorkLocationInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 HrWorkLocation 的参数接口
 */
export interface QueryHrWorkLocationDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof HrWorkLocationInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * HrWorkLocation 分页查询结果接口
 */
export interface HrWorkLocationPageResult {
  data: HrWorkLocation[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * HrWorkLocation API 响应接口
 */
export interface HrWorkLocationResponse {
  success: boolean;
  message: string;
  data?: HrWorkLocation | HrWorkLocation[] | HrWorkLocationPageResult;
  error?: string;
}
