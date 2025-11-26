import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Merge Partner Line
 */
@Entity('base_partner_merge_line')
export class BasePartnerMergeLine {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Wizard
   */
  @Column({
    type: 'int'
  })
  wizard_id: number;

  // @ManyToOne(() => Wizard)
  // @JoinColumn({ name: 'wizard_id' })
  // wizard: Wizard;

  /**
   * MinID
   */
  @Column({
    type: 'int'
  })
  min_id: number;

  // @ManyToOne(() => Min)
  // @JoinColumn({ name: 'min_id' })
  // min: Min;

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
   * Ids
   */
  @Column({
    type: 'varchar'
  })
  aggr_ids: string;

  // @ManyToOne(() => Aggrs)
  // @JoinColumn({ name: 'aggr_ids' })
  // aggrs: Aggrs;

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