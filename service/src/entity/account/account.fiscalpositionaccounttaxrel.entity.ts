import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN account_fiscal_position AND account_tax
 */
@Entity('account_fiscal_position_account_tax_rel')
export class AccountFiscalPositionAccountTaxRel {
  @Column({
    type: 'int'
  })
  account_fiscal_position_id: number;

  // @ManyToOne(() => AccountFiscalPosition)
  // @JoinColumn({ name: 'account_fiscal_position_id' })
  // account_fiscal_position: AccountFiscalPosition;

  @Column({
    type: 'int'
  })
  account_tax_id: number;

  // @ManyToOne(() => AccountTax)
  // @JoinColumn({ name: 'account_tax_id' })
  // account_tax: AccountTax;

}