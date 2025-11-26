import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN product_document AND sale_pdf_form_field
 */
@Entity('product_document_sale_pdf_form_field_rel')
export class ProductDocumentSalePdfFormFieldRel {
  @Column({
    type: 'int'
  })
  product_document_id: number;

  // @ManyToOne(() => ProductDocument)
  // @JoinColumn({ name: 'product_document_id' })
  // product_document: ProductDocument;

  @Column({
    type: 'int'
  })
  sale_pdf_form_field_id: number;

  // @ManyToOne(() => SalePdfFormField)
  // @JoinColumn({ name: 'sale_pdf_form_field_id' })
  // sale_pdf_form_field: SalePdfFormField;

}