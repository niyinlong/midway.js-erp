import { IrActServerResPartnerRel } from '../entity/ir/ir.iractserverrespartnerrel.entity';

/**
 * IrActServerResPartnerRel 实体接口
 * 对应数据库表: ir_act_server_res_partner_rel
 */
export interface IrActServerResPartnerRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 IrActServerResPartnerRel 的参数接口
 */
export interface CreateIrActServerResPartnerRelDTO extends Partial<IrActServerResPartnerRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 IrActServerResPartnerRel 的参数接口
 */
export interface UpdateIrActServerResPartnerRelDTO extends Partial<IrActServerResPartnerRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 IrActServerResPartnerRel 的参数接口
 */
export interface QueryIrActServerResPartnerRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof IrActServerResPartnerRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * IrActServerResPartnerRel 分页查询结果接口
 */
export interface IrActServerResPartnerRelPageResult {
  data: IrActServerResPartnerRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * IrActServerResPartnerRel API 响应接口
 */
export interface IrActServerResPartnerRelResponse {
  success: boolean;
  message: string;
  data?: IrActServerResPartnerRel | IrActServerResPartnerRel[] | IrActServerResPartnerRelPageResult;
  error?: string;
}
