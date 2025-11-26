import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * RELATION BETWEEN slide_slide AND slide_tag
 */
@Entity('rel_slide_tag')
export class RelSlideTag {
  @Column({
    type: 'int'
  })
  slide_id: number;

  // @ManyToOne(() => Slide)
  // @JoinColumn({ name: 'slide_id' })
  // slide: Slide;

  @Column({
    type: 'int'
  })
  tag_id: number;

  // @ManyToOne(() => Tag)
  // @JoinColumn({ name: 'tag_id' })
  // tag: Tag;

}