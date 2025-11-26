import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * ICE Server
 */
@Entity('mail_ice_server')
export class MailIceServer {
  @PrimaryGeneratedColumn()
  id: number;

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
   * Type
   */
  @Column({
    type: 'varchar'
  })
  server_type: string;

  /**
   * URI
   */
  @Column({
    type: 'varchar'
  })
  uri: string;

  /**
   * Username
   */
  @Column({
    type: 'varchar'
  })
  username: string;

  /**
   * Credential
   */
  @Column({
    type: 'varchar'
  })
  credential: string;

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