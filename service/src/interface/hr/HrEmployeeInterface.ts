import { HrEmployee } from '../entity/hr/hr.hremployee.entity';

/**
 * HrEmployee 实体接口
 * 对应数据库表: hr_employee
 */
export interface HrEmployeeInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 HrEmployee 的参数接口
 */
export interface CreateHrEmployeeDTO extends Partial<HrEmployeeInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 HrEmployee 的参数接口
 */
export interface UpdateHrEmployeeDTO extends Partial<HrEmployeeInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 HrEmployee 的参数接口
 */
export interface QueryHrEmployeeDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof HrEmployeeInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * HrEmployee 分页查询结果接口
 */
export interface HrEmployeePageResult {
  data: HrEmployee[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * HrEmployee API 响应接口
 */
export interface HrEmployeeResponse {
  success: boolean;
  message: string;
  data?: HrEmployee | HrEmployee[] | HrEmployeePageResult;
  error?: string;
}
