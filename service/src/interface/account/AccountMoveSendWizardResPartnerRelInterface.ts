import { AccountMoveSendWizardResPartnerRel } from '../entity/account/account.accountmovesendwizardrespartnerrel.entity';

/**
 * AccountMoveSendWizardResPartnerRel 实体接口
 * 对应数据库表: account_move_send_wizard_res_partner_rel
 */
export interface AccountMoveSendWizardResPartnerRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 AccountMoveSendWizardResPartnerRel 的参数接口
 */
export interface CreateAccountMoveSendWizardResPartnerRelDTO extends Partial<AccountMoveSendWizardResPartnerRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 AccountMoveSendWizardResPartnerRel 的参数接口
 */
export interface UpdateAccountMoveSendWizardResPartnerRelDTO extends Partial<AccountMoveSendWizardResPartnerRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 AccountMoveSendWizardResPartnerRel 的参数接口
 */
export interface QueryAccountMoveSendWizardResPartnerRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof AccountMoveSendWizardResPartnerRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * AccountMoveSendWizardResPartnerRel 分页查询结果接口
 */
export interface AccountMoveSendWizardResPartnerRelPageResult {
  data: AccountMoveSendWizardResPartnerRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * AccountMoveSendWizardResPartnerRel API 响应接口
 */
export interface AccountMoveSendWizardResPartnerRelResponse {
  success: boolean;
  message: string;
  data?: AccountMoveSendWizardResPartnerRel | AccountMoveSendWizardResPartnerRel[] | AccountMoveSendWizardResPartnerRelPageResult;
  error?: string;
}
