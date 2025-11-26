import { OnboardingOnboarding } from '../entity/onboarding/onboarding.onboardingonboarding.entity';

/**
 * OnboardingOnboarding 实体接口
 * 对应数据库表: onboarding_onboarding
 */
export interface OnboardingOnboardingInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 OnboardingOnboarding 的参数接口
 */
export interface CreateOnboardingOnboardingDTO extends Partial<OnboardingOnboardingInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 OnboardingOnboarding 的参数接口
 */
export interface UpdateOnboardingOnboardingDTO extends Partial<OnboardingOnboardingInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 OnboardingOnboarding 的参数接口
 */
export interface QueryOnboardingOnboardingDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof OnboardingOnboardingInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * OnboardingOnboarding 分页查询结果接口
 */
export interface OnboardingOnboardingPageResult {
  data: OnboardingOnboarding[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * OnboardingOnboarding API 响应接口
 */
export interface OnboardingOnboardingResponse {
  success: boolean;
  message: string;
  data?: OnboardingOnboarding | OnboardingOnboarding[] | OnboardingOnboardingPageResult;
  error?: string;
}
