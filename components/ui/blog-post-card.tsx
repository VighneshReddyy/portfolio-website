"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";
import { cn } from "@/lib/utils";

export interface ArticleCardProps {
  headline: string;
  excerpt: string;
  cover?: string;
  tag?: string;
  githubUrl?: string;
  clampLines?: number;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({
  cover,
  tag,
  githubUrl,
  headline,
  excerpt,
  clampLines,
}) => {
  const hasMeta = !!tag;
  const hasFooter = !!githubUrl;

  return (
    <Card className="flex w-full max-w-sm flex-col gap-3 overflow-hidden rounded-3xl border p-3 shadow-lg">
      {cover && (
        <CardHeader className="p-0">
          <div className="relative h-56 w-full">
            <Image
              src={cover}
              alt={headline}
              fill
              className="rounded-2xl object-cover"
            />
          </div>
        </CardHeader>
      )}

      <CardContent className="flex-grow p-3">
        {hasMeta && (
          <div className="mb-4 flex items-center text-sm text-muted-foreground">
            {tag && (
              <Badge className="rounded-full bg-muted px-3 py-1 text-sm text-muted-foreground hover:text-black">
                {tag}
              </Badge>
            )}
          </div>
        )}

        <h2 className="mb-2 text-2xl font-bold leading-tight text-card-foreground">
          {headline}
        </h2>

        <p
          className={cn("text-muted-foreground", {
            "overflow-hidden text-ellipsis [-webkit-box-orient:vertical] [display:-webkit-box]":
              clampLines && clampLines > 0,
          })}
          style={{
            WebkitLineClamp: clampLines,
          }}
        >
          {excerpt}
        </p>
      </CardContent>

      {hasFooter && (
        <CardFooter className="p-3 pt-0">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex p-2 rounded-full border bg-card hover:bg-muted transition-colors"
              aria-label="View on GitHub"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-5 text-muted-foreground group-hover:text-foreground transition-colors">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            </a>
          )}
        </CardFooter>
      )}
    </Card>
  );
};
