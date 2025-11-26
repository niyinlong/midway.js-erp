import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Activity Plan
 */
@Entity('mail_activity_plan')
export class MailActivityPlan {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Company
   */
  @Column({
    type: 'int'
  })
  company_id: number;

  // @ManyToOne(() => Company)
  // @JoinColumn({ name: 'company_id' })
  // company: Company;

  /**
   * Applies to
   */
  @Column({
    type: 'int'
  })
  res_model_id: number;

  // @ManyToOne(() => ResModel)
  // @JoinColumn({ name: 'res_model_id' })
  // res_model: ResModel;

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
   * Name
   */
  @Column({
    type: 'varchar'
  })
  name: string;

  /**
   * Model
   */
  @Column({
    type: 'varchar'
  })
  res_model: string;

  /**
   * Active
   */
  @Column({
    type: 'boolean'
  })
  active: boolean;

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

  /**
   * Department
   */
  @Column({
    type: 'int'
  })
  department_id: number;

  // @ManyToOne(() => Department)
  // @JoinColumn({ name: 'department_id' })
  // department: Department;

}