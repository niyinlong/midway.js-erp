import { BaseEnableProfilingWizard } from '../entity/base/base.baseenableprofilingwizard.entity';

/**
 * BaseEnableProfilingWizard 实体接口
 * 对应数据库表: base_enable_profiling_wizard
 */
export interface BaseEnableProfilingWizardInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 BaseEnableProfilingWizard 的参数接口
 */
export interface CreateBaseEnableProfilingWizardDTO extends Partial<BaseEnableProfilingWizardInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 BaseEnableProfilingWizard 的参数接口
 */
export interface UpdateBaseEnableProfilingWizardDTO extends Partial<BaseEnableProfilingWizardInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 BaseEnableProfilingWizard 的参数接口
 */
export interface QueryBaseEnableProfilingWizardDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof BaseEnableProfilingWizardInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * BaseEnableProfilingWizard 分页查询结果接口
 */
export interface BaseEnableProfilingWizardPageResult {
  data: BaseEnableProfilingWizard[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * BaseEnableProfilingWizard API 响应接口
 */
export interface BaseEnableProfilingWizardResponse {
  success: boolean;
  message: string;
  data?: BaseEnableProfilingWizard | BaseEnableProfilingWizard[] | BaseEnableProfilingWizardPageResult;
  error?: string;
}
