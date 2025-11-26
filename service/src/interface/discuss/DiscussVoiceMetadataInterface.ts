import { DiscussVoiceMetadata } from '../entity/discuss/discuss.discussvoicemetadata.entity';

/**
 * DiscussVoiceMetadata 实体接口
 * 对应数据库表: discuss_voice_metadata
 */
export interface DiscussVoiceMetadataInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 DiscussVoiceMetadata 的参数接口
 */
export interface CreateDiscussVoiceMetadataDTO extends Partial<DiscussVoiceMetadataInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 DiscussVoiceMetadata 的参数接口
 */
export interface UpdateDiscussVoiceMetadataDTO extends Partial<DiscussVoiceMetadataInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 DiscussVoiceMetadata 的参数接口
 */
export interface QueryDiscussVoiceMetadataDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof DiscussVoiceMetadataInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * DiscussVoiceMetadata 分页查询结果接口
 */
export interface DiscussVoiceMetadataPageResult {
  data: DiscussVoiceMetadata[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * DiscussVoiceMetadata API 响应接口
 */
export interface DiscussVoiceMetadataResponse {
  success: boolean;
  message: string;
  data?: DiscussVoiceMetadata | DiscussVoiceMetadata[] | DiscussVoiceMetadataPageResult;
  error?: string;
}
