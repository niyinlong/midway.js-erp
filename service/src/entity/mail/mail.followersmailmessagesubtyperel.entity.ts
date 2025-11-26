import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN mail_followers AND mail_message_subtype
 */
@Entity('mail_followers_mail_message_subtype_rel')
export class MailFollowersMailMessageSubtypeRel {
  @Column({
    type: 'int'
  })
  mail_followers_id: number;

  // @ManyToOne(() => MailFollowers)
  // @JoinColumn({ name: 'mail_followers_id' })
  // mail_followers: MailFollowers;

  @Column({
    type: 'int'
  })
  mail_message_subtype_id: number;

  // @ManyToOne(() => MailMessageSubtype)
  // @JoinColumn({ name: 'mail_message_subtype_id' })
  // mail_message_subtype: MailMessageSubtype;

}