import { HrEmployeeSkill } from '../entity/hr/hr.hremployeeskill.entity';

/**
 * HrEmployeeSkill 实体接口
 * 对应数据库表: hr_employee_skill
 */
export interface HrEmployeeSkillInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 HrEmployeeSkill 的参数接口
 */
export interface CreateHrEmployeeSkillDTO extends Partial<HrEmployeeSkillInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 HrEmployeeSkill 的参数接口
 */
export interface UpdateHrEmployeeSkillDTO extends Partial<HrEmployeeSkillInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 HrEmployeeSkill 的参数接口
 */
export interface QueryHrEmployeeSkillDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof HrEmployeeSkillInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * HrEmployeeSkill 分页查询结果接口
 */
export interface HrEmployeeSkillPageResult {
  data: HrEmployeeSkill[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * HrEmployeeSkill API 响应接口
 */
export interface HrEmployeeSkillResponse {
  success: boolean;
  message: string;
  data?: HrEmployeeSkill | HrEmployeeSkill[] | HrEmployeeSkillPageResult;
  error?: string;
}
