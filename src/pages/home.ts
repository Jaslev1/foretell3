import { renderNav, renderFooter } from '../router.ts';

export function renderHome(): string {
  return `
  ${renderNav('home')}
  <div class="grid-bg glow-top">
  <main style="position:relative;z-index:1;">

    <!-- HERO -->
    <section style="min-height:100vh;display:flex;align-items:center;padding-top:64px;">
      <div class="container" style="padding-top:80px;padding-bottom:80px;">
        <div style="max-width:900px;">

          <div class="anim-fade-up delay-1" style="margin-bottom:28px;">
            <span class="tag">Now in Beta — Forecasting Redefined</span>
          </div>

          <h1 class="display-xl anim-fade-up delay-2" style="margin-bottom:24px;">
            See what's coming<br>
            <em style="color:var(--amber);font-style:italic;">before it arrives.</em>
          </h1>

          <p style="font-size:1.15rem;color:var(--text-secondary);max-width:580px;line-height:1.75;margin-bottom:48px;" class="anim-fade-up delay-3">
            Foretell fuses machine learning with structured reasoning to give analysts, operators, and strategists a decisive edge — calibrated probability, not noise.
          </p>

          <div style="display:flex;gap:16px;flex-wrap:wrap;" class="anim-fade-up delay-4">
            <a href="#demo" class="btn-primary">
              Try Free for 14 Days
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </a>
            <a href="#features" class="btn-secondary">See How It Works</a>
          </div>

          <!-- Live stat bar -->
          <div class="stat-ticker anim-fade-up delay-5" style="margin-top:64px;max-width:700px;">
            <div class="stat-tick">
              <span class="stat-tick-value">94.2%</span>
              <span class="stat-tick-label">Avg. Accuracy</span>
              <span class="stat-tick-delta">↑ 3.1%</span>
            </div>
            <div class="stat-tick">
              <span class="stat-tick-value">1.4M</span>
              <span class="stat-tick-label">Forecasts Run</span>
              <span class="stat-tick-delta">↑ 12k today</span>
            </div>
            <div class="stat-tick">
              <span class="stat-tick-value">38ms</span>
              <span class="stat-tick-label">Median Latency</span>
            </div>
            <div class="stat-tick">
              <span class="stat-tick-value">620+</span>
              <span class="stat-tick-label">Teams Using Foretell</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Decorative chart graphic -->
      <div style="position:absolute;right:0;top:50%;transform:translateY(-50%);width:40vw;max-width:600px;pointer-events:none;opacity:0.22;" aria-hidden="true">
        <svg viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:100%;">
          <path d="M20 350 C80 300 140 280 200 240 C260 200 290 180 340 130 C390 80 430 60 500 30" stroke="#f0a83c" stroke-width="2" stroke-linecap="round"/>
          <path d="M20 350 C80 300 140 280 200 240 C260 200 290 180 340 130 C390 80 430 60 500 30 L500 400 L20 400 Z" fill="url(#chartFill)" opacity="0.6"/>
          <!-- Prediction continuation (dashed) -->
          <path d="M500 30 C540 15 570 10 580 5" stroke="#f0a83c" stroke-width="2" stroke-dasharray="6,4" stroke-linecap="round" opacity="0.7"/>
          <!-- Confidence band -->
          <path d="M500 30 C540 20 570 18 580 14 L580 -4 C570 2 540 8 500 22 Z" fill="#f0a83c" opacity="0.08"/>
          <!-- Grid lines -->
          ${[1,2,3,4,5].map(i => `<line x1="20" y1="${i*70}" x2="580" y2="${i*70}" stroke="#f0a83c" stroke-width="0.5" opacity="0.08"/>`).join('')}
          ${[1,2,3,4,5,6,7,8].map(i => `<line x1="${i*70}" y1="20" x2="${i*70}" y2="390" stroke="#f0a83c" stroke-width="0.5" opacity="0.08"/>`).join('')}
          <defs>
            <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#f0a83c" stop-opacity="0.3"/>
              <stop offset="100%" stop-color="#f0a83c" stop-opacity="0"/>
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>

    <!-- SOCIAL PROOF LOGOS -->
    <section style="padding:48px 0;border-top:1px solid var(--border);border-bottom:1px solid var(--border);">
      <div class="container">
        <p style="font-family:var(--font-mono);font-size:0.65rem;letter-spacing:0.14em;text-transform:uppercase;color:var(--text-dim);text-align:center;margin-bottom:32px;">Trusted by analysts at</p>
        <div style="display:flex;gap:64px;align-items:center;justify-content:center;flex-wrap:wrap;opacity:0.4;">
          ${['MERIDIAN CAPITAL','ATLAS GROUP','NOVA ANALYTICS','STRATOS FUND','VERTEX INTELLIGENCE'].map(name => `
            <span style="font-family:var(--font-mono);font-size:0.75rem;letter-spacing:0.2em;text-transform:uppercase;color:var(--text-secondary);">${name}</span>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- HOW IT WORKS -->
    <section class="section">
      <div class="container">
        <div class="section-label">How It Works</div>
        <h2 class="display-lg" style="margin-bottom:16px;max-width:600px;">Three steps to confident predictions</h2>
        <p style="color:var(--text-secondary);margin-bottom:72px;max-width:480px;">From raw data to calibrated forecasts in minutes, not weeks.</p>

        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:var(--border);">
          ${[
            { n:'01', title:'Ingest your data', body:'Connect your existing data sources — CSVs, APIs, databases, or spreadsheets. Foretell handles messy, real-world data automatically.' },
            { n:'02', title:'Model & calibrate', body:'Our ensemble of AI models selects the best approach for your data type and domain, then calibrates uncertainty to actual performance.' },
            { n:'03', title:'Forecast & monitor', body:'Receive probabilistic forecasts with confidence intervals, scenario trees, and live monitoring that alerts when assumptions drift.' },
          ].map(s => `
            <div class="card" style="border:none;">
              <span style="font-family:var(--font-mono);font-size:2.5rem;color:var(--amber-glow);font-weight:300;display:block;margin-bottom:24px;">${s.n}</span>
              <h3 class="display-md" style="font-size:1.3rem;margin-bottom:12px;">${s.title}</h3>
              <p style="color:var(--text-secondary);font-size:0.92rem;line-height:1.75;">${s.body}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- USE CASES -->
    <section class="section" style="padding-top:0;">
      <div class="container">
        <div class="section-label">Use Cases</div>
        <h2 class="display-lg" style="margin-bottom:64px;max-width:500px;">Built for every forecasting domain</h2>

        <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:24px;">
          ${[
            { icon:'📈', title:'Financial Forecasting', body:'Revenue, burn rate, and market scenario modeling with Monte Carlo-backed confidence intervals.', tags:['Revenue','Cash Flow','Scenarios'] },
            { icon:'📦', title:'Demand Planning', body:'Predict demand spikes, inventory requirements, and supply chain stress points weeks ahead.', tags:['Inventory','Supply Chain','Seasonality'] },
            { icon:'🌐', title:'Macro & Geopolitical Risk', body:'Monitor geopolitical indicators and economic signals to flag systemic risks before they crystallize.', tags:['Risk','Macro','Signals'] },
            { icon:'🔬', title:'R&D & Project Timelines', body:'Probabilistic milestone forecasting for research programs, product launches, and engineering sprints.', tags:['Milestones','Sprints','Delivery'] },
          ].map(u => `
            <div class="card">
              <div style="font-size:2rem;margin-bottom:20px;">${u.icon}</div>
              <h3 style="font-family:var(--font-display);font-size:1.25rem;margin-bottom:12px;">${u.title}</h3>
              <p style="color:var(--text-secondary);font-size:0.9rem;line-height:1.75;margin-bottom:20px;">${u.body}</p>
              <div style="display:flex;gap:8px;flex-wrap:wrap;">
                ${u.tags.map(t => `<span class="tag" style="font-size:0.6rem;">${t}</span>`).join('')}
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- CTA BAND -->
    <section style="padding:80px 0;background:var(--navy);border-top:1px solid var(--border);border-bottom:1px solid var(--border);">
      <div class="container" style="text-align:center;">
        <div class="section-label" style="justify-content:center;">Get Started</div>
        <h2 class="display-lg" style="margin-bottom:20px;">Start forecasting with confidence.</h2>
        <p style="color:var(--text-secondary);margin-bottom:40px;max-width:440px;margin-left:auto;margin-right:auto;">Join 620+ teams who've moved from gut-feel to probabilistic precision.</p>
        <div style="display:flex;gap:16px;justify-content:center;">
          <a href="#demo" class="btn-primary">Start Free Trial</a>
          <a href="#pricing" class="btn-secondary">View Pricing</a>
        </div>
      </div>
    </section>

  </main>
  </div>
  ${renderFooter()}`;
}
