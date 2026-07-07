import { DocsLayout } from 'fumadocs-ui/layouts/notebook';
import { baseOptions } from '@/lib/layout.shared';
import { source } from '@/lib/source';
import {
  Megaphone,
  Tally3,
  Shell,
  Scale,
  BrickWall,
  Lightbulb,
  Split,
  GitFork,
  GitMergeConflict,
} from 'lucide-react';

// @ts-ignore
export default function Layout({ children }: LayoutProps<'/notes'>) {
  return (
    <DocsLayout
      {...baseOptions()}
      tree={source.getPageTree()}
      tabMode="sidebar"
      tabs={[
        {
          title: 'A0 - A1',
          description: 'Phase 1',
          url: '/notes',
          icon: <Megaphone className="h-5 w-5 text-amber-500" />,
        },
        {
          title: 'A1 - A2',
          description: 'Phase 2',
          url: '/notes',
          icon: <Megaphone className="h-5 w-5 text-amber-500" />,
        },
        {
          title: 'A2 - B1',
          description: 'Phase 3',
          url: '/notes',
          icon: <Megaphone className="h-5 w-5 text-amber-500" />,
        },
      ]}
    >
      {children}
    </DocsLayout>
  );
}
