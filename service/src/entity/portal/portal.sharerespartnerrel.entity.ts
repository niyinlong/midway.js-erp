import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN portal_share AND res_partner
 */
@Entity('portal_share_res_partner_rel')
export class PortalShareResPartnerRel {
  @Column({
    type: 'int'
  })
  portal_share_id: number;

  // @ManyToOne(() => PortalShare)
  // @JoinColumn({ name: 'portal_share_id' })
  // portal_share: PortalShare;

  @Column({
    type: 'int'
  })
  res_partner_id: number;

  // @ManyToOne(() => ResPartner)
  // @JoinColumn({ name: 'res_partner_id' })
  // res_partner: ResPartner;

}