import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN base_module_uninstall AND ir_module_module
 */
@Entity('base_module_uninstall_ir_module_module_rel')
export class BaseModuleUninstallIrModuleModuleRel {
  @Column({
    type: 'int'
  })
  base_module_uninstall_id: number;

  // @ManyToOne(() => BaseModuleUninstall)
  // @JoinColumn({ name: 'base_module_uninstall_id' })
  // base_module_uninstall: BaseModuleUninstall;

  @Column({
    type: 'int'
  })
  ir_module_module_id: number;

  // @ManyToOne(() => IrModuleModule)
  // @JoinColumn({ name: 'ir_module_module_id' })
  // ir_module_module: IrModuleModule;

}