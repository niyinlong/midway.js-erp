import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Department
 */
@Entity('hr_department')
export class HrDepartment {
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
   * Parent Department
   */
  @Column({
    type: 'int'
  })
  parent_id: number;

  // @ManyToOne(() => Parent)
  // @JoinColumn({ name: 'parent_id' })
  // parent: Parent;

  /**
   * Manager
   */
  @Column({
    type: 'int'
  })
  manager_id: number;

  // @ManyToOne(() => Manager)
  // @JoinColumn({ name: 'manager_id' })
  // manager: Manager;

  /**
   * Color Index
   */
  @Column({
    type: 'int'
  })
  color: number;

  /**
   * Master Department
   */
  @Column({
    type: 'int'
  })
  master_department_id: number;

  // @ManyToOne(() => MasterDepartment)
  // @JoinColumn({ name: 'master_department_id' })
  // master_department: MasterDepartment;

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
   * Parent Path
   */
  @Column({
    type: 'varchar'
  })
  parent_path: string;

  /**
   * Department Name
   */
  @Column({
    type: 'jsonb'
  })
  name: object;

  /**
   * Note
   */
  @Column({
    type: 'varchar'
  })
  note: string;

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

}