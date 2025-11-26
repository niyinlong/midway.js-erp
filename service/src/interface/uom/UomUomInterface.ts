import { UomUom } from '../entity/uom/uom.uomuom.entity';

/**
 * UomUom 实体接口
 * 对应数据库表: uom_uom
 */
export interface UomUomInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 UomUom 的参数接口
 */
export interface CreateUomUomDTO extends Partial<UomUomInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 UomUom 的参数接口
 */
export interface UpdateUomUomDTO extends Partial<UomUomInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 UomUom 的参数接口
 */
export interface QueryUomUomDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof UomUomInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * UomUom 分页查询结果接口
 */
export interface UomUomPageResult {
  data: UomUom[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * UomUom API 响应接口
 */
export interface UomUomResponse {
  success: boolean;
  message: string;
  data?: UomUom | UomUom[] | UomUomPageResult;
  error?: string;
}
