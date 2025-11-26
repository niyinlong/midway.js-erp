import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Bill of Material Line
 */
@Entity('mrp_bom_line')
export class MrpBomLine {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Component
   */
  @Column({
    type: 'int'
  })
  product_id: number;

  // @ManyToOne(() => Product)
  // @JoinColumn({ name: 'product_id' })
  // product: Product;

  /**
   * Product Template
   */
  @Column({
    type: 'int'
  })
  product_tmpl_id: number;

  // @ManyToOne(() => ProductTmpl)
  // @JoinColumn({ name: 'product_tmpl_id' })
  // product_tmpl: ProductTmpl;

  /**
   * Company
   */
  @Column({
    type: 'int'
  })
  company_id: number;

  // @ManyToOne(() => Company)
  // @JoinColumn({ name: 'company_id' })
  // company: Company;

  /**
   * Unit
   */
  @Column({
    type: 'int'
  })
  product_uom_id: number;

  // @ManyToOne(() => ProductUom)
  // @JoinColumn({ name: 'product_uom_id' })
  // product_uom: ProductUom;

  /**
   * Sequence
   */
  @Column({
    type: 'int'
  })
  sequence: number;

  /**
   * Parent BoM
   */
  @Column({
    type: 'int'
  })
  bom_id: number;

  // @ManyToOne(() => Bom)
  // @JoinColumn({ name: 'bom_id' })
  // bom: Bom;

  /**
   * Consumed in Operation
   */
  @Column({
    type: 'int'
  })
  operation_id: number;

  // @ManyToOne(() => Operation)
  // @JoinColumn({ name: 'operation_id' })
  // operation: Operation;

  /**
   * Created by
   */
  @Column({
    type: 'int'
  })
  create_uid: number;

  /**
   * Last Updated by
   */
  @Column({
    type: 'int'
  })
  write_uid: number;

  /**
   * Quantity
   */
  @Column({
    type: 'int'
  })
  product_qty: number;

  /**
   * Created on
   */
  @Column({
    type: 'datetime'
  })
  create_date: Date;

  /**
   * Last Updated on
   */
  @Column({
    type: 'datetime'
  })
  write_date: Date;

  /**
   * Cost Share (%)
   */
  @Column({
    type: 'int'
  })
  cost_share: number;

  @Column({
    type: 'varchar'
  })
  CONSTRAINT: string;

}