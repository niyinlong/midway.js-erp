import { TaskShareWizard } from '../entity/task/task.tasksharewizard.entity';

/**
 * TaskShareWizard 实体接口
 * 对应数据库表: task_share_wizard
 */
export interface TaskShareWizardInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 TaskShareWizard 的参数接口
 */
export interface CreateTaskShareWizardDTO extends Partial<TaskShareWizardInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 TaskShareWizard 的参数接口
 */
export interface UpdateTaskShareWizardDTO extends Partial<TaskShareWizardInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 TaskShareWizard 的参数接口
 */
export interface QueryTaskShareWizardDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof TaskShareWizardInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * TaskShareWizard 分页查询结果接口
 */
export interface TaskShareWizardPageResult {
  data: TaskShareWizard[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * TaskShareWizard API 响应接口
 */
export interface TaskShareWizardResponse {
  success: boolean;
  message: string;
  data?: TaskShareWizard | TaskShareWizard[] | TaskShareWizardPageResult;
  error?: string;
}
