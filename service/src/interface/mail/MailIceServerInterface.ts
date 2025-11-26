import { MailIceServer } from '../entity/mail/mail.mailiceserver.entity';

/**
 * MailIceServer 实体接口
 * 对应数据库表: mail_ice_server
 */
export interface MailIceServerInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 MailIceServer 的参数接口
 */
export interface CreateMailIceServerDTO extends Partial<MailIceServerInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 MailIceServer 的参数接口
 */
export interface UpdateMailIceServerDTO extends Partial<MailIceServerInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 MailIceServer 的参数接口
 */
export interface QueryMailIceServerDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof MailIceServerInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * MailIceServer 分页查询结果接口
 */
export interface MailIceServerPageResult {
  data: MailIceServer[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * MailIceServer API 响应接口
 */
export interface MailIceServerResponse {
  success: boolean;
  message: string;
  data?: MailIceServer | MailIceServer[] | MailIceServerPageResult;
  error?: string;
}
