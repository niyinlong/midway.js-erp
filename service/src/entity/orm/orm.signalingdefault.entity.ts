import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

@Entity('orm_signaling_default')
export class OrmSignalingDefault {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'datetime'
  })
  date: Date;

}