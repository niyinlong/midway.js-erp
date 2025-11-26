import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Backorder Confirmation Line
 */
@Entity('mrp_production_backorder_line')
export class MrpProductionBackorderLine {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * MO Backorder
   */
  @Column({
    type: 'int'
  })
  mrp_production_backorder_id: number;

  // @ManyToOne(() => MrpProductionBackorder)
  // @JoinColumn({ name: 'mrp_production_backorder_id' })
  // mrp_production_backorder: MrpProductionBackorder;

  /**
   * Manufacturing Order
   */
  @Column({
    type: 'int'
  })
  mrp_production_id: number;

  // @ManyToOne(() => MrpProduction)
  // @JoinColumn({ name: 'mrp_production_id' })
  // mrp_production: MrpProduction;

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
   * To Backorder
   */
  @Column({
    type: 'boolean'
  })
  to_backorder: boolean;

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