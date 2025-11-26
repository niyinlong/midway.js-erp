import { MailGatewayAllowed } from '../entity/mail/mail.mailgatewayallowed.entity';

/**
 * MailGatewayAllowed 实体接口
 * 对应数据库表: mail_gateway_allowed
 */
export interface MailGatewayAllowedInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 MailGatewayAllowed 的参数接口
 */
export interface CreateMailGatewayAllowedDTO extends Partial<MailGatewayAllowedInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 MailGatewayAllowed 的参数接口
 */
export interface UpdateMailGatewayAllowedDTO extends Partial<MailGatewayAllowedInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 MailGatewayAllowed 的参数接口
 */
export interface QueryMailGatewayAllowedDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof MailGatewayAllowedInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * MailGatewayAllowed 分页查询结果接口
 */
export interface MailGatewayAllowedPageResult {
  data: MailGatewayAllowed[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * MailGatewayAllowed API 响应接口
 */
export interface MailGatewayAllowedResponse {
  success: boolean;
  message: string;
  data?: MailGatewayAllowed | MailGatewayAllowed[] | MailGatewayAllowedPageResult;
  error?: string;
}
