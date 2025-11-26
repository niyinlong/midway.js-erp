import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Country
 */
@Entity('res_country')
export class ResCountry {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Input View
   */
  @Column({
    type: 'int'
  })
  address_view_id: number;

  // @ManyToOne(() => AddressView)
  // @JoinColumn({ name: 'address_view_id' })
  // address_view: AddressView;

  /**
   * Currency
   */
  @Column({
    type: 'int'
  })
  currency_id: number;

  // @ManyToOne(() => Currency)
  // @JoinColumn({ name: 'currency_id' })
  // currency: Currency;

  /**
   * Country Calling Code
   */
  @Column({
    type: 'int'
  })
  phone_code: number;

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
   * Country Code
   */
  @Column({
    type: 'varchar'
  })
  code: string;

  /**
   * Customer Name Position
   */
  @Column({
    type: 'varchar'
  })
  name_position: string;

  /**
   * Country Name
   */
  @Column({
    type: 'jsonb'
  })
  name: object;

  /**
   * Vat Label
   */
  @Column({
    type: 'jsonb'
  })
  vat_label: object;

  /**
   * Layout in Reports
   */
  @Column({
    type: 'varchar'
  })
  address_format: string;

  /**
   * State Required
   */
  @Column({
    type: 'boolean'
  })
  state_required: boolean;

  /**
   * Zip Required
   */
  @Column({
    type: 'boolean'
  })
  zip_required: boolean;

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

}