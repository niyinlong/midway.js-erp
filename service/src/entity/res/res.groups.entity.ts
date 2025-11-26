import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

@Entity('res_groups')
export class ResGroups {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'jsonb'
  })
  name: object;

  /**
   * Sequence
   */
  @Column({
    type: 'int'
  })
  sequence: number;

  /**
   * Privilege
   */
  @Column({
    type: 'int'
  })
  privilege_id: number;

  // @ManyToOne(() => Privilege)
  // @JoinColumn({ name: 'privilege_id' })
  // privilege: Privilege;

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
   * Comment
   */
  @Column({
    type: 'jsonb'
  })
  comment: object;

  /**
   * Share Group
   */
  @Column({
    type: 'boolean'
  })
  share: boolean;

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
   * API Keys maximum duration days
   */
  @Column({
    type: 'varchar'
  })
  api_key_duration: string;

  @Column({
    type: 'varchar'
  })
  CONSTRAINT: string;

}