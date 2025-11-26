import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Workcenter Productivity Log
 */
@Entity('mrp_workcenter_productivity')
export class MrpWorkcenterProductivity {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Work Center
   */
  @Column({
    type: 'int'
  })
  workcenter_id: number;

  // @ManyToOne(() => Workcenter)
  // @JoinColumn({ name: 'workcenter_id' })
  // workcenter: Workcenter;

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
   * Work Order
   */
  @Column({
    type: 'int'
  })
  workorder_id: number;

  // @ManyToOne(() => Workorder)
  // @JoinColumn({ name: 'workorder_id' })
  // workorder: Workorder;

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
   * Loss Reason
   */
  @Column({
    type: 'int'
  })
  loss_id: number;

  // @ManyToOne(() => Loss)
  // @JoinColumn({ name: 'loss_id' })
  // loss: Loss;

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
   * Description
   */
  @Column({
    type: 'varchar'
  })
  description: string;

  /**
   * Start Date
   */
  @Column({
    type: 'datetime'
  })
  date_start: Date;

  /**
   * End Date
   */
  @Column({
    type: 'datetime'
  })
  date_end: Date;

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
   * Duration
   */
  @Column({
    type: 'varchar'
  })
  duration: string;

  /**
   * Account Move Line
   */
  @Column({
    type: 'int'
  })
  account_move_line_id: number;

  // @ManyToOne(() => AccountMoveLine)
  // @JoinColumn({ name: 'account_move_line_id' })
  // account_move_line: AccountMoveLine;

}