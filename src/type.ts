export class Ship {
  /** 艦ID */
  id = 0;
  /** 艦名 */
  name = "";
  /** 艦種ID */
  stype = 0;
  /** 艦型ID */
  ctype = 0;
  /** 耐久 */
  hp = 0;
  /** 火力 */
  fp = 0;
  /** 雷装 */
  tp = 0;
  /** 爆装 */
  bp = 0;
  /** 装甲 */
  ar = 0;
  /** 対空 */
  aa = 0;
  /** 回避 */
  ev = 0;
  /** 命中 */
  ac = 0;
  /** 対潜 */
  as = 0;
  /** 索敵 */
  ls = 0;
  /** 射程 */
  rn = 0;
  /** 運 */
  lk = 0;
  /** 速力 */
  sp = 0;
  /** スロット数 */
  slotNum = 0;
  /** 搭載機数 */
  slots = [0, 0, 0, 0, 0];
  /** 装備 */
  items: Item[] = [];
  /** Lv */
  lv = 0;

  constructor(
    id: number,
    name: string,
    lv: number,
    items: Item[],
    slotNum: number,
    slots: number[],
    hp?: number,
    asw?: number,
    lk?: number
  ) {
    this.id = id;
    this.name = name;
    this.lv = lv;
    this.items = items;
    this.slotNum = slotNum;
    this.slots = slots;
    this.hp = hp ? hp : 0;
    this.as = asw ? asw : 0;
    this.lk = lk ? lk : 0;
  }
}

export class Item {
  /** 装備ID */
  id = 0;
  /** 装備名 */
  name = "";
  /** 装備タイプ */
  type = [0, 0, 0, 0, 0];
  /** 火力 */
  fp = 0;
  /** 雷装 */
  tp = 0;
  /** 爆装 */
  bp = 0;
  /** 装甲 */
  ar = 0;
  /** 対空 */
  aa = 0;
  /** 回避/迎撃 */
  ev = 0;
  /** 命中/対爆 */
  ac = 0;
  /** 対潜 */
  as = 0;
  /** 索敵 */
  ls = 0;
  /** 射程 */
  rn = 0;
  /** 航続距離 */
  rd = 0;
  /** 配置コスト */
  bc = 0;
  /** 改修 */
  rf = 0;
  /** 熟練度 */
  mas = 0;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  fromMasterData(start2: any): void {
    this.id = start2.api_id;
    this.name = start2.api_name;
    this.type = start2.api_type;
    this.fp = start2.api_houg;
    this.tp = start2.api_raig;
    this.bp = start2.api_baku;
    this.ar = start2.api_souk;
    this.aa = start2.api_tyku;
    this.ev = start2.api_houk;
    this.ac = start2.api_houm;
    this.as = start2.api_tais;
    this.ls = start2.api_saku;
    this.rn = start2.api_distance;
    this.rd = start2.api_cost;
  }

  constructor(
    id: number,
    name: string,
    type: [number, number, number, number, number],
    rf?: number,
    mas?: number
  ) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.rf = rf ? rf : 0;
    this.mas = mas ? mas : 0;
  }
}