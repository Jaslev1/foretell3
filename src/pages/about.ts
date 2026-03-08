import { renderNav, renderFooter } from '../router.ts';

export function renderAbout(): string {
  return `
  ${renderNav('about')}
  <div class="grid-bg glow-top">
  <main style="position:relative;z-index:1;padding-top:64px;">

    <!-- HERO -->
    <section style="padding:100px 0 80px;">
      <div class="container">
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:80px;align-items:center;">
          <div>
            <div class="section-label">Our Mission</div>
            <h1 class="display-xl" style="margin-bottom:28px;">
              Forecasting should be a<br>
              <em style="color:var(--amber);font-style:italic;">discipline, not a guess.</em>
            </h1>
            <p style="color:var(--text-secondary);font-size:1.05rem;line-height:1.85;margin-bottom:20px;">
              We built Foretell because most organizations make high-stakes decisions on point estimates — single numbers that carry no information about how wrong they might be.
            </p>
            <p style="color:var(--text-secondary);font-size:1.05rem;line-height:1.85;">
              Probabilistic forecasting has been the standard in meteorology, epidemiology, and quantitative finance for decades. We're bringing that rigor to every team.
            </p>
          </div>
          <div>
            <!-- Stats panel -->
            <div style="background:var(--navy);border:1px solid var(--border);padding:48px;display:flex;flex-direction:column;gap:32px;">
              ${[
                { value:'2022', label:'Founded' },
                { value:'620+', label:'Teams using Foretell' },
                { value:'1.4M+', label:'Forecasts processed' },
                { value:'94.2%', label:'Average calibration accuracy' },
              ].map(s => `
                <div style="display:flex;justify-content:space-between;align-items:baseline;border-bottom:1px solid var(--border);padding-bottom:24px;">
                  <span style="font-family:var(--font-display);font-size:2.2rem;color:var(--text-primary);">${s.value}</span>
                  <span style="font-family:var(--font-mono);font-size:0.68rem;letter-spacing:0.1em;text-transform:uppercase;color:var(--text-dim);">${s.label}</span>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- VALUES -->
    <section class="section" style="padding-top:0;">
      <div class="container">
        <div class="section-label">What We Believe</div>
        <h2 class="display-lg" style="margin-bottom:64px;max-width:500px;">Principles that guide every decision</h2>
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:var(--border);">
          ${[
            { n:'I', title:'Calibration over confidence', body:'A forecast that says "70% likely" should be right about 70% of the time. We optimize for accuracy in uncertainty, not impressive-sounding point estimates.' },
            { n:'II', title:'Transparency above all', body:'You should know exactly why Foretell made a prediction, which data drove it, and what could make it wrong. No black boxes.' },
            { n:'III', title:'Revision is strength', body:'Good forecasters update their views when evidence changes. Our platform makes updating fast and traceable — not an admission of failure.' },
            { n:'IV', title:'Uncertainty is information', body:'Saying "I don\'t know" with precision is more valuable than a confident wrong answer. Foretell quantifies and communicates uncertainty rigorously.' },
            { n:'V', title:'Domain-agnostic rigor', body:'The same statistical principles apply whether you\'re forecasting revenue, inventory, policy outcomes, or project delivery. We built for all of them.' },
            { n:'VI', title:'Teams compound knowledge', body:'Organizations that track forecasts against outcomes and review systematically improve over time. We built review and learning into the core product.' },
          ].map(v => `
            <div class="card" style="border:none;padding:40px 32px;">
              <span style="font-family:var(--font-display);font-style:italic;font-size:1.4rem;color:var(--amber);display:block;margin-bottom:16px;">${v.n}</span>
              <h3 style="font-family:var(--font-display);font-size:1.15rem;margin-bottom:12px;">${v.title}</h3>
              <p style="color:var(--text-secondary);font-size:0.88rem;line-height:1.8;">${v.body}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- TEAM -->
    <section class="section" style="padding-top:0;">
      <div class="container">
        <div class="section-label">The Team</div>
        <h2 class="display-lg" style="margin-bottom:16px;">Built by forecasters, for forecasters.</h2>
        <p style="color:var(--text-secondary);margin-bottom:64px;max-width:480px;">
          Our team comes from quantitative finance, epidemiological modeling, and applied ML research.
        </p>
        <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:24px;">
          ${[
            { name:'Amara Osei', role:'CEO & Co-Founder', bg:'Former quant analyst, DE Shaw' },
            { name:'Luca Ferretti', role:'CTO & Co-Founder', bg:'ML researcher, formerly DeepMind' },
            { name:'Yuna Park', role:'Head of Product', bg:'Prev. product lead at Palantir' },
            { name:'Marcus Webb', role:'Head of Data Science', bg:'Epidemiological modeler, Oxford' },
          ].map(t => `
            <div style="background:var(--navy);border:1px solid var(--border);padding:28px 24px;">
              <div style="
                width:56px;height:56px;
                background:var(--navy-mid);
                border:1px solid var(--border-light);
                margin-bottom:20px;
                display:flex;align-items:center;justify-content:center;
                font-family:var(--font-display);
                font-size:1.4rem;
                color:var(--amber);
              ">${t.name.charAt(0)}</div>
              <h4 style="font-family:var(--font-sans);font-weight:600;font-size:0.95rem;margin-bottom:4px;">${t.name}</h4>
              <p style="font-family:var(--font-mono);font-size:0.68rem;letter-spacing:0.08em;text-transform:uppercase;color:var(--amber);margin-bottom:12px;">${t.role}</p>
              <p style="font-size:0.82rem;color:var(--text-secondary);">${t.bg}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- PRESS / INVESTORS (light) -->
    <section style="padding:72px 0;border-top:1px solid var(--border);border-bottom:1px solid var(--border);">
      <div class="container">
        <p style="font-family:var(--font-mono);font-size:0.65rem;letter-spacing:0.14em;text-transform:uppercase;color:var(--text-dim);text-align:center;margin-bottom:36px;">Backed by</p>
        <div style="display:flex;gap:64px;align-items:center;justify-content:center;flex-wrap:wrap;opacity:0.45;">
          ${['Y Combinator','Sequoia Capital','Andreessen Horowitz','Conviction Partners'].map(name => `
            <span style="font-family:var(--font-mono);font-size:0.75rem;letter-spacing:0.2em;text-transform:uppercase;color:var(--text-secondary);">${name}</span>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section style="padding:80px 0;">
      <div class="container" style="text-align:center;">
        <h2 class="display-lg" style="margin-bottom:20px;">Join us in building the future of forecasting.</h2>
        <div style="display:flex;gap:16px;justify-content:center;flex-wrap:wrap;">
          <a href="#demo" class="btn-primary">Start Free Trial</a>
          <a href="mailto:team@foretell.ai" class="btn-secondary">Get in Touch</a>
        </div>
      </div>
    </section>

  </main>
  </div>
  ${renderFooter()}`;
}
