import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

/**
 * Warehouse
 */
@Entity('stock_warehouse')
export class StockWarehouse {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Company
   */
  @Column({
    type: 'int'
  })
  company_id: number;

  // @ManyToOne(() => Company)
  // @JoinColumn({ name: 'company_id' })
  // company: Company;

  /**
   * Address
   */
  @Column({
    type: 'int'
  })
  partner_id: number;

  // @ManyToOne(() => Partner)
  // @JoinColumn({ name: 'partner_id' })
  // partner: Partner;

  /**
   * View Location
   */
  @Column({
    type: 'int'
  })
  view_location_id: number;

  // @ManyToOne(() => ViewLocation)
  // @JoinColumn({ name: 'view_location_id' })
  // view_location: ViewLocation;

  /**
   * Location Stock
   */
  @Column({
    type: 'int'
  })
  lot_stock_id: number;

  // @ManyToOne(() => LotStock)
  // @JoinColumn({ name: 'lot_stock_id' })
  // lot_stock: LotStock;

  /**
   * Input Location
   */
  @Column({
    type: 'int'
  })
  wh_input_stock_loc_id: number;

  // @ManyToOne(() => WhInputStockLoc)
  // @JoinColumn({ name: 'wh_input_stock_loc_id' })
  // wh_input_stock_loc: WhInputStockLoc;

  /**
   * Quality Control Location
   */
  @Column({
    type: 'int'
  })
  wh_qc_stock_loc_id: number;

  // @ManyToOne(() => WhQcStockLoc)
  // @JoinColumn({ name: 'wh_qc_stock_loc_id' })
  // wh_qc_stock_loc: WhQcStockLoc;

  /**
   * Output Location
   */
  @Column({
    type: 'int'
  })
  wh_output_stock_loc_id: number;

  // @ManyToOne(() => WhOutputStockLoc)
  // @JoinColumn({ name: 'wh_output_stock_loc_id' })
  // wh_output_stock_loc: WhOutputStockLoc;

  /**
   * Packing Location
   */
  @Column({
    type: 'int'
  })
  wh_pack_stock_loc_id: number;

  // @ManyToOne(() => WhPackStockLoc)
  // @JoinColumn({ name: 'wh_pack_stock_loc_id' })
  // wh_pack_stock_loc: WhPackStockLoc;

  /**
   * MTO rule
   */
  @Column({
    type: 'int'
  })
  mto_pull_id: number;

  // @ManyToOne(() => MtoPull)
  // @JoinColumn({ name: 'mto_pull_id' })
  // mto_pull: MtoPull;

  /**
   * Pick Type
   */
  @Column({
    type: 'int'
  })
  pick_type_id: number;

  // @ManyToOne(() => PickType)
  // @JoinColumn({ name: 'pick_type_id' })
  // pick_type: PickType;

  /**
   * Pack Type
   */
  @Column({
    type: 'int'
  })
  pack_type_id: number;

  // @ManyToOne(() => PackType)
  // @JoinColumn({ name: 'pack_type_id' })
  // pack_type: PackType;

  /**
   * Out Type
   */
  @Column({
    type: 'int'
  })
  out_type_id: number;

  // @ManyToOne(() => OutType)
  // @JoinColumn({ name: 'out_type_id' })
  // out_type: OutType;

  /**
   * In Type
   */
  @Column({
    type: 'int'
  })
  in_type_id: number;

  // @ManyToOne(() => InType)
  // @JoinColumn({ name: 'in_type_id' })
  // in_type: InType;

  /**
   * Internal Type
   */
  @Column({
    type: 'int'
  })
  int_type_id: number;

  // @ManyToOne(() => IntType)
  // @JoinColumn({ name: 'int_type_id' })
  // int_type: IntType;

  /**
   * Quality Control Type
   */
  @Column({
    type: 'int'
  })
  qc_type_id: number;

  // @ManyToOne(() => QcType)
  // @JoinColumn({ name: 'qc_type_id' })
  // qc_type: QcType;

  /**
   * Storage Type
   */
  @Column({
    type: 'int'
  })
  store_type_id: number;

  // @ManyToOne(() => StoreType)
  // @JoinColumn({ name: 'store_type_id' })
  // store_type: StoreType;

  /**
   * Cross Dock Type
   */
  @Column({
    type: 'int'
  })
  xdock_type_id: number;

  // @ManyToOne(() => XdockType)
  // @JoinColumn({ name: 'xdock_type_id' })
  // xdock_type: XdockType;

