import { IrMailServer } from '../entity/ir/ir.irmailserver.entity';

/**
 * IrMailServer 实体接口
 * 对应数据库表: ir_mail_server
 */
export interface IrMailServerInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 IrMailServer 的参数接口
 */
export interface CreateIrMailServerDTO extends Partial<IrMailServerInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 IrMailServer 的参数接口
 */
export interface UpdateIrMailServerDTO extends Partial<IrMailServerInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 IrMailServer 的参数接口
 */
export interface QueryIrMailServerDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof IrMailServerInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * IrMailServer 分页查询结果接口
 */
export interface IrMailServerPageResult {
  data: IrMailServer[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * IrMailServer API 响应接口
 */
export interface IrMailServerResponse {
  success: boolean;
  message: string;
  data?: IrMailServer | IrMailServer[] | IrMailServerPageResult;
  error?: string;
}
