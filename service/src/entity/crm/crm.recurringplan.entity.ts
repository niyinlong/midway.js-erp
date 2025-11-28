import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

/**
 * CRM周期性收入计划实体
 * 作用：存储CRM系统中的周期性收入计划配置，用于管理和预测客户的定期收入
 */
@Entity('crm_recurring_plan')
export class CrmRecurringPlan {
  /**
   * 主键ID
   * 作用：唯一标识周期性收入计划记录
   */
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * 月份数量
   * 作用：定义周期性计划的持续月份数
   */
  @Column({
    type: 'int',
  })
  number_of_months: number;

  /**
   * 排序序号
   * 作用：用于控制周期性计划在界面上的显示顺序
   */
  @Column({
    type: 'int',
  })
  sequence: number;

  /**
   * 创建者ID
   * 作用：记录创建该计划的用户
   */
  @Column({
    type: 'int',
  })
  create_uid: number;

  /**
   * 最后更新者ID
   * 作用：记录最后修改该计划的用户
   */
  @Column({
    type: 'int',
  })
  write_uid: number;

  /**
   * 计划名称
   * 作用：存储多语言环境下的计划名称
   */
  @Column({
    type: 'jsonb',
  })
  name: object;

  /**
   * 是否激活
   * 作用：控制该周期性计划是否可用
   */
  @Column({
    type: 'boolean',
  })
  active: boolean;

  /**
   * 创建时间
   * 作用：记录计划创建的时间戳
   */
  @Column({
    type: 'datetime',
  })
  create_date: Date;

  /**
   * 最后更新时间
   * 作用：记录计划最后修改的时间戳
   */
  @Column({
    type: 'datetime',
  })
  write_date: Date;

  /**
   * 约束字段
   * 作用：存储数据库约束信息
   */
  @Column({
    type: 'varchar',
  })
  CONSTRAINT: string;
}
