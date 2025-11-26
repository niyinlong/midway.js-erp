import { MailCannedResponseResGroupsRel } from '../entity/mail/mail.mailcannedresponseresgroupsrel.entity';

/**
 * MailCannedResponseResGroupsRel 实体接口
 * 对应数据库表: mail_canned_response_res_groups_rel
 */
export interface MailCannedResponseResGroupsRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 MailCannedResponseResGroupsRel 的参数接口
 */
export interface CreateMailCannedResponseResGroupsRelDTO extends Partial<MailCannedResponseResGroupsRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 MailCannedResponseResGroupsRel 的参数接口
 */
export interface UpdateMailCannedResponseResGroupsRelDTO extends Partial<MailCannedResponseResGroupsRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 MailCannedResponseResGroupsRel 的参数接口
 */
export interface QueryMailCannedResponseResGroupsRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof MailCannedResponseResGroupsRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * MailCannedResponseResGroupsRel 分页查询结果接口
 */
export interface MailCannedResponseResGroupsRelPageResult {
  data: MailCannedResponseResGroupsRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * MailCannedResponseResGroupsRel API 响应接口
 */
export interface MailCannedResponseResGroupsRelResponse {
  success: boolean;
  message: string;
  data?: MailCannedResponseResGroupsRel | MailCannedResponseResGroupsRel[] | MailCannedResponseResGroupsRelPageResult;
  error?: string;
}
