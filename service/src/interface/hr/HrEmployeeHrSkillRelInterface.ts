import { HrEmployeeHrSkillRel } from '../entity/hr/hr.hremployeehrskillrel.entity';

/**
 * HrEmployeeHrSkillRel 实体接口
 * 对应数据库表: hr_employee_hr_skill_rel
 */
export interface HrEmployeeHrSkillRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 HrEmployeeHrSkillRel 的参数接口
 */
export interface CreateHrEmployeeHrSkillRelDTO extends Partial<HrEmployeeHrSkillRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 HrEmployeeHrSkillRel 的参数接口
 */
export interface UpdateHrEmployeeHrSkillRelDTO extends Partial<HrEmployeeHrSkillRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 HrEmployeeHrSkillRel 的参数接口
 */
export interface QueryHrEmployeeHrSkillRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof HrEmployeeHrSkillRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * HrEmployeeHrSkillRel 分页查询结果接口
 */
export interface HrEmployeeHrSkillRelPageResult {
  data: HrEmployeeHrSkillRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * HrEmployeeHrSkillRel API 响应接口
 */
export interface HrEmployeeHrSkillRelResponse {
  success: boolean;
  message: string;
  data?: HrEmployeeHrSkillRel | HrEmployeeHrSkillRel[] | HrEmployeeHrSkillRelPageResult;
  error?: string;
}
