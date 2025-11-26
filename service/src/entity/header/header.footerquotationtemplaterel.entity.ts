import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN quotation_document AND sale_order_template
 */
@Entity('header_footer_quotation_template_rel')
export class HeaderFooterQuotationTemplateRel {
  @Column({
    type: 'int'
  })
  quotation_document_id: number;

  // @ManyToOne(() => QuotationDocument)
  // @JoinColumn({ name: 'quotation_document_id' })
  // quotation_document: QuotationDocument;

  @Column({
    type: 'int'
  })
  sale_order_template_id: number;

  // @ManyToOne(() => SaleOrderTemplate)
  // @JoinColumn({ name: 'sale_order_template_id' })
  // sale_order_template: SaleOrderTemplate;

}