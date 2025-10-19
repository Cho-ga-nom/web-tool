// React import not required with the new JSX runtime

export type DataTableProps = {
  data: Array<Record<string, any>>;
};

export default function DataTable({ data }: DataTableProps) {
  if (!data || data.length === 0) return <div>데이터가 없습니다.</div>;

  const columns = Object.keys(data[0]);

  return (
    <table className="data-table">
      <thead>
        <tr>
          {columns.map((c) => (
            <th key={c}>{c}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, i) => (
          <tr key={i}>
            {columns.map((c) => (
              <td key={c + i}>{String(row[c] ?? '')}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
