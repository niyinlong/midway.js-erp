import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN ir_act_server AND ir_model_fields
 */
@Entity('ir_act_server_webhook_field_rel')
export class IrActServerWebhookFieldRel {
  @Column({
    type: 'int'
  })
  server_id: number;

  // @ManyToOne(() => Server)
  // @JoinColumn({ name: 'server_id' })
  // server: Server;

  @Column({
    type: 'int'
  })
  field_id: number;

  // @ManyToOne(() => Field)
  // @JoinColumn({ name: 'field_id' })
  // field: Field;

}