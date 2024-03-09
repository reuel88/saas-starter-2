import { FC } from "react";
import { Listing, ListingProps } from "./listing";

type ListingsProps = {
  listings: ListingProps[];
};
export const Listings: FC<ListingsProps> = ({ listings }) => {
  return (
    <section>
      <header className="border-b py-4">
        <h2 className="text-xl">Search Results</h2>
        <h3 className="text-muted-foreground">
          <strong className="text-hue-color">10 results</strong> for{" "}
          <strong className="text-hue-color">Cars</strong> in{" "}
          <strong className="text-hue-color">Locations</strong>
        </h3>
      </header>
      <div className="grid grid-cols-2 gap-4 py-8 lg:grid-cols-3">
        {listings.map((listing, index) => (
          <Listing key={index} {...listing} data-testid="listing" />
        ))}
      </div>
    </section>
  );
};
