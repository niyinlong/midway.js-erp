import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Incoming Mail Server
 */
@Entity('fetchmail_server')
export class FetchmailServer {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Port
   */
  @Column({
    type: 'int'
  })
  port: number;

  /**
   * Create a New Record
   */
  @Column({
    type: 'int'
  })
  object_id: number;

  // @ManyToOne(() => Object)
  // @JoinColumn({ name: 'object_id' })
  // object: Object;

  /**
   * Server Priority
   */
  @Column({
    type: 'int'
  })
  priority: number;

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
   * Name
   */
  @Column({
    type: 'varchar'
  })
  name: string;

  /**
   * Status
   */
  @Column({
    type: 'varchar'
  })
  state: string;

  /**
   * Server Name
   */
  @Column({
    type: 'varchar'
  })
  server: string;

  /**
   * Server Type
   */
  @Column({
    type: 'varchar'
  })
  server_type: string;

  @Column({
    type: 'varchar'
  })
  character: string;

  /**
   * Password
   */
  @Column({
    type: 'varchar'
  })
  password: string;

  /**
   * Script
   */
  @Column({
    type: 'varchar'
  })
  script: string;

  /**
   * Last Error Message
   */
  @Column({
    type: 'varchar'
  })
  error_message: string;

  /**
   * Configuration
   */
  @Column({
    type: 'varchar'
  })
  configuration: string;

  /**
   * Active
   */
  @Column({
    type: 'boolean'
  })
  active: boolean;

  /**
   * SSL/TLS
   */
  @Column({
    type: 'boolean'
  })
  is_ssl: boolean;

  /**
   * Keep Attachments
   */
  @Column({
    type: 'boolean'
  })
  attach: boolean;

  /**
   * Keep Original
   */
  @Column({
    type: 'boolean'
  })
  original: boolean;

  /**
   * Last Fetch Date
   */
  @Column({
    type: 'datetime'
  })
  date: Date;

  /**
   * Last Error Date
   */
  @Column({
    type: 'datetime'
  })
  error_date: Date;

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

  /**
   * Access Token Expiration Timestamp
   */
  @Column({
    type: 'int'
  })
  google_gmail_access_token_expiration: number;

  /**
   * Refresh Token
   */
  @Column({
    type: 'varchar'
  })
  google_gmail_refresh_token: string;

  /**
   * Access Token
   */
  @Column({
    type: 'varchar'
  })
  google_gmail_access_token: string;

  /**
   * Outlook Access Token Expiration Timestamp
   */
  @Column({
    type: 'int'
  })
  microsoft_outlook_access_token_expiration: number;

  /**
   * Outlook Refresh Token
   */
  @Column({
    type: 'varchar'
  })
  microsoft_outlook_refresh_token: string;

  /**
   * Outlook Access Token
   */
  @Column({
    type: 'varchar'
  })
  microsoft_outlook_access_token: string;

}