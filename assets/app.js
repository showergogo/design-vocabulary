/* Design Vocabulary — replica of topinspo.design/vocabulary */

const FEELS = ['New', 'Cramped', 'No focus', 'Muddy', 'Stiff', 'UI patterns', 'AI UI'];

const T = (name, summary, prompt, feels = [], demo = 'card', caption = '') => ({
  name,
  summary,
  prompt,
  feels,
  demo,
  caption,
});

const TERMS = [
  T('Padding', "The space between a container's edge and the content inside it.", 'Increase the card inner padding to 20px on all sides so text and button breathe, keeping inner gaps unchanged.', ['New', 'Cramped'], 'card', 'padding: 20px'),
  T('Gap', 'The space between sibling items in a layout.', 'Set a 12px gap between the cards in the row so they stay related but readable.', ['Cramped'], 'card', 'gap: 12px'),
  T('Line Height', 'The vertical rhythm between lines of text.', 'Increase the body line height to 1.6 so longer paragraphs stay comfortable to read.', ['Cramped'], 'type', 'line-height: 1.6'),
  T('Proximity', 'Elements that belong together should sit closer together.', 'Group each label with its input and separate it from the next field with 24px.', ['Cramped'], 'card', 'proximity: 8px / 24px'),
  T('Whitespace', 'Intentional empty space that gives content room to breathe.', 'Add 64px of breathing room above the section heading and trim the space inside cards.', ['Cramped'], 'card', 'whitespace: 64px'),
  T('Divider vs. Space', 'Space separates; a divider groups. Prefer one per boundary.', 'Replace the divider between list rows with 16px of space instead.', ['Cramped'], 'card', 'spacing: 16px'),
  T('Hierarchy', 'A clear order of importance across type, size, color and space.', 'Make the section title primary and demote the helper text to 13px muted gray.', ['No focus'], 'type', 'hierarchy: title → body'),
  T('Font Weight', 'The thickness of a typeface, used to signal emphasis.', 'Use 600 for the card title and keep body copy at 400 for contrast.', [], 'type', 'font-weight: 600'),
  T('Tracking', 'Letter spacing that changes how text reads at different sizes.', 'Tighten the display heading to -0.02em and leave body copy at 0.', [], 'type', 'letter-spacing: -0.02em'),
  T('Tabular Numbers', 'Fixed-width digits so numbers align in columns.', "Use tabular figures for the price and stats so values don't shift.", [], 'type', 'font-variant-numeric: tabular-nums'),
  T('Text Balance', 'Even line lengths in headings to avoid a lonely last word.', 'Balance the heading so both lines are visually equal in length.', [], 'type', 'text-wrap: balance'),
  T('Line Clamp', 'Truncate long text after a fixed number of lines.', 'Clamp the description to two lines with an ellipsis.', [], 'type', 'line-clamp: 2'),
  T('Baseline Alignment', 'Align text on shared baselines across mixed sizes.', 'Align the price and the period on the same baseline, not center.', [], 'type', 'align-items: baseline'),
  T('Shortcut Hint', 'Surface the keyboard shortcut next to the action.', 'Add the ⌘K hint to the search field so power users can find it.', [], 'card'),
  T('Middle Truncation', 'Keep both ends of an identifier visible by cutting the middle.', 'Truncate the long file name in the middle, keeping the extension visible.', [], 'type', 'middle truncation'),
  T('Accent', 'One saturated color used sparingly to direct attention.', 'Use the accent only on the primary action and the active tab.', ['No focus'], 'color', 'accent: #5b6f00'),
  T('Contrast', 'The difference in luminance that makes content readable.', 'Raise the muted text contrast so it passes 4.5:1 on white.', ['No focus', 'Muddy'], 'color', 'contrast: 4.5:1'),
  T('Muted Text', 'Secondary text that recedes without disappearing.', 'Set the description to a muted tone one step below the title.', ['Muddy'], 'color', 'text: 3 levels'),
  T('Semantic Color', 'Color assigned by meaning: success, warning, danger.', 'Use semantic tokens for the status pill instead of one-off hex values.', ['Muddy'], 'color', 'semantic colors'),
  T('Tint & Shade', 'Lighter and darker variants of one hue for states and surfaces.', 'Derive hover and pressed states from the base color with tints and shades.', ['Muddy'], 'color', 'tint · shade'),
  T('Border Radius', "The curve on a container's corners.", 'Use a consistent 12px radius on cards and 8px on buttons.', [], 'card', 'border-radius: 12px'),
  T('Concentric Radius', 'Nested corners stay parallel: inner radius = outer − inset.', 'Make the inner button radius match the card minus its padding.', [], 'card', 'radius: 12px − 8px'),
  T('Nested Cards', 'Cards inside cards need restrained borders and shadows.', 'Flatten the inner card: hairline border, no shadow.', [], 'card', 'border: 0.5px'),
  T('Hairline Border', 'A sub-pixel border that separates without heaviness.', 'Use a 0.5px border at 10% black for the table rows.', [], 'card', 'border-width: 0.5px'),
  T('Optical Alignment', 'Adjust what the eye sees, not what the numbers say.', 'Nudge the play icon 1px right so it looks centered.', [], 'card', 'offset: 1px'),
  T('Avatar Stack', 'Overlapping avatars that hint at participants.', 'Stack avatars with a 2px white ring and -8px overlap.', [], 'card', 'overlap: -8px'),
  T('Layered Shadow', 'Several soft shadows that read as one natural light.', 'Build the elevation from three shadows with increasing blur.', [], 'card', 'box-shadow: 3 layers'),
  T('Scrim', 'A translucent layer that dims content behind a surface.', 'Dim the page behind the modal with a 40% black scrim.', ['Muddy'], 'color', 'scrim: 40%'),
  T('Edge Fade', 'A gradient mask that fades overflow at the edges.', "Fade the horizontal scroll edge so content doesn't hard-cut.", [], 'card', 'fade: 24px'),
  T('Sticky Header', 'A header that stays while content scrolls beneath it.', 'Stick the table header with a hairline shadow when scrolling.', [], 'card', 'position: sticky'),
  T('Floating Bar', 'A detached bar that hovers above content.', 'Lift the toolbar into a floating pill 16px above the bottom edge.', [], 'card', 'offset: 16px'),
  T('Easing', 'The acceleration curve that makes motion feel natural.', 'Use ease-out for entering elements so they decelerate into place.', ['Stiff'], 'motion', 'easing: cubic-bezier(0.32, 0.72, 0, 1)'),
  T('Directional Motion', 'Motion that enters and exits along the direction of travel.', 'Slide the next page in from the right, exiting to the left.', ['Stiff'], 'motion', 'easing: cubic-bezier(0.22, 1, 0.36, 1)'),
  T('Spring', 'Overshoot and settle that mimics physical momentum.', 'Use a gentle spring for the sheet dismissal.', ['Stiff'], 'motion', 'spring: stiffness 260 · damping 24'),
  T('Stagger', 'Sequenced delays that reveal a group in order.', 'Stagger the list items by 40ms each on first render.', ['Stiff'], 'motion', 'stagger: 40ms'),
  T('Press State', 'Immediate feedback while a control is held.', 'Scale the button to 0.98 and deepen its background on press.', ['Stiff'], 'motion', 'press: scale(0.98)'),
  T('Shared Element', 'A continuous transition between two states of one object.', 'Morph the thumbnail into the detail hero instead of fading.', ['Stiff'], 'motion', 'shared element'),
  T('Origin-Aware Motion', 'Menus grow from the control that opened them.', 'Scale the menu from its trigger corner, not the center.', ['Stiff'], 'motion', 'transform-origin: trigger'),
  T('Hover Reveal', 'Progressive disclosure of secondary actions on hover.', 'Reveal row actions on hover and keep them focus-visible.', ['Stiff'], 'motion', 'hover reveal'),
  T('Button Hierarchy', 'One primary action, clearly distinguished from the rest.', 'Keep one filled primary button and make the rest quiet.', ['No focus', 'UI patterns'], 'card'),
  T('Touch Target', 'Hit areas large enough for a thumb, at least 44px.', 'Increase the icon button hit area to 44px without changing the icon.', ['Cramped', 'UI patterns'], 'card', 'target: 44px'),
  T('Empty State', 'A helpful blank slate with one clear next step.', 'Add an empty state with a short explanation and a primary action.', ['No focus', 'UI patterns'], 'card'),
  T('Inline Validation', 'Validate next to the field, at the moment it matters.', 'Show the error under the field with a red icon and hint.', ['UI patterns'], 'card'),
  T('Skeleton', 'A placeholder that mirrors the shape of loading content.', 'Replace the spinner with a skeleton that matches the card layout.', ['UI patterns'], 'card'),
  T('Popover vs. Tooltip', 'Tooltips describe; popovers contain actions.', 'Move the filter controls into a popover instead of a tooltip.', ['UI patterns'], 'card'),
  T('Modal vs. Drawer', 'Modals interrupt; drawers slide in and keep context.', 'Use a drawer for editing so the list stays visible.', ['UI patterns'], 'card'),
  T('Tabs vs. Segmented', 'Tabs change views; segmented controls change one setting.', 'Switch the pricing toggle to a segmented control.', ['UI patterns'], 'card'),
  T('Switch vs. Checkbox', 'Switches apply instantly; checkboxes are staged for submit.', 'Use a switch for the instant setting and a checkbox for the form.', ['UI patterns'], 'card'),
  T('Command Palette', 'One search box for every action and destination.', 'Add a ⌘K palette with fuzzy search over actions.', ['UI patterns'], 'card'),
  T('Bento Grid', 'A modular grid of differently sized tiles.', 'Lay the features out as a bento grid with one large tile.', ['UI patterns'], 'card'),
  T('Progressive Disclosure', 'Show the essentials first, details on demand.', 'Hide advanced settings behind a disclosure.', ['UI patterns'], 'card'),
  T('Combobox', 'An input that filters a list of options as you type.', 'Make the project picker a combobox with keyboard navigation.', ['UI patterns'], 'card'),
  T('Input Affix', 'Prefixes and suffixes inside a field, like units or icons.', 'Put the currency symbol inside the amount field as an affix.', ['UI patterns'], 'card'),
  T('Split Button', 'A main action with a menu of related variants.', 'Split the publish action into a primary button and a small menu.', ['UI patterns'], 'card'),
  T('Prompt Composer', 'A multi-part input for prompts, attachments and models.', 'Compose the prompt with chips, a model picker and a send button.', ['New', 'AI UI'], 'card'),
  T('Streaming Text', 'Text that appears progressively as it is generated.', 'Stream the answer token by token with a caret.', ['AI UI'], 'card'),
  T('Thinking Disclosure', "A collapsible trace of the model's reasoning.", 'Collapse the reasoning steps and show a one-line summary.', ['AI UI'], 'card'),
  T('Citation Pill', 'A compact reference to the source of a claim.', 'Render sources as citation pills next to the sentence.', ['AI UI'], 'card'),
  T('Slash Command', 'Typing a slash opens a menu of actions.', 'Support slash commands in the editor with an inline menu.', ['AI UI'], 'card'),
  T('Diff View', 'Show changes as additions and removals, inline or side by side.', 'Show the edit as an inline diff with word-level highlights.', ['AI UI'], 'card'),
  T('Undo Toast', 'A temporary confirmation that offers an immediate undo.', 'Confirm the deletion with a toast that offers undo for 6s.', ['AI UI'], 'card'),
  T('Suggested Prompts', 'Starter prompts that lower the blank-page cost.', 'Offer three suggested prompts under the composer.', ['AI UI'], 'card'),
  T('Tool Call Steps', 'Visible stages while an agent runs a tool.', 'Show each tool call as a step with a status icon.', ['New', 'AI UI'], 'card'),
  T('Context Chips', 'Small tokens representing what the model can see.', 'Add context chips for the attached files and allow removal.', ['New', 'AI UI'], 'card'),
  T('Approval Gate', 'A pause before an irreversible or external action.', 'Ask for approval before sending the email.', ['New', 'AI UI'], 'card'),
];

