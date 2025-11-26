import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Save favorite GIF from Tenor API
 */
@Entity('discuss_gif_favorite')
export class DiscussGifFavorite {
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
   * GIF id from Tenor
   */
  @Column({
    type: 'varchar'
  })
  tenor_gif_id: string;

  // @ManyToOne(() => TenorGif)
  // @JoinColumn({ name: 'tenor_gif_id' })
  // tenor_gif: TenorGif;

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