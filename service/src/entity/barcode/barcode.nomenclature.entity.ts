import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Barcode Nomenclature
 */
@Entity('barcode_nomenclature')
export class BarcodeNomenclature {
  @PrimaryGeneratedColumn()
  id: number;

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
   * Barcode Nomenclature
   */
  @Column({
    type: 'varchar'
  })
  name: string;

  /**
   * UPC/EAN Conversion
   */
  @Column({
    type: 'varchar'
  })
  upc_ean_conv: string;

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
   * FNC1 Separator
   */
  @Column({
    type: 'varchar'
  })
  gs1_separator_fnc1: string;

  /**
   * Is GS1 Nomenclature
   */
  @Column({
    type: 'boolean'
  })
  is_gs1_nomenclature: boolean;

}