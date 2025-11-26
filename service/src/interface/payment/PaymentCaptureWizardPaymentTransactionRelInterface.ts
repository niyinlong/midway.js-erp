import { PaymentCaptureWizardPaymentTransactionRel } from '../entity/payment/payment.paymentcapturewizardpaymenttransactionrel.entity';

/**
 * PaymentCaptureWizardPaymentTransactionRel 实体接口
 * 对应数据库表: payment_capture_wizard_payment_transaction_rel
 */
export interface PaymentCaptureWizardPaymentTransactionRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 PaymentCaptureWizardPaymentTransactionRel 的参数接口
 */
export interface CreatePaymentCaptureWizardPaymentTransactionRelDTO extends Partial<PaymentCaptureWizardPaymentTransactionRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 PaymentCaptureWizardPaymentTransactionRel 的参数接口
 */
export interface UpdatePaymentCaptureWizardPaymentTransactionRelDTO extends Partial<PaymentCaptureWizardPaymentTransactionRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 PaymentCaptureWizardPaymentTransactionRel 的参数接口
 */
export interface QueryPaymentCaptureWizardPaymentTransactionRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof PaymentCaptureWizardPaymentTransactionRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * PaymentCaptureWizardPaymentTransactionRel 分页查询结果接口
 */
export interface PaymentCaptureWizardPaymentTransactionRelPageResult {
  data: PaymentCaptureWizardPaymentTransactionRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * PaymentCaptureWizardPaymentTransactionRel API 响应接口
 */
export interface PaymentCaptureWizardPaymentTransactionRelResponse {
  success: boolean;
  message: string;
  data?: PaymentCaptureWizardPaymentTransactionRel | PaymentCaptureWizardPaymentTransactionRel[] | PaymentCaptureWizardPaymentTransactionRelPageResult;
  error?: string;
}
