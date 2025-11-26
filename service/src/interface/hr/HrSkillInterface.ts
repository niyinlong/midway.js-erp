import { HrSkill } from '../entity/hr/hr.hrskill.entity';

/**
 * HrSkill 实体接口
 * 对应数据库表: hr_skill
 */
export interface HrSkillInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 HrSkill 的参数接口
 */
export interface CreateHrSkillDTO extends Partial<HrSkillInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 HrSkill 的参数接口
 */
export interface UpdateHrSkillDTO extends Partial<HrSkillInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 HrSkill 的参数接口
 */
export interface QueryHrSkillDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof HrSkillInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * HrSkill 分页查询结果接口
 */
export interface HrSkillPageResult {
  data: HrSkill[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * HrSkill API 响应接口
 */
export interface HrSkillResponse {
  success: boolean;
  message: string;
  data?: HrSkill | HrSkill[] | HrSkillPageResult;
  error?: string;
}
