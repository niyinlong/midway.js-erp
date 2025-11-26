import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Product Variant
 */
@Entity('product_product')
export class ProductProduct {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Product Template
   */
  @Column({
    type: 'int'
  })
  product_tmpl_id: number;

  // @ManyToOne(() => ProductTmpl)
  // @JoinColumn({ name: 'product_tmpl_id' })
  // product_tmpl: ProductTmpl;

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
   * Internal Reference
   */
  @Column({
    type: 'varchar'
  })
  default_code: string;

  /**
   * Barcode
   */
  @Column({
    type: 'varchar'
  })
  barcode: string;

  /**
   * Combination Indices
   */
  @Column({
    type: 'varchar'
  })
  combination_indices: string;

  /**
   * Cost
   */
  @Column({
    type: 'jsonb'
  })
  standard_price: object;

  /**
   * Volume
   */
  @Column({
    type: 'int'
  })
  volume: number;

  /**
   * Weight
   */
  @Column({
    type: 'int'
  })
  weight: number;

  /**
   * Active
   */
  @Column({
    type: 'boolean'
  })
  active: boolean;

  /**
   * Can Variant Image 1024 be zoomed
   */
  @Column({
    type: 'boolean'
  })
  can_image_variant_1024_be_zoomed: boolean;

  /**
   * Favorite
   */
  @Column({
    type: 'boolean'
  })
  is_favorite: boolean;

  /**
   * Is In Selected Section Of Order
   */
  @Column({
    type: 'boolean'
  })
  is_in_selected_section_of_order: boolean;

  /**
   * Write Date
   */
  @Column({
    type: 'datetime'
  })
  write_date: Date;

  /**
   * Created on
   */
  @Column({
    type: 'datetime'
  })
  create_date: Date;

  /**
   * Lot Properties
   */
  @Column({
    type: 'jsonb'
  })
  lot_properties_definition: object;

}