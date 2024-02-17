import moment from 'moment';
import type { GatsbyNode } from 'gatsby';
import path from 'path';

export const createPages: GatsbyNode["createPages"] = async ({
  graphql,
  actions,
}) => {
  const entriesResult: any = await graphql(`
    query GetAllScheduleEntries {
      allStrapiScheduleEntry {
        nodes {
          startDateTime
        }
      }
    }
  `);

  const dates = entriesResult.data?.allStrapiScheduleEntry.nodes.map(({ startDateTime }) => startDateTime);
  const monthYears: string[] = dates.reduce((acc: string[], current: string) => {
    const formatted = moment(current).format('MM-YYYY');
    if (acc.length === 0) {
      return [formatted];
    }

    if (!acc.includes(formatted)) {
      return [...acc, formatted];
    }

    return acc;
  }, []);

  monthYears.forEach((monthYear) => {
    const array = monthYear.split('-');
    const validString = `${array[1]}-${array[0]}-02`;

    const startOfMonth = moment(validString).startOf('month').toISOString();
    const endOfMonth = moment(validString).endOf('month').toISOString();

    console.log(`create page : /events/${monthYear}`);
    actions.createPage({
      path: `/events/${monthYear}`,
      component: path.resolve('./src/templates/event-template.tsx'),
      context: { start: startOfMonth, end: endOfMonth, month: array[0], year: array[1] },
    });
  });

  const today = moment();
  const todayStartOfMonth = today.startOf('month').toISOString();
  const todayEndOfMonth = today.endOf('month').toISOString();

  console.log('create current month page at : /events');
  actions.createPage({
    path: '/events',
    component: path.resolve('./src/templates/event-template.tsx'),
    context: { start: todayStartOfMonth, end: todayEndOfMonth, month: today.month(), year: today.year() },
  });

  const eventsResult: any = await graphql(`
    query GetAllEvents {
      allStrapiEvent {
        nodes {
          id
        }
      }
    }
  `);

  const ids: string[] = eventsResult.data?.allStrapiEvent.nodes.map(({id}) => id);
  ids.forEach((id) => {
    actions.createPage({
      path: `/event-detail/${id}`,
      component: path.resolve('./src/templates/event-detail-template.tsx'),
      context: { id },
    });
  });
}
