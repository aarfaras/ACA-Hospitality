
export default function Home(){
  return (
    <div>
      <header>
        <div className="container nav">
          <div className="brand">
            <div className="mark" aria-hidden="true"></div>
            <div className="name">ACA Hospitality</div>
          </div>
          <nav aria-label="Main" className="hide-on-mobile">
            <a href="#services" style={{marginRight:12}}>Services</a>
            <a href="#results" style={{marginRight:12}}>Results</a>
            <a href="#education" style={{marginRight:12}}>Education</a>
            <a href="#process" style={{marginRight:12}}>Process</a>
            <a href="#about" style={{marginRight:12}}>About</a>
            <a className="btn" href="#contact" style={{padding:'8px 12px'}}>Book a Call</a>
          </nav>
          <a className="btn" href="#contact" aria-label="Book a call">Book</a>
        </div>
      </header>

      <section className="hero">
        <div className="heroImg" style={{backgroundImage:'image-set(url(/hero.webp) type("image/webp"), url(/hero.jpg) type("image/jpeg") )'}}></div>
        <div className="heroOverlay"></div>
        <div className="container" style={{position:'relative'}}>
          <span className="pill">Wine-first beverage consulting</span>
          <h1 className="h1">Fix the beverage program. Grow the margin. Delight your guests.</h1>
          <p className="heroP">
            I design and repair wine programs for restaurants, hotels, and private clubs.
            Focus areas: selection and variety planning, accurate costing, menu design, inventory control,
            and staff education that sticks.
          </p>
          <div className="actions">
            <a href="#contact" className="btn">Request a consult</a>
            <a href="#services" className="btn btnAlt">See services</a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{display:'flex',gap:12,flexWrap:'wrap'}}>
          <span className="pill">Certified Sommelier</span>
          <span className="pill">NYC & Remote</span>
          <span className="pill">Wine Program Design</span>
          <span className="pill">Inventory & Cost Control</span>
        </div>
      </section>

      <section id="services" className="features">
        <div className="container">
          <h2>What I fix</h2>
          <p className="muted">Clear scope. Practical deliverables. Fast lift for your team.</p>

          <div className="grid" style={{gridTemplateColumns:'repeat(3,minmax(0,1fr))', marginTop:18}}>
            <div className="card">
              <h3>Wine Program Audit</h3>
              <p className="muted">Selection balance, vintage coverage, pricing ladders, and GP.</p>
              <ul className="list">
                <li><span className="check">✓</span>SKU rationalization and variety mapping</li>
                <li><span className="check">✓</span>Costing accuracy and margin targets</li>
                <li><span className="check">✓</span>By-the-glass strategy</li>
              </ul>
            </div>
            <div className="card">
              <h3>Selection & Sourcing</h3>
              <p className="muted">Build a list that fits your concept and sells.</p>
              <ul className="list">
                <li><span className="check">✓</span>Producer mix and regional depth</li>
                <li><span className="check">✓</span>Vintage and style coverage</li>
                <li><span className="check">✓</span>Allocation planning</li>
              </ul>
            </div>
            <div className="card">
              <h3>Menu Design</h3>
              <p className="muted">Readable, on-brand wine lists that drive attachments.</p>
              <ul className="list">
                <li><span className="check">✓</span>Menu engineering and layout</li>
                <li><span className="check">✓</span>Food pairing strategy</li>
                <li><span className="check">✓</span>Printer-ready templates</li>
              </ul>
            </div>
          </div>

          <div className="grid" style={{gridTemplateColumns:'repeat(3,minmax(0,1fr))', marginTop:26}}>
            <div className="card">
              <h3>Costing & GP Optimization</h3>
              <p className="muted">Hit margin without losing guest value.</p>
              <ul className="list">
                <li><span className="check">✓</span>Landed cost & pour cost accuracy</li>
                <li><span className="check">✓</span>Price ladders and decoys</li>
                <li><span className="check">✓</span>BTG vs bottle mix modeling</li>
              </ul>
            </div>
            <div className="card">
              <h3>Inventory Systems & Control</h3>
              <p className="muted">Tight counts, lower variance, less dead stock.</p>
              <ul className="list">
                <li><span className="check">✓</span>Cycle counts and pars</li>
                <li><span className="check">✓</span>Bin location and labeling</li>
                <li><span className="check">✓</span>Depletion and 86 workflow</li>
              </ul>
            </div>
            <div className="card">
              <h3>Staff Education</h3>
              <p className="muted">Training that improves check average and confidence.</p>
              <ul className="list">
                <li><span className="check">✓</span>Custom curriculum and decks</li>
                <li><span className="check">✓</span>Service language & suggestive selling</li>
                <li><span className="check">✓</span>Pre-shift and quarterly refreshers</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="results" className="section bgBand">
        <div className="container" style={{position:'relative'}}>
          <h2>Results you can expect</h2>
          <ul className="list">
            <li><span className="check">✓</span>3–6 point improvement in beverage GP within 90 days</li>
            <li><span className="check">✓</span>Lower variance and faster monthly close</li>
            <li><span className="check">✓</span>Higher BTG attachment and bottle conversion</li>
            <li><span className="check">✓</span>A list your guests and staff actually enjoy using</li>
          </ul>
        </div>
      </section>

      <section id="education" className="section">
        <div className="container" style={{display:'grid',gridTemplateColumns:'repeat(2,minmax(0,1fr))',gap:26}}>
          <div>
            <h2>Staff education that sticks</h2>
            <p className="muted">Modular sessions built around your list and cuisine.</p>
            <div className="card">
              <strong>Curriculum modules</strong>
              <ul className="list" style={{marginTop:8}}>
                <li><span className="check">✓</span>Foundations: regions, grapes, styles</li>
                <li><span className="check">✓</span>By-the-glass playbook and guest cues</li>
                <li><span className="check">✓</span>Food pairing workshop with your menu</li>
                <li><span className="check">✓</span>Cellar, storage, and service standards</li>
                <li><span className="check">✓</span>Advanced: vintages, terroir, blind tasting</li>
              </ul>
            </div>
          </div>
          <div>
            <h3>Delivery</h3>
            <ul className="list">
              <li><span className="check">✓</span>On-site training in NYC or virtual</li>
              <li><span className="check">✓</span>Slide decks, one-pagers, quizzes</li>
              <li><span className="check">✓</span>Manager toolkit for ongoing refreshers</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="process" className="section bgBand">
        <div className="container" style={{position:'relative'}}>
          <h2>How it works</h2>
          <div style={{display:'grid',gridTemplateColumns:'repeat(2,minmax(0,1fr))',gap:16,marginTop:12}}>
            <div className="card"><strong>1) Discovery</strong><p className="muted">Brief call, current lists, POS exports, inventory view.</p></div>
            <div className="card"><strong>2) Audit & Plan</strong><p className="muted">Selection map, pricing strategy, menu plan, control fixes.</p></div>
            <div className="card"><strong>3) Implementation</strong><p className="muted">Vendor coordination, menu files, staff training, go-live.</p></div>
            <div className="card"><strong>4) Measure</strong><p className="muted">KPIs: GP%, variance, BTG attach rate, bottle mix, dead stock.</p></div>
          </div>
        </div>
      </section>

      <section id="about" className="section">
        <div className="container" style={{display:'grid',gridTemplateColumns:'repeat(2,minmax(0,1fr))',gap:26}}>
          <div>
            <h2>About</h2>
            <p>I’m <strong>Anna Arfaras</strong>, a certified sommelier and operator who builds profitable wine programs without losing hospitality. I’ve led beverage and operations teams across NYC and consult for concepts from steakhouse to coastal Italian.</p>
            <p className="muted">Available for projects and ongoing advisory. NYC and remote.</p>
          </div>
          <div className="card">
            <h3>Focus areas</h3>
            <ul className="list">
              <li><span className="check">✓</span>Wine list creation and refresh</li>
              <li><span className="check">✓</span>BTG strategy and pricing ladders</li>
              <li><span className="check">✓</span>Inventory system build-out</li>
              <li><span className="check">✓</span>Menu engineering and design</li>
              <li><span className="check">✓</span>Staff education and sales coaching</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="contact" className="section bgTexture">
        <div className="container" style={{position:'relative',display:'grid',gridTemplateColumns:'repeat(2,minmax(0,1fr))',gap:26}}>
          <div>
            <h2>Let’s talk</h2>
            <p className="muted">Tell me about your beverage program and goals. I’ll reply within one business day.</p>
            <div className="aside" style={{marginTop:10}}>
              <strong>Email</strong><br/>
              <a href="mailto:acahospitality@gmail.com">acahospitality@gmail.com</a><br/><br/>
              <strong>Phone</strong><br/>
              <a href="tel:+14072578751">+1 407-257-8751</a><br/><br/>
              <strong>Location</strong><br/>
              NYC
            </div>
          </div>
          <div>
            <form id="contactForm" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
              <label>Name<input type="text" name="name" placeholder="Your name" required/></label>
              <label>Email<input type="email" name="email" placeholder="you@restaurant.com" required/></label>
              <label>Venue / Company<input type="text" name="company" placeholder="Restaurant or group name"/></label>
              <label>What do you need help with?
                <select name="topic" required>
                  <option value="">Select one</option>
                  <option>Wine program audit</option>
                  <option>Menu design</option>
                  <option>Costing & GP</option>
                  <option>Inventory systems</option>
                  <option>Staff education</option>
                  <option>Other</option>
                </select>
              </label>
              <label>Message<textarea name="message" rows="5" placeholder="Short summary of your current program, goals, and timing." required/></label>
              <input type="hidden" name="_subject" value="Website inquiry — ACA Hospitality"/>
              <button className="btn" type="submit">Send inquiry</button>
              <p id="formNote" className="muted" style={{marginTop:8}}></p>
            </form>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container" style={{display:'flex',justifyContent:'space-between',gap:16,flexWrap:'wrap'}}>
          <div>© {new Date().getFullYear()} ACA Hospitality</div>
          <div>
            <a href="#services">Services</a> · <a href="#results">Results</a> · <a href="#education">Education</a> · <a href="#process">Process</a> · <a href="#about">About</a> · <a href="#contact">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
