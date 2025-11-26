import { ResetViewArchWizard } from '../entity/reset/reset.resetviewarchwizard.entity';

/**
 * ResetViewArchWizard 实体接口
 * 对应数据库表: reset_view_arch_wizard
 */
export interface ResetViewArchWizardInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 ResetViewArchWizard 的参数接口
 */
export interface CreateResetViewArchWizardDTO extends Partial<ResetViewArchWizardInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 ResetViewArchWizard 的参数接口
 */
export interface UpdateResetViewArchWizardDTO extends Partial<ResetViewArchWizardInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 ResetViewArchWizard 的参数接口
 */
export interface QueryResetViewArchWizardDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof ResetViewArchWizardInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * ResetViewArchWizard 分页查询结果接口
 */
export interface ResetViewArchWizardPageResult {
  data: ResetViewArchWizard[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * ResetViewArchWizard API 响应接口
 */
export interface ResetViewArchWizardResponse {
  success: boolean;
  message: string;
  data?: ResetViewArchWizard | ResetViewArchWizard[] | ResetViewArchWizardPageResult;
  error?: string;
}
