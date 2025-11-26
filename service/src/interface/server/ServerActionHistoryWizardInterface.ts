import { ServerActionHistoryWizard } from '../entity/server/server.serveractionhistorywizard.entity';

/**
 * ServerActionHistoryWizard 实体接口
 * 对应数据库表: server_action_history_wizard
 */
export interface ServerActionHistoryWizardInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 ServerActionHistoryWizard 的参数接口
 */
export interface CreateServerActionHistoryWizardDTO extends Partial<ServerActionHistoryWizardInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 ServerActionHistoryWizard 的参数接口
 */
export interface UpdateServerActionHistoryWizardDTO extends Partial<ServerActionHistoryWizardInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 ServerActionHistoryWizard 的参数接口
 */
export interface QueryServerActionHistoryWizardDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof ServerActionHistoryWizardInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * ServerActionHistoryWizard 分页查询结果接口
 */
export interface ServerActionHistoryWizardPageResult {
  data: ServerActionHistoryWizard[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * ServerActionHistoryWizard API 响应接口
 */
export interface ServerActionHistoryWizardResponse {
  success: boolean;
  message: string;
  data?: ServerActionHistoryWizard | ServerActionHistoryWizard[] | ServerActionHistoryWizardPageResult;
  error?: string;
}
