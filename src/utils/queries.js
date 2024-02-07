export const tourItemCollectionQuery = `
  {
    tourItemCollection {
      items {
        place
        date
        city 
        soldOut
        country
        ticketLink
        videoLink
        sys {
          id
        }
      }
    }
  }
`;

export const trackItemCollectionQuery = `
  {
    productCollection {
      items {
        date
        city 
        soldOut
        country
        ticketLink
        videoLink
        sys {
          id
        }
      }
    }
  }
`;
// graphQl string for queries
