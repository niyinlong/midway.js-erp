import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Link between link previews and messages
 */
@Entity('mail_message_link_preview')
export class MailMessageLinkPreview {
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
   * Link Preview
   */
  @Column({
    type: 'int'
  })
  link_preview_id: number;

  // @ManyToOne(() => LinkPreview)
  // @JoinColumn({ name: 'link_preview_id' })
  // link_preview: LinkPreview;

  /**
   * Sequence
   */
  @Column({
    type: 'int'
  })
  sequence: number;

  /**
   * Created by
   */
  @Column({
    type: 'int'
  })
  create_uid: number;

  /**
   * Last Updated by
   */
  @Column({
    type: 'int'
  })
  write_uid: number;

  /**
   * Is Hidden
   */
  @Column({
    type: 'boolean'
  })
  is_hidden: boolean;

  /**
   * Created on
   */
  @Column({
    type: 'datetime'
  })
  create_date: Date;

  /**
   * Last Updated on
   */
  @Column({
    type: 'datetime'
  })
  write_date: Date;

}