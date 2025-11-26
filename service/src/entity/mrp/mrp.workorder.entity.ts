import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Work Order
 */
@Entity('mrp_workorder')
export class MrpWorkorder {
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
   * Manufacturing Order
   */
  @Column({
    type: 'int'
  })
  production_id: number;

  // @ManyToOne(() => Production)
  // @JoinColumn({ name: 'production_id' })
  // production: Production;

  /**
   * Leave
   */
  @Column({
    type: 'int'
  })
  leave_id: number;

  // @ManyToOne(() => Leave)
  // @JoinColumn({ name: 'leave_id' })
  // leave: Leave;

  /**
   * Duration Deviation (%)
   */
  @Column({
    type: 'int'
  })
  duration_percent: number;

  /**
   * Operation
   */
  @Column({
    type: 'int'
  })
  operation_id: number;

  // @ManyToOne(() => Operation)
  // @JoinColumn({ name: 'operation_id' })
  // operation: Operation;

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
   * Work Order
   */
  @Column({
    type: 'varchar'
  })
  name: string;

  /**
   * Barcode
   */
  @Column({
    type: 'varchar'
  })
  barcode: string;

  /**
   * Stock Availability
   */
  @Column({
    type: 'varchar'
  })
  production_availability: string;

  /**
   * Status
   */
  @Column({
    type: 'varchar'
  })
  state: string;

  /**
   * Cost Mode
   */
  @Column({
    type: 'varchar'
  })
  cost_mode: string;

  /**
   * Quantity Done
   */
  @Column({
    type: 'int'
  })
  qty_produced: number;

  /**
   * Expected Duration
   */
  @Column({
    type: 'int'
  })
  duration_expected: number;

  /**
   * Carried Quantity
   */
  @Column({
    type: 'int'
  })
  qty_reported_from_previous_wo: number;

  /**
   * Start
   */
  @Column({
    type: 'datetime'
  })
  date_start: Date;

  /**
   * End
   */
  @Column({
    type: 'datetime'
  })
  date_finished: Date;

  /**
   * Production Date
   */
  @Column({
    type: 'datetime'
  })
  production_date: Date;

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
   * Real Duration
   */
  @Column({
    type: 'varchar'
  })
  duration: string;

  /**
   * Duration Per Unit
   */
  @Column({
    type: 'varchar'
  })
  duration_unit: string;

  /**
   * Cost per hour
   */
  @Column({
    type: 'varchar'
  })
  costs_hour: string;

}