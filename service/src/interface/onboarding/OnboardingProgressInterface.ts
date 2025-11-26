import { OnboardingProgress } from '../entity/onboarding/onboarding.onboardingprogress.entity';

/**
 * OnboardingProgress 实体接口
 * 对应数据库表: onboarding_progress
 */
export interface OnboardingProgressInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 OnboardingProgress 的参数接口
 */
export interface CreateOnboardingProgressDTO extends Partial<OnboardingProgressInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 OnboardingProgress 的参数接口
 */
export interface UpdateOnboardingProgressDTO extends Partial<OnboardingProgressInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 OnboardingProgress 的参数接口
 */
export interface QueryOnboardingProgressDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof OnboardingProgressInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * OnboardingProgress 分页查询结果接口
 */
export interface OnboardingProgressPageResult {
  data: OnboardingProgress[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * OnboardingProgress API 响应接口
 */
export interface OnboardingProgressResponse {
  success: boolean;
  message: string;
  data?: OnboardingProgress | OnboardingProgress[] | OnboardingProgressPageResult;
  error?: string;
}
