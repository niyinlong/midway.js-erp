import { OnboardingProgressStep } from '../entity/onboarding/onboarding.onboardingprogressstep.entity';

/**
 * OnboardingProgressStep 实体接口
 * 对应数据库表: onboarding_progress_step
 */
export interface OnboardingProgressStepInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 OnboardingProgressStep 的参数接口
 */
export interface CreateOnboardingProgressStepDTO extends Partial<OnboardingProgressStepInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 OnboardingProgressStep 的参数接口
 */
export interface UpdateOnboardingProgressStepDTO extends Partial<OnboardingProgressStepInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 OnboardingProgressStep 的参数接口
 */
export interface QueryOnboardingProgressStepDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof OnboardingProgressStepInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * OnboardingProgressStep 分页查询结果接口
 */
export interface OnboardingProgressStepPageResult {
  data: OnboardingProgressStep[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * OnboardingProgressStep API 响应接口
 */
export interface OnboardingProgressStepResponse {
  success: boolean;
  message: string;
  data?: OnboardingProgressStep | OnboardingProgressStep[] | OnboardingProgressStepPageResult;
  error?: string;
}
