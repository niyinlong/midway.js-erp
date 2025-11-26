import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN product_template AND product_tag
 */
@Entity('product_tag_product_template_rel')
export class ProductTagProductTemplateRel {
  @Column({
    type: 'int'
  })
  product_template_id: number;

  // @ManyToOne(() => ProductTemplate)
  // @JoinColumn({ name: 'product_template_id' })
  // product_template: ProductTemplate;

  @Column({
    type: 'int'
  })
  product_tag_id: number;

  // @ManyToOne(() => ProductTag)
  // @JoinColumn({ name: 'product_tag_id' })
  // product_tag: ProductTag;

}