const I18N = {
  en: {
    title: 'Design Vocabulary',
    jumpTo: 'Jump to',
    filter: 'Filter terms…',
    sayToAI: 'Say to AI',
    copy: 'Copy prompt',
    copied: 'Copied',
    langText: '中',
    langAria: '切换到中文',
    empty: 'No terms match that filter.',
  },
  zh: {
    title: '设计词汇',
    jumpTo: '跳转到',
    filter: '筛选术语…',
    sayToAI: '对 AI 说',
    copy: '复制提示词',
    copied: '已复制',
    langText: 'EN',
    langAria: 'Switch to English',
    empty: '没有符合筛选条件的术语。',
  },
};

const slugify = (name) => name.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

const state = {
  lang: 'en',
  term: 'Padding',
  feel: null,
  query: '',
  compare: 'balanced',
};

const el = {
  index: document.getElementById('termIndex'),
  detail: document.getElementById('detail'),
  searchInput: document.getElementById('searchInput'),
  searchBox: document.getElementById('searchBox'),
  feelsBar: document.querySelector('.vocab-feels-bar'),
  langSwitch: document.getElementById('langSwitch'),
  promo: document.querySelector('.site-promo'),
  promoDots: document.querySelector('.site-promo-dots'),
  promoWindow: document.querySelector('.site-promo-window'),
};

