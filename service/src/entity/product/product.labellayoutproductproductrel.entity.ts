import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN product_label_layout AND product_product
 */
@Entity('product_label_layout_product_product_rel')
export class ProductLabelLayoutProductProductRel {
  @Column({
    type: 'int'
  })
  product_label_layout_id: number;

  // @ManyToOne(() => ProductLabelLayout)
  // @JoinColumn({ name: 'product_label_layout_id' })
  // product_label_layout: ProductLabelLayout;

  @Column({
    type: 'int'
  })
  product_product_id: number;

  // @ManyToOne(() => ProductProduct)
  // @JoinColumn({ name: 'product_product_id' })
  // product_product: ProductProduct;

}