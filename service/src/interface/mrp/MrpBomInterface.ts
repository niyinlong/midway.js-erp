import { MrpBom } from '../entity/mrp/mrp.mrpbom.entity';

/**
 * MrpBom 实体接口
 * 对应数据库表: mrp_bom
 */
export interface MrpBomInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 MrpBom 的参数接口
 */
export interface CreateMrpBomDTO extends Partial<MrpBomInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 MrpBom 的参数接口
 */
export interface UpdateMrpBomDTO extends Partial<MrpBomInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 MrpBom 的参数接口
 */
export interface QueryMrpBomDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof MrpBomInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * MrpBom 分页查询结果接口
 */
export interface MrpBomPageResult {
  data: MrpBom[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * MrpBom API 响应接口
 */
export interface MrpBomResponse {
  success: boolean;
  message: string;
  data?: MrpBom | MrpBom[] | MrpBomPageResult;
  error?: string;
}
