import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Assign serial numbers to production order
 */
@Entity('mrp_production_serials')
export class MrpProductionSerials {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Production
   */
  @Column({
    type: 'int'
  })
  production_id: number;

  // @ManyToOne(() => Production)
  // @JoinColumn({ name: 'production_id' })
  // production: Production;

  /**
   * Workorder
   */
  @Column({
    type: 'int'
  })
  workorder_id: number;

  // @ManyToOne(() => Workorder)
  // @JoinColumn({ name: 'workorder_id' })
  // workorder: Workorder;

  /**
   * Number of SN
   */
  @Column({
    type: 'int'
  })
  lot_quantity: number;

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
   * First SN
   */
  @Column({
    type: 'varchar'
  })
  lot_name: string;

  /**
   * Produced Serial Numbers
   */
  @Column({
    type: 'varchar'
  })
  serial_numbers: string;

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