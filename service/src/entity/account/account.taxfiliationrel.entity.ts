import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN account_tax AND account_tax
 */
@Entity('account_tax_filiation_rel')
export class AccountTaxFiliationRel {
  @Column({
    type: 'int'
  })
  parent_tax: number;

  @Column({
    type: 'int'
  })
  child_tax: number;

}