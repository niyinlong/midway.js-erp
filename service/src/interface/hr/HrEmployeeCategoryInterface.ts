import { HrEmployeeCategory } from '../entity/hr/hr.hremployeecategory.entity';

/**
 * HrEmployeeCategory 实体接口
 * 对应数据库表: hr_employee_category
 */
export interface HrEmployeeCategoryInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 HrEmployeeCategory 的参数接口
 */
export interface CreateHrEmployeeCategoryDTO extends Partial<HrEmployeeCategoryInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 HrEmployeeCategory 的参数接口
 */
export interface UpdateHrEmployeeCategoryDTO extends Partial<HrEmployeeCategoryInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 HrEmployeeCategory 的参数接口
 */
export interface QueryHrEmployeeCategoryDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof HrEmployeeCategoryInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * HrEmployeeCategory 分页查询结果接口
 */
export interface HrEmployeeCategoryPageResult {
  data: HrEmployeeCategory[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * HrEmployeeCategory API 响应接口
 */
export interface HrEmployeeCategoryResponse {
  success: boolean;
  message: string;
  data?: HrEmployeeCategory | HrEmployeeCategory[] | HrEmployeeCategoryPageResult;
  error?: string;
}