  /**
   * Receipt Route
   */
  @Column({
    type: 'int'
  })
  reception_route_id: number;

  // @ManyToOne(() => ReceptionRoute)
  // @JoinColumn({ name: 'reception_route_id' })
  // reception_route: ReceptionRoute;

  /**
   * Delivery Route
   */
  @Column({
    type: 'int'
  })
  delivery_route_id: number;

  // @ManyToOne(() => DeliveryRoute)
  // @JoinColumn({ name: 'delivery_route_id' })
  // delivery_route: DeliveryRoute;

  /**
   * Sequence
   */
  @Column({
    type: 'int'
  })
  sequence: number;

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
   * Warehouse
   */
  @Column({
    type: 'varchar'
  })
  name: string;

  /**
   * Short Name
   */
  @Column({
    type: 'varchar'
  })
  code: string;

  /**
   * Incoming Shipments
   */
  @Column({
    type: 'varchar'
  })
  reception_steps: string;

  /**
   * Outgoing Shipments
   */
  @Column({
    type: 'varchar'
  })
  delivery_steps: string;

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

  /**
   * Manufacture Rule
   */
  @Column({
    type: 'int'
  })
  manufacture_pull_id: number;

  // @ManyToOne(() => ManufacturePull)
  // @JoinColumn({ name: 'manufacture_pull_id' })
  // manufacture_pull: ManufacturePull;

  /**
   * Manufacture MTO Rule
   */
  @Column({
    type: 'int'
  })
  manufacture_mto_pull_id: number;

  // @ManyToOne(() => ManufactureMtoPull)
  // @JoinColumn({ name: 'manufacture_mto_pull_id' })
  // manufacture_mto_pull: ManufactureMtoPull;

  /**
   * Picking Before Manufacturing MTO Rule
   */
  @Column({
    type: 'int'
  })
  pbm_mto_pull_id: number;

  // @ManyToOne(() => PbmMtoPull)
  // @JoinColumn({ name: 'pbm_mto_pull_id' })
  // pbm_mto_pull: PbmMtoPull;

  /**
   * Stock After Manufacturing Rule
   */
  @Column({
    type: 'int'
  })
  sam_rule_id: number;

  // @ManyToOne(() => SamRule)
  // @JoinColumn({ name: 'sam_rule_id' })
  // sam_rule: SamRule;

  /**
   * Manufacturing Operation Type
   */
  @Column({
    type: 'int'
  })
  manu_type_id: number;

  // @ManyToOne(() => ManuType)
  // @JoinColumn({ name: 'manu_type_id' })
  // manu_type: ManuType;

  /**
   * Picking Before Manufacturing Operation Type
   */
  @Column({
    type: 'int'
  })
  pbm_type_id: number;

  // @ManyToOne(() => PbmType)
  // @JoinColumn({ name: 'pbm_type_id' })
  // pbm_type: PbmType;

  /**
   * Stock After Manufacturing Operation Type
   */
  @Column({
    type: 'int'
  })
  sam_type_id: number;

  // @ManyToOne(() => SamType)
  // @JoinColumn({ name: 'sam_type_id' })
  // sam_type: SamType;

  /**
   * Picking Before Manufacturing Route
   */
  @Column({
    type: 'int'
  })
  pbm_route_id: number;

  // @ManyToOne(() => PbmRoute)
  // @JoinColumn({ name: 'pbm_route_id' })
  // pbm_route: PbmRoute;

  /**
   * Picking before Manufacturing Location
   */
  @Column({
    type: 'int'
  })
  pbm_loc_id: number;

  // @ManyToOne(() => PbmLoc)
  // @JoinColumn({ name: 'pbm_loc_id' })
  // pbm_loc: PbmLoc;

  /**
   * Stock after Manufacturing Location
   */
  @Column({
    type: 'int'
  })
  sam_loc_id: number;

  // @ManyToOne(() => SamLoc)
  // @JoinColumn({ name: 'sam_loc_id' })
  // sam_loc: SamLoc;

  /**
   * Manufacture
   */
  @Column({
    type: 'varchar'
  })
  manufacture_steps: string;

  /**
   * Buy rule
   */
  @Column({
    type: 'int'
  })
  buy_pull_id: number;

  // @ManyToOne(() => BuyPull)
  // @JoinColumn({ name: 'buy_pull_id' })
  // buy_pull: BuyPull;

}