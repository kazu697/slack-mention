// import {describe, expect, test} from '@jest/globals';
import {sum} from './sum';


describe('sum module', () => {
  // ToBe()は正確にテストをする
  test('add 1 + 2 to equal 3', () => {
    expect(1 + 2).toBe(3);
  })

  // ToEqual()はオブジェクトの値の確認をする
  test('object assignment', () => {
    const data = { one: 1};
    data['two'] = 2;
    expect(data).toEqual({ one: 1, two: 2})
  })

  // notで「じゃないかどうか」の確認をする
  test('adding positive numbers is not zero', () => {
    for (let a = 1; a < 10; a++) {
      for (let b = 1; b < 10; b++) {
        expect(a + b).not.toEqual(0);
      }
    }
  })

  // null, undefined, falseのテスト
  test('null', () => {
    const n = null;
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
  })

  test('zero', () => {
    const z = 0;
    expect(z).not.toBeNull();
    expect(z).toBeDefined();
    expect(z).not.toBeUndefined();
    expect(z).not.toBeTruthy();
    expect(z).toBeFalsy();
  })

  // 数値のテスト
  test('two plus two', () => {
    const value = 2 + 2;
    expect(value).toBeGreaterThan(3);
    expect(value).toBeGreaterThanOrEqual(3.5);
    expect(value).toBeLessThan(5);
    expect(value).toBeLessThanOrEqual(4.5);

    // toBe()とtoEqual()は同党の処理
    expect(value).toBe(4);
    expect(value).toEqual(4);
  })

  // 浮動小数点の場合は丸め込み誤差が発生するのでtoBeCloseToを使用する
  test('adding floating point numbers', () => {
    const value = 0.1 + 0.2;
    expect(value).toBeCloseTo(0.3);
  })

  // 正規表現のテスト
  test('there is no I in team', () => {
    expect('team').not.toMatch(/I/)
  })

  test('but there is a "stop" in Christoph', () => {
    expect('Christoph').toMatch(/stop/)
  })

  // 配列のテストを確認
  const shoppingList = [
    'diapers',
    'kleenex',
    'trash bags',
    'paper towels',
    'milk',
  ]
  test('the shopping list has milk on it', () => {
    expect(shoppingList).toContain('milk');
    expect(new Set(shoppingList)).toContain('milk');
  })
})

const compileAndroidCode = () => {
  throw new Error('you are using the wrong JDK!')
}

describe('throw', () => {
  test('compiling android goes as expected', () => {
    expect(() => compileAndroidCode()).toThrow();
    expect(() => compileAndroidCode()).toThrow(Error);

    // エラーメッセージでも確認をすることが可能
    expect(() => compileAndroidCode()).toThrow('you are using the wrong JDK');
    expect(() => compileAndroidCode()).toThrow(/JDK/);
  })
})

const fetchData = async () => {
  return 'peanut butter';
}


describe('async', () => {
  test('the data is peanut butter', async () => {
    const data = await fetchData();
    expect(data).toBe('peanut butter');
  })
})

// // セットアップ
// describe('setup', () => {
//   beforeEach(() => {

//   })

//   afterEach(() => {

//   })
// })

// // describe外で使用する場合
// beforeAll(() => {

// })

// afterAll(() => {

// })


// テストを1回だけ実行する
test('this will be the only test that runs', () => {
  expect(true).toBe(false);
})

// デバッグのために使用できる
// これだけ実行されて上のエラーのテスト実行しない
test.only('this test will not run', () => {
  expect('A').toBe('A');
});