import { DecimalPrecision } from '../entity/decimal/decimal.decimalprecision.entity';

/**
 * DecimalPrecision 实体接口
 * 对应数据库表: decimal_precision
 */
export interface DecimalPrecisionInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 DecimalPrecision 的参数接口
 */
export interface CreateDecimalPrecisionDTO extends Partial<DecimalPrecisionInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 DecimalPrecision 的参数接口
 */
export interface UpdateDecimalPrecisionDTO extends Partial<DecimalPrecisionInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 DecimalPrecision 的参数接口
 */
export interface QueryDecimalPrecisionDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof DecimalPrecisionInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * DecimalPrecision 分页查询结果接口
 */
export interface DecimalPrecisionPageResult {
  data: DecimalPrecision[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * DecimalPrecision API 响应接口
 */
export interface DecimalPrecisionResponse {
  success: boolean;
  message: string;
  data?: DecimalPrecision | DecimalPrecision[] | DecimalPrecisionPageResult;
  error?: string;
}
