import { HrPayrollStructureType } from '../entity/hr/hr.hrpayrollstructuretype.entity';

/**
 * HrPayrollStructureType 实体接口
 * 对应数据库表: hr_payroll_structure_type
 */
export interface HrPayrollStructureTypeInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 HrPayrollStructureType 的参数接口
 */
export interface CreateHrPayrollStructureTypeDTO extends Partial<HrPayrollStructureTypeInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 HrPayrollStructureType 的参数接口
 */
export interface UpdateHrPayrollStructureTypeDTO extends Partial<HrPayrollStructureTypeInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 HrPayrollStructureType 的参数接口
 */
export interface QueryHrPayrollStructureTypeDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof HrPayrollStructureTypeInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * HrPayrollStructureType 分页查询结果接口
 */
export interface HrPayrollStructureTypePageResult {
  data: HrPayrollStructureType[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * HrPayrollStructureType API 响应接口
 */
export interface HrPayrollStructureTypeResponse {
  success: boolean;
  message: string;
  data?: HrPayrollStructureType | HrPayrollStructureType[] | HrPayrollStructureTypePageResult;
  error?: string;
}
