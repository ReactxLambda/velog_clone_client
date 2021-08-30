# 2021-08-29 Update

> Common, Style, Page, Componet 분리 작업 진행

1. Common : 외부에서 정의할 함수
2. Style : css 저장소
3. Page : 페이지 디렉토리
4. Component : 컴포넌트 디렉토리

> 추가 사항

- highlight.js 추가 : **yarn install** 요망

> prettier 추가

- root 디렉토리에 .prettierrc.js 추가
- vs code에서 ctrl + , 키를 입력하면 setting 페이지가 나타나는데, 여기에서 Format On Save옵션을 체크해주면 된다.

```JSON
{
  "singleQuote": true,
  "semi": true,
  "useTabs": true,
  "tabWidth": 2,
  "trailingComma": "all",
  "printWidth": 120,
  "arrowParens": "always"
}
```

> Tabnine

- 코드 자동 완성 AI 플러그인
- 자동완성 퀄리티가 꽤 높다.
