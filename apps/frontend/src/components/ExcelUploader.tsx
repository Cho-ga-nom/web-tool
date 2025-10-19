import React, { useCallback, useRef, useState } from 'react';

export type ExcelUploadProps = {
  onFiles: (files: FileList | null) => void;
};

export default function ExcelUploader({ onFiles }: ExcelUploadProps) {
  const [isDragOver, setIsDragOver] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleDrop = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      e.stopPropagation();
      setIsDragOver(false);
      const files = e.dataTransfer.files;
      if (files && files.length > 0) {
        setFileName(files[0].name);
        onFiles(files);
      }
    },
    [onFiles],
  );

  const handleFileChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const files = e.target.files;
      if (files && files.length > 0) {
        setFileName(files[0].name);
        onFiles(files);
      }
    },
    [onFiles],
  );

  const handleCancel = useCallback(() => {
    setFileName(null);
    if (inputRef.current) inputRef.current.value = '';
    onFiles(null);
  }, [onFiles]);

  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'stretch', width: '100vw' }}
    >
      <div
        className={`upload-dropzone ${isDragOver ? 'drag-over' : ''}`}
        onDragOver={(e) => {
          e.preventDefault();
          setIsDragOver(true);
        }}
        onDragLeave={() => setIsDragOver(false)}
        onDrop={handleDrop}
        style={{
          border: '2px dashed #ccc',
          padding: 20,
          borderRadius: 8,
          textAlign: 'center',
          cursor: 'pointer',
          width: '80%',
          boxSizing: 'border-box',
        }}
      >
        <div>Drag files here or click to upload</div>
        <div style={{ marginTop: 8 }}>
          <input
            ref={inputRef}
            id="excel-file-input"
            type="file"
            accept=".xlsx,.xls,.csv"
            onChange={handleFileChange}
            style={{ display: 'none' }}
          />
          <button
            type="button"
            onClick={() => inputRef.current?.click()}
            style={{
              color: '#06c',
              textDecoration: 'underline',
              background: 'transparent',
              border: 'none',
            }}
          >
            Select file
          </button>
        </div>
      </div>

      {fileName && (
        <div style={{ marginTop: 8, display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{ fontSize: 14 }}>{fileName}</div>
          <button
            onClick={handleCancel}
            style={{ background: '#eee', border: 'none', padding: '6px 10px', borderRadius: 4 }}
          >
            Cancel
          </button>
        </div>
      )}
    </div>
  );
}
