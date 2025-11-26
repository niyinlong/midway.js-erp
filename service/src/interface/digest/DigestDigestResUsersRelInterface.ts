import { DigestDigestResUsersRel } from '../entity/digest/digest.digestdigestresusersrel.entity';

/**
 * DigestDigestResUsersRel 实体接口
 * 对应数据库表: digest_digest_res_users_rel
 */
export interface DigestDigestResUsersRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 DigestDigestResUsersRel 的参数接口
 */
export interface CreateDigestDigestResUsersRelDTO extends Partial<DigestDigestResUsersRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 DigestDigestResUsersRel 的参数接口
 */
export interface UpdateDigestDigestResUsersRelDTO extends Partial<DigestDigestResUsersRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 DigestDigestResUsersRel 的参数接口
 */
export interface QueryDigestDigestResUsersRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof DigestDigestResUsersRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * DigestDigestResUsersRel 分页查询结果接口
 */
export interface DigestDigestResUsersRelPageResult {
  data: DigestDigestResUsersRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * DigestDigestResUsersRel API 响应接口
 */
export interface DigestDigestResUsersRelResponse {
  success: boolean;
  message: string;
  data?: DigestDigestResUsersRel | DigestDigestResUsersRel[] | DigestDigestResUsersRelPageResult;
  error?: string;
}
