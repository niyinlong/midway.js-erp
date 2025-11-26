import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN account_account AND res_company
 */
@Entity('account_account_res_company_rel')
export class AccountAccountResCompanyRel {
  @Column({
    type: 'int'
  })
  account_account_id: number;

  // @ManyToOne(() => AccountAccount)
  // @JoinColumn({ name: 'account_account_id' })
  // account_account: AccountAccount;

  @Column({
    type: 'int'
  })
  res_company_id: number;

  // @ManyToOne(() => ResCompany)
  // @JoinColumn({ name: 'res_company_id' })
  // res_company: ResCompany;

}