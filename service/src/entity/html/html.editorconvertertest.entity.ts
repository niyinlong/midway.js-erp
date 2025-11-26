import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Html Editor Converter Test
 */
@Entity('html_editor_converter_test')
export class HtmlEditorConverterTest {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Many2One
   */
  @Column({
    type: 'int'
  })
  many2one: number;

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

  @Column({
    type: 'varchar'
  })
  character: string;

  /**
   * Lorsqu''un pancake prend l''avion à destination de Toronto et qu''il fait une escale technique à St Claude, on dit:
   */
  @Column({
    type: 'varchar'
  })
  selection_str: string;

  /**
   * Date
   */
  @Column({
    type: 'datetime'
  })
  date: Date;

  /**
   * Html
   */
  @Column({
    type: 'varchar'
  })
  html: string;

  /**
   * Text
   */
  @Column({
    type: 'varchar'
  })
  text: string;

  /**
   * Datetime
   */
  @Column({
    type: 'datetime'
  })
  datetime: Date;

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

  @Column({
    type: 'varchar'
  })
  double: string;

}