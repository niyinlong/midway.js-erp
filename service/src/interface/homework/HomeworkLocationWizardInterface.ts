import { HomeworkLocationWizard } from '../entity/homework/homework.homeworklocationwizard.entity';

/**
 * HomeworkLocationWizard 实体接口
 * 对应数据库表: homework_location_wizard
 */
export interface HomeworkLocationWizardInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 HomeworkLocationWizard 的参数接口
 */
export interface CreateHomeworkLocationWizardDTO extends Partial<HomeworkLocationWizardInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 HomeworkLocationWizard 的参数接口
 */
export interface UpdateHomeworkLocationWizardDTO extends Partial<HomeworkLocationWizardInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 HomeworkLocationWizard 的参数接口
 */
export interface QueryHomeworkLocationWizardDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof HomeworkLocationWizardInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * HomeworkLocationWizard 分页查询结果接口
 */
export interface HomeworkLocationWizardPageResult {
  data: HomeworkLocationWizard[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * HomeworkLocationWizard API 响应接口
 */
export interface HomeworkLocationWizardResponse {
  success: boolean;
  message: string;
  data?: HomeworkLocationWizard | HomeworkLocationWizard[] | HomeworkLocationWizardPageResult;
  error?: string;
}
