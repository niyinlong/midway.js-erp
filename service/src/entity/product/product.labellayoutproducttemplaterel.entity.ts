import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN product_label_layout AND product_template
 */
@Entity('product_label_layout_product_template_rel')
export class ProductLabelLayoutProductTemplateRel {
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
  product_template_id: number;

  // @ManyToOne(() => ProductTemplate)
  // @JoinColumn({ name: 'product_template_id' })
  // product_template: ProductTemplate;

}