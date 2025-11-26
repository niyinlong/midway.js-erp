import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN iap_account AND res_company
 */
@Entity('iap_account_res_company_rel')
export class IapAccountResCompanyRel {
  @Column({
    type: 'int'
  })
  iap_account_id: number;

  // @ManyToOne(() => IapAccount)
  // @JoinColumn({ name: 'iap_account_id' })
  // iap_account: IapAccount;

  @Column({
    type: 'int'
  })
  res_company_id: number;

  // @ManyToOne(() => ResCompany)
  // @JoinColumn({ name: 'res_company_id' })
  // res_company: ResCompany;

}