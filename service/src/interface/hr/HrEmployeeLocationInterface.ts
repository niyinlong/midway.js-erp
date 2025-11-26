import { HrEmployeeLocation } from '../entity/hr/hr.hremployeelocation.entity';

/**
 * HrEmployeeLocation 实体接口
 * 对应数据库表: hr_employee_location
 */
export interface HrEmployeeLocationInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 HrEmployeeLocation 的参数接口
 */
export interface CreateHrEmployeeLocationDTO extends Partial<HrEmployeeLocationInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 HrEmployeeLocation 的参数接口
 */
export interface UpdateHrEmployeeLocationDTO extends Partial<HrEmployeeLocationInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 HrEmployeeLocation 的参数接口
 */
export interface QueryHrEmployeeLocationDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof HrEmployeeLocationInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * HrEmployeeLocation 分页查询结果接口
 */
export interface HrEmployeeLocationPageResult {
  data: HrEmployeeLocation[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * HrEmployeeLocation API 响应接口
 */
export interface HrEmployeeLocationResponse {
  success: boolean;
  message: string;
  data?: HrEmployeeLocation | HrEmployeeLocation[] | HrEmployeeLocationPageResult;
  error?: string;
}
