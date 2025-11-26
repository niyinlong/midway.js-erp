import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Product Combo Item
 */
@Entity('product_combo_item')
export class ProductComboItem {
  @PrimaryGeneratedColumn()
  id: number;

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
   * Combo
   */
  @Column({
    type: 'int'
  })
  combo_id: number;

  // @ManyToOne(() => Combo)
  // @JoinColumn({ name: 'combo_id' })
  // combo: Combo;

  /**
   * Options
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
   * Extra Price
   */
  @Column({
    type: 'int'
  })
  extra_price: number;

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