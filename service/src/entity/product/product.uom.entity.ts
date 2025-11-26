import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Link between products and their UoMs
 */
@Entity('product_uom')
export class ProductUom {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Unit
   */
  @Column({
    type: 'int'
  })
  uom_id: number;

  // @ManyToOne(() => Uom)
  // @JoinColumn({ name: 'uom_id' })
  // uom: Uom;

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
   * Barcode
   */
  @Column({
    type: 'varchar'
  })
  barcode: string;

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