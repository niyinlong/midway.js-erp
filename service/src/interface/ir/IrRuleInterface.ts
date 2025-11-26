import { IrRule } from '../entity/ir/ir.irrule.entity';

/**
 * IrRule 实体接口
 * 对应数据库表: ir_rule
 */
export interface IrRuleInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 IrRule 的参数接口
 */
export interface CreateIrRuleDTO extends Partial<IrRuleInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 IrRule 的参数接口
 */
export interface UpdateIrRuleDTO extends Partial<IrRuleInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 IrRule 的参数接口
 */
export interface QueryIrRuleDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof IrRuleInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * IrRule 分页查询结果接口
 */
export interface IrRulePageResult {
  data: IrRule[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * IrRule API 响应接口
 */
export interface IrRuleResponse {
  success: boolean;
  message: string;
  data?: IrRule | IrRule[] | IrRulePageResult;
  error?: string;
}