const getTerm = (name) => TERMS.find((t) => t.name === name) || TERMS[0];
const tr = () => I18N[state.lang];

/* ------------------------------------------------------------ index */

function renderFeels() {
  el.feelsBar.querySelectorAll('.vocab-feel-btn').forEach((n) => n.remove());
  FEELS.forEach((feel) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'vocab-feel-btn';
    btn.setAttribute('aria-pressed', String(state.feel === feel));
    btn.innerHTML = `<span>${feel}</span><span class="vocab-feel-x" aria-hidden="true"><svg viewBox="0 0 10 10" fill="none"><path d="M2.5 2.5 7.5 7.5M7.5 2.5 2.5 7.5" stroke="currentColor" stroke-width="1.35" stroke-linecap="round"/></svg></span>`;
    btn.addEventListener('click', () => {
      state.feel = state.feel === feel ? null : feel;
      renderFeels();
      renderIndex();
    });
    el.feelsBar.appendChild(btn);
  });
}

function visibleTerms() {
  const q = state.query.trim().toLowerCase();
  return TERMS.filter((t) => {
    if (state.feel && !t.feels.includes(state.feel)) return false;
    if (!q) return true;
    return (
      t.name.toLowerCase().includes(q) ||
      t.summary.toLowerCase().includes(q) ||
      t.prompt.toLowerCase().includes(q)
    );
  });
}

