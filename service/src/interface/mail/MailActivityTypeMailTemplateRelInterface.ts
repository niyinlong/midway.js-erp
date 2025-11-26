import { MailActivityTypeMailTemplateRel } from '../entity/mail/mail.mailactivitytypemailtemplaterel.entity';

/**
 * MailActivityTypeMailTemplateRel 实体接口
 * 对应数据库表: mail_activity_type_mail_template_rel
 */
export interface MailActivityTypeMailTemplateRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 MailActivityTypeMailTemplateRel 的参数接口
 */
export interface CreateMailActivityTypeMailTemplateRelDTO extends Partial<MailActivityTypeMailTemplateRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 MailActivityTypeMailTemplateRel 的参数接口
 */
export interface UpdateMailActivityTypeMailTemplateRelDTO extends Partial<MailActivityTypeMailTemplateRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 MailActivityTypeMailTemplateRel 的参数接口
 */
export interface QueryMailActivityTypeMailTemplateRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof MailActivityTypeMailTemplateRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * MailActivityTypeMailTemplateRel 分页查询结果接口
 */
export interface MailActivityTypeMailTemplateRelPageResult {
  data: MailActivityTypeMailTemplateRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * MailActivityTypeMailTemplateRel API 响应接口
 */
export interface MailActivityTypeMailTemplateRelResponse {
  success: boolean;
  message: string;
  data?: MailActivityTypeMailTemplateRel | MailActivityTypeMailTemplateRel[] | MailActivityTypeMailTemplateRelPageResult;
  error?: string;
}
