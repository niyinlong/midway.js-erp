import { HrContractType } from '../entity/hr/hr.hrcontracttype.entity';

/**
 * HrContractType 实体接口
 * 对应数据库表: hr_contract_type
 */
export interface HrContractTypeInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 HrContractType 的参数接口
 */
export interface CreateHrContractTypeDTO extends Partial<HrContractTypeInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 HrContractType 的参数接口
 */
export interface UpdateHrContractTypeDTO extends Partial<HrContractTypeInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 HrContractType 的参数接口
 */
export interface QueryHrContractTypeDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof HrContractTypeInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * HrContractType 分页查询结果接口
 */
export interface HrContractTypePageResult {
  data: HrContractType[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * HrContractType API 响应接口
 */
export interface HrContractTypeResponse {
  success: boolean;
  message: string;
  data?: HrContractType | HrContractType[] | HrContractTypePageResult;
  error?: string;
}
