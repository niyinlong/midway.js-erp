import { TaskDependenciesRel } from '../entity/task/task.taskdependenciesrel.entity';

/**
 * TaskDependenciesRel 实体接口
 * 对应数据库表: task_dependencies_rel
 */
export interface TaskDependenciesRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 TaskDependenciesRel 的参数接口
 */
export interface CreateTaskDependenciesRelDTO extends Partial<TaskDependenciesRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 TaskDependenciesRel 的参数接口
 */
export interface UpdateTaskDependenciesRelDTO extends Partial<TaskDependenciesRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 TaskDependenciesRel 的参数接口
 */
export interface QueryTaskDependenciesRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof TaskDependenciesRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * TaskDependenciesRel 分页查询结果接口
 */
export interface TaskDependenciesRelPageResult {
  data: TaskDependenciesRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * TaskDependenciesRel API 响应接口
 */
export interface TaskDependenciesRelResponse {
  success: boolean;
  message: string;
  data?: TaskDependenciesRel | TaskDependenciesRel[] | TaskDependenciesRelPageResult;
  error?: string;
}
