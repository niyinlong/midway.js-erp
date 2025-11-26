import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN sale_order AND quotation_document
 */
@Entity('quotation_document_sale_order_rel')
export class QuotationDocumentSaleOrderRel {
  @Column({
    type: 'int'
  })
  sale_order_id: number;

  // @ManyToOne(() => SaleOrder)
  // @JoinColumn({ name: 'sale_order_id' })
  // sale_order: SaleOrder;

  @Column({
    type: 'int'
  })
  quotation_document_id: number;

  // @ManyToOne(() => QuotationDocument)
  // @JoinColumn({ name: 'quotation_document_id' })
  // quotation_document: QuotationDocument;

}