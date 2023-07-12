describe("NFT Detail Page 테스트", () => {
  beforeEach("NFT 디테일 페이지 이동", () => {
    cy.visit("/collection/azuki");
    cy.get('[data-cy="NFT-Card"]').first().click();
  });
  it("NFT Detail Page 테스트", () => {
    cy.get('[data-cy="accordion"]').should("be.visible");
    cy.get('[data-cy="accordion"]').click();
    cy.get('[data-cy="styled-button"]').click();
  });
});
