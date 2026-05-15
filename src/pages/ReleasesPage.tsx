import '../pages/ReleasesPage.css'

type ChangeType = 'added' | 'changed' | 'fixed' | 'removed'

type Release = {
  version: string
  date: string
  tag?: 'latest' | 'beta'
  changes: { type: ChangeType; items: string[] }[]
}

const RELEASES: Release[] = [
  {
    version: '0.3.0',
    date: '2025-05-15',
    tag: 'latest',
    changes: [
      {
        type: 'added',
        items: [
          'Notification component with success, error, and warning variants',
          'Documentation page with component prop tables',
          'Releases page with full changelog',
        ],
      },
      {
        type: 'changed',
        items: [
          'LeftNav updated to support additional navigation items',
        ],
      },
    ],
  },
  {
    version: '0.2.0',
    date: '2025-04-28',
    changes: [
      {
        type: 'added',
        items: [
          'Slider component with hover, focus, and disabled states',
          'Pill component with four variants: primary, secondary, hover, disabled',
          'Card component variants: primary, secondary, with-image, with-button',
          'Additional Button icon variants',
        ],
      },
      {
        type: 'changed',
        items: [
          'App layout refactored to left-nav + content grid',
          'Design tokens consolidated into variables.css',
        ],
      },
    ],
  },
  {
    version: '0.1.0',
    date: '2025-04-10',
    changes: [
      {
        type: 'added',
        items: [
          'Button component with primary, secondary, and tertiary variants',
          'Basic Card molecule component',
          'LeftNav organism for tab-based navigation',
          'Design token system via CSS custom properties',
          'GitHub Pages deployment via GitHub Actions',
        ],
      },
    ],
  },
]

const TYPE_LABELS: Record<ChangeType, string> = {
  added: 'Added',
  changed: 'Changed',
  fixed: 'Fixed',
  removed: 'Removed',
}

export default function ReleasesPage() {
  return (
    <div className="releases__root">
      <div className="releases__header">
        <h1 className="releases__title">Releases</h1>
        <p className="releases__lead">
          Full changelog for the Emotion Design System. Follows{' '}
          <a href="https://semver.org" target="_blank" rel="noreferrer">Semantic Versioning</a>.
        </p>
      </div>

      <div className="releases__timeline">
        {RELEASES.map(release => (
          <article key={release.version} className="releases__entry">
            <div className="releases__meta">
              <div className="releases__version-row">
                <span className="releases__version">v{release.version}</span>
                {release.tag && (
                  <span className={`releases__tag releases__tag--${release.tag}`}>
                    {release.tag}
                  </span>
                )}
              </div>
              <time className="releases__date">{release.date}</time>
            </div>

            <div className="releases__body">
              {release.changes.map(group => (
                <div key={group.type} className="releases__group">
                  <span className={`releases__type-badge releases__type-badge--${group.type}`}>
                    {TYPE_LABELS[group.type]}
                  </span>
                  <ul className="releases__list">
                    {group.items.map(item => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
