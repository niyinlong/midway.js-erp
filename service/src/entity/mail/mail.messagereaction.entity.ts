import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Message Reaction
 */
@Entity('mail_message_reaction')
export class MailMessageReaction {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Message
   */
  @Column({
    type: 'int'
  })
  message_id: number;

  // @ManyToOne(() => Message)
  // @JoinColumn({ name: 'message_id' })
  // message: Message;

  /**
   * Reacting Partner
   */
  @Column({
    type: 'int'
  })
  partner_id: number;

  // @ManyToOne(() => Partner)
  // @JoinColumn({ name: 'partner_id' })
  // partner: Partner;

  /**
   * Reacting Guest
   */
  @Column({
    type: 'int'
  })
  guest_id: number;

  // @ManyToOne(() => Guest)
  // @JoinColumn({ name: 'guest_id' })
  // guest: Guest;

  /**
   * Content
   */
  @Column({
    type: 'varchar'
  })
  content: string;

  @Column({
    type: 'varchar'
  })
  CONSTRAINT: string;

}