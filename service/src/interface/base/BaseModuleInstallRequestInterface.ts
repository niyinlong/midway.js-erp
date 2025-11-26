import { BaseModuleInstallRequest } from '../entity/base/base.basemoduleinstallrequest.entity';

/**
 * BaseModuleInstallRequest 实体接口
 * 对应数据库表: base_module_install_request
 */
export interface BaseModuleInstallRequestInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 BaseModuleInstallRequest 的参数接口
 */
export interface CreateBaseModuleInstallRequestDTO extends Partial<BaseModuleInstallRequestInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 BaseModuleInstallRequest 的参数接口
 */
export interface UpdateBaseModuleInstallRequestDTO extends Partial<BaseModuleInstallRequestInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 BaseModuleInstallRequest 的参数接口
 */
export interface QueryBaseModuleInstallRequestDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof BaseModuleInstallRequestInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * BaseModuleInstallRequest 分页查询结果接口
 */
export interface BaseModuleInstallRequestPageResult {
  data: BaseModuleInstallRequest[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * BaseModuleInstallRequest API 响应接口
 */
export interface BaseModuleInstallRequestResponse {
  success: boolean;
  message: string;
  data?: BaseModuleInstallRequest | BaseModuleInstallRequest[] | BaseModuleInstallRequestPageResult;
  error?: string;
}
