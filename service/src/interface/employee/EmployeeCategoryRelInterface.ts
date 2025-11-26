import { EmployeeCategoryRel } from '../entity/employee/employee.employeecategoryrel.entity';

/**
 * EmployeeCategoryRel 实体接口
 * 对应数据库表: employee_category_rel
 */
export interface EmployeeCategoryRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 EmployeeCategoryRel 的参数接口
 */
export interface CreateEmployeeCategoryRelDTO extends Partial<EmployeeCategoryRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 EmployeeCategoryRel 的参数接口
 */
export interface UpdateEmployeeCategoryRelDTO extends Partial<EmployeeCategoryRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 EmployeeCategoryRel 的参数接口
 */
export interface QueryEmployeeCategoryRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof EmployeeCategoryRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * EmployeeCategoryRel 分页查询结果接口
 */
export interface EmployeeCategoryRelPageResult {
  data: EmployeeCategoryRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * EmployeeCategoryRel API 响应接口
 */
export interface EmployeeCategoryRelResponse {
  success: boolean;
  message: string;
  data?: EmployeeCategoryRel | EmployeeCategoryRel[] | EmployeeCategoryRelPageResult;
  error?: string;
}
