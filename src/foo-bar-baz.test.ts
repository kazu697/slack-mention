import defaultExport, { bar, foo } from './foo-bar-baz';

jest.mock('./foo-bar-baz', () => {
  // moduleファイルを読み込む
  const originalModule = jest.requireActual('./foo-bar-baz');

  return {
    // esmoduleであることの宣言
    __esModule: true,
    // 読み込むファイルを宣言
    ...originalModule,
    // mockする関数にmockを適用する
    default: jest.fn(() => 'mocked baz'),
    foo: 'mocked foo',
  }
})

test('should do a partial mock', () => {
  const defaltExportResult = defaultExport();
  expect(defaltExportResult).toBe('mocked baz');
  expect(defaultExport).toHaveBeenCalled();

  expect(foo).toBe('mocked foo');
  expect(bar()).toBe('bar');
})