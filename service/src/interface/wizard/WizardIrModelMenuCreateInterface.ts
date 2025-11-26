import { WizardIrModelMenuCreate } from '../entity/wizard/wizard.wizardirmodelmenucreate.entity';

/**
 * WizardIrModelMenuCreate 实体接口
 * 对应数据库表: wizard_ir_model_menu_create
 */
export interface WizardIrModelMenuCreateInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 WizardIrModelMenuCreate 的参数接口
 */
export interface CreateWizardIrModelMenuCreateDTO extends Partial<WizardIrModelMenuCreateInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 WizardIrModelMenuCreate 的参数接口
 */
export interface UpdateWizardIrModelMenuCreateDTO extends Partial<WizardIrModelMenuCreateInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 WizardIrModelMenuCreate 的参数接口
 */
export interface QueryWizardIrModelMenuCreateDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof WizardIrModelMenuCreateInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * WizardIrModelMenuCreate 分页查询结果接口
 */
export interface WizardIrModelMenuCreatePageResult {
  data: WizardIrModelMenuCreate[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * WizardIrModelMenuCreate API 响应接口
 */
export interface WizardIrModelMenuCreateResponse {
  success: boolean;
  message: string;
  data?: WizardIrModelMenuCreate | WizardIrModelMenuCreate[] | WizardIrModelMenuCreatePageResult;
  error?: string;
}
