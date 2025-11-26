import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN purchase_order_line AND account_tax
 */
@Entity('account_tax_purchase_order_line_rel')
export class AccountTaxPurchaseOrderLineRel {
  @Column({
    type: 'int'
  })
  purchase_order_line_id: number;

  // @ManyToOne(() => PurchaseOrderLine)
  // @JoinColumn({ name: 'purchase_order_line_id' })
  // purchase_order_line: PurchaseOrderLine;

  @Column({
    type: 'int'
  })
  account_tax_id: number;

  // @ManyToOne(() => AccountTax)
  // @JoinColumn({ name: 'account_tax_id' })
  // account_tax: AccountTax;

}