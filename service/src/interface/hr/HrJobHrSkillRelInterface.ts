import { HrJobHrSkillRel } from '../entity/hr/hr.hrjobhrskillrel.entity';

/**
 * HrJobHrSkillRel 实体接口
 * 对应数据库表: hr_job_hr_skill_rel
 */
export interface HrJobHrSkillRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 HrJobHrSkillRel 的参数接口
 */
export interface CreateHrJobHrSkillRelDTO extends Partial<HrJobHrSkillRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 HrJobHrSkillRel 的参数接口
 */
export interface UpdateHrJobHrSkillRelDTO extends Partial<HrJobHrSkillRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 HrJobHrSkillRel 的参数接口
 */
export interface QueryHrJobHrSkillRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof HrJobHrSkillRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * HrJobHrSkillRel 分页查询结果接口
 */
export interface HrJobHrSkillRelPageResult {
  data: HrJobHrSkillRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * HrJobHrSkillRel API 响应接口
 */
export interface HrJobHrSkillRelResponse {
  success: boolean;
  message: string;
  data?: HrJobHrSkillRel | HrJobHrSkillRel[] | HrJobHrSkillRelPageResult;
  error?: string;
}
