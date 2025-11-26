import { OnboardingProgressOnboardingProgressStepRel } from '../entity/onboarding/onboarding.onboardingprogressonboardingprogresssteprel.entity';

/**
 * OnboardingProgressOnboardingProgressStepRel 实体接口
 * 对应数据库表: onboarding_progress_onboarding_progress_step_rel
 */
export interface OnboardingProgressOnboardingProgressStepRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 OnboardingProgressOnboardingProgressStepRel 的参数接口
 */
export interface CreateOnboardingProgressOnboardingProgressStepRelDTO extends Partial<OnboardingProgressOnboardingProgressStepRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 OnboardingProgressOnboardingProgressStepRel 的参数接口
 */
export interface UpdateOnboardingProgressOnboardingProgressStepRelDTO extends Partial<OnboardingProgressOnboardingProgressStepRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 OnboardingProgressOnboardingProgressStepRel 的参数接口
 */
export interface QueryOnboardingProgressOnboardingProgressStepRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof OnboardingProgressOnboardingProgressStepRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * OnboardingProgressOnboardingProgressStepRel 分页查询结果接口
 */
export interface OnboardingProgressOnboardingProgressStepRelPageResult {
  data: OnboardingProgressOnboardingProgressStepRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * OnboardingProgressOnboardingProgressStepRel API 响应接口
 */
export interface OnboardingProgressOnboardingProgressStepRelResponse {
  success: boolean;
  message: string;
  data?: OnboardingProgressOnboardingProgressStepRel | OnboardingProgressOnboardingProgressStepRel[] | OnboardingProgressOnboardingProgressStepRelPageResult;
  error?: string;
}
