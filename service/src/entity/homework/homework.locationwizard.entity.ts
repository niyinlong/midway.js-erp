import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Set Homework Location Wizard
 */
@Entity('homework_location_wizard')
export class HomeworkLocationWizard {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Location
   */
  @Column({
    type: 'int'
  })
  work_location_id: number;

  // @ManyToOne(() => WorkLocation)
  // @JoinColumn({ name: 'work_location_id' })
  // work_location: WorkLocation;

  /**
   * Employee
   */
  @Column({
    type: 'int'
  })
  employee_id: number;

  // @ManyToOne(() => Employee)
  // @JoinColumn({ name: 'employee_id' })
  // employee: Employee;

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
   * Date
   */
  @Column({
    type: 'datetime'
  })
  date: Date;

  /**
   * Weekly
   */
  @Column({
    type: 'boolean'
  })
  weekly: boolean;

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