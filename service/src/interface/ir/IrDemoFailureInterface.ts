import { IrDemoFailure } from '../entity/ir/ir.irdemofailure.entity';

/**
 * IrDemoFailure 实体接口
 * 对应数据库表: ir_demo_failure
 */
export interface IrDemoFailureInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 IrDemoFailure 的参数接口
 */
export interface CreateIrDemoFailureDTO extends Partial<IrDemoFailureInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 IrDemoFailure 的参数接口
 */
export interface UpdateIrDemoFailureDTO extends Partial<IrDemoFailureInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 IrDemoFailure 的参数接口
 */
export interface QueryIrDemoFailureDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof IrDemoFailureInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * IrDemoFailure 分页查询结果接口
 */
export interface IrDemoFailurePageResult {
  data: IrDemoFailure[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * IrDemoFailure API 响应接口
 */
export interface IrDemoFailureResponse {
  success: boolean;
  message: string;
  data?: IrDemoFailure | IrDemoFailure[] | IrDemoFailurePageResult;
  error?: string;
}
