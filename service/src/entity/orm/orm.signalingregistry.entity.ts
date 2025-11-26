import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

@Entity('orm_signaling_registry')
export class OrmSignalingRegistry {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'datetime'
  })
  date: Date;

}