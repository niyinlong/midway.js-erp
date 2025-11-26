import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN stock_picking_type AND res_users
 */
@Entity('picking_type_favorite_user_rel')
export class PickingTypeFavoriteUserRel {
  @Column({
    type: 'int'
  })
  picking_type_id: number;

  // @ManyToOne(() => PickingType)
  // @JoinColumn({ name: 'picking_type_id' })
  // picking_type: PickingType;

  @Column({
    type: 'int'
  })
  user_id: number;

  // @ManyToOne(() => User)
  // @JoinColumn({ name: 'user_id' })
  // user: User;

}