function renderIndex(centerSelected = false) {
  const list = visibleTerms();
  el.index.innerHTML = '';
  if (!list.length) {
    const empty = document.createElement('p');
    empty.className = 'vocab-index-empty';
    empty.textContent = tr().empty;
    el.index.appendChild(empty);
    updateFades();
    return;
  }
  list.forEach((term) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'vocab-index-item' + (term.name === state.term ? ' is-selected' : '');
    if (term.name === state.term) btn.setAttribute('aria-current', 'true');
    const span = document.createElement('span');
    span.className = 'vocab-index-name';
    span.textContent = term.name;
    btn.appendChild(span);
    btn.addEventListener('click', () => selectTerm(term.name, true));
    el.index.appendChild(btn);
  });
  updateFades();
  if (centerSelected) {
    const active = el.index.querySelector('.is-selected');
    if (active) {
      const target = active.offsetLeft - (el.index.clientWidth - active.offsetWidth) / 2;
      el.index.scrollTo({ left: Math.max(0, target), behavior: 'smooth' });
    }
  }
}

function updateFades() {
  const index = el.index;
  document.querySelector('.vocab-fade--left')?.classList.toggle('is-visible', index.scrollLeft > 4);
  const max = index.scrollWidth - index.clientWidth;
  document.querySelector('.vocab-fade--right')?.classList.toggle('is-visible', max - index.scrollLeft > 4);
}

/* ------------------------------------------------------------ demos */

function cardDemo() {
  const pad = state.compare === 'tight' ? 8 : 20;
  return `
    <div class="demo-stage" style="--pad:${pad}px">
      <div class="demo-card">
        <div class="demo-card-inner">
          <div class="demo-row">
            <div class="demo-row-left">
              <span class="demo-plan">Pro</span>
              <span class="demo-badge">Popular</span>
            </div>
            <div class="demo-price">
              <span class="demo-amount">$12</span>
              <span class="demo-period">/mo</span>
            </div>
          </div>
          <p class="demo-desc">Unlimited boards, custom domains, and full version history.</p>
          <span class="demo-cta">Upgrade to Pro</span>
        </div>
      </div>
      <div class="demo-measure" aria-hidden="true">
        <div class="demo-measure-fill"></div>
        <span class="demo-measure-label">padding: ${pad}px</span>
      </div>
    </div>`;
}

