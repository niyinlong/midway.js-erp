import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Languages
 */
@Entity('res_lang')
export class ResLang {
  @PrimaryGeneratedColumn()
  id: number;

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
   * Name
   */
  @Column({
    type: 'varchar'
  })
  name: string;

  /**
   * Locale Code
   */
  @Column({
    type: 'varchar'
  })
  code: string;

  /**
   * ISO code
   */
  @Column({
    type: 'varchar'
  })
  iso_code: string;

  /**
   * URL Code
   */
  @Column({
    type: 'varchar'
  })
  url_code: string;

  /**
   * Direction
   */
  @Column({
    type: 'varchar'
  })
  direction: string;

  /**
   * Date Format
   */
  @Column({
    type: 'varchar'
  })
  date_format: string;

  /**
   * Time Format
   */
  @Column({
    type: 'varchar'
  })
  time_format: string;

  /**
   * First Day of Week
   */
  @Column({
    type: 'varchar'
  })
  week_start: string;

  @Column({
    type: 'varchar'
  })
  character: string;

  /**
   * Decimal Separator
   */
  @Column({
    type: 'varchar'
  })
  decimal_point: string;

  /**
   * Thousands Separator
   */
  @Column({
    type: 'varchar'
  })
  thousands_sep: string;

  /**
   * Active
   */
  @Column({
    type: 'boolean'
  })
  active: boolean;

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