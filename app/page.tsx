'use client';

import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    /* CURSOR */
    const cur = document.getElementById('cursor');
    const ring = document.getElementById('cursorRing');
    let mx = 0, my = 0, rx = 0, ry = 0;
    const onMouseMove = (e: MouseEvent) => {
      mx = e.clientX; my = e.clientY;
      if (cur) { cur.style.left = mx + 'px'; cur.style.top = my + 'px'; }
    };
    document.addEventListener('mousemove', onMouseMove);
    let rafId: number;
    const loop = () => {
      rx += (mx - rx) * .11; ry += (my - ry) * .11;
      if (ring) { ring.style.left = rx + 'px'; ring.style.top = ry + 'px'; }
      rafId = requestAnimationFrame(loop);
    };
    rafId = requestAnimationFrame(loop);

    /* NAV */
    const nav = document.getElementById('nav');
    const onScroll = () => {
      if (nav) nav.classList.toggle('scrolled', window.scrollY > 60);
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    /* REVEAL */
    const els = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -36px 0px' });
    els.forEach(el => io.observe(el));

    /* VIMEO REEL SWITCHER */
    const slides = document.querySelectorAll('.vimeo-slide');
    let current = 0;
    const INTERVAL = 4500;
    const showSlide = (index: number) => {
      slides.forEach((s, i) => s.classList.toggle('active', i === index));
    };
    showSlide(0);
    const reelTimer = setInterval(() => {
      current = (current + 1) % slides.length;
      showSlide(current);
    }, INTERVAL);

    /* LANG SWITCH - restore saved lang */
    const saved = localStorage.getItem('sbp-lang') || 'en';
    if (saved === 'ja') setLang('ja');

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(rafId);
      clearInterval(reelTimer);
      io.disconnect();
    };
  }, []);

  return (
    <>
      <div className="cursor" id="cursor"></div>
      <div className="cursor-ring" id="cursorRing"></div>

      {/* NAV */}
      <nav id="nav">
        <div className="nav-logo">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.png" alt="Seven Bros. Pictures" style={{height: '40px', width: 'auto', display: 'block'}} />
        </div>
        <ul className="nav-links">
          <li><a href="#work">Work</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="lang-switch">
          <button className="lang-btn active" id="btn-en" onClick={() => setLang('en')}>EN</button>
          <span className="lang-divider">|</span>
          <button className="lang-btn" id="btn-ja" onClick={() => setLang('ja')}>JP</button>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-bg">
          <div className="vimeo-reel">
            <iframe className="vimeo-slide" src="https://player.vimeo.com/video/1201095440?autoplay=1&muted=1&loop=1&background=1&autopause=0" frameBorder={0} allow="autoplay; fullscreen" allowFullScreen></iframe>
            <iframe className="vimeo-slide" src="https://player.vimeo.com/video/77426452?autoplay=1&muted=1&loop=1&background=1&autopause=0" frameBorder={0} allow="autoplay; fullscreen" allowFullScreen></iframe>
            <iframe className="vimeo-slide" src="https://player.vimeo.com/video/1201094737?autoplay=1&muted=1&loop=1&background=1&autopause=0" frameBorder={0} allow="autoplay; fullscreen" allowFullScreen></iframe>
            <iframe className="vimeo-slide" src="https://player.vimeo.com/video/89206674?autoplay=1&muted=1&loop=1&background=1&autopause=0" frameBorder={0} allow="autoplay; fullscreen" allowFullScreen></iframe>
            <iframe className="vimeo-slide" src="https://player.vimeo.com/video/579248574?autoplay=1&muted=1&loop=1&background=1&autopause=0" frameBorder={0} allow="autoplay; fullscreen" allowFullScreen></iframe>
          </div>
        </div>
        <div className="hero-grain"></div>
        <div className="hero-vignette"></div>
        <div className="hero-bottom"></div>
        <div className="hero-content">
          <p className="hero-eyebrow" data-en="California · Tokyo · Est. 2017" data-ja="カリフォルニア · 東京 · 2017年創業">California · Tokyo · Est. 2017</p>
          <h1 className="hero-title">Seven Bros.<br /><em>Pictures</em></h1>
          <p className="hero-tagline" data-en="Stories Through Light." data-ja="光で、物語を。">Stories Through Light.</p>
        </div>
        <div className="hero-scroll">
          <div className="hero-scroll-line"></div>
          <span className="hero-scroll-text">Scroll</span>
        </div>
      </section>

      {/* WORK */}
      <section className="work" id="work">
        <div className="work-header reveal">
          <div>
            <div className="section-label">Selected Work</div>
            <h2 className="work-h2">Crafted<br />with Light.</h2>
          </div>
          <a href="#" className="work-all" data-en="View All" data-ja="すべて見る">View All</a>
        </div>
        <div className="work-grid">
          <div className="wi wi-main f1 reveal d1">
            <div className="wi-inner"></div>
            <div className="wi-overlay">
              <div className="wi-meta">
                <p className="wi-cat">Documentary</p>
                <p className="wi-name">The Space<br />Between</p>
              </div>
            </div>
          </div>
          <div className="wi f2 reveal d2">
            <div className="wi-inner"></div>
            <div className="wi-overlay">
              <div className="wi-meta">
                <p className="wi-cat">Automotive</p>
                <p className="wi-name">Chevrolet<br />Equinox</p>
              </div>
            </div>
          </div>
          <div className="wi f3 reveal d3">
            <div className="wi-inner"></div>
            <div className="wi-overlay">
              <div className="wi-meta">
                <p className="wi-cat">Still Life</p>
                <p className="wi-name">Gabrielle<br />Chanel</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT PHOTOGRAPHY */}
      <section className="product-photo" id="product">
        <div className="reveal">
          <div className="section-label">Product Photography</div>
          <h2 className="work-h2">Objects<br />in Light.</h2>
        </div>
        <div className="pp-grid">
          <div className="pp-item reveal d1">
            <div className="pp-inner" style={{backgroundImage: "url('/work-1.jpg')"}}></div>
          </div>
          <div className="pp-item reveal d2">
            <div className="pp-inner" style={{backgroundImage: "url('/work-2.jpg')"}}></div>
          </div>
          <div className="pp-item reveal d3">
            <div className="pp-inner" style={{backgroundImage: "url('/work-3.jpg')"}}></div>
          </div>
          <div className="pp-item reveal d4">
            <div className="pp-inner" style={{backgroundImage: "url('/pp-1.jpg')"}}></div>
          </div>
          <div className="pp-item reveal d1">
            <div className="pp-inner" style={{backgroundImage: "url('/pp-2.jpg')"}}></div>
          </div>
          <div className="pp-item reveal d2">
            <div className="pp-inner" style={{backgroundImage: "url('/pp-3.jpg')"}}></div>
          </div>
          <div className="pp-item reveal d3">
            <div className="pp-inner" style={{backgroundImage: "url('/pp-4.jpg')"}}></div>
          </div>
          <div className="pp-item reveal d4">
            <div className="pp-inner" style={{backgroundImage: "url('/pp-5.jpg')"}}></div>
          </div>
        </div>
      </section>

      {/* ADVERTISING */}
      <section className="product-photo" id="advertising" style={{paddingTop: '80px'}}>
        <div>
          <div className="section-label">Advertising Photography</div>
          <h2 className="work-h2">Advertising<br />beyond the ordinary.</h2>
        </div>
        <div className="ad-feature">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/ad-1.jpg" alt="" className="ad-img-fit" />
          <div className="ad-caption">
            <p className="ad-caption-eyebrow" data-en="Our Approach" data-ja="私たちのアプローチ">Our Approach</p>
            <h3 className="ad-caption-title">In-house.<br />In sync.</h3>
            <p className="ad-caption-body" data-en="Our photographers and designers work as one — from concept to final frame. The result is advertising that moves fast, stays consistent, and never compromises on craft." data-ja="カメラマンとデザイナーがインハウスでタッグを組み、コンセプトから仕上げまで一貫して制作します。スピーディーでありながら、ブレのないクリエイティブが実現します。">Our photographers and designers work as one — from concept to final frame. The result is advertising that moves fast, stays consistent, and never compromises on craft.</p>
          </div>
        </div>
        <div className="ad-feature">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/auto-1.jpg" alt="" className="ad-img-fit" />
          <div className="ad-caption">
            <p className="ad-caption-eyebrow" data-en="Automotive" data-ja="オートモーティブ">Automotive</p>
            <h3 className="ad-caption-title">Built to<br />move.</h3>
            <p className="ad-caption-body" data-en="From raw power to refined detail — we shoot from the angle that best serves each client's needs. Every frame is crafted with one clear intent: to capture the hearts of those who see it." data-ja="力強さから繊細なディテールまで、クライアントのニーズに応じた最適なアングルで撮影します。すべてのカットに、見る者の心を掴むという明確な意図があります。">From raw power to refined detail — we shoot from the angle that best serves each client's needs. Every frame is crafted with one clear intent: to capture the hearts of those who see it.</p>
          </div>
        </div>

        <div className="ad-feature">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/ad-8.jpg" alt="" className="ad-img-fit" />
          <div className="ad-caption">
            <p className="ad-caption-eyebrow" data-en="Documentary" data-ja="ドキュメンタリー">Documentary</p>
            <h3 className="ad-caption-title">Moments that<br />tell stories.</h3>
            <p className="ad-caption-body" data-en="Every face holds a lifetime of stories. We document people with honesty and quiet respect — capturing moments that words alone cannot reach." data-ja="一枚に、生きた時間が宿る。私たちは被写体をありのままに、静かな敬意をもって記録する。言葉では届かない瞬間を刻む。">Every face holds a lifetime of stories. We document people with honesty and quiet respect — capturing moments that words alone cannot reach.</p>
          </div>
        </div>
      </section>

      {/* STATEMENT / ABOUT */}
      <section className="statement" id="about">
        <div className="reveal">
          <div className="section-label" data-en="About" data-ja="について">About</div>
          <p
            className="statement-body"
            data-en-html="We don't just<br />create images.<br /><span class='dim'>We create</span> <em>emotion.</em>"
            data-ja-html="私たちは単に<br />映像を作るだけではない。<br /><span class='dim'></span><em>感情を創り出す。</em>"
          >
            We don&apos;t just<br />
            create images.<br />
            <span className="dim">We create</span> <em>emotion.</em>
          </p>
          <p
            className="statement-sub reveal d2"
            data-en="Seven Bros. Pictures Inc. is a creative production company based in California and Tokyo. We believe photography and film are not just visuals — they move people, tell stories, and document eras. Together with brands and artists who share our vision, we continue creating work that brings new meaning to the world."
            data-ja="Seven Bros. Pictures Inc.は、カリフォルニアと東京を拠点とするクリエイティブ・プロダクションです。私たちは、写真や映像を単なるビジュアルではなく、人の心を動かし、物語や時代を記録する表現だと考えています。志を共有するブランドやアーティストとともに、新しい価値を生み出す作品づくりを続けています。"
          >
            Seven Bros. Pictures Inc. is a creative production company
            based in California and Tokyo. We believe photography and film
            are not just visuals — they move people, tell stories, and
            document eras. Together with brands and artists who share our
            vision, we continue creating work that brings new meaning to the world.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="services" id="services">
        <div className="reveal">
          <div className="section-label" data-en="What We Do" data-ja="サービス">What We Do</div>
        </div>
        <div className="services-grid">
          <div className="svc reveal d1">
            <div className="svc-num">01</div>
            <h3 className="svc-title" data-en="Photography" data-ja="フォトグラフィー">Photography</h3>
            <p className="svc-desc" data-en="Editorial, fashion, portrait, and commercial still photography. Every frame is composed with intention — light, shadow, and silence working together." data-ja="エディトリアル、ファッション、ポートレート、コマーシャルスチール。すべてのフレームに意図がある — 光、影、静寂が共鳴する。">
              Editorial, fashion, portrait, and commercial still photography.
              Every frame is composed with intention — light, shadow, and silence working together.
            </p>
          </div>
          <div className="svc reveal d2">
            <div className="svc-num">02</div>
            <h3 className="svc-title" data-en="Film & Video" data-ja="映像撮影">Film &amp; Video</h3>
            <p className="svc-desc" data-en="TV commercials, web films, brand documentaries, and short-form content. We direct and produce stories that move people — literally and emotionally." data-ja="TVCM、WEB動画、ブランドドキュメンタリー、ショートフォームコンテンツ。人の心を動かす物語を、演出から制作まで一貫して手がけます。">
              TV commercials, web films, brand documentaries, and short-form content.
              We direct and produce stories that move people — literally and emotionally.
            </p>
          </div>
          <div className="svc reveal d3">
            <div className="svc-num">03</div>
            <h3 className="svc-title" data-en="Production" data-ja="プロダクション">Production</h3>
            <p className="svc-desc" data-en="Full production from concept to delivery. Casting, location scouting, post-production, and creative direction — across California and Tokyo." data-ja="コンセプトから納品まで、制作全工程をワンストップで。キャスティング、ロケハン、ポスプロ、クリエイティブディレクション — カリフォルニアと東京で。">
              Full production from concept to delivery. Casting, location scouting,
              post-production, and creative direction — across California and Tokyo.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact" id="contact">
        <div className="reveal">
          <div className="section-label" data-en="Get in Touch" data-ja="お問い合わせ">Get in Touch</div>
          <h2
            className="contact-h2"
            data-en-html="Let's create<br /><em>something<br />remarkable.</em>"
            data-ja-html="共に、<br /><em>特別な物語を<br />生み出しましょう。</em>"
          >
            Let&apos;s create<br /><em>something<br />remarkable.</em>
          </h2>
          <div className="offices">
            <div className="office">
              <p className="office-city">California</p>
              <p className="office-info">Los Angeles<br />United States</p>
            </div>
            <div className="office">
              <p className="office-city">Tokyo</p>
              <p className="office-info">恵比寿西 2-4-8<br />ウィンド恵比寿ビル 8F<br />渋谷区, 東京</p>
            </div>
          </div>
        </div>
        <div className="contact-form reveal d2">
          <div className="form-actions">
            <button className="btn-send" data-en="Send Message" data-ja="送信する" onClick={() => { window.location.href = 'mailto:info@seven-bros.com'; }}>Send Message</button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <span className="footer-logo">Seven Bros. Pictures Inc.</span>
        <span className="footer-copy">© 2026 Seven Bros. Pictures Inc.</span>
        <a href="https://www.instagram.com/sevenbrospictures" target="_blank" rel="noopener noreferrer" className="footer-ig">Instagram</a>
      </footer>
    </>
  );
}

