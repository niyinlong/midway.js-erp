import { IrModuleCategory } from '../entity/ir/ir.irmodulecategory.entity';

/**
 * IrModuleCategory 实体接口
 * 对应数据库表: ir_module_category
 */
export interface IrModuleCategoryInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 IrModuleCategory 的参数接口
 */
export interface CreateIrModuleCategoryDTO extends Partial<IrModuleCategoryInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 IrModuleCategory 的参数接口
 */
export interface UpdateIrModuleCategoryDTO extends Partial<IrModuleCategoryInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 IrModuleCategory 的参数接口
 */
export interface QueryIrModuleCategoryDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof IrModuleCategoryInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * IrModuleCategory 分页查询结果接口
 */
export interface IrModuleCategoryPageResult {
  data: IrModuleCategory[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * IrModuleCategory API 响应接口
 */
export interface IrModuleCategoryResponse {
  success: boolean;
  message: string;
  data?: IrModuleCategory | IrModuleCategory[] | IrModuleCategoryPageResult;
  error?: string;
}
