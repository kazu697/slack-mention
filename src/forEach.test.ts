import { forEach } from "./forEach";

const mockCallback = jest.fn(x => 42 + x);

test('forEach mock function', () => {

  forEach([0, 1], mockCallback);

  // 2回callback関数が呼ばれることを確認する
  expect(mockCallback.mock.calls).toHaveLength(2);

  // 一つ目の引数の1回目が0であることを確認する
  expect(mockCallback.mock.calls[0][0]).toBe(0);

  // 2回目の1つ目の引数の値が1であることを確認する
  expect(mockCallback.mock.calls[1][0]).toBe(1);

  // 1回目の返り値を確認する
  expect(mockCallback.mock.results[0].value).toBe(42);

  // 2回目の返り値を確認する
  expect(mockCallback.mock.results[1].value).toBe(43);

})

// mockを使用する場合は基本的にmockプロパティを使用すればだいたい何でもできる


const myMock1 = jest.fn();
const a = new myMock1();
console.log(myMock1.mock.instances)

const myMock2 = jest.fn();
const b = {};
const bound = myMock2.bind(b);
bound();
console.log(myMock2.mock.contexts)


// mockなので返り値を指定できる
const myMock = jest.fn();
console.log(myMock());

// mockReturnValueOnce: 返り値として1回表示する
// mockReturnValue: 返り値を永続的に返す
// [10, 'x', true, true]
myMock.mockReturnValueOnce(10).mockReturnValueOnce('x').mockReturnValue(true);

console.log(myMock(), myMock(), myMock(), myMock());

// mockReturnValueの場合、後に実行された値が優先される
// [10, true, true, true]
myMock.mockReturnValueOnce(10).mockReturnValue('x').mockReturnValue(true);
console.log(myMock(), myMock(), myMock(), myMock());
