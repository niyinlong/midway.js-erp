import { IrActWindowGroupRel } from '../entity/ir/ir.iractwindowgrouprel.entity';

/**
 * IrActWindowGroupRel 实体接口
 * 对应数据库表: ir_act_window_group_rel
 */
export interface IrActWindowGroupRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 IrActWindowGroupRel 的参数接口
 */
export interface CreateIrActWindowGroupRelDTO extends Partial<IrActWindowGroupRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 IrActWindowGroupRel 的参数接口
 */
export interface UpdateIrActWindowGroupRelDTO extends Partial<IrActWindowGroupRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 IrActWindowGroupRel 的参数接口
 */
export interface QueryIrActWindowGroupRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof IrActWindowGroupRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * IrActWindowGroupRel 分页查询结果接口
 */
export interface IrActWindowGroupRelPageResult {
  data: IrActWindowGroupRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * IrActWindowGroupRel API 响应接口
 */
export interface IrActWindowGroupRelResponse {
  success: boolean;
  message: string;
  data?: IrActWindowGroupRel | IrActWindowGroupRel[] | IrActWindowGroupRelPageResult;
  error?: string;
}
