import { CrmTeamMember } from '../entity/crm/crm.crmteammember.entity';

/**
 * CrmTeamMember 实体接口
 * 对应数据库表: crm_team_member
 */
export interface CrmTeamMemberInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 CrmTeamMember 的参数接口
 */
export interface CreateCrmTeamMemberDTO extends Partial<CrmTeamMemberInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 CrmTeamMember 的参数接口
 */
export interface UpdateCrmTeamMemberDTO extends Partial<CrmTeamMemberInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 CrmTeamMember 的参数接口
 */
export interface QueryCrmTeamMemberDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof CrmTeamMemberInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * CrmTeamMember 分页查询结果接口
 */
export interface CrmTeamMemberPageResult {
  data: CrmTeamMember[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * CrmTeamMember API 响应接口
 */
export interface CrmTeamMemberResponse {
  success: boolean;
  message: string;
  data?: CrmTeamMember | CrmTeamMember[] | CrmTeamMemberPageResult;
  error?: string;
}
