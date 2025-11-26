import { IrAsset } from '../entity/ir/ir.irasset.entity';

/**
 * IrAsset 实体接口
 * 对应数据库表: ir_asset
 */
export interface IrAssetInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 IrAsset 的参数接口
 */
export interface CreateIrAssetDTO extends Partial<IrAssetInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 IrAsset 的参数接口
 */
export interface UpdateIrAssetDTO extends Partial<IrAssetInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 IrAsset 的参数接口
 */
export interface QueryIrAssetDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof IrAssetInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * IrAsset 分页查询结果接口
 */
export interface IrAssetPageResult {
  data: IrAsset[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * IrAsset API 响应接口
 */
export interface IrAssetResponse {
  success: boolean;
  message: string;
  data?: IrAsset | IrAsset[] | IrAssetPageResult;
  error?: string;
}
