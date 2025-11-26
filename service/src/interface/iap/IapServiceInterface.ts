import { IapService } from '../entity/iap/iap.iapservice.entity';

/**
 * IapService 实体接口
 * 对应数据库表: iap_service
 */
export interface IapServiceInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 IapService 的参数接口
 */
export interface CreateIapServiceDTO extends Partial<IapServiceInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 IapService 的参数接口
 */
export interface UpdateIapServiceDTO extends Partial<IapServiceInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 IapService 的参数接口
 */
export interface QueryIapServiceDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof IapServiceInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * IapService 分页查询结果接口
 */
export interface IapServicePageResult {
  data: IapService[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * IapService API 响应接口
 */
export interface IapServiceResponse {
  success: boolean;
  message: string;
  data?: IapService | IapService[] | IapServicePageResult;
  error?: string;
}
