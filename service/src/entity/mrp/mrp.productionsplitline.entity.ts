import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Split Production Detail
 */
@Entity('mrp_production_split_line')
export class MrpProductionSplitLine {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Split Production
   */
  @Column({
    type: 'int'
  })
  mrp_production_split_id: number;

  // @ManyToOne(() => MrpProductionSplit)
  // @JoinColumn({ name: 'mrp_production_split_id' })
  // mrp_production_split: MrpProductionSplit;

  /**
   * Responsible
   */
  @Column({
    type: 'int'
  })
  user_id: number;

  // @ManyToOne(() => User)
  // @JoinColumn({ name: 'user_id' })
  // user: User;

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
   * Quantity To Produce
   */
  @Column({
    type: 'int'
  })
  quantity: number;

  /**
   * Schedule Date
   */
  @Column({
    type: 'datetime'
  })
  date: Date;

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