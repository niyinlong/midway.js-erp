import { HrEmployeeCvWizard } from '../entity/hr/hr.hremployeecvwizard.entity';

/**
 * HrEmployeeCvWizard 实体接口
 * 对应数据库表: hr_employee_cv_wizard
 */
export interface HrEmployeeCvWizardInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 HrEmployeeCvWizard 的参数接口
 */
export interface CreateHrEmployeeCvWizardDTO extends Partial<HrEmployeeCvWizardInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 HrEmployeeCvWizard 的参数接口
 */
export interface UpdateHrEmployeeCvWizardDTO extends Partial<HrEmployeeCvWizardInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 HrEmployeeCvWizard 的参数接口
 */
export interface QueryHrEmployeeCvWizardDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof HrEmployeeCvWizardInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * HrEmployeeCvWizard 分页查询结果接口
 */
export interface HrEmployeeCvWizardPageResult {
  data: HrEmployeeCvWizard[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * HrEmployeeCvWizard API 响应接口
 */
export interface HrEmployeeCvWizardResponse {
  success: boolean;
  message: string;
  data?: HrEmployeeCvWizard | HrEmployeeCvWizard[] | HrEmployeeCvWizardPageResult;
  error?: string;
}
