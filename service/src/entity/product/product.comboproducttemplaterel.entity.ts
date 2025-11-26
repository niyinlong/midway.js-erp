import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN product_template AND product_combo
 */
@Entity('product_combo_product_template_rel')
export class ProductComboProductTemplateRel {
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
  product_combo_id: number;

  // @ManyToOne(() => ProductCombo)
  // @JoinColumn({ name: 'product_combo_id' })
  // product_combo: ProductCombo;

}