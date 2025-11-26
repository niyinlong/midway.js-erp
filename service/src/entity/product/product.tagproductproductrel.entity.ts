import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN product_product AND product_tag
 */
@Entity('product_tag_product_product_rel')
export class ProductTagProductProductRel {
  @Column({
    type: 'int'
  })
  product_product_id: number;

  // @ManyToOne(() => ProductProduct)
  // @JoinColumn({ name: 'product_product_id' })
  // product_product: ProductProduct;

  @Column({
    type: 'int'
  })
  product_tag_id: number;

  // @ManyToOne(() => ProductTag)
  // @JoinColumn({ name: 'product_tag_id' })
  // product_tag: ProductTag;

}