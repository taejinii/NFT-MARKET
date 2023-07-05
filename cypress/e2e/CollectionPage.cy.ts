describe("CollectionPage Test", () => {
  beforeEach("랜딩페이지 접속", () => {
    cy.visit("/collection");
  });
  it("컬렉션 랭킹 렌더링", () => {
    cy.get('[data-cy="collection-ranking"]').should("be.visible");
  });
  it("컬렉션 랭킹 필터 렌더링", () => {
    cy.get('[data-cy="ranking-filter"]').should("be.visible");
  });
  it("랭킹 리스트 상호작용 ", () => {
    cy.get('[data-cy="ranking-list"]').first().click();
  });
});
