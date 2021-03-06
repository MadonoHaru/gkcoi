# gkcoi

Generate KanColle Organization Image

パラメータから編成画像を出力します。

## Installing

Using npm:

```shell
$ npm install gkcoi
```

## Example

```ts
import { generate, DeckBuilder } from "gkcoi";

// パラメータは表示値の値を入れること
const deck: DeckBuilder = {
  lang: "jp",
  theme: "74lc",
  hqlv: 120,
  f1: {
    name: "7-1",
    s1: {
      id: 563,
      lv: 133,
      hp: 38,
      fp: 64,
      tp: 90,
      aa: 65,
      ar: 53,
      asw: 129,
      ev: 106,
      los: 55,
      luck: 21,
      items: {
        i1: { id: 262, rf: 0, mas: 0 },
        i2: { id: 261, rf: 0, mas: 0 },
        i3: { id: 288, rf: 0, mas: 0 }
      }
    },
    s2: {
      id: 542,
      lv: 152,
      hp: 38,
      fp: 67,
      tp: 87,
      aa: 66,
      ar: 55,
      asw: 134,
      ev: 117,
      los: 62,
      luck: 22,
      items: {
        i1: { id: 149, rf: 6, mas: 0 },
        i2: { id: 149, rf: 6, mas: 0 },
        i3: { id: 45, rf: 10, mas: 0 },
        i4: { id: 42, rf: 0, mas: 0 }
      }
    },
    s3: {
      id: 578,
      lv: 143,
      hp: 38,
      fp: 68,
      tp: 88,
      aa: 70,
      ar: 55,
      asw: 128,
      ev: 114,
      los: 57,
      luck: 31,
      items: {
        i1: { id: 149, rf: 6, mas: 0 },
        i2: { id: 149, rf: 6, mas: 0 },
        i3: { id: 45, rf: 10, mas: 0 },
        i4: { id: 42, rf: 0, mas: 0 }
      }
    },
    s4: {
      id: 623,
      lv: 168,
      hp: 47,
      fp: 57,
      tp: 109,
      aa: 83,
      ar: 66,
      asw: 127,
      ev: 109,
      los: 79,
      luck: 33,
      items: {
        i1: { id: 364, rf: 0, mas: 0 },
        i2: { id: 47, rf: 10, mas: 0 },
        i3: { id: 47, rf: 10, mas: 0 },
        i4: { id: 45, rf: 10, mas: 0 },
        i5: { id: 39, rf: 10, mas: 0 },
        ix: { id: 42, rf: 0, mas: 0 }
      }
    },
    s5: {
      id: 567,
      lv: 171,
      hp: 38,
      fp: 67,
      tp: 91,
      aa: 64,
      ar: 56,
      asw: 124,
      ev: 116,
      los: 63,
      luck: 28,
      items: {
        i1: { id: 149, rf: 7, mas: 0 },
        i2: { id: 149, rf: 6, mas: 0 },
        i3: { id: 45, rf: 10, mas: 0 },
        i4: { id: 42, rf: 0, mas: 0 }
      }
    }
  }
};

generate(deck); // return Canvas
```

![](https://i.imgur.com/fWkxL5W.png)

## Licence

[MIT Licence](https://github.com/Nishisonic/gkcoi/blob/master/LICENCE)
