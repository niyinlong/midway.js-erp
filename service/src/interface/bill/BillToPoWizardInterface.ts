import { BillToPoWizard } from '../entity/bill/bill.billtopowizard.entity';

/**
 * BillToPoWizard 实体接口
 * 对应数据库表: bill_to_po_wizard
 */
export interface BillToPoWizardInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 BillToPoWizard 的参数接口
 */
export interface CreateBillToPoWizardDTO extends Partial<BillToPoWizardInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 BillToPoWizard 的参数接口
 */
export interface UpdateBillToPoWizardDTO extends Partial<BillToPoWizardInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 BillToPoWizard 的参数接口
 */
export interface QueryBillToPoWizardDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof BillToPoWizardInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * BillToPoWizard 分页查询结果接口
 */
export interface BillToPoWizardPageResult {
  data: BillToPoWizard[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * BillToPoWizard API 响应接口
 */
export interface BillToPoWizardResponse {
  success: boolean;
  message: string;
  data?: BillToPoWizard | BillToPoWizard[] | BillToPoWizardPageResult;
  error?: string;
}
