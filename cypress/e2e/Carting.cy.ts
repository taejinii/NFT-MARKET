describe("장바구니 담기 테스트", () => {
  beforeEach("컬렉션 이동", () => {
    cy.visit("/collection");
    cy.get('[data-cy="ranking-list"]').first().click();
  });
  it("장바구니 기능 테스트", () => {
    cy.get('[data-cy="NFT-Card"]').first().trigger("mouseover");
    cy.get('[data-cy="cart-button"]').click();
    cy.window().then((cartList) => {
      expect(cartList.length).to.equal(1);
    });

    cy.get('[data-cy="cart-list-button"]').click();
    cy.get('[data-cy="cartList-modal"]').should("be.visible");

    cy.get('[data-cy="remove-button"').click();
  });
});
