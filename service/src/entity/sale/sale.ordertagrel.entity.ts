import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN sale_order AND crm_tag
 */
@Entity('sale_order_tag_rel')
export class SaleOrderTagRel {
  @Column({
    type: 'int'
  })
  order_id: number;

  // @ManyToOne(() => Order)
  // @JoinColumn({ name: 'order_id' })
  // order: Order;

  @Column({
    type: 'int'
  })
  tag_id: number;

  // @ManyToOne(() => Tag)
  // @JoinColumn({ name: 'tag_id' })
  // tag: Tag;

}