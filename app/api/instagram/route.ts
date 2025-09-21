import { NextResponse } from 'next/server';

interface InstagramEdge {
  node: {
    id: string;
    shortcode: string;
    display_url: string;
    thumbnail_src?: string;
    accessibility_caption?: string;
    edge_media_to_caption?: {
      edges: Array<{ node: { text: string } }>;
    };
  };
}

const FALLBACK_POSTS = [
  {
    id: 'fallback-1',
    mediaUrl: 'https://images.unsplash.com/photo-1526403227023-8eba3be78d2c?auto=format&fit=crop&w=800&q=80',
    caption: 'Tempo session on the boulevard. #kjrunclub',
    permalink: 'https://www.instagram.com/kjrunclub/',
  },
  {
    id: 'fallback-2',
    mediaUrl: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=800&q=80',
    caption: 'Sunrise miles with the crew.',
    permalink: 'https://www.instagram.com/kjrunclub/',
  },
  {
    id: 'fallback-3',
    mediaUrl: 'https://images.unsplash.com/photo-1508739826987-b79cd8b7da12?auto=format&fit=crop&w=800&q=80',
    caption: 'Track night energy.',
    permalink: 'https://www.instagram.com/kjrunclub/',
  },
  {
    id: 'fallback-4',
    mediaUrl: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80',
    caption: 'Long run, loud laughs.',
    permalink: 'https://www.instagram.com/kjrunclub/',
  },
  {
    id: 'fallback-5',
    mediaUrl: 'https://images.unsplash.com/photo-1508387029041-77207b0271ff?auto=format&fit=crop&w=800&q=80',
    caption: 'Strength and mobility reset.',
    permalink: 'https://www.instagram.com/kjrunclub/',
  },
  {
    id: 'fallback-6',
    mediaUrl: 'https://images.unsplash.com/photo-1533563906091-fdfdffc3e3c4?auto=format&fit=crop&w=800&q=80',
    caption: 'Pushing the pace downtown.',
    permalink: 'https://www.instagram.com/kjrunclub/',
  },
];

export async function GET() {
  try {
    const response = await fetch(
      'https://www.instagram.com/api/v1/users/web_profile_info/?username=kjrunclub',
      {
        headers: {
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
          Accept: 'application/json',
        },
        cache: 'no-store',
      }
    );

    if (!response.ok) {
      throw new Error('Instagram request failed');
    }

    const payload = await response.json();
    const edges: InstagramEdge[] =
      payload?.data?.user?.edge_owner_to_timeline_media?.edges ?? [];

    const posts = edges.slice(0, 8).map(({ node }) => {
      const captionEdge = node.edge_media_to_caption?.edges?.[0]?.node?.text ?? '';
      return {
        id: node.id,
        mediaUrl: node.display_url,
        caption: captionEdge,
        permalink: `https://www.instagram.com/p/${node.shortcode}/`,
        accessibilityCaption: node.accessibility_caption ?? captionEdge,
        thumbnail: node.thumbnail_src ?? node.display_url,
      };
    });

    if (!posts.length) {
      throw new Error('No instagram posts found');
    }

    return NextResponse.json(
      { posts, source: 'instagram' },
      {
        headers: {
          'Cache-Control': 'no-cache',
        },
      }
    );
  } catch (error) {
    return NextResponse.json(
      { posts: FALLBACK_POSTS, source: 'fallback' },
      {
        headers: {
          'Cache-Control': 'no-cache',
        },
      }
    );
  }
}
