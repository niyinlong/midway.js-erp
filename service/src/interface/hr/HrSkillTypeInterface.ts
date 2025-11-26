import { HrSkillType } from '../entity/hr/hr.hrskilltype.entity';

/**
 * HrSkillType 实体接口
 * 对应数据库表: hr_skill_type
 */
export interface HrSkillTypeInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 HrSkillType 的参数接口
 */
export interface CreateHrSkillTypeDTO extends Partial<HrSkillTypeInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 HrSkillType 的参数接口
 */
export interface UpdateHrSkillTypeDTO extends Partial<HrSkillTypeInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 HrSkillType 的参数接口
 */
export interface QueryHrSkillTypeDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof HrSkillTypeInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * HrSkillType 分页查询结果接口
 */
export interface HrSkillTypePageResult {
  data: HrSkillType[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * HrSkillType API 响应接口
 */
export interface HrSkillTypeResponse {
  success: boolean;
  message: string;
  data?: HrSkillType | HrSkillType[] | HrSkillTypePageResult;
  error?: string;
}
