import { DigestTipResUsersRel } from '../entity/digest/digest.digesttipresusersrel.entity';

/**
 * DigestTipResUsersRel 实体接口
 * 对应数据库表: digest_tip_res_users_rel
 */
export interface DigestTipResUsersRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 DigestTipResUsersRel 的参数接口
 */
export interface CreateDigestTipResUsersRelDTO extends Partial<DigestTipResUsersRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 DigestTipResUsersRel 的参数接口
 */
export interface UpdateDigestTipResUsersRelDTO extends Partial<DigestTipResUsersRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 DigestTipResUsersRel 的参数接口
 */
export interface QueryDigestTipResUsersRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof DigestTipResUsersRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * DigestTipResUsersRel 分页查询结果接口
 */
export interface DigestTipResUsersRelPageResult {
  data: DigestTipResUsersRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * DigestTipResUsersRel API 响应接口
 */
export interface DigestTipResUsersRelResponse {
  success: boolean;
  message: string;
  data?: DigestTipResUsersRel | DigestTipResUsersRel[] | DigestTipResUsersRelPageResult;
  error?: string;
}
