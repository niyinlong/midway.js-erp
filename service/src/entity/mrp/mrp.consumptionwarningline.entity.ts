import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Line of issue consumption
 */
@Entity('mrp_consumption_warning_line')
export class MrpConsumptionWarningLine {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Parent Wizard
   */
  @Column({
    type: 'int'
  })
  mrp_consumption_warning_id: number;

  // @ManyToOne(() => MrpConsumptionWarning)
  // @JoinColumn({ name: 'mrp_consumption_warning_id' })
  // mrp_consumption_warning: MrpConsumptionWarning;

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
   * Product
   */
  @Column({
    type: 'int'
  })
  product_id: number;

  // @ManyToOne(() => Product)
  // @JoinColumn({ name: 'product_id' })
  // product: Product;

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
   * Consumed
   */
  @Column({
    type: 'varchar'
  })
  product_consumed_qty_uom: string;

  /**
   * To Consume
   */
  @Column({
    type: 'varchar'
  })
  product_expected_qty_uom: string;

}