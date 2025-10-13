import React from 'react'

export type ExcelUploadProps = {
  onFiles: (files: FileList | null) => void
}

export default function ExcelUploader({ onFiles }: ExcelUploadProps) {
  return (
    <div className="excel-uploader">
      <label className="upload-label">
        업로드
        <input
          type="file"
          accept=".xlsx,.xls,.csv"
          onChange={(e) => onFiles(e.target.files)}
          style={{ display: 'none' }}
        />
      </label>
    </div>
  )
}
