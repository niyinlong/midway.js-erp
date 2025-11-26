import { OnboardingOnboardingOnboardingOnboardingStepRel } from '../entity/onboarding/onboarding.onboardingonboardingonboardingonboardingsteprel.entity';

/**
 * OnboardingOnboardingOnboardingOnboardingStepRel 实体接口
 * 对应数据库表: onboarding_onboarding_onboarding_onboarding_step_rel
 */
export interface OnboardingOnboardingOnboardingOnboardingStepRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 OnboardingOnboardingOnboardingOnboardingStepRel 的参数接口
 */
export interface CreateOnboardingOnboardingOnboardingOnboardingStepRelDTO extends Partial<OnboardingOnboardingOnboardingOnboardingStepRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 OnboardingOnboardingOnboardingOnboardingStepRel 的参数接口
 */
export interface UpdateOnboardingOnboardingOnboardingOnboardingStepRelDTO extends Partial<OnboardingOnboardingOnboardingOnboardingStepRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 OnboardingOnboardingOnboardingOnboardingStepRel 的参数接口
 */
export interface QueryOnboardingOnboardingOnboardingOnboardingStepRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof OnboardingOnboardingOnboardingOnboardingStepRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * OnboardingOnboardingOnboardingOnboardingStepRel 分页查询结果接口
 */
export interface OnboardingOnboardingOnboardingOnboardingStepRelPageResult {
  data: OnboardingOnboardingOnboardingOnboardingStepRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * OnboardingOnboardingOnboardingOnboardingStepRel API 响应接口
 */
export interface OnboardingOnboardingOnboardingOnboardingStepRelResponse {
  success: boolean;
  message: string;
  data?: OnboardingOnboardingOnboardingOnboardingStepRel | OnboardingOnboardingOnboardingOnboardingStepRel[] | OnboardingOnboardingOnboardingOnboardingStepRelPageResult;
  error?: string;
}
