import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

@Entity('res_currency')
export class ResCurrency {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar'
  })
  name: string;

  @Column({
    type: 'varchar'
  })
  symbol: string;

  /**
   * Currency numeric code.
   */
  @Column({
    type: 'int'
  })
  iso_numeric: number;

  /**
   * Decimal Places
   */
  @Column({
    type: 'int'
  })
  decimal_places: number;

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
   * Name
   */
  @Column({
    type: 'varchar'
  })
  full_name: string;

  @Column({
    type: 'varchar'
  })
  character: string;

  /**
   * Currency Unit
   */
  @Column({
    type: 'jsonb'
  })
  currency_unit_label: object;

  /**
   * Currency Subunit
   */
  @Column({
    type: 'jsonb'
  })
  currency_subunit_label: object;

  /**
   * Rounding Factor
   */
  @Column({
    type: 'int'
  })
  rounding: number;

  /**
   * Active
   */
  @Column({
    type: 'boolean'
  })
  active: boolean;

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