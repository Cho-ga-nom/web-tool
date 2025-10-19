// React import not required with the new JSX runtime

export default function DevApiPage() {
  const apis = [
    {
      path: '/api/auth/login',
      method: 'POST',
      desc: '로그인 (예: { email, password })',
    },
    {
      path: '/api/data/upload',
      method: 'POST',
      desc: '게임 데이터 시트 업로드 (multipart/form-data)',
    },
    {
      path: '/api/data/list',
      method: 'GET',
      desc: '업로드된 데이터 목록 조회',
    },
  ];

  return (
    <div style={{ padding: 24 }}>
      <h2>Dev API 목록</h2>
      <p>게임 서버 개발/테스트용 API 목록(예시)</p>
      <ul>
        {apis.map((a) => (
          <li key={a.path} style={{ marginBottom: 12 }}>
            <strong>{a.method}</strong> <code>{a.path}</code>
            <div>{a.desc}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
