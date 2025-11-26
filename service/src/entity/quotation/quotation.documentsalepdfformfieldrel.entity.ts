import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN quotation_document AND sale_pdf_form_field
 */
@Entity('quotation_document_sale_pdf_form_field_rel')
export class QuotationDocumentSalePdfFormFieldRel {
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
  sale_pdf_form_field_id: number;

  // @ManyToOne(() => SalePdfFormField)
  // @JoinColumn({ name: 'sale_pdf_form_field_id' })
  // sale_pdf_form_field: SalePdfFormField;

}