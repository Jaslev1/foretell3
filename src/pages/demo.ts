import { renderNav, renderFooter } from '../router.ts';

export function renderDemo(): string {
  return `
  ${renderNav('demo')}
  <div class="grid-bg glow-top">
  <main style="position:relative;z-index:1;padding-top:64px;">

    <!-- HERO -->
    <section style="padding:80px 0 40px;">
      <div class="container">
        <div class="section-label">Interactive Demo</div>
        <h1 class="display-lg" style="margin-bottom:16px;">Try Foretell live.</h1>
        <p style="color:var(--text-secondary);max-width:480px;line-height:1.8;">
          Build a simple revenue forecast below. Adjust assumptions and see how the AI model responds with calibrated probability ranges in real time.
        </p>
      </div>
    </section>

    <!-- DEMO APP -->
    <section style="padding:0 0 120px;">
      <div class="container">
        <div style="display:grid;grid-template-columns:340px 1fr;gap:24px;align-items:start;">

          <!-- Controls Panel -->
          <div style="background:var(--navy);border:1px solid var(--border);padding:32px;position:sticky;top:84px;">
            <h3 style="font-family:var(--font-mono);font-size:0.7rem;letter-spacing:0.14em;text-transform:uppercase;color:var(--amber);margin-bottom:28px;">Forecast Parameters</h3>

            <div id="controls" style="display:flex;flex-direction:column;gap:24px;">

              <div class="control-group">
                <label style="font-family:var(--font-mono);font-size:0.65rem;letter-spacing:0.1em;text-transform:uppercase;color:var(--text-dim);display:flex;justify-content:space-between;margin-bottom:10px;">
                  Baseline Monthly Revenue
                  <span id="val-base" style="color:var(--text-primary);">$500k</span>
                </label>
                <input type="range" id="slider-base" min="100" max="2000" value="500" step="50"
                  style="width:100%;accent-color:var(--amber);background:transparent;cursor:pointer;">
              </div>

              <div class="control-group">
                <label style="font-family:var(--font-mono);font-size:0.65rem;letter-spacing:0.1em;text-transform:uppercase;color:var(--text-dim);display:flex;justify-content:space-between;margin-bottom:10px;">
                  Expected Monthly Growth
                  <span id="val-growth" style="color:var(--text-primary);">5%</span>
                </label>
                <input type="range" id="slider-growth" min="-5" max="25" value="5" step="0.5"
                  style="width:100%;accent-color:var(--amber);cursor:pointer;">
              </div>

              <div class="control-group">
                <label style="font-family:var(--font-mono);font-size:0.65rem;letter-spacing:0.1em;text-transform:uppercase;color:var(--text-dim);display:flex;justify-content:space-between;margin-bottom:10px;">
                  Volatility (Std Dev)
                  <span id="val-vol" style="color:var(--text-primary);">10%</span>
                </label>
                <input type="range" id="slider-vol" min="1" max="40" value="10" step="1"
                  style="width:100%;accent-color:var(--amber);cursor:pointer;">
              </div>

              <div class="control-group">
                <label style="font-family:var(--font-mono);font-size:0.65rem;letter-spacing:0.1em;text-transform:uppercase;color:var(--text-dim);display:flex;justify-content:space-between;margin-bottom:10px;">
                  Forecast Horizon
                  <span id="val-horizon" style="color:var(--text-primary);">12 months</span>
                </label>
                <input type="range" id="slider-horizon" min="3" max="24" value="12" step="1"
                  style="width:100%;accent-color:var(--amber);cursor:pointer;">
              </div>

              <div style="border-top:1px solid var(--border);padding-top:24px;">
                <label style="font-family:var(--font-mono);font-size:0.65rem;letter-spacing:0.1em;text-transform:uppercase;color:var(--text-dim);margin-bottom:12px;display:block;">Seasonality Pattern</label>
                <div id="seasonality-btns" style="display:flex;gap:8px;flex-wrap:wrap;">
                  ${['None','Q4 Spike','Summer Dip','Linear'].map((s, i) => `
                    <button class="season-btn" data-season="${s}" style="
                      font-family:var(--font-mono);font-size:0.62rem;letter-spacing:0.08em;text-transform:uppercase;
                      background:${i===0?'var(--amber-subtle)':'transparent'};
                      color:${i===0?'var(--amber)':'var(--text-secondary)'};
                      border:1px solid ${i===0?'rgba(240,168,60,0.3)':'var(--border)'};
                      padding:7px 12px;cursor:pointer;transition:all 0.2s;
                    ">${s}</button>
                  `).join('')}
                </div>
              </div>

            </div>

            <!-- Key metrics -->
            <div style="border-top:1px solid var(--border);margin-top:28px;padding-top:24px;display:flex;flex-direction:column;gap:16px;">
              <div style="display:flex;justify-content:space-between;align-items:baseline;">
                <span style="font-family:var(--font-mono);font-size:0.65rem;letter-spacing:0.08em;text-transform:uppercase;color:var(--text-dim);">P50 End-Month</span>
                <span id="metric-p50" style="font-family:var(--font-mono);font-size:1rem;color:var(--text-primary);">—</span>
              </div>
              <div style="display:flex;justify-content:space-between;align-items:baseline;">
                <span style="font-family:var(--font-mono);font-size:0.65rem;letter-spacing:0.08em;text-transform:uppercase;color:var(--text-dim);">P90 (Upside)</span>
                <span id="metric-p90" style="font-family:var(--font-mono);font-size:1rem;color:var(--success);">—</span>
              </div>
              <div style="display:flex;justify-content:space-between;align-items:baseline;">
                <span style="font-family:var(--font-mono);font-size:0.65rem;letter-spacing:0.08em;text-transform:uppercase;color:var(--text-dim);">P10 (Downside)</span>
                <span id="metric-p10" style="font-family:var(--font-mono);font-size:1rem;color:var(--danger);">—</span>
              </div>
              <div style="display:flex;justify-content:space-between;align-items:baseline;">
                <span style="font-family:var(--font-mono);font-size:0.65rem;letter-spacing:0.08em;text-transform:uppercase;color:var(--text-dim);">Prob. of Growth</span>
                <span id="metric-prob" style="font-family:var(--font-mono);font-size:1rem;color:var(--amber);">—</span>
              </div>
            </div>
          </div>

          <!-- Chart Panel -->
          <div>
            <div style="background:var(--navy);border:1px solid var(--border);padding:32px;margin-bottom:24px;">
              <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:28px;">
                <h3 style="font-family:var(--font-mono);font-size:0.7rem;letter-spacing:0.14em;text-transform:uppercase;color:var(--text-secondary);">Revenue Forecast — Probabilistic Scenarios</h3>
                <div style="display:flex;gap:16px;">
                  <span style="font-family:var(--font-mono);font-size:0.6rem;letter-spacing:0.08em;color:var(--text-dim);">P10 ░ P50 — P90 ░</span>
                </div>
              </div>
              <canvas id="forecast-chart" style="width:100%;height:320px;display:block;"></canvas>
            </div>

            <!-- Scenario comparison table -->
            <div style="background:var(--navy);border:1px solid var(--border);padding:32px;">
              <h3 style="font-family:var(--font-mono);font-size:0.7rem;letter-spacing:0.14em;text-transform:uppercase;color:var(--text-secondary);margin-bottom:24px;">Scenario Summary</h3>
              <table id="scenario-table" style="width:100%;border-collapse:collapse;">
                <thead>
                  <tr style="border-bottom:1px solid var(--border);">
                    ${['Scenario','Month 3','Month 6','Month 12','Prob. Growth'].map(h => `
                      <th style="font-family:var(--font-mono);font-size:0.62rem;letter-spacing:0.1em;text-transform:uppercase;color:var(--text-dim);text-align:left;padding:0 0 12px;padding-right:16px;">${h}</th>
                    `).join('')}
                  </tr>
                </thead>
                <tbody id="scenario-tbody">
                  <tr><td colspan="5" style="color:var(--text-dim);font-family:var(--font-mono);font-size:0.8rem;padding-top:16px;">Adjust parameters to generate scenarios…</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SIGN UP CTA -->
    <section style="padding:80px 0;background:var(--navy);border-top:1px solid var(--border);">
      <div class="container" style="text-align:center;">
        <div class="section-label" style="justify-content:center;">Ready for the real thing?</div>
        <h2 class="display-lg" style="margin-bottom:20px;">Connect your actual data.</h2>
        <p style="color:var(--text-secondary);margin-bottom:40px;max-width:400px;margin-left:auto;margin-right:auto;">This demo uses synthetic data. The real Foretell connects to your databases, APIs, and spreadsheets — and learns from your actuals.</p>
        <div style="display:flex;gap:16px;justify-content:center;">
          <a href="mailto:team@foretell.ai" class="btn-primary">Request Full Access</a>
          <a href="#pricing" class="btn-secondary">See Pricing</a>
        </div>
      </div>
    </section>

  </main>
  </div>
  ${renderFooter()}`;
}

