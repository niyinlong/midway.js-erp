import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN mail_canned_response AND res_groups
 */
@Entity('mail_canned_response_res_groups_rel')
export class MailCannedResponseResGroupsRel {
  @Column({
    type: 'int'
  })
  mail_canned_response_id: number;

  // @ManyToOne(() => MailCannedResponse)
  // @JoinColumn({ name: 'mail_canned_response_id' })
  // mail_canned_response: MailCannedResponse;

  @Column({
    type: 'int'
  })
  res_groups_id: number;

  // @ManyToOne(() => ResGroups)
  // @JoinColumn({ name: 'res_groups_id' })
  // res_groups: ResGroups;

}