import { Rule, RuleType, Required } from '@midwayjs/validate';
import { CalendarEventResPartnerRel } from '../entity/calendar/calendar.calendareventrespartnerrel.entity';
import { CreateCalendarEventResPartnerRelDTO as CreateBaseDTO, UpdateCalendarEventResPartnerRelDTO as UpdateBaseDTO } from '../interface/calendar/CalendarEventResPartnerRelInterface';

/**
 * 创建 CalendarEventResPartnerRel 的DTO验证类
 * 对应数据库表: calendar_event_res_partner_rel
 */
export class CreateCalendarEventResPartnerRelDTO implements CreateBaseDTO {
  @Rule(RuleType.string())
  name?: string;
  @Rule(RuleType.string())
  code?: string;
  
  /**
   * 可以添加自定义验证方法
   */
  validate() {
    // 自定义验证逻辑
    return true;
  }
}

/**
 * 更新 CalendarEventResPartnerRel 的DTO验证类
 */
export class UpdateCalendarEventResPartnerRelDTO implements UpdateBaseDTO {
  @Rule(RuleType.string())
  name?: string;
  @Rule(RuleType.string())
  code?: string;
  
  /**
   * 可以添加自定义验证方法
   */
  validate() {
    // 自定义验证逻辑
    return true;
  }
}

/**
 * 查询 CalendarEventResPartnerRel 的DTO验证类
 */
export class QueryCalendarEventResPartnerRelDTO {
  @Rule(RuleType.number().integer().min(1))
  page?: number = 1;
  
  @Rule(RuleType.number().integer().min(1).max(100))
  pageSize?: number = 10;
  
  @Rule(RuleType.string())
  sortBy?: string = 'id';
  
  @Rule(RuleType.string().valid('ASC', 'DESC'))
  sortOrder?: 'ASC' | 'DESC' = 'DESC';
  
  @Rule(RuleType.string())
  keyword?: string;
  
  // 可以根据实体字段扩展更多查询条件验证
}

/**
 * 批量删除 CalendarEventResPartnerRel 的DTO验证类
 */
export class BatchDeleteCalendarEventResPartnerRelDTO {
  @Required()
  @Rule(RuleType.array().required().items(RuleType.union([RuleType.string(), RuleType.number()])))
  ids: (string | number)[];
}

/**
 * ID参数验证类
 */
export class IdParamDTO {
  @Required()
  @Rule(RuleType.union([RuleType.string(), RuleType.number()]))
  id: string | number;
}
