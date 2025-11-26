import { CalendarPopoverDeleteWizard } from '../entity/calendar/calendar.calendarpopoverdeletewizard.entity';

/**
 * CalendarPopoverDeleteWizard 实体接口
 * 对应数据库表: calendar_popover_delete_wizard
 */
export interface CalendarPopoverDeleteWizardInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 CalendarPopoverDeleteWizard 的参数接口
 */
export interface CreateCalendarPopoverDeleteWizardDTO extends Partial<CalendarPopoverDeleteWizardInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 CalendarPopoverDeleteWizard 的参数接口
 */
export interface UpdateCalendarPopoverDeleteWizardDTO extends Partial<CalendarPopoverDeleteWizardInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 CalendarPopoverDeleteWizard 的参数接口
 */
export interface QueryCalendarPopoverDeleteWizardDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof CalendarPopoverDeleteWizardInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * CalendarPopoverDeleteWizard 分页查询结果接口
 */
export interface CalendarPopoverDeleteWizardPageResult {
  data: CalendarPopoverDeleteWizard[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * CalendarPopoverDeleteWizard API 响应接口
 */
export interface CalendarPopoverDeleteWizardResponse {
  success: boolean;
  message: string;
  data?: CalendarPopoverDeleteWizard | CalendarPopoverDeleteWizard[] | CalendarPopoverDeleteWizardPageResult;
  error?: string;
}
