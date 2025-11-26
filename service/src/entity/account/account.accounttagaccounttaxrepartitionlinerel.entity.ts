import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN account_tax_repartition_line AND account_account_tag
 */
@Entity('account_account_tag_account_tax_repartition_line_rel')
export class AccountAccountTagAccountTaxRepartitionLineRel {
  @Column({
    type: 'int'
  })
  account_tax_repartition_line_id: number;

  // @ManyToOne(() => AccountTaxRepartitionLine)
  // @JoinColumn({ name: 'account_tax_repartition_line_id' })
  // account_tax_repartition_line: AccountTaxRepartitionLine;

  @Column({
    type: 'int'
  })
  account_account_tag_id: number;

  // @ManyToOne(() => AccountAccountTag)
  // @JoinColumn({ name: 'account_account_tag_id' })
  // account_account_tag: AccountAccountTag;

}