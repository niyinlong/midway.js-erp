import { IrModelData } from '../entity/ir/ir.irmodeldata.entity';

/**
 * IrModelData 实体接口
 * 对应数据库表: ir_model_data
 */
export interface IrModelDataInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 IrModelData 的参数接口
 */
export interface CreateIrModelDataDTO extends Partial<IrModelDataInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 IrModelData 的参数接口
 */
export interface UpdateIrModelDataDTO extends Partial<IrModelDataInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 IrModelData 的参数接口
 */
export interface QueryIrModelDataDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof IrModelDataInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * IrModelData 分页查询结果接口
 */
export interface IrModelDataPageResult {
  data: IrModelData[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * IrModelData API 响应接口
 */
export interface IrModelDataResponse {
  success: boolean;
  message: string;
  data?: IrModelData | IrModelData[] | IrModelDataPageResult;
  error?: string;
}
