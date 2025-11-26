import { IrActServerGroupRel } from '../entity/ir/ir.iractservergrouprel.entity';

/**
 * IrActServerGroupRel 实体接口
 * 对应数据库表: ir_act_server_group_rel
 */
export interface IrActServerGroupRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 IrActServerGroupRel 的参数接口
 */
export interface CreateIrActServerGroupRelDTO extends Partial<IrActServerGroupRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 IrActServerGroupRel 的参数接口
 */
export interface UpdateIrActServerGroupRelDTO extends Partial<IrActServerGroupRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 IrActServerGroupRel 的参数接口
 */
export interface QueryIrActServerGroupRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof IrActServerGroupRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * IrActServerGroupRel 分页查询结果接口
 */
export interface IrActServerGroupRelPageResult {
  data: IrActServerGroupRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * IrActServerGroupRel API 响应接口
 */
export interface IrActServerGroupRelResponse {
  success: boolean;
  message: string;
  data?: IrActServerGroupRel | IrActServerGroupRel[] | IrActServerGroupRelPageResult;
  error?: string;
}
