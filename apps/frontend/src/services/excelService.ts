export async function parseExcelFile(_file: File): Promise<Array<Record<string, any>>> {
  // TODO: 구현 - SheetJS(xlsx) 같은 라이브러리를 사용해서 엑셀을 파싱하세요.
  // 지금은 더미 데이터를 반환합니다.
  return Promise.resolve([{ id: 1, name: 'Sample' }]);
}
