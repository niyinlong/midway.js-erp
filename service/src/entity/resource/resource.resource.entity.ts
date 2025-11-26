import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Resources
 */
@Entity('resource_resource')
export class ResourceResource {
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
   * User
   */
  @Column({
    type: 'int'
  })
  user_id: number;

  // @ManyToOne(() => User)
  // @JoinColumn({ name: 'user_id' })
  // user: User;

  /**
   * Working Time
   */
  @Column({
    type: 'int'
  })
  calendar_id: number;

  // @ManyToOne(() => Calendar)
  // @JoinColumn({ name: 'calendar_id' })
  // calendar: Calendar;

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
   * Type
   */
  @Column({
    type: 'varchar'
  })
  resource_type: string;

  /**
   * Timezone
   */
  @Column({
    type: 'varchar'
  })
  tz: string;

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
   * Efficiency Factor
   */
  @Column({
    type: 'varchar'
  })
  time_efficiency: string;

  /**
   * Color
   */
  @Column({
    type: 'int'
  })
  color: number;

  @Column({
    type: 'varchar'
  })
  CONSTRAINT: string;

}