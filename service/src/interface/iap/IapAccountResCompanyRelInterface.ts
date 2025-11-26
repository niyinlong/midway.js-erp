import { IapAccountResCompanyRel } from '../entity/iap/iap.iapaccountrescompanyrel.entity';

/**
 * IapAccountResCompanyRel 实体接口
 * 对应数据库表: iap_account_res_company_rel
 */
export interface IapAccountResCompanyRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 IapAccountResCompanyRel 的参数接口
 */
export interface CreateIapAccountResCompanyRelDTO extends Partial<IapAccountResCompanyRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 IapAccountResCompanyRel 的参数接口
 */
export interface UpdateIapAccountResCompanyRelDTO extends Partial<IapAccountResCompanyRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 IapAccountResCompanyRel 的参数接口
 */
export interface QueryIapAccountResCompanyRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof IapAccountResCompanyRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * IapAccountResCompanyRel 分页查询结果接口
 */
export interface IapAccountResCompanyRelPageResult {
  data: IapAccountResCompanyRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * IapAccountResCompanyRel API 响应接口
 */
export interface IapAccountResCompanyRelResponse {
  success: boolean;
  message: string;
  data?: IapAccountResCompanyRel | IapAccountResCompanyRel[] | IapAccountResCompanyRelPageResult;
  error?: string;
}
