import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Fiscal Position
 */
@Entity('account_fiscal_position')
export class AccountFiscalPosition {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Sequence
   */
  @Column({
    type: 'int'
  })
  sequence: number;

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
   * Country
   */
  @Column({
    type: 'int'
  })
  country_id: number;

  // @ManyToOne(() => Country)
  // @JoinColumn({ name: 'country_id' })
  // country: Country;

  /**
   * Country Group
   */
  @Column({
    type: 'int'
  })
  country_group_id: number;

  // @ManyToOne(() => CountryGroup)
  // @JoinColumn({ name: 'country_group_id' })
  // country_group: CountryGroup;

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
   * Zip Range From
   */
  @Column({
    type: 'varchar'
  })
  zip_from: string;

  /**
   * Zip Range To
   */
  @Column({
    type: 'varchar'
  })
  zip_to: string;

  /**
   * Foreign Tax ID
   */
  @Column({
    type: 'varchar'
  })
  foreign_vat: string;

  /**
   * Fiscal Position
   */
  @Column({
    type: 'jsonb'
  })
  name: object;

  /**
   * Notes
   */
  @Column({
    type: 'jsonb'
  })
  note: object;

  /**
   * Active
   */
  @Column({
    type: 'boolean'
  })
  active: boolean;

  /**
   * Detect Automatically
   */
  @Column({
    type: 'boolean'
  })
  auto_apply: boolean;

  /**
   * VAT required
   */
  @Column({
    type: 'boolean'
  })
  vat_required: boolean;

  /**
   * Is Domestic
   */
  @Column({
    type: 'boolean'
  })
  is_domestic: boolean;

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