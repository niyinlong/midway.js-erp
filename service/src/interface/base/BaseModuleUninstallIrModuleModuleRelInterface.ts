import { BaseModuleUninstallIrModuleModuleRel } from '../entity/base/base.basemoduleuninstallirmodulemodulerel.entity';

/**
 * BaseModuleUninstallIrModuleModuleRel 实体接口
 * 对应数据库表: base_module_uninstall_ir_module_module_rel
 */
export interface BaseModuleUninstallIrModuleModuleRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 BaseModuleUninstallIrModuleModuleRel 的参数接口
 */
export interface CreateBaseModuleUninstallIrModuleModuleRelDTO extends Partial<BaseModuleUninstallIrModuleModuleRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 BaseModuleUninstallIrModuleModuleRel 的参数接口
 */
export interface UpdateBaseModuleUninstallIrModuleModuleRelDTO extends Partial<BaseModuleUninstallIrModuleModuleRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 BaseModuleUninstallIrModuleModuleRel 的参数接口
 */
export interface QueryBaseModuleUninstallIrModuleModuleRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof BaseModuleUninstallIrModuleModuleRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * BaseModuleUninstallIrModuleModuleRel 分页查询结果接口
 */
export interface BaseModuleUninstallIrModuleModuleRelPageResult {
  data: BaseModuleUninstallIrModuleModuleRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * BaseModuleUninstallIrModuleModuleRel API 响应接口
 */
export interface BaseModuleUninstallIrModuleModuleRelResponse {
  success: boolean;
  message: string;
  data?: BaseModuleUninstallIrModuleModuleRel | BaseModuleUninstallIrModuleModuleRel[] | BaseModuleUninstallIrModuleModuleRelPageResult;
  error?: string;
}
