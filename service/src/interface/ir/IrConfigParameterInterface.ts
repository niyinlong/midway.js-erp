import { IrConfigParameter } from '../entity/ir/ir.irconfigparameter.entity';

/**
 * IrConfigParameter 实体接口
 * 对应数据库表: ir_config_parameter
 */
export interface IrConfigParameterInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 IrConfigParameter 的参数接口
 */
export interface CreateIrConfigParameterDTO extends Partial<IrConfigParameterInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 IrConfigParameter 的参数接口
 */
export interface UpdateIrConfigParameterDTO extends Partial<IrConfigParameterInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 IrConfigParameter 的参数接口
 */
export interface QueryIrConfigParameterDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof IrConfigParameterInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * IrConfigParameter 分页查询结果接口
 */
export interface IrConfigParameterPageResult {
  data: IrConfigParameter[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * IrConfigParameter API 响应接口
 */
export interface IrConfigParameterResponse {
  success: boolean;
  message: string;
  data?: IrConfigParameter | IrConfigParameter[] | IrConfigParameterPageResult;
  error?: string;
}
