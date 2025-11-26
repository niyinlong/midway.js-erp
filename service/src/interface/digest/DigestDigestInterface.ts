import { DigestDigest } from '../entity/digest/digest.digestdigest.entity';

/**
 * DigestDigest 实体接口
 * 对应数据库表: digest_digest
 */
export interface DigestDigestInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 DigestDigest 的参数接口
 */
export interface CreateDigestDigestDTO extends Partial<DigestDigestInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 DigestDigest 的参数接口
 */
export interface UpdateDigestDigestDTO extends Partial<DigestDigestInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 DigestDigest 的参数接口
 */
export interface QueryDigestDigestDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof DigestDigestInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * DigestDigest 分页查询结果接口
 */
export interface DigestDigestPageResult {
  data: DigestDigest[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * DigestDigest API 响应接口
 */
export interface DigestDigestResponse {
  success: boolean;
  message: string;
  data?: DigestDigest | DigestDigest[] | DigestDigestPageResult;
  error?: string;
}
