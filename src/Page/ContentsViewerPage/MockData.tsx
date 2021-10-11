export type MockDataType = {
  contents: string;
  header: string;
  tags: string[];
  isPubilc: boolean;
  introduce: string;
  URL: string;
  thumbnail: File | null | undefined;
  editor: string;
  editDate: string;
};
export const ViewerMockData: MockDataType = {
  contents: `
> 원문 출처 : https://hyeooona825.tistory.com/87

> ### Entity 생명주기
  
![](https://ultrakain.gitbooks.io/jpa/content/chapter3/images/JPA_3_2.png)
  
  
> ### Entity의 4가지 상태
  
1. 비영속(new)
  - 영속성 컨텍스트와 전혀 관계가 없는 상태
  - 상태 : 객체 생성   

\`\`\`Java
Person jjs = Person("jjs")
\`\`\`  

2. 영속(managed)
  - 영속성 컨텍스트에 저장된 상태
  - 상태 : 객체 생성 후 EntityManager를 통해 영속성 컨텍스트에 저장

\`\`\`Java
entityManager.persist(jjs);
\`\`\`
   
3. 준영속(detached)
  - 영속성 컨텍스트에 저장되었다가 분리된 상태
  - 상태 : 영속성 컨텍스트가 영속 상태였던 Entity를 관리하지 않음.
  - 다음은 영속 상태의 컨택스트를 준영속 상태로 만드는 3가지 방법이다.
  
\`\`\`Java
- entityManager.detach(jjs);
- entityManager.closed(); // 영속성 컨텍스트 종료
- entityManager.clear(); // 영속성 컨텍스트 초기회
\`\`\`
  - 준영속 상태가 되면 1차 캐시부터 쓰기 지연 SQL 저장소까지 해당 엔티티를 관리하기 위한 모든 정보가 삭제.
  - 특징 
    `,
  header: `JPA 영속성 - Entity 생명 주기`,
  tags: ['Java', `Persistence`],
  isPubilc: true,
  introduce: `소개글`,
  URL: `/@Test/test`,
  thumbnail: undefined,
  editor: 'jisoek',
  editDate: '2021년 8월 16일',
};
