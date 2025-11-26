import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Workcenter Productivity Losses
 */
@Entity('mrp_workcenter_productivity_loss')
export class MrpWorkcenterProductivityLoss {
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
   * Category
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
   * Blocking Reason
   */
  @Column({
    type: 'jsonb'
  })
  name: object;

  /**
   * Is a Blocking Reason
   */
  @Column({
    type: 'boolean'
  })
  manual: boolean;

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