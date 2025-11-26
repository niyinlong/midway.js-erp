import { ResCurrency } from '../entity/res/res.rescurrency.entity';

/**
 * ResCurrency 实体接口
 * 对应数据库表: res_currency
 */
export interface ResCurrencyInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 ResCurrency 的参数接口
 */
export interface CreateResCurrencyDTO extends Partial<ResCurrencyInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 ResCurrency 的参数接口
 */
export interface UpdateResCurrencyDTO extends Partial<ResCurrencyInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 ResCurrency 的参数接口
 */
export interface QueryResCurrencyDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof ResCurrencyInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * ResCurrency 分页查询结果接口
 */
export interface ResCurrencyPageResult {
  data: ResCurrency[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * ResCurrency API 响应接口
 */
export interface ResCurrencyResponse {
  success: boolean;
  message: string;
  data?: ResCurrency | ResCurrency[] | ResCurrencyPageResult;
  error?: string;
}