function setLang(lang: string) {
  document.documentElement.setAttribute('data-lang', lang);

  const btnEn = document.getElementById('btn-en');
  const btnJa = document.getElementById('btn-ja');
  if (btnEn) btnEn.classList.toggle('active', lang === 'en');
  if (btnJa) btnJa.classList.toggle('active', lang === 'ja');

  document.querySelectorAll<HTMLElement>('[data-en]').forEach(el => {
    const val = lang === 'ja' ? el.dataset.ja : el.dataset.en;
    if (val !== undefined) el.textContent = val;
  });

  document.querySelectorAll<HTMLElement>('[data-en-html]').forEach(el => {
    const val = lang === 'ja' ? el.dataset.jaHtml : el.dataset.enHtml;
    if (val !== undefined) el.innerHTML = val;
  });

  document.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>('[data-en-placeholder]').forEach(el => {
    const val = lang === 'ja'
      ? (el as HTMLInputElement).dataset.jaPlaceholder
      : (el as HTMLInputElement).dataset.enPlaceholder;
    if (val !== undefined) (el as HTMLInputElement).placeholder = val;
  });

  const labelMap: Record<string, string[]> = {
    en: ['Name', 'Email', 'Project type', 'Message'],
    ja: ['お名前', 'メールアドレス', 'プロジェクトの種類', 'メッセージ'],
  };
  document.querySelectorAll('.field-label').forEach((el, i) => {
    if (labelMap[lang]?.[i]) (el as HTMLElement).textContent = labelMap[lang][i];
  });

  localStorage.setItem('sbp-lang', lang);
}
