import { SnailmailLetter } from '../entity/snailmail/snailmail.snailmailletter.entity';

/**
 * SnailmailLetter 实体接口
 * 对应数据库表: snailmail_letter
 */
export interface SnailmailLetterInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 SnailmailLetter 的参数接口
 */
export interface CreateSnailmailLetterDTO extends Partial<SnailmailLetterInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 SnailmailLetter 的参数接口
 */
export interface UpdateSnailmailLetterDTO extends Partial<SnailmailLetterInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 SnailmailLetter 的参数接口
 */
export interface QuerySnailmailLetterDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof SnailmailLetterInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * SnailmailLetter 分页查询结果接口
 */
export interface SnailmailLetterPageResult {
  data: SnailmailLetter[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * SnailmailLetter API 响应接口
 */
export interface SnailmailLetterResponse {
  success: boolean;
  message: string;
  data?: SnailmailLetter | SnailmailLetter[] | SnailmailLetterPageResult;
  error?: string;
}