function typeDemo(term) {
  const base = {
    lh: 1.55,
    weight: 400,
    tracking: 0,
    clamp: 0,
    balance: false,
    middle: false,
    nums: false,
    title: 'Design that feels inevitable',
    body: 'Good interfaces disappear. What remains is the pace of reading, the quiet rhythm of space, and a hierarchy that answers the next question before it is asked.',
  };

  switch (term.name) {
    case 'Line Height':
      base.lh = 1.75;
      break;
    case 'Hierarchy':
      base.title = 'A clear order of importance';
      base.body = 'Titles lead, descriptions follow, and metadata stays quiet. Size, weight and color do the work, not decoration.';
      break;
    case 'Font Weight':
      base.weight = 600;
      break;
    case 'Tracking':
      base.tracking = -0.02;
      break;
    case 'Tabular Numbers':
      base.nums = true;
      break;
    case 'Text Balance':
      base.balance = true;
      base.title = 'Even lines are easier to scan than a lonely last word';
      break;
    case 'Line Clamp':
      base.clamp = 2;
      break;
    case 'Baseline Alignment':
      base.title = '$12 / month · Renews Mar 14';
      break;
    case 'Middle Truncation':
      base.middle = true;
      base.title = 'brand-identity-guidelines.png';
      base.body = 'Long identifiers keep both their beginning and their extension visible when the middle is cut.';
      break;
    default:
      break;
  }

  return `
    <div class="specimen-type">
      <h3 class="specimen-type-title" style="font-size:${base.middle ? 16 : 19}px;text-wrap:${base.balance ? 'balance' : 'pretty'}">${base.title}</h3>
      <p class="specimen-type-body" style="line-height:${base.lh};font-weight:${base.weight};letter-spacing:${base.tracking}em;${base.clamp ? `-webkit-line-clamp:${base.clamp};` : ''}">${base.body}</p>
      <div class="specimen-nums">
        <span>1,204 views</span><span>98.5% uptime</span><span>$12.00 / mo</span>
      </div>
    </div>`;
}

function colorDemo(term) {
  if (term.name === 'Contrast' || term.name === 'Muted Text') {
    return `
      <div class="specimen-contrast">
        <div><strong style="color:#171717">Primary text</strong><span style="color:#737373">4.6 : 1</span></div>
        <div><strong style="color:#525252">Secondary text</strong><span style="color:#a1a1aa">3.2 : 1</span></div>
        <div><strong style="color:#a1a1aa">Muted text</strong><span style="color:#d4d4d8">1.8 : 1</span></div>
        <div><strong style="color:#5b6f00">Accent on white</strong><span style="color:#8a9a2e">4.9 : 1</span></div>
      </div>`;
  }

  let colors = [
    ['#5b6f00', '#5b6f00'],
    ['#6f8420', '#6f8420'],
    ['#8a9a45', '#8a9a45'],
    ['#adb86f', '#adb86f'],
    ['#d3da9e', '#d3da9e'],
  ];

  if (term.name === 'Semantic Color') {
    colors = [
      ['#3f7a3a', '#3f7a3a'],
      ['#9a7a17', '#9a7a17'],
      ['#a33a2c', '#a33a2c'],
      ['#2f5d9a', '#2f5d9a'],
      ['#5b6f00', '#5b6f00'],
    ];
  } else if (term.name === 'Scrim') {
    colors = [
      ['#171717', '40%'],
      ['#171717', '55%'],
      ['#171717', '70%'],
      ['#171717', '85%'],
    ];
  }

  return `
    <div class="specimen-color">
      ${colors
        .map(
          ([c, label]) => `
        <div class="specimen-swatch">
          <i style="background:${c}${label === c ? '' : ';opacity:.85'}"></i>
          <span>${label}</span>
        </div>`
        )
        .join('')}
    </div>`;
}

