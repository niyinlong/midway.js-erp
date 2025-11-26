import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN product_template AND uom_uom
 */
@Entity('product_template_uom_uom_rel')
export class ProductTemplateUomUomRel {
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
  uom_uom_id: number;

  // @ManyToOne(() => UomUom)
  // @JoinColumn({ name: 'uom_uom_id' })
  // uom_uom: UomUom;

}