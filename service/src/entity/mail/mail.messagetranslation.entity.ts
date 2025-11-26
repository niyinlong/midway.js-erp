import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Message Translation
 */
@Entity('mail_message_translation')
export class MailMessageTranslation {
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
   * Source Language
   */
  @Column({
    type: 'varchar'
  })
  source_lang: string;

  /**
   * Target Language
   */
  @Column({
    type: 'varchar'
  })
  target_lang: string;

  /**
   * Translation Body
   */
  @Column({
    type: 'varchar'
  })
  body: string;

  /**
   * Create Date
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