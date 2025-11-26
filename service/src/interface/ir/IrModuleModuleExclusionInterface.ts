import { IrModuleModuleExclusion } from '../entity/ir/ir.irmodulemoduleexclusion.entity';

/**
 * IrModuleModuleExclusion 实体接口
 * 对应数据库表: ir_module_module_exclusion
 */
export interface IrModuleModuleExclusionInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 IrModuleModuleExclusion 的参数接口
 */
export interface CreateIrModuleModuleExclusionDTO extends Partial<IrModuleModuleExclusionInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 IrModuleModuleExclusion 的参数接口
 */
export interface UpdateIrModuleModuleExclusionDTO extends Partial<IrModuleModuleExclusionInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 IrModuleModuleExclusion 的参数接口
 */
export interface QueryIrModuleModuleExclusionDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof IrModuleModuleExclusionInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * IrModuleModuleExclusion 分页查询结果接口
 */
export interface IrModuleModuleExclusionPageResult {
  data: IrModuleModuleExclusion[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * IrModuleModuleExclusion API 响应接口
 */
export interface IrModuleModuleExclusionResponse {
  success: boolean;
  message: string;
  data?: IrModuleModuleExclusion | IrModuleModuleExclusion[] | IrModuleModuleExclusionPageResult;
  error?: string;
}
