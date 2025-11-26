import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Job Position
 */
@Entity('hr_job')
export class HrJob {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Sequence
   */
  @Column({
    type: 'int'
  })
  sequence: number;

  /**
   * Target
   */
  @Column({
    type: 'int'
  })
  no_of_recruitment: number;

  /**
   * Recruiter
   */
  @Column({
    type: 'int'
  })
  user_id: number;

  // @ManyToOne(() => User)
  // @JoinColumn({ name: 'user_id' })
  // user: User;

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
   * Employment Type
   */
  @Column({
    type: 'int'
  })
  contract_type_id: number;

  // @ManyToOne(() => ContractType)
  // @JoinColumn({ name: 'contract_type_id' })
  // contract_type: ContractType;

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
   * Job Position
   */
  @Column({
    type: 'jsonb'
  })
  name: object;

  /**
   * Job Description
   */
  @Column({
    type: 'varchar'
  })
  description: string;

  /**
   * Requirements
   */
  @Column({
    type: 'varchar'
  })
  requirements: string;

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

  @Column({
    type: 'varchar'
  })
  CONSTRAINT: string;

}