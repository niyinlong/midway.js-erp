import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Work Center Capacity
 */
@Entity('mrp_workcenter_capacity')
export class MrpWorkcenterCapacity {
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
   * Unit
   */
  @Column({
    type: 'int'
  })
  product_uom_id: number;

  // @ManyToOne(() => ProductUom)
  // @JoinColumn({ name: 'product_uom_id' })
  // product_uom: ProductUom;

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
   * Capacity
   */
  @Column({
    type: 'varchar'
  })
  capacity: string;

  /**
   * Setup Time (minutes)
   */
  @Column({
    type: 'varchar'
  })
  time_start: string;

  /**
   * Cleanup Time (minutes)
   */
  @Column({
    type: 'varchar'
  })
  time_stop: string;

  @Column({
    type: 'varchar'
  })
  CONSTRAINT: string;

}