import { IrModuleModuleDependency } from '../entity/ir/ir.irmodulemoduledependency.entity';

/**
 * IrModuleModuleDependency 实体接口
 * 对应数据库表: ir_module_module_dependency
 */
export interface IrModuleModuleDependencyInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 IrModuleModuleDependency 的参数接口
 */
export interface CreateIrModuleModuleDependencyDTO extends Partial<IrModuleModuleDependencyInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 IrModuleModuleDependency 的参数接口
 */
export interface UpdateIrModuleModuleDependencyDTO extends Partial<IrModuleModuleDependencyInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 IrModuleModuleDependency 的参数接口
 */
export interface QueryIrModuleModuleDependencyDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof IrModuleModuleDependencyInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * IrModuleModuleDependency 分页查询结果接口
 */
export interface IrModuleModuleDependencyPageResult {
  data: IrModuleModuleDependency[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * IrModuleModuleDependency API 响应接口
 */
export interface IrModuleModuleDependencyResponse {
  success: boolean;
  message: string;
  data?: IrModuleModuleDependency | IrModuleModuleDependency[] | IrModuleModuleDependencyPageResult;
  error?: string;
}