function motionDemo(term) {
  const easing = {
    Easing: 'cubic-bezier(0.32, 0.72, 0, 1)',
    'Directional Motion': 'cubic-bezier(0.22, 1, 0.36, 1)',
    Spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
    Stagger: 'cubic-bezier(0.32, 0.72, 0, 1)',
    'Press State': 'cubic-bezier(0.2, 0, 0, 1)',
    'Shared Element': 'cubic-bezier(0.4, 0, 0.2, 1)',
    'Origin-Aware Motion': 'cubic-bezier(0.16, 1, 0.3, 1)',
    'Hover Reveal': 'cubic-bezier(0.32, 0.72, 0, 1)',
  }[term.name] || 'cubic-bezier(0.32, 0.72, 0, 1)';

  const dots =
    term.name === 'Stagger'
      ? [0, 0, 0].map((_, i) => `<span class="motion-dot" style="animation-delay:-${1.2 - i * 0.4}s;opacity:.5"></span>`).join('')
      : '<span class="motion-dot"></span>';

  return `
    <div class="specimen-motion" style="--motion-ease:${easing}">
      <div class="motion-track"></div>
      ${dots}
    </div>`;
}

function buildStage(term) {
  if (term.demo === 'type') return typeDemo(term);
  if (term.demo === 'color') return colorDemo(term);
  if (term.demo === 'motion') return motionDemo(term);
  return cardDemo();
}

function captionFor(term) {
  if (term.name === 'Padding') return `padding: ${state.compare === 'tight' ? 8 : 20}px`;
  return term.caption || 'padding: 20px';
}

/* ------------------------------------------------------------ detail */

function renderDetail() {
  const term = getTerm(state.term);
  const isCompare = term.demo === 'card' && term.name === 'Padding';
  const toggle =
    term.demo === 'card' && term.name === 'Padding'
      ? `<div class="vocab-compare-toggle" role="group" aria-label="Compare specimen states">
           <span class="vocab-compare-thumb" aria-hidden="true" style="transform:translate3d(${state.compare === 'tight' ? 0 : 49}px,0,0)"></span>
           <button type="button" id="toggleTight" aria-pressed="${state.compare === 'tight'}" data-state="tight">Tight</button>
           <button type="button" id="toggleBalanced" aria-pressed="${state.compare === 'balanced'}" data-state="balanced">Balanced</button>
         </div>`
      : '';

  el.detail.innerHTML = `
    <article class="vocab-card" aria-live="polite">
      <div class="vocab-canvas">
        <div class="vocab-canvas-bar">${toggle}</div>
        <div class="vocab-canvas-viewport">${buildStage(term)}</div>
        <div class="vocab-canvas-foot"><span class="vocab-caption">${captionFor(term)}</span></div>
      </div>
      <div class="vocab-copy">
        <h2 class="vocab-detail-title">${term.name}</h2>
        <p class="vocab-detail-summary">${term.summary}</p>
        <div class="vocab-prompt-row">
          <div class="vocab-prompt-body">
            <span class="vocab-detail-label">${tr().sayToAI}</span>
            <p class="vocab-prompt-text">${term.prompt}</p>
          </div>
          <button type="button" class="vocab-copy-btn" aria-label="${tr().copy}" title="${tr().copy}">
            <svg viewBox="0 0 16 16" class="vocab-copy-icon" fill="none" aria-hidden="true">
              <rect x="5.5" y="5.5" width="7.5" height="7.5" rx="1.5" stroke="currentColor" stroke-width="1.35"></rect>
              <path d="M10.5 5.5V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v5.5a1 1 0 0 0 1 1h1.5" stroke="currentColor" stroke-width="1.35" stroke-linecap="round"></path>
            </svg>
            <svg viewBox="0 0 16 16" class="vocab-copy-icon is-hidden" fill="none" aria-hidden="true">
              <path d="M3.5 8.5 6.5 11.5 12.5 5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
          </button>
        </div>
      </div>
    </article>`;

  if (isCompare) {
    el.detail.querySelectorAll('.vocab-compare-toggle button').forEach((btn) => {
      btn.addEventListener('click', () => {
        if (state.compare === btn.dataset.state) return;
        state.compare = btn.dataset.state;
        renderDetail();
      });
    });
  }

  el.detail.querySelector('.vocab-copy-btn')?.addEventListener('click', copyPrompt);
}

