import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN account_move_line AND sale_order_line
 */
@Entity('sale_order_line_invoice_rel')
export class SaleOrderLineInvoiceRel {
  @Column({
    type: 'int'
  })
  invoice_line_id: number;

  // @ManyToOne(() => InvoiceLine)
  // @JoinColumn({ name: 'invoice_line_id' })
  // invoice_line: InvoiceLine;

  @Column({
    type: 'int'
  })
  order_line_id: number;

  // @ManyToOne(() => OrderLine)
  // @JoinColumn({ name: 'order_line_id' })
  // order_line: OrderLine;

}