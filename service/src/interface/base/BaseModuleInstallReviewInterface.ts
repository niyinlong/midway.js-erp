import { BaseModuleInstallReview } from '../entity/base/base.basemoduleinstallreview.entity';

/**
 * BaseModuleInstallReview 实体接口
 * 对应数据库表: base_module_install_review
 */
export interface BaseModuleInstallReviewInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 BaseModuleInstallReview 的参数接口
 */
export interface CreateBaseModuleInstallReviewDTO extends Partial<BaseModuleInstallReviewInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 BaseModuleInstallReview 的参数接口
 */
export interface UpdateBaseModuleInstallReviewDTO extends Partial<BaseModuleInstallReviewInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 BaseModuleInstallReview 的参数接口
 */
export interface QueryBaseModuleInstallReviewDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof BaseModuleInstallReviewInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * BaseModuleInstallReview 分页查询结果接口
 */
export interface BaseModuleInstallReviewPageResult {
  data: BaseModuleInstallReview[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * BaseModuleInstallReview API 响应接口
 */
export interface BaseModuleInstallReviewResponse {
  success: boolean;
  message: string;
  data?: BaseModuleInstallReview | BaseModuleInstallReview[] | BaseModuleInstallReviewPageResult;
  error?: string;
}
