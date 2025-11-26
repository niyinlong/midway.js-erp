import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN account_reconcile_model AND res_partner
 */
@Entity('account_reconcile_model_res_partner_rel')
export class AccountReconcileModelResPartnerRel {
  @Column({
    type: 'int'
  })
  account_reconcile_model_id: number;

  // @ManyToOne(() => AccountReconcileModel)
  // @JoinColumn({ name: 'account_reconcile_model_id' })
  // account_reconcile_model: AccountReconcileModel;

  @Column({
    type: 'int'
  })
  res_partner_id: number;

  // @ManyToOne(() => ResPartner)
  // @JoinColumn({ name: 'res_partner_id' })
  // res_partner: ResPartner;

}