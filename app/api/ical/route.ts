import { NextResponse } from 'next/server';
import ICAL from 'node-ical';
import { calendars } from '@/config/calendars';

export async function GET() {
  try {
    const allEvents: any[] = [];
    
    for (const calendar of calendars) {
      try {
        const data = await ICAL.fromURL(calendar.icsUrl);
        
        for (const k in data) {
          const event = data[k];
          if (event.type === 'VEVENT' && event.start) {
            const eventDate = new Date(event.start);
            const now = new Date();
            
            // Only include future events
            if (eventDate > now) {
              allEvents.push({
                start: event.start.toISOString(),
                end: event.end?.toISOString() || event.start.toISOString(),
                title: event.summary || 'Event',
                location: event.location || '',
                url: event.url || '',
                uid: event.uid
              });
            }
          }
        }
      } catch (error) {
        console.warn(`Failed to fetch calendar: ${calendar.name}`, error);
      }
    }
    
    // Remove duplicates by UID and start time, sort by date
    const uniqueEvents = allEvents
      .filter((event, index, self) => 
        index === self.findIndex(e => e.uid === event.uid && e.start === event.start)
      )
      .sort((a, b) => new Date(a.start).getTime() - new Date(b.start).getTime())
      .slice(0, 50); // Limit to 50 events
    
    return NextResponse.json({ 
      events: uniqueEvents,
      count: uniqueEvents.length,
      lastUpdated: new Date().toISOString()
    });
    
  } catch (error) {
    console.error('Error fetching calendar data:', error);
    return NextResponse.json({ 
      events: [],
      error: 'Failed to fetch calendar data',
      count: 0
    }, { status: 500 });
  }
}