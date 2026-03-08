import { renderNav, renderFooter } from '../router.ts';

export function renderPricing(): string {
  const plans = [
    {
      name: 'Analyst',
      price: '$49',
      period: '/mo',
      desc: 'For individual forecasters and researchers who need reliable probabilistic tools.',
      features: [
        '5 active forecast models',
        'Up to 2 data sources',
        'Confidence intervals & Brier scoring',
        'Basic scenario trees (2 branches)',
        'CSV & spreadsheet import',
        'Email alerts',
        '30-day history',
      ],
      cta: 'Start Free Trial',
      highlight: false,
    },
    {
      name: 'Team',
      price: '$199',
      period: '/mo',
      desc: 'For small teams that need shared workspaces, more data, and live monitoring.',
      features: [
        '25 active forecast models',
        'Up to 10 data sources',
        'Full calibration & scoring suite',
        'Unlimited scenario branches',
        'All integrations (SQL, SaaS, APIs)',
        'Live monitoring & Slack alerts',
        'Collaboration & audit trail',
        '2-year history',
        'Priority support',
      ],
      cta: 'Start Free Trial',
      highlight: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      desc: 'For organizations requiring custom models, dedicated infrastructure, and SLAs.',
      features: [
        'Unlimited models & data sources',
        'Custom model training',
        'SSO & role-based access',
        'Dedicated cloud infrastructure',
        'SLA-backed uptime guarantees',
        'On-prem deployment option',
        'Dedicated success manager',
        'Custom integrations',
        'Full audit & compliance logs',
      ],
      cta: 'Contact Sales',
      highlight: false,
    },
  ];

  return `
  ${renderNav('pricing')}
  <div class="grid-bg glow-top">
  <main style="position:relative;z-index:1;padding-top:64px;">

    <!-- HERO -->
    <section style="padding:100px 0 60px;text-align:center;">
      <div class="container">
        <div class="section-label" style="justify-content:center;">Pricing</div>
        <h1 class="display-xl" style="margin-bottom:20px;">Simple, transparent pricing.</h1>
        <p style="color:var(--text-secondary);font-size:1.1rem;max-width:460px;margin:0 auto;">
          Start free. Upgrade as your forecasting needs grow. No surprise overages.
        </p>
      </div>
    </section>

    <!-- PLANS -->
    <section style="padding:40px 0 120px;">
      <div class="container">
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:24px;align-items:start;">
          ${plans.map(p => `
            <div style="
              background:${p.highlight ? 'var(--navy-mid)' : 'var(--navy)'};
              border:1px solid ${p.highlight ? 'var(--amber)' : 'var(--border)'};
              padding:40px 36px;
              position:relative;
            ">
              ${p.highlight ? `<div style="position:absolute;top:-1px;left:50%;transform:translateX(-50%);background:var(--amber);color:var(--obsidian);font-family:var(--font-mono);font-size:0.62rem;letter-spacing:0.12em;text-transform:uppercase;padding:5px 16px;">Most Popular</div>` : ''}
              <h3 style="font-family:var(--font-mono);font-size:0.75rem;letter-spacing:0.16em;text-transform:uppercase;color:${p.highlight ? 'var(--amber)' : 'var(--text-secondary)'};margin-bottom:20px;">${p.name}</h3>
              <div style="display:flex;align-items:baseline;gap:4px;margin-bottom:16px;">
                <span style="font-family:var(--font-display);font-size:3rem;color:var(--text-primary);">${p.price}</span>
                <span style="font-family:var(--font-mono);font-size:0.8rem;color:var(--text-secondary);">${p.period}</span>
              </div>
              <p style="color:var(--text-secondary);font-size:0.88rem;line-height:1.7;margin-bottom:32px;min-height:56px;">${p.desc}</p>
              <a href="#demo" style="
                display:block;text-align:center;text-decoration:none;
                background:${p.highlight ? 'var(--amber)' : 'transparent'};
                color:${p.highlight ? 'var(--obsidian)' : 'var(--text-primary)'};
                border:1px solid ${p.highlight ? 'var(--amber)' : 'var(--border-light)'};
                font-family:var(--font-mono);font-size:0.75rem;letter-spacing:0.1em;text-transform:uppercase;
                padding:13px;margin-bottom:32px;
                transition:all 0.2s;
              " onmouseover="this.style.opacity='0.85'" onmouseout="this.style.opacity='1'">${p.cta}</a>
              <ul style="list-style:none;display:flex;flex-direction:column;gap:12px;">
                ${p.features.map(f => `
                  <li style="display:flex;align-items:flex-start;gap:12px;font-size:0.86rem;color:var(--text-secondary);">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style="flex-shrink:0;margin-top:3px;"><path d="M2 7l3.5 3.5L12 3" stroke="#f0a83c" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                    ${f}
                  </li>
                `).join('')}
              </ul>
            </div>
          `).join('')}
        </div>

        <!-- FAQ -->
        <div style="margin-top:100px;">
          <div class="section-label">FAQ</div>
          <h2 class="display-md" style="margin-bottom:48px;">Common questions</h2>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:32px;">
            ${[
              { q:'Can I change plans later?', a:'Yes — upgrade or downgrade at any time. Prorated credits are applied automatically to your next invoice.' },
              { q:'Is there a free trial?', a:'All plans include a 14-day free trial with full feature access. No credit card required to start.' },
              { q:'How do you count "active models"?', a:'An active model is any forecast configuration that runs on a schedule or has been run in the last 30 days.' },
              { q:'What happens to my data if I cancel?', a:'Your data is retained for 30 days after cancellation. You can export everything at any time, in any plan.' },
              { q:'Do you offer annual billing?', a:'Yes — annual billing saves 20% across all plans. Contact us to switch.' },
              { q:'Is there an academic or nonprofit discount?', a:'Yes. We offer 50% off Team plans for verified academic institutions and registered nonprofits.' },
            ].map(faq => `
              <div style="border-top:1px solid var(--border);padding-top:24px;">
                <h4 style="font-family:var(--font-sans);font-weight:600;font-size:0.95rem;margin-bottom:10px;">${faq.q}</h4>
                <p style="color:var(--text-secondary);font-size:0.88rem;line-height:1.75;">${faq.a}</p>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </section>

  </main>
  </div>
  ${renderFooter()}`;
}
