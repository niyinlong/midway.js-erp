import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN ir_act_server AND res_partner
 */
@Entity('ir_act_server_res_partner_rel')
export class IrActServerResPartnerRel {
  @Column({
    type: 'int'
  })
  ir_act_server_id: number;

  // @ManyToOne(() => IrActServer)
  // @JoinColumn({ name: 'ir_act_server_id' })
  // ir_act_server: IrActServer;

  @Column({
    type: 'int'
  })
  res_partner_id: number;

  // @ManyToOne(() => ResPartner)
  // @JoinColumn({ name: 'res_partner_id' })
  // res_partner: ResPartner;

}