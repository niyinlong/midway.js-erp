import { HrDepartureWizard } from '../entity/hr/hr.hrdeparturewizard.entity';

/**
 * HrDepartureWizard 实体接口
 * 对应数据库表: hr_departure_wizard
 */
export interface HrDepartureWizardInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 HrDepartureWizard 的参数接口
 */
export interface CreateHrDepartureWizardDTO extends Partial<HrDepartureWizardInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 HrDepartureWizard 的参数接口
 */
export interface UpdateHrDepartureWizardDTO extends Partial<HrDepartureWizardInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 HrDepartureWizard 的参数接口
 */
export interface QueryHrDepartureWizardDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof HrDepartureWizardInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * HrDepartureWizard 分页查询结果接口
 */
export interface HrDepartureWizardPageResult {
  data: HrDepartureWizard[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * HrDepartureWizard API 响应接口
 */
export interface HrDepartureWizardResponse {
  success: boolean;
  message: string;
  data?: HrDepartureWizard | HrDepartureWizard[] | HrDepartureWizardPageResult;
  error?: string;
}
