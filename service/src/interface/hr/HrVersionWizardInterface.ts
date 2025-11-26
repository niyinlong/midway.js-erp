import { HrVersionWizard } from '../entity/hr/hr.hrversionwizard.entity';

/**
 * HrVersionWizard 实体接口
 * 对应数据库表: hr_version_wizard
 */
export interface HrVersionWizardInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 HrVersionWizard 的参数接口
 */
export interface CreateHrVersionWizardDTO extends Partial<HrVersionWizardInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 HrVersionWizard 的参数接口
 */
export interface UpdateHrVersionWizardDTO extends Partial<HrVersionWizardInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 HrVersionWizard 的参数接口
 */
export interface QueryHrVersionWizardDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof HrVersionWizardInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * HrVersionWizard 分页查询结果接口
 */
export interface HrVersionWizardPageResult {
  data: HrVersionWizard[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * HrVersionWizard API 响应接口
 */
export interface HrVersionWizardResponse {
  success: boolean;
  message: string;
  data?: HrVersionWizard | HrVersionWizard[] | HrVersionWizardPageResult;
  error?: string;
}
