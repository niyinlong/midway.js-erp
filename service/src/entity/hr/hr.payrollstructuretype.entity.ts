import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Salary Structure Type
 */
@Entity('hr_payroll_structure_type')
export class HrPayrollStructureType {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Working Hours
   */
  @Column({
    type: 'int'
  })
  default_resource_calendar_id: number;

  // @ManyToOne(() => DefaultResourceCalendar)
  // @JoinColumn({ name: 'default_resource_calendar_id' })
  // default_resource_calendar: DefaultResourceCalendar;

  /**
   * Country
   */
  @Column({
    type: 'int'
  })
  country_id: number;

  // @ManyToOne(() => Country)
  // @JoinColumn({ name: 'country_id' })
  // country: Country;

  /**
   * Created by
   */
  @Column({
    type: 'int'
  })
  create_uid: number;

  /**
   * Last Updated by
   */
  @Column({
    type: 'int'
  })
  write_uid: number;

  /**
   * Salary Structure Type
   */
  @Column({
    type: 'varchar'
  })
  name: string;

  /**
   * Created on
   */
  @Column({
    type: 'datetime'
  })
  create_date: Date;

  /**
   * Last Updated on
   */
  @Column({
    type: 'datetime'
  })
  write_date: Date;

}