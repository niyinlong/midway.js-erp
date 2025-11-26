import { HrEmployeeHrEmployeeCvWizardRel } from '../entity/hr/hr.hremployeehremployeecvwizardrel.entity';

/**
 * HrEmployeeHrEmployeeCvWizardRel 实体接口
 * 对应数据库表: hr_employee_hr_employee_cv_wizard_rel
 */
export interface HrEmployeeHrEmployeeCvWizardRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 HrEmployeeHrEmployeeCvWizardRel 的参数接口
 */
export interface CreateHrEmployeeHrEmployeeCvWizardRelDTO extends Partial<HrEmployeeHrEmployeeCvWizardRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 HrEmployeeHrEmployeeCvWizardRel 的参数接口
 */
export interface UpdateHrEmployeeHrEmployeeCvWizardRelDTO extends Partial<HrEmployeeHrEmployeeCvWizardRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 HrEmployeeHrEmployeeCvWizardRel 的参数接口
 */
export interface QueryHrEmployeeHrEmployeeCvWizardRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof HrEmployeeHrEmployeeCvWizardRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * HrEmployeeHrEmployeeCvWizardRel 分页查询结果接口
 */
export interface HrEmployeeHrEmployeeCvWizardRelPageResult {
  data: HrEmployeeHrEmployeeCvWizardRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * HrEmployeeHrEmployeeCvWizardRel API 响应接口
 */
export interface HrEmployeeHrEmployeeCvWizardRelResponse {
  success: boolean;
  message: string;
  data?: HrEmployeeHrEmployeeCvWizardRel | HrEmployeeHrEmployeeCvWizardRel[] | HrEmployeeHrEmployeeCvWizardRelPageResult;
  error?: string;
}
