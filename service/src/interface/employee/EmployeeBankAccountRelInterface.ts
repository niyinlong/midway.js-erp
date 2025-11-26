import { EmployeeBankAccountRel } from '../entity/employee/employee.employeebankaccountrel.entity';

/**
 * EmployeeBankAccountRel 实体接口
 * 对应数据库表: employee_bank_account_rel
 */
export interface EmployeeBankAccountRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 EmployeeBankAccountRel 的参数接口
 */
export interface CreateEmployeeBankAccountRelDTO extends Partial<EmployeeBankAccountRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 EmployeeBankAccountRel 的参数接口
 */
export interface UpdateEmployeeBankAccountRelDTO extends Partial<EmployeeBankAccountRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 EmployeeBankAccountRel 的参数接口
 */
export interface QueryEmployeeBankAccountRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof EmployeeBankAccountRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * EmployeeBankAccountRel 分页查询结果接口
 */
export interface EmployeeBankAccountRelPageResult {
  data: EmployeeBankAccountRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * EmployeeBankAccountRel API 响应接口
 */
export interface EmployeeBankAccountRelResponse {
  success: boolean;
  message: string;
  data?: EmployeeBankAccountRel | EmployeeBankAccountRel[] | EmployeeBankAccountRelPageResult;
  error?: string;
}
