import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN sale_mass_cancel_orders AND sale_order
 */
@Entity('sale_order_mass_cancel_wizard_rel')
export class SaleOrderMassCancelWizardRel {
  @Column({
    type: 'int'
  })
  sale_mass_cancel_orders_id: number;

  // @ManyToOne(() => SaleMassCancelOrders)
  // @JoinColumn({ name: 'sale_mass_cancel_orders_id' })
  // sale_mass_cancel_orders: SaleMassCancelOrders;

  @Column({
    type: 'int'
  })
  sale_order_id: number;

  // @ManyToOne(() => SaleOrder)
  // @JoinColumn({ name: 'sale_order_id' })
  // sale_order: SaleOrder;

}