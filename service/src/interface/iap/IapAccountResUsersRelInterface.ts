import { IapAccountResUsersRel } from '../entity/iap/iap.iapaccountresusersrel.entity';

/**
 * IapAccountResUsersRel 实体接口
 * 对应数据库表: iap_account_res_users_rel
 */
export interface IapAccountResUsersRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 IapAccountResUsersRel 的参数接口
 */
export interface CreateIapAccountResUsersRelDTO extends Partial<IapAccountResUsersRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 IapAccountResUsersRel 的参数接口
 */
export interface UpdateIapAccountResUsersRelDTO extends Partial<IapAccountResUsersRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 IapAccountResUsersRel 的参数接口
 */
export interface QueryIapAccountResUsersRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof IapAccountResUsersRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * IapAccountResUsersRel 分页查询结果接口
 */
export interface IapAccountResUsersRelPageResult {
  data: IapAccountResUsersRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * IapAccountResUsersRel API 响应接口
 */
export interface IapAccountResUsersRelResponse {
  success: boolean;
  message: string;
  data?: IapAccountResUsersRel | IapAccountResUsersRel[] | IapAccountResUsersRelPageResult;
  error?: string;
}
