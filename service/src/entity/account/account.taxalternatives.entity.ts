import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN account_tax AND account_tax
 */
@Entity('account_tax_alternatives')
export class AccountTaxAlternatives {
  @Column({
    type: 'int'
  })
  dest_tax_id: number;

  // @ManyToOne(() => DestTax)
  // @JoinColumn({ name: 'dest_tax_id' })
  // dest_tax: DestTax;

  @Column({
    type: 'int'
  })
  src_tax_id: number;

  // @ManyToOne(() => SrcTax)
  // @JoinColumn({ name: 'src_tax_id' })
  // src_tax: SrcTax;

}