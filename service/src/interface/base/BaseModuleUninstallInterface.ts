import { BaseModuleUninstall } from '../entity/base/base.basemoduleuninstall.entity';

/**
 * BaseModuleUninstall 实体接口
 * 对应数据库表: base_module_uninstall
 */
export interface BaseModuleUninstallInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 BaseModuleUninstall 的参数接口
 */
export interface CreateBaseModuleUninstallDTO extends Partial<BaseModuleUninstallInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 BaseModuleUninstall 的参数接口
 */
export interface UpdateBaseModuleUninstallDTO extends Partial<BaseModuleUninstallInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 BaseModuleUninstall 的参数接口
 */
export interface QueryBaseModuleUninstallDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof BaseModuleUninstallInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * BaseModuleUninstall 分页查询结果接口
 */
export interface BaseModuleUninstallPageResult {
  data: BaseModuleUninstall[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * BaseModuleUninstall API 响应接口
 */
export interface BaseModuleUninstallResponse {
  success: boolean;
  message: string;
  data?: BaseModuleUninstall | BaseModuleUninstall[] | BaseModuleUninstallPageResult;
  error?: string;
}
