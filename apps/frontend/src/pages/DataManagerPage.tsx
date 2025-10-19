// React import not required with the new JSX runtime
import { useState } from 'react';
import { ExcelUploader, DataTable } from '../components';
import { parseExcelFile } from '../services/excelService';

export default function DataManagerPage() {
  const [data, setData] = useState<Array<Record<string, any>>>([]);

  async function handleFiles(files: FileList | null) {
    if (!files || files.length === 0) {
      setData([]);
      return;
    }

    const file = files[0];
    const parsed = await parseExcelFile(file);
    setData(parsed);
  }

  return (
    <div className="data-manager-page">
      <ExcelUploader onFiles={handleFiles} />
      <div style={{ marginTop: 16 }}>
        <DataTable data={data} />
      </div>
    </div>
  );
}
