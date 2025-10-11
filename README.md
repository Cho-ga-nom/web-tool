 # web-tool

게임 개발, 운영을 도와주는 웹 프로젝트 저장소입니다.
Vite + React + TypeScript 기반의 프론트엔드와 NestJS 기반의 백엔드를 포함하는 pnpm 기반 모노레포입니다. 앱은 `apps/` 아래에 위치합니다.

## 사전 준비

- Node.js >= 20.19 또는 22.12+ (권장: Node 22.x)
- pnpm (루트 `package.json`에 `packageManager`로 `pnpm@10.x` 지정)

버전 확인:

```
node -v
pnpm -v
```

## 설치

레포 루트에서 실행:

```
pnpm install
```

설치가 완료되면 워크스페이스의 모든 패키지 의존성이 구성됩니다. optional dependency나 네이티브 바인딩 관련 문제가 발생하면 `node_modules`를 지우고 다시 설치해 보세요.

## 개발 실행

앱 위치:

- `apps/frontend` — Vite + React
- `apps/backend` — NestJS

개별 실행 예:

```
pnpm --filter ./apps/frontend dev

# 백엔드 개발 서버
pnpm --filter ./apps/backend run dev
```

두 앱을 동시에 실행하려면(권장):

```
pnpm run dev:all
```

## 빌드

프론트엔드 빌드:

```
pnpm --filter ./apps/frontend run build
```

백엔드 빌드:

```
pnpm --filter ./apps/backend run build
```

## 테스트

백엔드 (Jest) 예:

```
pnpm --filter ./apps/backend run test
```