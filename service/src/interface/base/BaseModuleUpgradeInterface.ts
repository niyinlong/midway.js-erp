import { BaseModuleUpgrade } from '../entity/base/base.basemoduleupgrade.entity';

/**
 * BaseModuleUpgrade 实体接口
 * 对应数据库表: base_module_upgrade
 */
export interface BaseModuleUpgradeInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 BaseModuleUpgrade 的参数接口
 */
export interface CreateBaseModuleUpgradeDTO extends Partial<BaseModuleUpgradeInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 BaseModuleUpgrade 的参数接口
 */
export interface UpdateBaseModuleUpgradeDTO extends Partial<BaseModuleUpgradeInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 BaseModuleUpgrade 的参数接口
 */
export interface QueryBaseModuleUpgradeDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof BaseModuleUpgradeInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * BaseModuleUpgrade 分页查询结果接口
 */
export interface BaseModuleUpgradePageResult {
  data: BaseModuleUpgrade[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * BaseModuleUpgrade API 响应接口
 */
export interface BaseModuleUpgradeResponse {
  success: boolean;
  message: string;
  data?: BaseModuleUpgrade | BaseModuleUpgrade[] | BaseModuleUpgradePageResult;
  error?: string;
}
