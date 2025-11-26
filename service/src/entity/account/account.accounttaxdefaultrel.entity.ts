import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN account_account AND account_tax
 */
@Entity('account_account_tax_default_rel')
export class AccountAccountTaxDefaultRel {
  @Column({
    type: 'int'
  })
  account_id: number;

  // @ManyToOne(() => Account)
  // @JoinColumn({ name: 'account_id' })
  // account: Account;

  @Column({
    type: 'int'
  })
  tax_id: number;

  // @ManyToOne(() => Tax)
  // @JoinColumn({ name: 'tax_id' })
  // tax: Tax;

}