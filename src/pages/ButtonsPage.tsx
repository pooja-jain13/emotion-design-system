import Button from '../components/atoms/Button/Button'
import Card from '../components/molecules/Card'

export default function ButtonsPage() {
  return (
    <>
      <Card className="card--fixed">
        <h2>Button Component</h2>
        <div className="button-examples">
          <Button variant="primary">Primary (white / green)</Button>
          <Button variant="secondary">Secondary (green / white)</Button>
          <Button variant="tertiary">Tertiary (dark / white)</Button>
        </div>
      </Card>

      <Card className="card--fixed">
        <h2>With Icons</h2>
        <div className="button-examples--icons">
          <Button variant="primary" startIcon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M12 3v12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M19 10l-7 7-7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M5 21h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>}>Primary (icon)</Button>
          <Button variant="secondary" startIcon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="2"/></svg>}>Secondary (icon)</Button>
          <Button variant="tertiary" startIcon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M12 9v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><circle cx="12" cy="17" r="1" fill="currentColor"/></svg>}>Tertiary (icon)</Button>
        </div>
      </Card>

      <Card className="card--fixed">
        <h2>Hover</h2>
        <div className="button-examples--hover">
          <Button variant="primary">Primary (white / green)</Button>
          <Button variant="secondary">Secondary (green / white)</Button>
          <Button variant="tertiary">Tertiary (dark / white)</Button>
        </div>
      </Card>

      <Card className="card--fixed">
        <h2>Disabled</h2>
        <div className="button-examples" style={{ opacity: 0.7 }}>
          <Button variant="primary">Primary (white / green)</Button>
          <Button variant="secondary">Secondary (green / white)</Button>
          <Button variant="tertiary">Tertiary (dark / white)</Button>
        </div>
      </Card>
    </>
  )
}
