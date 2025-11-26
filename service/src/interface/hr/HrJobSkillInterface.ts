import { HrJobSkill } from '../entity/hr/hr.hrjobskill.entity';

/**
 * HrJobSkill 实体接口
 * 对应数据库表: hr_job_skill
 */
export interface HrJobSkillInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 HrJobSkill 的参数接口
 */
export interface CreateHrJobSkillDTO extends Partial<HrJobSkillInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 HrJobSkill 的参数接口
 */
export interface UpdateHrJobSkillDTO extends Partial<HrJobSkillInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 HrJobSkill 的参数接口
 */
export interface QueryHrJobSkillDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof HrJobSkillInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * HrJobSkill 分页查询结果接口
 */
export interface HrJobSkillPageResult {
  data: HrJobSkill[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * HrJobSkill API 响应接口
 */
export interface HrJobSkillResponse {
  success: boolean;
  message: string;
  data?: HrJobSkill | HrJobSkill[] | HrJobSkillPageResult;
  error?: string;
}
