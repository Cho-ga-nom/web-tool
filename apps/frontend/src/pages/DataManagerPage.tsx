import React, { useState } from 'react'
import { ExcelUploader, DataTable } from '../components'
import { parseExcelFile } from '../services/excelService'

export default function DataManagerPage() {
  const [data, setData] = useState<Array<Record<string, any>>>([])

  async function handleFiles(files: FileList | null) {
    if (!files || files.length === 0) return
    const file = files[0]
    const parsed = await parseExcelFile(file)
    setData(parsed)
  }

  return (
    <div className="data-manager-page">
      <h2>데이터 매니저</h2>
      <ExcelUploader onFiles={handleFiles} />
      <div style={{ marginTop: 16 }}>
        <DataTable data={data} />
      </div>
    </div>
  )
}