// Attach interactive demo logic after the page renders
export function initDemo() {
  const canvas = document.getElementById('forecast-chart') as HTMLCanvasElement;
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  // Scale for retina
  const dpr = window.devicePixelRatio || 1;
  const rect = canvas.getBoundingClientRect();
  canvas.width = rect.width * dpr;
  canvas.height = 320 * dpr;
  ctx.scale(dpr, dpr);
  const W = rect.width;
  const H = 320;

  function getParams() {
    const base = parseInt((document.getElementById('slider-base') as HTMLInputElement)?.value || '500');
    const growth = parseFloat((document.getElementById('slider-growth') as HTMLInputElement)?.value || '5') / 100;
    const vol = parseFloat((document.getElementById('slider-vol') as HTMLInputElement)?.value || '10') / 100;
    const horizon = parseInt((document.getElementById('slider-horizon') as HTMLInputElement)?.value || '12');
    return { base, growth, vol, horizon };
  }

  function generatePath(base: number, growth: number, vol: number, horizon: number, seed: number): number[] {
    const vals = [base];
    let rng = seed;
    function rand() {
      rng = (rng * 16807 + 0) % 2147483647;
      return (rng / 2147483647) * 2 - 1;
    }
    for (let i = 1; i <= horizon; i++) {
      const prev = vals[i - 1];
      const noise = rand() * vol * prev;
      vals.push(Math.max(0, prev * (1 + growth) + noise));
    }
    return vals;
  }

  function fmt(n: number) {
    if (n >= 1000) return `$${(n / 1000).toFixed(1)}M`;
    return `$${Math.round(n)}k`;
  }

  function drawChart() {
    const { base, growth, vol, horizon } = getParams();

    // Generate Monte Carlo paths
    const N = 300;
    const paths: number[][] = [];
    for (let i = 0; i < N; i++) {
      paths.push(generatePath(base, growth, vol, horizon, i * 1337 + 42));
    }

    // Compute percentiles per step
    const p10: number[] = [], p50: number[] = [], p90: number[] = [];
    for (let t = 0; t <= horizon; t++) {
      const vals = paths.map(p => p[t]).sort((a, b) => a - b);
      p10.push(vals[Math.floor(N * 0.1)]);
      p50.push(vals[Math.floor(N * 0.5)]);
      p90.push(vals[Math.floor(N * 0.9)]);
    }

    const allVals = [...p10, ...p90];
    const minV = Math.min(...allVals) * 0.9;
    const maxV = Math.max(...allVals) * 1.05;

    function xOf(i: number) { return 48 + (i / horizon) * (W - 72); }
    function yOf(v: number) { return H - 40 - ((v - minV) / (maxV - minV)) * (H - 70); }

    ctx.clearRect(0, 0, W, H);

    // Grid
    ctx.strokeStyle = 'rgba(255,255,255,0.04)';
    ctx.lineWidth = 1;
    for (let g = 0; g <= 4; g++) {
      const y = 20 + (g / 4) * (H - 60);
      ctx.beginPath(); ctx.moveTo(48, y); ctx.lineTo(W - 24, y); ctx.stroke();
      const val = maxV - (g / 4) * (maxV - minV);
      ctx.fillStyle = 'rgba(255,255,255,0.2)';
      ctx.font = `${10}px DM Mono, monospace`;
      ctx.fillText(fmt(val), 2, y + 4);
    }

    // Confidence band p10-p90
    ctx.beginPath();
    ctx.moveTo(xOf(0), yOf(p10[0]));
    for (let i = 1; i <= horizon; i++) ctx.lineTo(xOf(i), yOf(p10[i]));
    for (let i = horizon; i >= 0; i--) ctx.lineTo(xOf(i), yOf(p90[i]));
    ctx.closePath();
    ctx.fillStyle = 'rgba(240,168,60,0.07)';
    ctx.fill();

    // p50 line
    ctx.beginPath();
    ctx.moveTo(xOf(0), yOf(p50[0]));
    for (let i = 1; i <= horizon; i++) ctx.lineTo(xOf(i), yOf(p50[i]));
    ctx.strokeStyle = '#f0a83c';
    ctx.lineWidth = 2;
    ctx.stroke();

    // p10 / p90 dashed lines
    for (const arr of [p10, p90]) {
      ctx.beginPath();
      ctx.moveTo(xOf(0), yOf(arr[0]));
      for (let i = 1; i <= horizon; i++) ctx.lineTo(xOf(i), yOf(arr[i]));
      ctx.strokeStyle = 'rgba(240,168,60,0.35)';
      ctx.lineWidth = 1;
      ctx.setLineDash([4, 3]);
      ctx.stroke();
      ctx.setLineDash([]);
    }

    // X axis labels
    ctx.fillStyle = 'rgba(255,255,255,0.25)';
    ctx.font = `10px DM Mono, monospace`;
    const now = new Date();
    for (let i = 0; i <= horizon; i += Math.max(1, Math.floor(horizon / 6))) {
      const d = new Date(now.getFullYear(), now.getMonth() + i, 1);
      const lbl = d.toLocaleString('default', { month: 'short', year: '2-digit' });
      ctx.fillText(lbl, xOf(i) - 14, H - 10);
    }

    // Update metrics
    const endP50 = p50[horizon];
    const endP90 = p90[horizon];
    const endP10 = p10[horizon];
    const probGrowth = paths.filter(p => p[horizon] > base).length / N;

    (document.getElementById('metric-p50') as HTMLElement).textContent = fmt(endP50);
    (document.getElementById('metric-p90') as HTMLElement).textContent = fmt(endP90);
    (document.getElementById('metric-p10') as HTMLElement).textContent = fmt(endP10);
    (document.getElementById('metric-prob') as HTMLElement).textContent = `${(probGrowth * 100).toFixed(0)}%`;

    // Update table
    const tbody = document.getElementById('scenario-tbody') as HTMLElement;
    const rowData = [
      { name: 'Downside (P10)', vals: p10, color: 'var(--danger)' },
      { name: 'Base (P50)',     vals: p50, color: 'var(--text-primary)' },
      { name: 'Upside (P90)',   vals: p90, color: 'var(--success)' },
    ];
    const getIdx = (n: number) => Math.min(n, horizon);
    tbody.innerHTML = rowData.map(r => `
      <tr style="border-bottom:1px solid var(--border);">
        <td style="font-family:var(--font-mono);font-size:0.75rem;color:${r.color};padding:12px 16px 12px 0;">${r.name}</td>
        <td style="font-family:var(--font-mono);font-size:0.75rem;color:var(--text-secondary);padding:12px 16px 12px 0;">${fmt(r.vals[getIdx(3)])}</td>
        <td style="font-family:var(--font-mono);font-size:0.75rem;color:var(--text-secondary);padding:12px 16px 12px 0;">${fmt(r.vals[getIdx(6)])}</td>
        <td style="font-family:var(--font-mono);font-size:0.75rem;color:var(--text-secondary);padding:12px 16px 12px 0;">${fmt(r.vals[getIdx(12)])}</td>
        <td style="font-family:var(--font-mono);font-size:0.75rem;color:${r.color};padding:12px 0;">
          ${paths.filter(p => p[getIdx(horizon)] > base).length / N > 0.5 ? '↑' : '↓'} ${(paths.filter(p => p[getIdx(horizon)] > base).length / N * 100).toFixed(0)}%
        </td>
      </tr>
    `).join('');
  }

  // Bind sliders
  ['slider-base','slider-growth','slider-vol','slider-horizon'].forEach(id => {
    const el = document.getElementById(id) as HTMLInputElement;
    el?.addEventListener('input', () => {
      updateLabels();
      drawChart();
    });
  });

  // Seasonality buttons
  document.getElementById('seasonality-btns')?.addEventListener('click', (e) => {
    const btn = (e.target as HTMLElement).closest('.season-btn') as HTMLElement;
    if (!btn) return;
    document.querySelectorAll('.season-btn').forEach(b => {
      (b as HTMLElement).style.background = 'transparent';
      (b as HTMLElement).style.color = 'var(--text-secondary)';
      (b as HTMLElement).style.borderColor = 'var(--border)';
    });
    btn.style.background = 'var(--amber-subtle)';
    btn.style.color = 'var(--amber)';
    btn.style.borderColor = 'rgba(240,168,60,0.3)';
    drawChart();
  });

  function updateLabels() {
    const base = parseInt((document.getElementById('slider-base') as HTMLInputElement)?.value || '500');
    const growth = parseFloat((document.getElementById('slider-growth') as HTMLInputElement)?.value || '5');
    const vol = parseInt((document.getElementById('slider-vol') as HTMLInputElement)?.value || '10');
    const horizon = parseInt((document.getElementById('slider-horizon') as HTMLInputElement)?.value || '12');
    (document.getElementById('val-base') as HTMLElement).textContent = base >= 1000 ? `$${(base/1000).toFixed(1)}M` : `$${base}k`;
    (document.getElementById('val-growth') as HTMLElement).textContent = `${growth}%`;
    (document.getElementById('val-vol') as HTMLElement).textContent = `${vol}%`;
    (document.getElementById('val-horizon') as HTMLElement).textContent = `${horizon} months`;
  }

  updateLabels();
  drawChart();

  // Redraw on resize
  window.addEventListener('resize', () => {
    const r = canvas.getBoundingClientRect();
    canvas.width = r.width * dpr;
    canvas.height = 320 * dpr;
    ctx.scale(dpr, dpr);
    drawChart();
  });
}
