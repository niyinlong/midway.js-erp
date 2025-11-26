import { ResPartnerBank } from '../entity/res/res.respartnerbank.entity';

/**
 * ResPartnerBank 实体接口
 * 对应数据库表: res_partner_bank
 */
export interface ResPartnerBankInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 ResPartnerBank 的参数接口
 */
export interface CreateResPartnerBankDTO extends Partial<ResPartnerBankInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 ResPartnerBank 的参数接口
 */
export interface UpdateResPartnerBankDTO extends Partial<ResPartnerBankInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 ResPartnerBank 的参数接口
 */
export interface QueryResPartnerBankDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof ResPartnerBankInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * ResPartnerBank 分页查询结果接口
 */
export interface ResPartnerBankPageResult {
  data: ResPartnerBank[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * ResPartnerBank API 响应接口
 */
export interface ResPartnerBankResponse {
  success: boolean;
  message: string;
  data?: ResPartnerBank | ResPartnerBank[] | ResPartnerBankPageResult;
  error?: string;
}
