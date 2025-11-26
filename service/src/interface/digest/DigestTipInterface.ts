import { DigestTip } from '../entity/digest/digest.digesttip.entity';

/**
 * DigestTip 实体接口
 * 对应数据库表: digest_tip
 */
export interface DigestTipInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 DigestTip 的参数接口
 */
export interface CreateDigestTipDTO extends Partial<DigestTipInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 DigestTip 的参数接口
 */
export interface UpdateDigestTipDTO extends Partial<DigestTipInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 DigestTip 的参数接口
 */
export interface QueryDigestTipDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof DigestTipInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * DigestTip 分页查询结果接口
 */
export interface DigestTipPageResult {
  data: DigestTip[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * DigestTip API 响应接口
 */
export interface DigestTipResponse {
  success: boolean;
  message: string;
  data?: DigestTip | DigestTip[] | DigestTipPageResult;
  error?: string;
}
