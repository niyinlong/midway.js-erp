import { ThemeIrAttachment } from '../entity/theme/theme.themeirattachment.entity';

/**
 * ThemeIrAttachment 实体接口
 * 对应数据库表: theme_ir_attachment
 */
export interface ThemeIrAttachmentInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 ThemeIrAttachment 的参数接口
 */
export interface CreateThemeIrAttachmentDTO extends Partial<ThemeIrAttachmentInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 ThemeIrAttachment 的参数接口
 */
export interface UpdateThemeIrAttachmentDTO extends Partial<ThemeIrAttachmentInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 ThemeIrAttachment 的参数接口
 */
export interface QueryThemeIrAttachmentDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof ThemeIrAttachmentInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * ThemeIrAttachment 分页查询结果接口
 */
export interface ThemeIrAttachmentPageResult {
  data: ThemeIrAttachment[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * ThemeIrAttachment API 响应接口
 */
export interface ThemeIrAttachmentResponse {
  success: boolean;
  message: string;
  data?: ThemeIrAttachment | ThemeIrAttachment[] | ThemeIrAttachmentPageResult;
  error?: string;
}
