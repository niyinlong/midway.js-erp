import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Work Center Usage
 */
@Entity('mrp_routing_workcenter')
export class MrpRoutingWorkcenter {
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
   * Sequence
   */
  @Column({
    type: 'int'
  })
  sequence: number;

  /**
   * Bill of Material
   */
  @Column({
    type: 'int'
  })
  bom_id: number;

  // @ManyToOne(() => Bom)
  // @JoinColumn({ name: 'bom_id' })
  // bom: Bom;

  /**
   * Based on
   */
  @Column({
    type: 'int'
  })
  time_mode_batch: number;

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
   * Operation
   */
  @Column({
    type: 'varchar'
  })
  name: string;

  /**
   * Duration Computation
   */
  @Column({
    type: 'varchar'
  })
  time_mode: string;

  /**
   * Cost based on
   */
  @Column({
    type: 'varchar'
  })
  cost_mode: string;

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
   * Manual Duration
   */
  @Column({
    type: 'varchar'
  })
  time_cycle_manual: string;

}