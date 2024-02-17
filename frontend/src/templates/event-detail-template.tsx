import React from 'react';
import { graphql } from 'gatsby';

export default function EventDetailTemplate({ data: { strapiEvent: data }}: any) {
  return (
    <h1>{data.event_type.defaultTitlePrefix} - {data.event_type.defaultTitleSuffix}</h1>
  );
}

export const query = graphql`
  query($id: String) {
    strapiEvent(id: {eq: $id}) {
      event_type {
        defaultTitleSuffix
        defaultTitlePrefix
      }
      priceOptions {
        amount
      }
    }
  }
`;
