import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN ir_ui_menu AND res_groups
 */
@Entity('ir_ui_menu_group_rel')
export class IrUiMenuGroupRel {
  @Column({
    type: 'int'
  })
  menu_id: number;

  // @ManyToOne(() => Menu)
  // @JoinColumn({ name: 'menu_id' })
  // menu: Menu;

  @Column({
    type: 'int'
  })
  gid: number;

}