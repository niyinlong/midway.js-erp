import { IrProfile } from '../entity/ir/ir.irprofile.entity';

/**
 * IrProfile 实体接口
 * 对应数据库表: ir_profile
 */
export interface IrProfileInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 IrProfile 的参数接口
 */
export interface CreateIrProfileDTO extends Partial<IrProfileInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 IrProfile 的参数接口
 */
export interface UpdateIrProfileDTO extends Partial<IrProfileInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 IrProfile 的参数接口
 */
export interface QueryIrProfileDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof IrProfileInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * IrProfile 分页查询结果接口
 */
export interface IrProfilePageResult {
  data: IrProfile[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * IrProfile API 响应接口
 */
export interface IrProfileResponse {
  success: boolean;
  message: string;
  data?: IrProfile | IrProfile[] | IrProfilePageResult;
  error?: string;
}
