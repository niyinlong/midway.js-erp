import { ResBank } from '../entity/res/res.resbank.entity';

/**
 * ResBank 实体接口
 * 对应数据库表: res_bank
 */
export interface ResBankInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 ResBank 的参数接口
 */
export interface CreateResBankDTO extends Partial<ResBankInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 ResBank 的参数接口
 */
export interface UpdateResBankDTO extends Partial<ResBankInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 ResBank 的参数接口
 */
export interface QueryResBankDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof ResBankInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * ResBank 分页查询结果接口
 */
export interface ResBankPageResult {
  data: ResBank[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * ResBank API 响应接口
 */
export interface ResBankResponse {
  success: boolean;
  message: string;
  data?: ResBank | ResBank[] | ResBankPageResult;
  error?: string;
}
