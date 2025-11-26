import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

@Entity('orm_signaling_stable')
export class OrmSignalingStable {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'datetime'
  })
  date: Date;

}