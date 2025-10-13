import React, { useState } from 'react'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState<string | null>(null)

  function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setMessage(`로그인 시도: ${email}`)
  }

  return (
    <div id="app-root">
      <header className="site-header">
        <h1 className="site-title">web-tool</h1>
      </header>

      <main className="main-content">
        <section className="login-container">
          <form className="login-form" onSubmit={onSubmit}>
            <h2 className="form-title">로그인</h2>
            <label className="field">
              <span className="label-text">이메일</span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="you@example.com"
              />
            </label>

            <label className="field">
              <span className="label-text">비밀번호</span>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="••••••••"
              />
            </label>

            <div className="actions">
              <button type="submit" className="btn primary">로그인</button>
            </div>

            {message && <p className="message">{message}</p>}
          </form>
        </section>
      </main>
    </div>
  )
}
