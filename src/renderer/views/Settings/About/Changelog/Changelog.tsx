import React from 'react';
import classNames from 'classnames/bind';
import ReactMarkdown from 'react-markdown';

import styles from './Changelog.module.scss';

import ChangelogMD from '../../../../../../CHANGELOG.md';

const cx = classNames.bind(styles);

const Changelog: React.FC = () => (
  <div
    className={cx('base')}
    style={{
      border: '1px solid var(--fallback-bc, oklch(var(--bc)/0.1))',
      borderRadius: '0.5rem',
      backgroundColor: 'var(--fallback-b2, oklch(var(--b2)))',
    }}
  >
    <ReactMarkdown linkTarget="_blank" skipHtml>
      {ChangelogMD}
    </ReactMarkdown>
  </div>
);

export default Changelog;
