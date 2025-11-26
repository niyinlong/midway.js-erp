import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN stock_move AND product_template_attribute_value
 */
@Entity('template_attribute_value_stock_move_rel')
export class TemplateAttributeValueStockMoveRel {
  @Column({
    type: 'int'
  })
  move_id: number;

  // @ManyToOne(() => Move)
  // @JoinColumn({ name: 'move_id' })
  // move: Move;

  @Column({
    type: 'int'
  })
  template_attribute_value_id: number;

  // @ManyToOne(() => TemplateAttributeValue)
  // @JoinColumn({ name: 'template_attribute_value_id' })
  // template_attribute_value: TemplateAttributeValue;

}