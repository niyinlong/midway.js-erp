import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Accounts Mapping of Fiscal Position
 */
@Entity('account_fiscal_position_account')
export class AccountFiscalPositionAccount {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Fiscal Position
   */
  @Column({
    type: 'int'
  })
  position_id: number;

  // @ManyToOne(() => Position)
  // @JoinColumn({ name: 'position_id' })
  // position: Position;

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
   * Account on Product
   */
  @Column({
    type: 'int'
  })
  account_src_id: number;

  // @ManyToOne(() => AccountSrc)
  // @JoinColumn({ name: 'account_src_id' })
  // account_src: AccountSrc;

  /**
   * Account to Use Instead
   */
  @Column({
    type: 'int'
  })
  account_dest_id: number;

  // @ManyToOne(() => AccountDest)
  // @JoinColumn({ name: 'account_dest_id' })
  // account_dest: AccountDest;

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