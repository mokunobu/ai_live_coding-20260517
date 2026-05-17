const painPoints = [
  {
    title: 'AIを入れたが、現場で使われていない。',
    text: 'ツール導入の前後で、任せる仕事や判断基準が整理されていない状態を見直します。',
  },
  {
    title: '研修をしたが、業務手順に残っていない。',
    text: '学んだ内容を、現場で参照できる手順やルールへ落とし込みます。',
  },
  {
    title: '人にしか分からない判断が引き継げない。',
    text: '属人化した例外対応や判断の流れを、言葉にして共有できる形にします。',
  },
  {
    title: 'システム化したいが、要件を言葉にできない。',
    text: '作りたい画面の前に、仕事の流れ、入力、判断、出力を一緒に整理します。',
  },
];

const processSteps = [
  ['診断', 'どこで知識が止まっているかを見つける。'],
  ['整理', '判断、手順、例外対応を言葉にする。'],
  ['学習', '必要な人が使える形で学ぶ。'],
  ['実装', 'AI、システム、ドキュメントへ落とし込む。'],
  ['定着', '運用ルールと改善サイクルを作る。'],
  ['確認', '業務で使えた変化を確認する。'],
];

const services = [
  {
    title: 'AI/DX導入支援',
    problem: 'AIを入れたいが、何を任せるべきか決まっていない。',
    support: '業務の棚卸し、利用ルール、プロンプト、検証手順を整理します。',
  },
  {
    title: '業務システム開発',
    problem: '人の判断に寄りすぎた作業を、仕組みとして残したい。',
    support: '要件整理、画面設計、開発、運用改善を支援します。',
  },
  {
    title: 'IT基盤整備',
    problem: '仕事を止めないための土台を整えたい。',
    support: 'ネットワーク、端末、クラウド、リモート環境を業務に合わせて見直します。',
  },
  {
    title: 'IT人材育成',
    problem: '研修を受けても、現場で使える状態に残らない。',
    support: '現場の課題を教材にし、使いながら身につく学びへ変えます。',
  },
  {
    title: 'テレワーク・配信支援',
    problem: 'リモート環境や配信環境を、業務に合わせて整えたい。',
    support: '機材選定、環境構築、利用方法のレクチャーまで支援します。',
  },
];

const companyFacts = [
  ['会社名', '株式会社ナレッジグローツリー'],
  ['代表取締役', '奥信 将人'],
  ['設立', '令和2年10月'],
  ['資本金', '50万円'],
  ['代表電話', '050-5308-1378'],
  ['所在地', '公開前に正本確認'],
];

export const dynamic = 'force-static';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <PainPointSection />
      <ProcessSection />
      <ServicesSection />
      <TrustSection />
      <ContactSection />
    </main>
  );
}

function Header() {
  return (
    <header className="site-header" aria-label="サイトヘッダー">
      <a className="brand" href="#top" aria-label="トップへ戻る">
        <span className="brand-mark" aria-hidden="true">
          K
        </span>
        <span>
          <span className="brand-name">株式会社ナレッジグローツリー</span>
          <span className="brand-sub">Knowledge Grow Tree</span>
        </span>
      </a>
      <nav className="desktop-nav" aria-label="主要ナビゲーション">
        <a href="#services">支援内容</a>
        <a href="#process">進め方</a>
        <a href="#company">会社情報</a>
        <a href="#notice">電子公告</a>
        <a href="#contact">お問い合わせ</a>
      </nav>
      <a className="header-cta" href="#contact">
        相談する
      </a>
      <details className="mobile-menu">
        <summary aria-label="メニューを開く">
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </summary>
        <div className="mobile-menu-panel">
          <a href="#services">支援内容</a>
          <a href="#process">進め方</a>
          <a href="#company">会社情報</a>
          <a href="#notice">電子公告</a>
          <a className="mobile-menu-cta" href="#contact">
            お問い合わせ
          </a>
        </div>
      </details>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero section" id="top" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow">AI/DX・研修・業務システム支援</p>
        <h1 id="hero-title">知識は増えた。仕事は、まだ変わらない。</h1>
        <p className="lead">
          ナレッジグローツリーは、AI導入、研修、業務システムづくりで増えた知識を、
          現場で使える手順、判断基準、運用ルール、画面へ落とし込む会社です。
        </p>
        <p className="hero-sub">
          ツールを入れても使われない。研修をしても業務に残らない。
          人にしか分からない判断が引き継げない。そうした詰まりを、
          言葉、手順、仕組みに分けて整えます。
        </p>
        <div className="hero-actions">
          <a className="button primary" href="#contact">
            知識が止まっている場所を相談する
          </a>
          <a className="button secondary" href="#process">
            支援の進め方を見る
          </a>
        </div>
      </div>
      <TreeDiagram />
    </section>
  );
}

