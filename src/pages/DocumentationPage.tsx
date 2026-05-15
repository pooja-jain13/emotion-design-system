import '../pages/DocumentationPage.css'

type PropRow = { name: string; type: string; default?: string; description: string }

function PropTable({ rows }: { rows: PropRow[] }) {
  return (
    <table className="docs__table">
      <thead>
        <tr>
          <th>Prop</th>
          <th>Type</th>
          <th>Default</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {rows.map(r => (
          <tr key={r.name}>
            <td><code>{r.name}</code></td>
            <td><code>{r.type}</code></td>
            <td><code>{r.default ?? '—'}</code></td>
            <td>{r.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

function ComponentSection({ title, description, usage, props }: {
  title: string
  description: string
  usage: string
  props: PropRow[]
}) {
  return (
    <section className="docs__section">
      <h2 className="docs__component-title">{title}</h2>
      <p className="docs__description">{description}</p>
      <h3 className="docs__subtitle">Usage</h3>
      <pre className="docs__code"><code>{usage}</code></pre>
      <h3 className="docs__subtitle">Props</h3>
      <PropTable rows={props} />
    </section>
  )
}

export default function DocumentationPage() {
  return (
    <div className="docs__root">
      <div className="docs__header">
        <h1 className="docs__title">Documentation</h1>
        <p className="docs__lead">
          Emotion Design System — a collection of accessible, themeable React components
          built on CSS custom properties.
        </p>
      </div>

      <ComponentSection
        title="Button"
        description="Triggers an action. Available in three semantic variants that map to the brand colour palette."
        usage={`import Button from './components/atoms/Button/Button'

<Button variant="primary">Save</Button>
<Button variant="secondary" startIcon={<Icon />}>Export</Button>
<Button variant="tertiary" disabled>Cancel</Button>`}
        props={[
          { name: 'variant', type: '"primary" | "secondary" | "tertiary"', default: '"primary"', description: 'Visual style of the button.' },
          { name: 'startIcon', type: 'ReactNode', description: 'Icon rendered before the label.' },
          { name: 'disabled', type: 'boolean', default: 'false', description: 'Prevents interaction and dims the button.' },
          { name: 'onClick', type: '() => void', description: 'Click handler.' },
          { name: 'children', type: 'ReactNode', description: 'Button label.' },
        ]}
      />

      <ComponentSection
        title="Pill"
        description="Compact status or filter chip with four visual states."
        usage={`import Pill from './components/atoms/Pill/Pill'

<Pill variant="primary">Label</Pill>
<Pill variant="secondary">Selected</Pill>
<Pill variant="hover">Hover</Pill>
<Pill variant="disabled">Disabled</Pill>`}
        props={[
          { name: 'variant', type: '"primary" | "secondary" | "hover" | "disabled"', default: '"primary"', description: 'Visual state of the pill.' },
          { name: 'children', type: 'ReactNode', description: 'Pill label.' },
        ]}
      />

      <ComponentSection
        title="Notification"
        description="Inline alert banner for success, error, and warning feedback."
        usage={`import Notification from './components/atoms/Notification/Notification'

<Notification
  variant="success"
  title="Saved"
  message="Your changes have been saved."
  onClose={() => setVisible(false)}
/>`}
        props={[
          { name: 'variant', type: '"success" | "error" | "warning"', description: 'Determines icon and colour scheme.' },
          { name: 'title', type: 'string', description: 'Bold heading text.' },
          { name: 'message', type: 'string', description: 'Supporting body text.' },
          { name: 'onClose', type: '() => void', description: 'Called when the dismiss button is clicked.' },
        ]}
      />

      <ComponentSection
        title="Slider"
        description="Range input with hover, focus, and disabled visual states."
        usage={`import Slider from './components/atoms/Slider/Slider'

const [val, setVal] = useState(50)

<Slider value={val} onChange={setVal} />
<Slider value={val} disabled />`}
        props={[
          { name: 'value', type: 'number', description: 'Current value (0–100).' },
          { name: 'onChange', type: '(value: number) => void', description: 'Called on every value change.' },
          { name: 'disabled', type: 'boolean', default: 'false', description: 'Disables interaction.' },
          { name: 'forceHover', type: 'boolean', default: 'false', description: 'Locks the hover visual state (for demos).' },
          { name: 'forceFocus', type: 'boolean', default: 'false', description: 'Locks the focus visual state (for demos).' },
        ]}
      />

      <ComponentSection
        title="Card"
        description="Surface container for grouping related content. Accepts a title, footer, and arbitrary children."
        usage={`import Card from './components/molecules/Card'

<Card className="card--primary" title="Heading">
  <p>Body content goes here.</p>
</Card>

<Card footer={<Button variant="primary">Action</Button>}>
  <img src="..." alt="..." />
</Card>`}
        props={[
          { name: 'title', type: 'string', description: 'Optional heading rendered at the top of the card.' },
          { name: 'footer', type: 'ReactNode', description: 'Optional slot rendered at the bottom of the card.' },
          { name: 'className', type: 'string', description: 'Additional CSS class for sizing/variant overrides.' },
          { name: 'children', type: 'ReactNode', description: 'Card body content.' },
        ]}
      />
    </div>
  )
}
