import { IrModuleModule } from '../entity/ir/ir.irmodulemodule.entity';

/**
 * IrModuleModule 实体接口
 * 对应数据库表: ir_module_module
 */
export interface IrModuleModuleInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 IrModuleModule 的参数接口
 */
export interface CreateIrModuleModuleDTO extends Partial<IrModuleModuleInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 IrModuleModule 的参数接口
 */
export interface UpdateIrModuleModuleDTO extends Partial<IrModuleModuleInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 IrModuleModule 的参数接口
 */
export interface QueryIrModuleModuleDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof IrModuleModuleInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * IrModuleModule 分页查询结果接口
 */
export interface IrModuleModulePageResult {
  data: IrModuleModule[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * IrModuleModule API 响应接口
 */
export interface IrModuleModuleResponse {
  success: boolean;
  message: string;
  data?: IrModuleModule | IrModuleModule[] | IrModuleModulePageResult;
  error?: string;
}
