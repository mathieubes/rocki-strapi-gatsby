import React from 'react';
import { Link, graphql } from 'gatsby';
import moment from 'moment';
import './event-template.sass';

function isExtraDays(week: number, date: number) {
  if (week === 0 && date > 10) {
    return true;
  } else if (week === 5 && date < 10) {
    return true;
  } else if (week === 4 && date < 10) {
    return true;
  } else {
    return false;
  }
}

function getDate(month: number, year: number, data: any[]) {
  console.log(month, year);
  const calendar = [];
  const startDate = moment([year, month]).clone().startOf('month').startOf('week');
  const endDate = moment([year,month]).clone().endOf('month');

  const day = startDate.clone().subtract(1, 'day');

  while (day.isBefore(endDate, 'day')) {
    calendar.push(Array(7).fill(0).map(() => day.add(1, 'day').clone().format('DD')));
  }

  return calendar.map((week, index) => (
    <div key={index} className="event-template__calendar__week">
      {week.map((day) => {
        const entry = data.find(({ startDateTime }) => {
          return moment([year, month, day]).isSame(moment(startDateTime), 'day');
        });

        return (
          <div key={day} className="event-template__calendar__week__day">
            {!isExtraDays(index, parseInt(day)) && (
              <div>
                {day}
                {entry && (
                  <>
                    <img width={64} height={64} src={`http://localhost:1337${entry.event.event_type.defaultIconForCalendar.url}`} />
                    <Link to={`/event-detail/${entry.event.id}`}>Je veux voir</Link>
                  </>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  ));
}

export default function EventTemplate({ data, pageContext }: any) {
  const { month, year } = pageContext;
  return (
    <div className="event-template">
      <h1>TOTO</h1>
      <div className="event-template__calendar">
        {getDate(month, year, data.allStrapiScheduleEntry.nodes)}
      </div>
    </div>
  );
}

export const query = graphql`
  query($start: Date!, $end: Date!) {
    allStrapiScheduleEntry(
      filter: {
        startDateTime: {
          lt: $end
          gt: $start
        }
      }
    ) {
      nodes {
        startDateTime
          event {
            id
            priceOptions {
              amount
            }
            event_type {
              defaultIconForCalendar {
                url
              }
              defaultTitlePrefix
            }
          }
      }
    }
  }
`;
