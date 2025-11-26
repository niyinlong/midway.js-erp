import { PaymentRefundWizard } from '../entity/payment/payment.paymentrefundwizard.entity';

/**
 * PaymentRefundWizard 实体接口
 * 对应数据库表: payment_refund_wizard
 */
export interface PaymentRefundWizardInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 PaymentRefundWizard 的参数接口
 */
export interface CreatePaymentRefundWizardDTO extends Partial<PaymentRefundWizardInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 PaymentRefundWizard 的参数接口
 */
export interface UpdatePaymentRefundWizardDTO extends Partial<PaymentRefundWizardInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 PaymentRefundWizard 的参数接口
 */
export interface QueryPaymentRefundWizardDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof PaymentRefundWizardInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * PaymentRefundWizard 分页查询结果接口
 */
export interface PaymentRefundWizardPageResult {
  data: PaymentRefundWizard[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * PaymentRefundWizard API 响应接口
 */
export interface PaymentRefundWizardResponse {
  success: boolean;
  message: string;
  data?: PaymentRefundWizard | PaymentRefundWizard[] | PaymentRefundWizardPageResult;
  error?: string;
}
