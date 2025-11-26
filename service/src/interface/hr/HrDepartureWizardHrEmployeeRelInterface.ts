import { HrDepartureWizardHrEmployeeRel } from '../entity/hr/hr.hrdeparturewizardhremployeerel.entity';

/**
 * HrDepartureWizardHrEmployeeRel 实体接口
 * 对应数据库表: hr_departure_wizard_hr_employee_rel
 */
export interface HrDepartureWizardHrEmployeeRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 HrDepartureWizardHrEmployeeRel 的参数接口
 */
export interface CreateHrDepartureWizardHrEmployeeRelDTO extends Partial<HrDepartureWizardHrEmployeeRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 HrDepartureWizardHrEmployeeRel 的参数接口
 */
export interface UpdateHrDepartureWizardHrEmployeeRelDTO extends Partial<HrDepartureWizardHrEmployeeRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 HrDepartureWizardHrEmployeeRel 的参数接口
 */
export interface QueryHrDepartureWizardHrEmployeeRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof HrDepartureWizardHrEmployeeRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * HrDepartureWizardHrEmployeeRel 分页查询结果接口
 */
export interface HrDepartureWizardHrEmployeeRelPageResult {
  data: HrDepartureWizardHrEmployeeRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * HrDepartureWizardHrEmployeeRel API 响应接口
 */
export interface HrDepartureWizardHrEmployeeRelResponse {
  success: boolean;
  message: string;
  data?: HrDepartureWizardHrEmployeeRel | HrDepartureWizardHrEmployeeRel[] | HrDepartureWizardHrEmployeeRelPageResult;
  error?: string;
}
