import type { MDXComponents } from 'mdx/types'
import type { ComponentPropsWithoutRef } from 'react'

const h2Style: React.CSSProperties = {
  fontSize: 'clamp(20px, 2.5vw, 28px)',
  fontWeight: 700,
  color: '#0a0a0a',
  margin: '40px 0 14px',
  paddingBottom: 8,
  borderBottom: '2px solid #EE005D',
  scrollMarginTop: 96,
  letterSpacing: '-0.01em',
}
const h3Style: React.CSSProperties = {
  fontSize: 20,
  fontWeight: 700,
  color: '#0a0a0a',
  margin: '36px 0 12px',
  scrollMarginTop: 96,
}
const pStyle: React.CSSProperties = {
  fontSize: 'clamp(16px, 1.2vw, 17px)',
  lineHeight: 1.75,
  color: '#374151',
  marginBottom: 20,
}
const listStyle: React.CSSProperties = { margin: '16px 0', paddingLeft: 24 }
const liStyle: React.CSSProperties = {
  fontSize: 'clamp(16px, 1.2vw, 17px)',
  lineHeight: 1.7,
  color: '#374151',
  marginBottom: 8,
}
const blockquoteStyle: React.CSSProperties = {
  borderLeft: '4px solid #EE005D',
  padding: '16px 24px',
  margin: '24px 0',
  background: 'rgba(238,0,93,0.04)',
  borderRadius: '0 8px 8px 0',
  fontStyle: 'italic',
  color: '#374151',
}
const inlineCodeStyle: React.CSSProperties = {
  background: '#f3f4f6',
  padding: '2px 6px',
  borderRadius: 4,
  fontSize: 14,
  color: '#EE005D',
  fontFamily: 'var(--font-space-grotesk), monospace',
}
const preStyle: React.CSSProperties = {
  background: '#111',
  padding: 24,
  borderRadius: 12,
  overflowX: 'auto',
  margin: '24px 0',
  fontSize: 14,
  lineHeight: 1.6,
}
const hrStyle: React.CSSProperties = {
  border: 'none',
  borderTop: '1px solid #e5e7eb',
  margin: '40px 0',
}

export function useMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    h2: (props: ComponentPropsWithoutRef<'h2'>) => <h2 style={h2Style} {...props} />,
    h3: (props: ComponentPropsWithoutRef<'h3'>) => <h3 style={h3Style} {...props} />,
    p: (props: ComponentPropsWithoutRef<'p'>) => <p style={pStyle} {...props} />,
    ul: (props: ComponentPropsWithoutRef<'ul'>) => <ul style={listStyle} {...props} />,
    ol: (props: ComponentPropsWithoutRef<'ol'>) => <ol style={listStyle} {...props} />,
    li: (props: ComponentPropsWithoutRef<'li'>) => <li style={liStyle} {...props} />,
    strong: (props: ComponentPropsWithoutRef<'strong'>) => (
      <strong style={{ fontWeight: 700, color: '#0a0a0a' }} {...props} />
    ),
    a: ({ style, ...props }: ComponentPropsWithoutRef<'a'>) => (
      <a
        className="mdx-link"
        style={{ color: '#EE005D', textDecoration: 'underline', ...style }}
        {...props}
      />
    ),
    blockquote: (props: ComponentPropsWithoutRef<'blockquote'>) => (
      <blockquote style={blockquoteStyle} {...props} />
    ),
    code: ({ className, style, ...props }: ComponentPropsWithoutRef<'code'>) => {
      // Fenced code blocks carry a `language-*` className; leave those to <pre>.
      const isBlock = typeof className === 'string' && className.includes('language-')
      if (isBlock) {
        return (
          <code
            className={className}
            style={{ fontFamily: 'var(--font-space-grotesk), monospace', color: '#f4f4f5', ...style }}
            {...props}
          />
        )
      }
      return <code style={{ ...inlineCodeStyle, ...style }} {...props} />
    },
    pre: (props: ComponentPropsWithoutRef<'pre'>) => <pre style={preStyle} {...props} />,
    hr: (props: ComponentPropsWithoutRef<'hr'>) => <hr style={hrStyle} {...props} />,
    ...components,
  }
}
