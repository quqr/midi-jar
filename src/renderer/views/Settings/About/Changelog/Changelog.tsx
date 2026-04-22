import React from 'react';
import ReactMarkdown from 'react-markdown';

import ChangelogMD from '../../../../../../CHANGELOG.md';

const Changelog: React.FC = () => (
  <div className="p-4 w-full h-80 overflow-auto text-sm border border-[oklch(var(--bc)/0.1)] rounded-lg bg-base-200">
    <ReactMarkdown linkTarget="_blank" skipHtml>
      {ChangelogMD}
    </ReactMarkdown>
  </div>
);

export default Changelog;
