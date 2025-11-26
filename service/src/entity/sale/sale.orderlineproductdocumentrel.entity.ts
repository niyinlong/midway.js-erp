import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN sale_order_line AND product_document
 */
@Entity('sale_order_line_product_document_rel')
export class SaleOrderLineProductDocumentRel {
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
  product_document_id: number;

  // @ManyToOne(() => ProductDocument)
  // @JoinColumn({ name: 'product_document_id' })
  // product_document: ProductDocument;

}