function TreeDiagram() {
  return (
    <aside className="tree-panel" aria-label="知識が業務へ戻る構造図">
      <img
        className="tree-asset"
        src="/knowledge-flow.svg"
        alt=""
        aria-hidden="true"
        width="640"
        height="380"
      />
      <div className="tree-top">
        <span className="diagram-label">業務で使える変化</span>
        <span className="fruit-dot" />
        <span className="fruit-dot" />
        <span className="fruit-dot" />
      </div>
      <div className="branches">
        <span>AI/DX</span>
        <span>研修</span>
        <span>開発</span>
        <span>IT基盤</span>
      </div>
      <div className="trunk">
        <span>伴走支援</span>
      </div>
      <div className="roots">
        <span>知識基盤</span>
        <small>判断・手順・例外対応を整理する。</small>
      </div>
    </aside>
  );
}

function PainPointSection() {
  return (
    <section className="section muted" aria-labelledby="pain-title">
      <div className="section-heading">
        <p className="eyebrow">相談の入口</p>
        <h2 id="pain-title">相談は、整理できていなくても構いません。</h2>
        <p>
          最初から要件が固まっている必要はありません。今起きている詰まりを、
          一緒に言葉へ分けるところから始めます。
        </p>
      </div>
      <div className="pain-grid">
        {painPoints.map((item) => (
          <article className="plain-item" key={item.title}>
            <span className="item-marker" aria-hidden="true" />
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section className="section" id="process" aria-labelledby="process-title">
      <div className="section-heading">
        <p className="eyebrow">進め方</p>
        <h2 id="process-title">知識を、仕事に戻すまで。</h2>
        <p>
          考え方だけを整えるのではなく、現場で使われる状態まで分解します。
          成果を断定せず、確認しながら進めます。
        </p>
      </div>
      <ol className="timeline">
        {processSteps.map(([label, text], index) => (
          <li key={label}>
            <span className="step-number">{String(index + 1).padStart(2, '0')}</span>
            <div>
              <h3>{label}</h3>
              <p>{text}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

function ServicesSection() {
  return (
    <section className="section muted" id="services" aria-labelledby="services-title">
      <div className="section-heading">
        <p className="eyebrow">支援内容</p>
        <h2 id="services-title">必要な支援を、課題から選べるように。</h2>
      </div>
      <div className="service-grid">
        {services.map((service) => (
          <article className="service-card" key={service.title}>
            <h3>{service.title}</h3>
            <dl>
              <div>
                <dt>対象課題</dt>
                <dd>{service.problem}</dd>
              </div>
              <div>
                <dt>支援内容</dt>
                <dd>{service.support}</dd>
              </div>
            </dl>
            <a href="#contact">この相談を送る</a>
          </article>
        ))}
      </div>
    </section>
  );
}

function TrustSection() {
  return (
    <section className="section trust-section" id="company" aria-labelledby="trust-title">
      <div className="section-heading">
        <p className="eyebrow">会社情報</p>
        <h2 id="trust-title">公開できる事実を、見つけやすく。</h2>
        <p>
          現行サイトで確認できる基本情報を整理しています。所在地は表記揺れがあるため、
          公開前に正本確認が必要です。
        </p>
      </div>
      <div className="trust-layout">
        <dl className="company-list">
          {companyFacts.map(([label, value]) => (
            <div key={label}>
              <dt>{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
        <aside className="notice-box" id="notice">
          <h3>電子公告</h3>
          <p>令和4年、令和3年、令和2年の決算書リンクを移行対象として扱います。</p>
          <a href="#contact">移行方針を確認する</a>
        </aside>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section className="section contact-section" id="contact" aria-labelledby="contact-title">
      <div className="contact-copy">
        <p className="eyebrow">お問い合わせ</p>
        <h2 id="contact-title">まずは、知識が止まっている場所から。</h2>
        <p>
          AI導入、研修、業務システム、IT基盤のどれから相談すべきか
          決まっていなくても構いません。今起きている詰まりから整理します。
        </p>
      </div>
      <form className="contact-form" aria-describedby="form-note">
        <label>
          <span>会社名</span>
          <input type="text" name="company" autoComplete="organization" placeholder="株式会社〇〇" />
        </label>
        <label>
          <span>氏名</span>
          <input type="text" name="name" autoComplete="name" placeholder="山田 太郎" />
        </label>
        <label>
          <span>メールアドレス</span>
          <input type="email" name="email" autoComplete="email" placeholder="name@example.com" />
        </label>
        <label>
          <span>相談テーマ</span>
          <select name="topic" defaultValue="">
            <option value="" disabled>
              選択してください
            </option>
            <option>AI/DX導入支援</option>
            <option>業務システム開発</option>
            <option>IT基盤整備</option>
            <option>IT人材育成</option>
            <option>まだ整理できていない</option>
          </select>
        </label>
        <label className="wide">
          <span>相談内容</span>
          <textarea name="message" rows="5" placeholder="今起きている詰まりを書いてください。" />
        </label>
        <p className="form-error" role="status">
          入力内容に不備がある場合は、ここに具体的なエラーを表示します。
        </p>
        <button className="button primary wide" type="submit" disabled>
          送信先確認後に有効化
        </button>
        <p className="form-note" id="form-note">
          実際の送信先とプライバシーポリシー確認後に公開してください。
        </p>
      </form>
    </section>
  );
}
