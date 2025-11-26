import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

/**
 * CRM Recurring revenue plans
 */
@Entity('crm_recurring_plan')
export class CrmRecurringPlan {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * # Months
   */
  @Column({
    type: 'int',
  })
  number_of_months: number;

  /**
   * Sequence
   */
  @Column({
    type: 'int',
  })
  sequence: number;

  /**
   * Created by
   */
  @Column({
    type: 'int',
  })
  create_uid: number;

  /**
   * Last Updated by
   */
  @Column({
    type: 'int',
  })
  write_uid: number;

  /**
   * Plan Name
   */
  @Column({
    type: 'jsonb',
  })
  name: object;

  /**
   * Active
   */
  @Column({
    type: 'boolean',
  })
  active: boolean;

  /**
   * Created on
   */
  @Column({
    type: 'datetime',
  })
  create_date: Date;

  /**
   * Last Updated on
   */
  @Column({
    type: 'datetime',
  })
  write_date: Date;

  @Column({
    type: 'varchar',
  })
  CONSTRAINT: string;
}
