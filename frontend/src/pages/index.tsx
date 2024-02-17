import * as React from "react"
import { Link, graphql } from 'gatsby';

export default function IndexPage({ data }: any) {
  console.log(data);

  return (
    <Link to="/events">Aller aux events</Link>
  );
}

export const query = graphql`
  query getScheduleEntiresOfMonth($start: Date, $end: Date) {
    allStrapiScheduleEntry(
      filter: {
        startDateTime: {
          lt: $end
          gt: $start
        }
      }
    ) {
      nodes {
        event {
          event_type {
            defaultTitlePrefix
          }
        }
      }
    }
  }
`;
