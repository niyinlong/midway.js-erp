import { OnboardingOnboardingStep } from '../entity/onboarding/onboarding.onboardingonboardingstep.entity';

/**
 * OnboardingOnboardingStep 实体接口
 * 对应数据库表: onboarding_onboarding_step
 */
export interface OnboardingOnboardingStepInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 OnboardingOnboardingStep 的参数接口
 */
export interface CreateOnboardingOnboardingStepDTO extends Partial<OnboardingOnboardingStepInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 OnboardingOnboardingStep 的参数接口
 */
export interface UpdateOnboardingOnboardingStepDTO extends Partial<OnboardingOnboardingStepInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 OnboardingOnboardingStep 的参数接口
 */
export interface QueryOnboardingOnboardingStepDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof OnboardingOnboardingStepInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * OnboardingOnboardingStep 分页查询结果接口
 */
export interface OnboardingOnboardingStepPageResult {
  data: OnboardingOnboardingStep[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * OnboardingOnboardingStep API 响应接口
 */
export interface OnboardingOnboardingStepResponse {
  success: boolean;
  message: string;
  data?: OnboardingOnboardingStep | OnboardingOnboardingStep[] | OnboardingOnboardingStepPageResult;
  error?: string;
}
