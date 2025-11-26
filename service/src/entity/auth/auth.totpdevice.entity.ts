import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

@Entity('auth_totp_device')
export class AuthTotpDevice {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar'
  })
  name: string;

  @Column({
    type: 'int'
  })
  user_id: number;

  // @ManyToOne(() => User)
  // @JoinColumn({ name: 'user_id' })
  // user: User;

  @Column({
    type: 'varchar'
  })
  scope: string;

  @Column({
    type: 'datetime'
  })
  expiration_date: Date;

  @Column({
    type: 'varchar'
  })
  index: string;

  @Column({
    type: 'varchar'
  })
  key: string;

  @Column({
    type: 'datetime'
  })
  create_date: Date;

  @Column({
    type: 'varchar'
  })
  CONSTRAINT: string;

}