import { CrmStageCrmTeamRel } from '../entity/crm/crm.crmstagecrmteamrel.entity';

/**
 * CrmStageCrmTeamRel 实体接口
 * 对应数据库表: crm_stage_crm_team_rel
 */
export interface CrmStageCrmTeamRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 CrmStageCrmTeamRel 的参数接口
 */
export interface CreateCrmStageCrmTeamRelDTO extends Partial<CrmStageCrmTeamRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 CrmStageCrmTeamRel 的参数接口
 */
export interface UpdateCrmStageCrmTeamRelDTO extends Partial<CrmStageCrmTeamRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 CrmStageCrmTeamRel 的参数接口
 */
export interface QueryCrmStageCrmTeamRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof CrmStageCrmTeamRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * CrmStageCrmTeamRel 分页查询结果接口
 */
export interface CrmStageCrmTeamRelPageResult {
  data: CrmStageCrmTeamRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * CrmStageCrmTeamRel API 响应接口
 */
export interface CrmStageCrmTeamRelResponse {
  success: boolean;
  message: string;
  data?: CrmStageCrmTeamRel | CrmStageCrmTeamRel[] | CrmStageCrmTeamRelPageResult;
  error?: string;
}