async function copyPrompt() {
  const term = getTerm(state.term);
  try {
    await navigator.clipboard.writeText(term.prompt);
  } catch {
    const ta = document.createElement('textarea');
    ta.value = term.prompt;
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    ta.remove();
  }
  const btn = el.detail.querySelector('.vocab-copy-btn');
  if (!btn) return;
  const icons = btn.querySelectorAll('.vocab-copy-icon');
  icons[0].classList.add('is-hidden');
  icons[1].classList.remove('is-hidden');
  btn.title = tr().copied;
  setTimeout(() => {
    icons[0].classList.remove('is-hidden');
    icons[1].classList.add('is-hidden');
    btn.title = tr().copy;
  }, 1400);
}

function selectTerm(name, fromIndex) {
  state.term = name;
  state.compare = 'balanced';
  const url = new URL(window.location.href);
  url.searchParams.set('term', slugify(name));
  history.replaceState(null, '', url);
  renderIndex(false);
  renderDetail();
  if (fromIndex) {
    const active = el.index.querySelector('.is-selected');
    if (active) {
      const target = active.offsetLeft - (el.index.clientWidth - active.offsetWidth) / 2;
      el.index.scrollTo({ left: Math.max(0, target), behavior: 'smooth' });
    }
  }
}

/* --------------------------------------------------------------- i18n */

function applyLanguage() {
  const dict = tr();
  document.documentElement.lang = state.lang === 'zh' ? 'zh-CN' : 'en';
  document.querySelectorAll('[data-i18n]').forEach((node) => {
    const key = node.dataset.i18n;
    if (dict[key]) node.textContent = dict[key];
  });
  el.searchInput.placeholder = dict.filter;
  el.langSwitch.textContent = dict.langText;
  el.langSwitch.title = dict.langAria;
  el.langSwitch.setAttribute('aria-label', dict.langAria);
  document.title = `${dict.title} — Topinspo`;
  renderDetail();
}

/* ---------------------------------------------------------------- promo */

let promoIndex = 0;
let promoTimer = null;
const promoCards = [...document.querySelectorAll('.site-promo-card')];
const promoDots = [...el.promoDots.querySelectorAll('button')];

function showPromo(index) {
  promoIndex = (index + promoCards.length) % promoCards.length;
  promoCards.forEach((card, i) => {
    card.classList.toggle('is-active', i === promoIndex);
    card.setAttribute('aria-hidden', String(i !== promoIndex));
    card.tabIndex = i === promoIndex ? 0 : -1;
  });
  promoDots.forEach((dot, i) => dot.setAttribute('aria-current', String(i === promoIndex)));
}

function startPromo() {
  stopPromo();
  promoTimer = setInterval(() => showPromo(promoIndex + 1), 5200);
}

function stopPromo() {
  if (promoTimer) clearInterval(promoTimer);
  promoTimer = null;
}

promoDots.forEach((dot, i) =>
  dot.addEventListener('click', () => {
    showPromo(i);
    startPromo();
  })
);

el.promo.addEventListener('mouseenter', stopPromo);
el.promo.addEventListener('mouseleave', startPromo);
el.promo.addEventListener('focusin', stopPromo);
el.promo.addEventListener('focusout', startPromo);

/* ---------------------------------------------------------------- init */

function initFromUrl() {
  const termParam = new URLSearchParams(window.location.search).get('term');
  if (!termParam) return;
  const found = TERMS.find((t) => slugify(t.name) === termParam.toLowerCase());
  if (found) state.term = found.name;
}

function init() {
  initFromUrl();
  renderFeels();
  renderIndex(true);
  renderDetail();

  el.searchInput.addEventListener('input', (e) => {
    state.query = e.target.value;
    renderIndex();
  });

  el.searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      el.searchInput.value = '';
      state.query = '';
      renderIndex();
      el.searchInput.blur();
    }
    if (e.key === 'Enter') {
      const first = visibleTerms()[0];
      if (first) selectTerm(first.name, true);
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === '/' && document.activeElement !== el.searchInput) {
      e.preventDefault();
      el.searchInput.focus();
    }
  });

  el.index.addEventListener('scroll', updateFades, { passive: true });

  el.langSwitch.addEventListener('click', () => {
    state.lang = state.lang === 'en' ? 'zh' : 'en';
    applyLanguage();
  });

  showPromo(0);
  startPromo();
  updateFades();
}

init();
