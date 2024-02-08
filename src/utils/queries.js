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
    trackCollection {
      items {
        sys {
          id
        }
        date
        title
        link {
          url
        }
        cover {
          url
        } 
      }
    }
  }
`;
// graphQl string for queries
