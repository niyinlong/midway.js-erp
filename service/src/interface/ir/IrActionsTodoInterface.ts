import { IrActionsTodo } from '../entity/ir/ir.iractionstodo.entity';

/**
 * IrActionsTodo 实体接口
 * 对应数据库表: ir_actions_todo
 */
export interface IrActionsTodoInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 IrActionsTodo 的参数接口
 */
export interface CreateIrActionsTodoDTO extends Partial<IrActionsTodoInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 IrActionsTodo 的参数接口
 */
export interface UpdateIrActionsTodoDTO extends Partial<IrActionsTodoInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 IrActionsTodo 的参数接口
 */
export interface QueryIrActionsTodoDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof IrActionsTodoInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * IrActionsTodo 分页查询结果接口
 */
export interface IrActionsTodoPageResult {
  data: IrActionsTodo[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * IrActionsTodo API 响应接口
 */
export interface IrActionsTodoResponse {
  success: boolean;
  message: string;
  data?: IrActionsTodo | IrActionsTodo[] | IrActionsTodoPageResult;
  error?: string;
}
