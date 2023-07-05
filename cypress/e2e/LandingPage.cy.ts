describe("랜딩 페이지 테스트", () => {
  beforeEach("메인페이지 접속", () => {
    cy.visit("/");
  });
  it("베스트 컬렉션 캐러셀 및 헤더 렌더링 확인 ", () => {
    cy.get('[data-cy="carousel"]').should("be.visible");
    cy.get('[data-cy="header"]').should("be.visible");
  });
  it("컬렉션 페이지 이동", () => {
    cy.contains("Collection", { matchCase: false }).click();
    cy.url().should("include", "/collection");
  });
});
