import { HrDepartment } from '../entity/hr/hr.hrdepartment.entity';

/**
 * HrDepartment 实体接口
 * 对应数据库表: hr_department
 */
export interface HrDepartmentInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 HrDepartment 的参数接口
 */
export interface CreateHrDepartmentDTO extends Partial<HrDepartmentInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 HrDepartment 的参数接口
 */
export interface UpdateHrDepartmentDTO extends Partial<HrDepartmentInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 HrDepartment 的参数接口
 */
export interface QueryHrDepartmentDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof HrDepartmentInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * HrDepartment 分页查询结果接口
 */
export interface HrDepartmentPageResult {
  data: HrDepartment[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * HrDepartment API 响应接口
 */
export interface HrDepartmentResponse {
  success: boolean;
  message: string;
  data?: HrDepartment | HrDepartment[] | HrDepartmentPageResult;
  error?: string;
}
