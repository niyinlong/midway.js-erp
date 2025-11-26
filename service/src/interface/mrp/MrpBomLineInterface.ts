import { MrpBomLine } from '../entity/mrp/mrp.mrpbomline.entity';

/**
 * MrpBomLine 实体接口
 * 对应数据库表: mrp_bom_line
 */
export interface MrpBomLineInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 MrpBomLine 的参数接口
 */
export interface CreateMrpBomLineDTO extends Partial<MrpBomLineInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 MrpBomLine 的参数接口
 */
export interface UpdateMrpBomLineDTO extends Partial<MrpBomLineInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 MrpBomLine 的参数接口
 */
export interface QueryMrpBomLineDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof MrpBomLineInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * MrpBomLine 分页查询结果接口
 */
export interface MrpBomLinePageResult {
  data: MrpBomLine[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * MrpBomLine API 响应接口
 */
export interface MrpBomLineResponse {
  success: boolean;
  message: string;
  data?: MrpBomLine | MrpBomLine[] | MrpBomLinePageResult;
  error?: string;
}
