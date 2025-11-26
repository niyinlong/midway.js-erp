import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN sale_order_line AND account_tax
 */
@Entity('account_tax_sale_order_line_rel')
export class AccountTaxSaleOrderLineRel {
  @Column({
    type: 'int'
  })
  sale_order_line_id: number;

  // @ManyToOne(() => SaleOrderLine)
  // @JoinColumn({ name: 'sale_order_line_id' })
  // sale_order_line: SaleOrderLine;

  @Column({
    type: 'int'
  })
  account_tax_id: number;

  // @ManyToOne(() => AccountTax)
  // @JoinColumn({ name: 'account_tax_id' })
  // account_tax: AccountTax;

}