import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

@Entity('orm_signaling_assets')
export class OrmSignalingAssets {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'datetime'
  })
  date: Date;

}