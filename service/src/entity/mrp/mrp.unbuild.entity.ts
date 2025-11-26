import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Unbuild Order
 */
@Entity('mrp_unbuild')
export class MrpUnbuild {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Product
   */
  @Column({
    type: 'int'
  })
  product_id: number;

  // @ManyToOne(() => Product)
  // @JoinColumn({ name: 'product_id' })
  // product: Product;

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
   * Bill of Material
   */
  @Column({
    type: 'int'
  })
  bom_id: number;

  // @ManyToOne(() => Bom)
  // @JoinColumn({ name: 'bom_id' })
  // bom: Bom;

  /**
   * Manufacturing Order
   */
  @Column({
    type: 'int'
  })
  mo_id: number;

  // @ManyToOne(() => Mo)
  // @JoinColumn({ name: 'mo_id' })
  // mo: Mo;

  /**
   * Lot/Serial Number
   */
  @Column({
    type: 'int'
  })
  lot_id: number;

  // @ManyToOne(() => Lot)
  // @JoinColumn({ name: 'lot_id' })
  // lot: Lot;

  /**
   * Source Location
   */
  @Column({
    type: 'int'
  })
  location_id: number;

  // @ManyToOne(() => Location)
  // @JoinColumn({ name: 'location_id' })
  // location: Location;

  /**
   * Destination Location
   */
  @Column({
    type: 'int'
  })
  location_dest_id: number;

  // @ManyToOne(() => LocationDest)
  // @JoinColumn({ name: 'location_dest_id' })
  // location_dest: LocationDest;

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
   * Reference
   */
  @Column({
    type: 'varchar'
  })
  name: string;

  /**
   * Status
   */
  @Column({
    type: 'varchar'
  })
  state: string;

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

  @Column({
    type: 'varchar'
  })
  CONSTRAINT: string;

}