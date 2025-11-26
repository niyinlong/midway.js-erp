import { IrDemoFailureWizard } from '../entity/ir/ir.irdemofailurewizard.entity';

/**
 * IrDemoFailureWizard 实体接口
 * 对应数据库表: ir_demo_failure_wizard
 */
export interface IrDemoFailureWizardInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 IrDemoFailureWizard 的参数接口
 */
export interface CreateIrDemoFailureWizardDTO extends Partial<IrDemoFailureWizardInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 IrDemoFailureWizard 的参数接口
 */
export interface UpdateIrDemoFailureWizardDTO extends Partial<IrDemoFailureWizardInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 IrDemoFailureWizard 的参数接口
 */
export interface QueryIrDemoFailureWizardDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof IrDemoFailureWizardInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * IrDemoFailureWizard 分页查询结果接口
 */
export interface IrDemoFailureWizardPageResult {
  data: IrDemoFailureWizard[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * IrDemoFailureWizard API 响应接口
 */
export interface IrDemoFailureWizardResponse {
  success: boolean;
  message: string;
  data?: IrDemoFailureWizard | IrDemoFailureWizard[] | IrDemoFailureWizardPageResult;
  error?: string;
}
