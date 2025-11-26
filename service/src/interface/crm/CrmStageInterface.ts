import { CrmStage } from '../entity/crm/crm.crmstage.entity';

/**
 * CrmStage 实体接口
 * 对应数据库表: crm_stage
 */
export interface CrmStageInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 CrmStage 的参数接口
 */
export interface CreateCrmStageDTO extends Partial<CrmStageInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 CrmStage 的参数接口
 */
export interface UpdateCrmStageDTO extends Partial<CrmStageInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 CrmStage 的参数接口
 */
export interface QueryCrmStageDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof CrmStageInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * CrmStage 分页查询结果接口
 */
export interface CrmStagePageResult {
  data: CrmStage[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * CrmStage API 响应接口
 */
export interface CrmStageResponse {
  success: boolean;
  message: string;
  data?: CrmStage | CrmStage[] | CrmStagePageResult;
  error?: string;
}
