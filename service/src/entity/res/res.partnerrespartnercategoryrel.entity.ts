import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN res_partner_category AND res_partner
 */
@Entity('res_partner_res_partner_category_rel')
export class ResPartnerResPartnerCategoryRel {
  @Column({
    type: 'int'
  })
  category_id: number;

  // @ManyToOne(() => Category)
  // @JoinColumn({ name: 'category_id' })
  // category: Category;

  @Column({
    type: 'int'
  })
  partner_id: number;

  // @ManyToOne(() => Partner)
  // @JoinColumn({ name: 'partner_id' })
  // partner: Partner;

}