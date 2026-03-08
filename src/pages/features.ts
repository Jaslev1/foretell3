import { renderNav, renderFooter } from '../router.ts';

export function renderFeatures(): string {
  return `
  ${renderNav('features')}
  <div class="grid-bg glow-top">
  <main style="position:relative;z-index:1;padding-top:64px;">

    <!-- PAGE HERO -->
    <section style="padding:100px 0 60px;">
      <div class="container">
        <div class="section-label">Platform Features</div>
        <h1 class="display-xl" style="max-width:720px;margin-bottom:20px;">
          Every tool a forecaster needs.
        </h1>
        <p style="color:var(--text-secondary);font-size:1.1rem;max-width:520px;line-height:1.8;">
          Foretell's platform is built from first principles around how good forecasters actually think — probability, calibration, uncertainty, and revision.
        </p>
      </div>
    </section>

    <!-- FEATURES GRID -->
    <section class="section" style="padding-top:40px;">
      <div class="container">

        <!-- Feature row 1 — big highlight -->
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:1px;background:var(--border);margin-bottom:1px;">
          <div class="card" style="border:none;padding:56px;">
            <span class="tag" style="margin-bottom:24px;display:inline-block;">Core Engine</span>
            <h2 class="display-md" style="margin-bottom:16px;">Ensemble AI Models</h2>
            <p style="color:var(--text-secondary);line-height:1.8;margin-bottom:28px;">
              Foretell automatically selects and blends the best-performing model for your domain — from ARIMA and Prophet to gradient-boosted ensembles and neural sequence models. No tuning required.
            </p>
            <ul style="list-style:none;display:flex;flex-direction:column;gap:12px;">
              ${['Auto model selection & blending','Cross-validation on your historical data','Graceful degradation with sparse data','Explainable model weights per forecast'].map(f => `
                <li style="display:flex;align-items:flex-start;gap:12px;font-size:0.88rem;color:var(--text-secondary);">
                  <span style="color:var(--amber);margin-top:2px;">◆</span>${f}
                </li>
              `).join('')}
            </ul>
          </div>
          <div class="card" style="border:none;padding:56px;">
            <span class="tag" style="margin-bottom:24px;display:inline-block;">Uncertainty</span>
            <h2 class="display-md" style="margin-bottom:16px;">Calibrated Confidence Intervals</h2>
            <p style="color:var(--text-secondary);line-height:1.8;margin-bottom:28px;">
              Your 80% confidence interval should contain the true outcome 80% of the time. Foretell measures and corrects calibration continuously, so your uncertainty estimates are trustworthy.
            </p>
            <!-- Mock chart -->
            <div style="background:var(--navy-mid);padding:20px;border:1px solid var(--border);">
              <svg viewBox="0 0 360 120" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:100%;">
                <!-- confidence band -->
                <path d="M20 80 C80 72 140 55 200 42 C260 28 300 22 340 18 L340 40 C300 44 260 52 200 66 C140 79 80 92 20 100 Z" fill="#f0a83c" opacity="0.08"/>
                <path d="M20 90 C80 82 140 68 200 58 C260 46 300 38 340 30 L340 52 C300 60 260 70 200 80 C140 90 80 100 20 108 Z" fill="#f0a83c" opacity="0.05"/>
                <!-- main line -->
                <path d="M20 90 C80 82 140 68 200 58 C260 46 300 38 340 30" stroke="#f0a83c" stroke-width="2" stroke-linecap="round"/>
                <!-- actual dots -->
                ${[
                  [20,90],[60,83],[100,74],[140,65],[180,58],[220,50]
                ].map(([x,y]) => `<circle cx="${x}" cy="${y}" r="3" fill="#f0a83c"/>`).join('')}
                <!-- grid -->
                ${[30,60,90].map(y => `<line x1="20" y1="${y}" x2="340" y2="${y}" stroke="rgba(255,255,255,0.04)" stroke-width="1"/>`).join('')}
              </svg>
              <div style="display:flex;gap:20px;margin-top:8px;">
                <span style="font-family:var(--font-mono);font-size:0.6rem;color:var(--text-dim);letter-spacing:0.08em;">ACTUAL ●</span>
                <span style="font-family:var(--font-mono);font-size:0.6rem;color:var(--text-dim);letter-spacing:0.08em;">FORECAST ——</span>
                <span style="font-family:var(--font-mono);font-size:0.6rem;color:var(--text-dim);letter-spacing:0.08em;">80% CI ░</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Feature grid 3-col -->
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:var(--border);">
          ${[
            {
              icon: `<svg width="28" height="28" viewBox="0 0 28 28" fill="none"><rect x="4" y="4" width="8" height="8" stroke="#f0a83c" stroke-width="1.5"/><rect x="16" y="4" width="8" height="8" stroke="#f0a83c" stroke-width="1.5" opacity="0.5"/><rect x="4" y="16" width="8" height="8" stroke="#f0a83c" stroke-width="1.5" opacity="0.5"/><rect x="16" y="16" width="8" height="8" stroke="#f0a83c" stroke-width="1.5"/></svg>`,
              title: 'Scenario Trees',
              body: 'Build branching scenario analyses with probability-weighted outcomes. Model optimistic, base, and downside cases simultaneously.'
            },
            {
              icon: `<svg width="28" height="28" viewBox="0 0 28 28" fill="none"><circle cx="14" cy="14" r="10" stroke="#f0a83c" stroke-width="1.5"/><path d="M14 8v6l4 2" stroke="#f0a83c" stroke-width="1.5" stroke-linecap="round"/></svg>`,
              title: 'Live Monitoring',
              body: 'Set assumption thresholds and receive alerts when incoming data diverges from forecast assumptions — before it\'s too late to act.'
            },
            {
              icon: `<svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M4 24L10 16L16 20L24 8" stroke="#f0a83c" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><circle cx="24" cy="8" r="2.5" fill="#f0a83c"/></svg>`,
              title: 'Forecast Scoring',
              body: 'Every forecast is tracked against outcomes using Brier scores and log-loss. Your team\'s calibration improves automatically over time.'
            },
            {
              icon: `<svg width="28" height="28" viewBox="0 0 28 28" fill="none"><rect x="3" y="6" width="22" height="16" rx="1" stroke="#f0a83c" stroke-width="1.5"/><path d="M3 11h22M8 6v5M20 6v5" stroke="#f0a83c" stroke-width="1.5"/></svg>`,
              title: 'Structured Templates',
              body: 'Start fast with domain-specific templates: financial modeling, demand planning, project delivery, cohort analysis, and more.'
            },
            {
              icon: `<svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M14 3L25 21H3L14 3Z" stroke="#f0a83c" stroke-width="1.5" stroke-linejoin="round"/><line x1="14" y1="11" x2="14" y2="16" stroke="#f0a83c" stroke-width="1.5" stroke-linecap="round"/><circle cx="14" cy="18.5" r="1" fill="#f0a83c"/></svg>`,
              title: 'Anomaly Detection',
              body: 'Automatically flag statistical anomalies in incoming data streams. Distinguish genuine signal from seasonal noise and reporting errors.'
            },
            {
              icon: `<svg width="28" height="28" viewBox="0 0 28 28" fill="none"><rect x="3" y="3" width="10" height="10" rx="1" stroke="#f0a83c" stroke-width="1.5"/><rect x="15" y="3" width="10" height="10" rx="1" stroke="#f0a83c" stroke-width="1.5" opacity="0.5"/><rect x="3" y="15" width="10" height="10" rx="1" stroke="#f0a83c" stroke-width="1.5" opacity="0.5"/><rect x="15" y="15" width="10" height="10" rx="1" stroke="#f0a83c" stroke-width="1.5"/></svg>`,
              title: 'Team Collaboration',
              body: 'Share forecast workspaces, comment on assumptions, compare model versions, and track who updated what — with a full audit trail.'
            },
          ].map(f => `
            <div class="card" style="border:none;padding:40px 32px;">
              <div style="margin-bottom:20px;">${f.icon}</div>
              <h3 style="font-family:var(--font-display);font-size:1.2rem;margin-bottom:12px;">${f.title}</h3>
              <p style="color:var(--text-secondary);font-size:0.88rem;line-height:1.8;">${f.body}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- INTEGRATIONS -->
    <section class="section" style="padding-top:0;">
      <div class="container">
        <div class="section-label">Integrations</div>
        <h2 class="display-lg" style="margin-bottom:48px;">Connect your data stack</h2>
        <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:16px;">
          ${['Snowflake','BigQuery','Databricks','PostgreSQL','Salesforce','HubSpot','Stripe','Google Sheets','Excel / CSV','REST APIs','Zapier','Slack Alerts'].map(i => `
            <div style="background:var(--navy);border:1px solid var(--border);padding:20px 24px;display:flex;align-items:center;gap:12px;transition:border-color 0.2s;" onmouseover="this.style.borderColor='var(--border-light)'" onmouseout="this.style.borderColor='var(--border)'">
              <span style="width:8px;height:8px;background:var(--amber);flex-shrink:0;"></span>
              <span style="font-family:var(--font-mono);font-size:0.75rem;letter-spacing:0.06em;color:var(--text-secondary);">${i}</span>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section style="padding:80px 0;background:var(--navy);border-top:1px solid var(--border);">
      <div class="container" style="text-align:center;">
        <h2 class="display-lg" style="margin-bottom:20px;">See every feature live.</h2>
        <p style="color:var(--text-secondary);margin-bottom:40px;">No credit card required. Full access for 14 days.</p>
        <a href="#demo" class="btn-primary">Start Free Trial</a>
      </div>
    </section>

  </main>
  </div>
  ${renderFooter()}`;
}
