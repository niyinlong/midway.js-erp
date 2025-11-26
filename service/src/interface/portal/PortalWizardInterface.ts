import { PortalWizard } from '../entity/portal/portal.portalwizard.entity';

/**
 * PortalWizard 实体接口
 * 对应数据库表: portal_wizard
 */
export interface PortalWizardInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 PortalWizard 的参数接口
 */
export interface CreatePortalWizardDTO extends Partial<PortalWizardInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 PortalWizard 的参数接口
 */
export interface UpdatePortalWizardDTO extends Partial<PortalWizardInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 PortalWizard 的参数接口
 */
export interface QueryPortalWizardDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof PortalWizardInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * PortalWizard 分页查询结果接口
 */
export interface PortalWizardPageResult {
  data: PortalWizard[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * PortalWizard API 响应接口
 */
export interface PortalWizardResponse {
  success: boolean;
  message: string;
  data?: PortalWizard | PortalWizard[] | PortalWizardPageResult;
  error?: string;
}
