export const tourItemCollectionQuery = `
    {
        tourItemCollectionQuery {
            items {
                date
                place
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