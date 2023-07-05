import React from "react";
import TraitsList from "./TraitsList";
describe("<TraitsList />", () => {
  const contract = "0xed5af388653567af2f388e6224dc7c4b3241c544";
  const tokenId = "7044";
  beforeEach(() => {
    cy.intercept(
      `https://data-api.nftgo.io/eth/v1/nft/${contract}/${tokenId}/info`,
      { fixture: "traits.json" }
    );
  });
  it("trait 리스트 렌더링 되는지 컴포넌트 기능 확인", () => {
    cy.fixture("traits.json").then((trait) => {
      cy.mount(<TraitsList traits={trait} />);
    });
  });
});
