import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN product_template AND account_tax
 */
@Entity('product_supplier_taxes_rel')
export class ProductSupplierTaxesRel {
  @Column({
    type: 'int'
  })
  prod_id: number;

  // @ManyToOne(() => Prod)
  // @JoinColumn({ name: 'prod_id' })
  // prod: Prod;

  @Column({
    type: 'int'
  })
  tax_id: number;

  // @ManyToOne(() => Tax)
  // @JoinColumn({ name: 'tax_id' })
  // tax: Tax;

}