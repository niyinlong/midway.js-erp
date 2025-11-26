import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Create Menu Wizard
 */
@Entity('wizard_ir_model_menu_create')
export class WizardIrModelMenuCreate {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Parent Menu
   */
  @Column({
    type: 'int'
  })
  menu_id: number;

  // @ManyToOne(() => Menu)
  // @JoinColumn({ name: 'menu_id' })
  // menu: Menu;

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
   * Menu Name
   */
  @Column({
    type: 'varchar'
  })
  name: string;

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