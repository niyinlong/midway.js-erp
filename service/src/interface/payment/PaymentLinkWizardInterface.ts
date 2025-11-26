import { PaymentLinkWizard } from '../entity/payment/payment.paymentlinkwizard.entity';

/**
 * PaymentLinkWizard 实体接口
 * 对应数据库表: payment_link_wizard
 */
export interface PaymentLinkWizardInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 PaymentLinkWizard 的参数接口
 */
export interface CreatePaymentLinkWizardDTO extends Partial<PaymentLinkWizardInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 PaymentLinkWizard 的参数接口
 */
export interface UpdatePaymentLinkWizardDTO extends Partial<PaymentLinkWizardInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 PaymentLinkWizard 的参数接口
 */
export interface QueryPaymentLinkWizardDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof PaymentLinkWizardInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * PaymentLinkWizard 分页查询结果接口
 */
export interface PaymentLinkWizardPageResult {
  data: PaymentLinkWizard[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * PaymentLinkWizard API 响应接口
 */
export interface PaymentLinkWizardResponse {
  success: boolean;
  message: string;
  data?: PaymentLinkWizard | PaymentLinkWizard[] | PaymentLinkWizardPageResult;
  error?: string;
}
