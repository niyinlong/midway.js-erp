import { PaymentCaptureWizard } from '../entity/payment/payment.paymentcapturewizard.entity';

/**
 * PaymentCaptureWizard 实体接口
 * 对应数据库表: payment_capture_wizard
 */
export interface PaymentCaptureWizardInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 PaymentCaptureWizard 的参数接口
 */
export interface CreatePaymentCaptureWizardDTO extends Partial<PaymentCaptureWizardInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 PaymentCaptureWizard 的参数接口
 */
export interface UpdatePaymentCaptureWizardDTO extends Partial<PaymentCaptureWizardInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 PaymentCaptureWizard 的参数接口
 */
export interface QueryPaymentCaptureWizardDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof PaymentCaptureWizardInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * PaymentCaptureWizard 分页查询结果接口
 */
export interface PaymentCaptureWizardPageResult {
  data: PaymentCaptureWizard[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * PaymentCaptureWizard API 响应接口
 */
export interface PaymentCaptureWizardResponse {
  success: boolean;
  message: string;
  data?: PaymentCaptureWizard | PaymentCaptureWizard[] | PaymentCaptureWizardPageResult;
  error?: string;
}
