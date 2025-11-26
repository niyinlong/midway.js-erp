import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN account_move_line AND account_tax
 */
@Entity('account_move_line_account_tax_rel')
export class AccountMoveLineAccountTaxRel {
  @Column({
    type: 'int'
  })
  account_move_line_id: number;

  // @ManyToOne(() => AccountMoveLine)
  // @JoinColumn({ name: 'account_move_line_id' })
  // account_move_line: AccountMoveLine;

  @Column({
    type: 'int'
  })
  account_tax_id: number;

  // @ManyToOne(() => AccountTax)
  // @JoinColumn({ name: 'account_tax_id' })
  // account_tax: AccountTax;

}