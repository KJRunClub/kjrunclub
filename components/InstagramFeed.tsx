'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface InstagramPost {
  id: string;
  mediaUrl: string;
  caption?: string;
  permalink: string;
  accessibilityCaption?: string;
  thumbnail?: string;
}

type FeedState = 'idle' | 'loading' | 'ready' | 'error';

export function InstagramFeed() {
  const [state, setState] = useState<FeedState>('idle');
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!shouldLoad || state !== 'idle') return;

    let cancelled = false;
    setState('loading');

    fetch('/api/instagram')
      .then(async (response) => {
        if (!response.ok) throw new Error('Failed to fetch feed');
        const payload = await response.json();
        if (!cancelled) {
          setPosts(payload.posts ?? []);
          setState('ready');
        }
      })
      .catch(() => {
        if (!cancelled) {
          setState('error');
        }
      });

    return () => {
      cancelled = true;
    };
  }, [shouldLoad, state]);

  const displayPosts = useMemo(() => posts.slice(0, 8), [posts]);

  return (
    <div ref={sectionRef} className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {state === 'loading' || state === 'idle'
        ? Array.from({ length: 4 }, (_, index) => (
            <div
              key={`feed-skeleton-${index}`}
              className="surface-panel border border-white/12 p-3"
              aria-hidden
            >
              <div className="grainy-image relative aspect-[4/5] animate-pulse bg-white/5" />
            </div>
          ))
        : null}

      {state === 'ready' &&
        displayPosts.map((post) => (
          <div key={post.id} className="surface-panel border border-white/12 p-3">
            <Link
              href={post.permalink}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="grainy-image relative aspect-[4/5]">
                <Image
                  src={post.mediaUrl}
                  alt={post.accessibilityCaption || post.caption || 'Instagram post'}
                  fill
                  loading="lazy"
                  className="object-cover transition duration-300 group-hover:scale-[1.02]"
                />
              </div>
              {post.caption ? (
                <p className="mt-3 line-clamp-2 text-sm text-[hsl(var(--foreground))]/65">
                  {post.caption}
                </p>
              ) : null}
            </Link>
          </div>
        ))}

      {state === 'error' && !displayPosts.length ? (
        <div className="surface-panel border border-white/12 p-6 text-sm text-[hsl(var(--foreground))]/70">
          Unable to load the Instagram feed right now. Check out
          <Link
            href="https://www.instagram.com/kjrunclub/"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1 underline"
          >
            @kjrunclub
          </Link>
          .
        </div>
      ) : null}
    </div>
  );
}
