import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN ir_module_module AND res_country
 */
@Entity('module_country')
export class ModuleCountry {
  @Column({
    type: 'int'
  })
  module_id: number;

  // @ManyToOne(() => Module)
  // @JoinColumn({ name: 'module_id' })
  // module: Module;

  @Column({
    type: 'int'
  })
  country_id: number;

  // @ManyToOne(() => Country)
  // @JoinColumn({ name: 'country_id' })
  // country: Country;

}