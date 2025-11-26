import { RuleGroupRel } from '../entity/rule/rule.rulegrouprel.entity';

/**
 * RuleGroupRel 实体接口
 * 对应数据库表: rule_group_rel
 */
export interface RuleGroupRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 RuleGroupRel 的参数接口
 */
export interface CreateRuleGroupRelDTO extends Partial<RuleGroupRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 RuleGroupRel 的参数接口
 */
export interface UpdateRuleGroupRelDTO extends Partial<RuleGroupRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 RuleGroupRel 的参数接口
 */
export interface QueryRuleGroupRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof RuleGroupRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * RuleGroupRel 分页查询结果接口
 */
export interface RuleGroupRelPageResult {
  data: RuleGroupRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * RuleGroupRel API 响应接口
 */
export interface RuleGroupRelResponse {
  success: boolean;
  message: string;
  data?: RuleGroupRel | RuleGroupRel[] | RuleGroupRelPageResult;
  error?: string;
}
