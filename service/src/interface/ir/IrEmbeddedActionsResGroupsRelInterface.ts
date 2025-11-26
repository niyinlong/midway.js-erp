import { IrEmbeddedActionsResGroupsRel } from '../entity/ir/ir.irembeddedactionsresgroupsrel.entity';

/**
 * IrEmbeddedActionsResGroupsRel 实体接口
 * 对应数据库表: ir_embedded_actions_res_groups_rel
 */
export interface IrEmbeddedActionsResGroupsRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 IrEmbeddedActionsResGroupsRel 的参数接口
 */
export interface CreateIrEmbeddedActionsResGroupsRelDTO extends Partial<IrEmbeddedActionsResGroupsRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 IrEmbeddedActionsResGroupsRel 的参数接口
 */
export interface UpdateIrEmbeddedActionsResGroupsRelDTO extends Partial<IrEmbeddedActionsResGroupsRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 IrEmbeddedActionsResGroupsRel 的参数接口
 */
export interface QueryIrEmbeddedActionsResGroupsRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof IrEmbeddedActionsResGroupsRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * IrEmbeddedActionsResGroupsRel 分页查询结果接口
 */
export interface IrEmbeddedActionsResGroupsRelPageResult {
  data: IrEmbeddedActionsResGroupsRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * IrEmbeddedActionsResGroupsRel API 响应接口
 */
export interface IrEmbeddedActionsResGroupsRelResponse {
  success: boolean;
  message: string;
  data?: IrEmbeddedActionsResGroupsRel | IrEmbeddedActionsResGroupsRel[] | IrEmbeddedActionsResGroupsRelPageResult;
  error?: string;
}
