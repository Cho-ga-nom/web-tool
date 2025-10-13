export async function parseExcelFile(file: File): Promise<Array<Record<string, any>>> {
  // TODO: 구현 - SheetJS(xlsx) 같은 라이브러리를 사용해서 엑셀을 파싱하세요.
  // 지금은 더미 데이터를 반환합니다.
  return new Promise((resolve) => {
    const dummy = [
      { id: 1, name: 'Test A', value: 100 },
      { id: 2, name: 'Test B', value: 200 },
    ]
    setTimeout(() => resolve(dummy), 200)
  })
}
