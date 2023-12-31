describe("장바구니 담기 테스트", () => {
  beforeEach("컬렉션 이동", () => {
    cy.visit("/collection");
    cy.get('[data-cy="ranking-list"]').eq(3).click();
  });
  it("장바구니 기능 테스트", () => {
    cy.get('[data-cy="NFT-Card"]').first().trigger("mouseover");
    cy.get('[data-cy="cart-button"]').click();

    cy.get('[data-cy="cart-list-button"]').click();
    cy.get('[data-cy="cartList-modal"]').should("be.visible");

    cy.get('[data-cy="remove-button"').click();
    cy.get('[data-cy="styled-button"]').should("be.disabled");
  });
});
export {};
