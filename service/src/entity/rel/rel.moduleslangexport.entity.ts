import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN base_language_export AND ir_module_module
 */
@Entity('rel_modules_langexport')
export class RelModulesLangexport {
  @Column({
    type: 'int'
  })
  wiz_id: number;

  // @ManyToOne(() => Wiz)
  // @JoinColumn({ name: 'wiz_id' })
  // wiz: Wiz;

  @Column({
    type: 'int'
  })
  module_id: number;

  // @ManyToOne(() => Module)
  // @JoinColumn({ name: 'module_id' })
  // module: Module;

}