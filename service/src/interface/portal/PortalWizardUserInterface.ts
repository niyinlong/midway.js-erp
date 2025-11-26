import { PortalWizardUser } from '../entity/portal/portal.portalwizarduser.entity';

/**
 * PortalWizardUser 实体接口
 * 对应数据库表: portal_wizard_user
 */
export interface PortalWizardUserInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 PortalWizardUser 的参数接口
 */
export interface CreatePortalWizardUserDTO extends Partial<PortalWizardUserInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 PortalWizardUser 的参数接口
 */
export interface UpdatePortalWizardUserDTO extends Partial<PortalWizardUserInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 PortalWizardUser 的参数接口
 */
export interface QueryPortalWizardUserDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof PortalWizardUserInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * PortalWizardUser 分页查询结果接口
 */
export interface PortalWizardUserPageResult {
  data: PortalWizardUser[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * PortalWizardUser API 响应接口
 */
export interface PortalWizardUserResponse {
  success: boolean;
  message: string;
  data?: PortalWizardUser | PortalWizardUser[] | PortalWizardUserPageResult;
  error?: string;
}
