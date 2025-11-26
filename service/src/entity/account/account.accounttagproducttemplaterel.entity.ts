import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN product_template AND account_account_tag
 */
@Entity('account_account_tag_product_template_rel')
export class AccountAccountTagProductTemplateRel {
  @Column({
    type: 'int'
  })
  product_template_id: number;

  // @ManyToOne(() => ProductTemplate)
  // @JoinColumn({ name: 'product_template_id' })
  // product_template: ProductTemplate;

  @Column({
    type: 'int'
  })
  account_account_tag_id: number;

  // @ManyToOne(() => AccountAccountTag)
  // @JoinColumn({ name: 'account_account_tag_id' })
  // account_account_tag: AccountAccountTag;

}