/* Design Vocabulary — replica of topinspo.design/vocabulary */

const FEELS = ['New', 'Cramped', 'No focus', 'Muddy', 'Stiff', 'UI patterns', 'AI UI'];

const FEEL_ZH = {
  New: '新',
  Cramped: '拥挤',
  'No focus': '无重点',
  Muddy: '浑浊',
  Stiff: '僵硬',
  'UI patterns': 'UI 模式',
  'AI UI': 'AI 界面',
};

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

/* name: [中文名, 中文释义, 中文提示词] */
const ZH_TERMS = {
  Padding: ['内边距', '容器边缘到内部内容之间的空间。', '把卡片内边距统一提升到 20px，让文字和按钮更透气，内部间距保持不变。'],
  Gap: ['间隙', '布局中相邻元素之间的空间。', '给这一行的卡片设置 12px 间隙，让它们既相关又易读。'],
  'Line Height': ['行高', '多行文字之间的垂直节奏。', '把正文行高提升到 1.6，让长段落阅读更舒适。'],
  Proximity: ['亲密性', '属于同一组的内容应该靠得更近。', '让标签与输入框成组，并与下一个字段保持 24px 距离。'],
  Whitespace: ['留白', '有意为之的空白，让内容有呼吸空间。', '在区块标题上方增加 64px 留白，并收紧卡片内部的空隙。'],
  'Divider vs. Space': ['分隔线 vs. 留白', '留白用于分隔，分隔线用于成组，每个边界只选其一。', '用 16px 留白替换列表行之间的分隔线。'],
  Hierarchy: ['层级', '通过字号、字重、颜色和空间建立清晰的优先级。', '突出区块标题为主，把辅助文字降为 13px 的柔和灰色。'],
  'Font Weight': ['字重', '字体的粗细，用于表达强调。', '卡片标题用 600，正文保持 400 以形成对比。'],
  Tracking: ['字距', '调整字母间距，改善不同字号下的阅读体验。', '展示标题收紧到 -0.02em，正文保持 0。'],
  'Tabular Numbers': ['等宽数字', '固定宽度数字，让数值在列中对齐。', '价格和统计数字使用等宽数字，避免数值跳动。'],
  'Text Balance': ['文本平衡', '让标题各行长度均匀，避免最后一行孤字。', '让标题两行在视觉长度上均衡。'],
  'Line Clamp': ['行数截断', '超过固定行数后截断长文本。', '把描述限制为两行并显示省略号。'],
  'Baseline Alignment': ['基线对齐', '不同字号的文字共用同一条基线。', '让价格与周期按基线对齐，而不是垂直居中。'],
  'Shortcut Hint': ['快捷键提示', '在操作旁显示键盘快捷键。', '在搜索框旁加上 ⌘K 提示，方便高频用户。'],
  'Middle Truncation': ['中间截断', '保留标识符首尾，只截断中间。', '长文件名从中间截断，保留扩展名可见。'],
  Accent: ['强调色', '少量使用的高饱和颜色，用于引导注意力。', '强调色只用于主操作和当前选中的标签。'],
  Contrast: ['对比度', '决定内容可读性的明度差异。', '提升灰色文字的对比度，使其在白色背景上达到 4.5:1。'],
  'Muted Text': ['弱化文字', '退后但不消失的次要文字。', '描述文字使用比标题低一档的柔和颜色。'],
  'Semantic Color': ['语义色', '按含义分配的颜色：成功、警告、危险。', '状态标签使用语义化 token，而不是随手写的色值。'],
  'Tint & Shade': ['色彩深浅', '同一色相更亮或更暗的变体，用于状态和表面。', '用深浅变体推导悬停和按下状态。'],
  'Border Radius': ['圆角', '容器四角的弧度。', '卡片统一使用 12px 圆角，按钮使用 8px。'],
  'Concentric Radius': ['同心圆角', '嵌套圆角保持平行：内半径 = 外半径 − 内边距。', '让内部按钮的圆角等于卡片圆角减去内边距。'],
  'Nested Cards': ['嵌套卡片', '卡片里套卡片时，边框和阴影要克制。', '让内层卡片扁平化：细边框，不要阴影。'],
  'Hairline Border': ['发丝边框', '不足一像素的边框，分隔而不显沉重。', '表格行使用 10% 黑色的 0.5px 边框。'],
  'Optical Alignment': ['视觉对齐', '调整眼睛看到的效果，而不是数字上的对齐。', '把播放图标向右微调 1px，让它看起来居中。'],
  'Avatar Stack': ['头像堆叠', '相互重叠的头像，暗示参与者。', '头像使用 2px 白色描边和 -8px 重叠。'],
  'Layered Shadow': ['分层阴影', '多层柔和阴影组合成自然的光影。', '用三层逐渐增大模糊的阴影构建高度。'],
  Scrim: ['遮罩', '压暗背景内容的半透明层。', '用 40% 黑色遮罩压暗弹窗后的页面。'],
  'Edge Fade': ['边缘渐隐', '用渐变遮罩柔化溢出边缘。', '让横向滚动的边缘渐隐，避免内容生硬截断。'],
  'Sticky Header': ['吸顶表头', '内容滚动时保持固定的表头。', '滚动时让表头吸顶，并加上发丝阴影。'],
  'Floating Bar': ['浮动操作栏', '悬浮在内容之上的独立操作栏。', '把工具栏做成距离底部 16px 的浮动胶囊。'],
  Easing: ['缓动', '让动效自然的加速曲线。', '入场元素使用 ease-out，让其减速就位。'],
  'Directional Motion': ['方向性动效', '沿着运动方向进入和退出。', '下一页从右侧滑入，向左退出。'],
  Spring: ['弹性', '模拟物理惯性的过冲与回稳。', '面板关闭时使用柔和的弹性动画。'],
  Stagger: ['错峰', '按顺序延迟展示一组元素。', '首次渲染时让列表项每项延迟 40ms 依次出现。'],
  'Press State': ['按压态', '按住控件时的即时反馈。', '按钮按下时缩放到 0.98 并加深背景。'],
  'Shared Element': ['共享元素', '同一对象两种状态之间的连续过渡。', '让缩略图形变为详情主图，而不是淡入淡出。'],
  'Origin-Aware Motion': ['原点感知动效', '菜单从触发它的控件位置展开。', '菜单从触发按钮的角落缩放展开，而不是从中心。'],
  'Hover Reveal': ['悬停显示', '悬停时渐进展示次要操作。', '悬停时显示行内操作，并保持键盘可聚焦。'],
  'Button Hierarchy': ['按钮层级', '一个主操作，与其他操作明确区分。', '只保留一个实心主按钮，其余保持克制。'],
  'Touch Target': ['触控热区', '至少 44px、适合手指点击的区域。', '在不改变图标的前提下，把图标按钮热区扩大到 44px。'],
  'Empty State': ['空状态', '有用的空白页，配一个清晰的下一步。', '加入空状态说明，并提供一个主操作。'],
  'Inline Validation': ['行内校验', '在字段旁、在最需要的时刻校验。', '在字段下方显示带红色图标的错误与提示。'],
  Skeleton: ['骨架屏', '反映加载内容形状的占位。', '用与卡片布局一致的骨架屏替代加载转圈。'],
  'Popover vs. Tooltip': ['浮层 vs. 提示', '提示框用于说明，浮层用于承载操作。', '把筛选控件放进浮层，而不是提示框里。'],
  'Modal vs. Drawer': ['弹窗 vs. 抽屉', '弹窗打断流程，抽屉保留上下文。', '编辑使用抽屉，让列表保持可见。'],
  'Tabs vs. Segmented': ['选项卡 vs. 分段控件', '选项卡切换视图，分段控件切换单个设置。', '把定价切换改成分段控件。'],
  'Switch vs. Checkbox': ['开关 vs. 复选框', '开关立即生效，复选框等待提交。', '即时设置用开关，表单项用复选框。'],
  'Command Palette': ['命令面板', '一个搜索框覆盖所有操作和目的地。', '加入 ⌘K 命令面板，支持模糊搜索操作。'],
  'Bento Grid': ['便当格栅', '大小不一的模块化网格。', '把功能排成便当网格，其中一块更大。'],
  'Progressive Disclosure': ['渐进披露', '先展示要点，按需展开细节。', '把高级设置放进可展开区域。'],
  Combobox: ['组合框', '输入时实时筛选选项的输入框。', '把项目选择器做成支持键盘操作的组合框。'],
  'Input Affix': ['输入前后缀', '输入框内固定的单位或图标。', '把货币符号作为前缀放进金额输入框。'],
  'Split Button': ['分裂按钮', '主操作加一个相关变体菜单。', '把发布拆成主按钮加一个小菜单。'],
  'Prompt Composer': ['提示词编辑器', '支持附件、模型选择的多段输入区。', '用芯片、模型选择器和发送按钮组合提示词。'],
  'Streaming Text': ['流式文本', '生成过程中逐步出现的文字。', '逐词流式输出回答，并保留光标。'],
  'Thinking Disclosure': ['思考过程折叠', '可折叠的模型推理轨迹。', '折叠推理步骤，只显示一行摘要。'],
  'Citation Pill': ['引用标签', '指向内容来源的紧凑引用。', '把来源渲染成句旁的引用标签。'],
  'Slash Command': ['斜杠命令', '输入斜杠唤出操作菜单。', '在编辑器中支持斜杠命令与行内菜单。'],
  'Diff View': ['差异视图', '以新增和删除展示改动。', '用词级高亮展示行内差异。'],
  'Undo Toast': ['撤销提示', '临时确认，并提供即时撤销。', '删除后用 toast 确认，并提供 6 秒撤销。'],
  'Suggested Prompts': ['推荐提示词', '降低空白页成本的起始提示。', '在输入框下方提供三个推荐提示词。'],
  'Tool Call Steps': ['工具调用步骤', '代理执行工具时可见的阶段。', '把每次工具调用展示为带状态图标的步骤。'],
  'Context Chips': ['上下文芯片', '代表模型可见内容的小标签。', '为已附加文件添加上下文芯片，并允许移除。'],
  'Approval Gate': ['审批关卡', '不可逆或外部操作前的暂停。', '发送邮件前请求确认。'],
};

TERMS.forEach((term) => {
  const zh = ZH_TERMS[term.name];
  if (zh) term.zh = { name: zh[0], summary: zh[1], prompt: zh[2] };
});

const I18N = {
  en: {
    title: 'Design Vocabulary',
    course: 'Design Engineer Notes',
    jumpTo: 'Jump to',
    filter: 'Filter terms…',
    sayToAI: 'Say to AI',
    copy: 'Copy prompt',
    copied: 'Copied',
    langText: '中',
    langAria: '切换到中文',
    empty: 'No terms match that filter.',
    tight: 'Tight',
    balanced: 'Balanced',
    about: 'I’m Ian, a product designer making all sorts of odds and ends.',
    more: 'More',
    followers: '10k+ followers',
    stars: '10k+ stars',
    navVocab: 'Design Vocabulary',
    navSkills: 'Design Skills',
    p1name: 'Design Engineer Notes',
    p1desc: 'Build UI with AI that doesn’t look cheap. See what’s off, then get AI to fix it.',
    p1cta: 'Enroll now',
    p2name: 'Indie Builders',
    p2desc: 'Beyond the feed, swap notes and share work with people building with AI.',
    p2cta: 'Join us',
    p3name: 'Feature your product',
    p3desc: 'Let people who care about AI and product design see what you’ve built.',
    p3cta: 'Let’s talk',
    plan: 'Pro',
    badge: 'Popular',
    cardDesc: 'Unlimited boards, custom domains, and full version history.',
    cardCta: 'Upgrade to Pro',
    demoTitle: 'Design that feels inevitable',
    demoBody: 'Good interfaces disappear. What remains is the pace of reading, the quiet rhythm of space, and a hierarchy that answers the next question before it is asked.',
    demoNums: ['1,204 views', '98.5% uptime', '$12.00 / mo'],
    hierarchyTitle: 'A clear order of importance',
    hierarchyBody: 'Titles lead, descriptions follow, and metadata stays quiet. Size, weight and color do the work, not decoration.',
    balanceTitle: 'Even lines are easier to scan than a lonely last word',
    baselineTitle: '$12 / month · Renews Mar 14',
    middleBody: 'Long identifiers keep both their beginning and their extension visible when the middle is cut.',
    contrastLabels: ['Primary text', 'Secondary text', 'Muted text', 'Accent on white'],
  },
  zh: {
    title: '设计词汇',
    course: '设计工程师笔记',
    jumpTo: '跳转到',
    filter: '筛选术语…',
    sayToAI: '对 AI 说',
    copy: '复制提示词',
    copied: '已复制',
    langText: 'EN',
    langAria: 'Switch to English',
    empty: '没有符合筛选条件的术语。',
    tight: '紧凑',
    balanced: '平衡',
    about: '我是一名产品设计师，平时做些零零碎碎的东西。',
    more: '更多',
    followers: '10k+ 关注者',
    stars: '10k+ Star',
    navVocab: '设计词汇',
    navSkills: '设计 Skill',
    p1name: '设计工程师笔记',
    p1desc: '用 AI 做出不廉价的界面。先看出问题，再让 AI 修好。',
    p1cta: '立即报名',
    p2name: '独立开发者',
    p2desc: '不止于信息流，与做 AI 产品的人交换笔记、分享作品。',
    p2cta: '加入我们',
    p3name: '展示你的产品',
    p3desc: '让关心 AI 与产品设计的人看到你的作品。',
    p3cta: '联系我们',
    plan: '专业版',
    badge: '热门',
    cardDesc: '无限画板、自定义域名与完整版本历史。',
    cardCta: '升级到专业版',
    demoTitle: '设计，应当浑然天成',
    demoBody: '好的界面会消失。留下的是阅读的节奏、空间的呼吸，以及在下个问题被提出前就给出答案的层级。',
    demoNums: ['1,204 次浏览', '98.5% 可用性', '$12.00 / 月'],
    hierarchyTitle: '清晰的优先级',
    hierarchyBody: '标题领读，描述跟随，辅助信息保持安静。大小、字重和颜色负责表达，而不是装饰。',
    balanceTitle: '两行等长的标题，比孤零零的尾字更好读',
    baselineTitle: '$12 / 月 · 3 月 14 日续订',
    middleBody: '长标识符从中间截断时，开头与扩展名都能保持可见。',
    contrastLabels: ['主要文字', '次要文字', '弱化文字', '白色背景强调色'],
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
};

const tr = () => I18N[state.lang];
const getTerm = (name) => TERMS.find((t) => t.name === name) || TERMS[0];
const localize = (term) => (state.lang === 'zh' && term.zh ? term.zh : term);

/* ------------------------------------------------------------ index */

function renderFeels() {
  el.feelsBar.querySelectorAll('.vocab-feel-btn').forEach((n) => n.remove());
  FEELS.forEach((feel) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'vocab-feel-btn';
    btn.setAttribute('aria-pressed', String(state.feel === feel));
    const label = state.lang === 'zh' ? FEEL_ZH[feel] : feel;
    btn.innerHTML = `<span>${label}</span><span class="vocab-feel-x" aria-hidden="true"><svg viewBox="0 0 10 10" fill="none"><path d="M2.5 2.5 7.5 7.5M7.5 2.5 2.5 7.5" stroke="currentColor" stroke-width="1.35" stroke-linecap="round"/></svg></span>`;
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
  return TERMS.filter((term) => {
    if (state.feel && !term.feels.includes(state.feel)) return false;
    if (!q) return true;
    const zh = term.zh || { name: '', summary: '', prompt: '' };
    return (
      term.name.toLowerCase().includes(q) ||
      term.summary.toLowerCase().includes(q) ||
      zh.name.includes(q) ||
      zh.summary.includes(q)
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
    span.textContent = localize(term).name;
    btn.appendChild(span);
    btn.addEventListener('click', () => selectTerm(term.name, true));
    el.index.appendChild(btn);
  });
  updateFades();
  if (centerSelected) centerSelectedItem();
}

function centerSelectedItem() {
  const active = el.index.querySelector('.is-selected');
  if (!active) return;
  const target = active.offsetLeft - (el.index.clientWidth - active.offsetWidth) / 2;
  el.index.scrollTo({ left: Math.max(0, target), behavior: 'smooth' });
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
  const dict = tr();
  return `
    <div class="demo-stage" style="--pad:${pad}px">
      <div class="demo-card">
        <div class="demo-card-inner">
          <div class="demo-row">
            <div class="demo-row-left">
              <span class="demo-plan">${dict.plan}</span>
              <span class="demo-badge">${dict.badge}</span>
            </div>
            <div class="demo-price">
              <span class="demo-amount">$12</span>
              <span class="demo-period">/mo</span>
            </div>
          </div>
          <p class="demo-desc">${dict.cardDesc}</p>
          <span class="demo-cta">${dict.cardCta}</span>
        </div>
      </div>
      <div class="demo-measure" aria-hidden="true">
        <div class="demo-measure-fill"></div>
        <span class="demo-measure-label">padding: ${pad}px</span>
      </div>
    </div>`;
}

function typeDemo(term) {
  const dict = tr();
  const base = {
    lh: 1.55,
    weight: 400,
    tracking: 0,
    clamp: 0,
    balance: false,
    middle: false,
    title: dict.demoTitle,
    body: dict.demoBody,
  };

  switch (term.name) {
    case 'Line Height':
      base.lh = 1.75;
      break;
    case 'Hierarchy':
      base.title = dict.hierarchyTitle;
      base.body = dict.hierarchyBody;
      break;
    case 'Font Weight':
      base.weight = 600;
      break;
    case 'Tracking':
      base.tracking = -0.02;
      break;
    case 'Text Balance':
      base.balance = true;
      base.title = dict.balanceTitle;
      break;
    case 'Line Clamp':
      base.clamp = 2;
      break;
    case 'Baseline Alignment':
      base.title = dict.baselineTitle;
      break;
    case 'Middle Truncation':
      base.middle = true;
      base.title = 'brand-identity-guidelines.png';
      base.body = dict.middleBody;
      break;
    default:
      break;
  }

  return `
    <div class="specimen-type">
      <h3 class="specimen-type-title" style="font-size:${base.middle ? 16 : 19}px;text-wrap:${base.balance ? 'balance' : 'pretty'}">${base.title}</h3>
      <p class="specimen-type-body" style="line-height:${base.lh};font-weight:${base.weight};letter-spacing:${base.tracking}em;${base.clamp ? `-webkit-line-clamp:${base.clamp};` : ''}">${base.body}</p>
      <div class="specimen-nums">
        ${dict.demoNums.map((n) => `<span>${n}</span>`).join('')}
      </div>
    </div>`;
}

function colorDemo(term) {
  const dict = tr();
  if (term.name === 'Contrast' || term.name === 'Muted Text') {
    const [a, b, c, d] = dict.contrastLabels;
    return `
      <div class="specimen-contrast">
        <div><strong style="color:#171717">${a}</strong><span style="color:#737373">4.6 : 1</span></div>
        <div><strong style="color:#525252">${b}</strong><span style="color:#a1a1aa">3.2 : 1</span></div>
        <div><strong style="color:#a1a1aa">${c}</strong><span style="color:#d4d4d8">1.8 : 1</span></div>
        <div><strong style="color:#5b6f00">${d}</strong><span style="color:#8a9a2e">4.9 : 1</span></div>
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

function renderDetail(animate = true) {
  const term = getTerm(state.term);
  const dict = tr();
  const localized = localize(term);
  const showToggle = term.demo === 'card' && term.name === 'Padding';
  const toggle = showToggle
    ? `<div class="vocab-compare-toggle" role="group" aria-label="Compare specimen states">
         <span class="vocab-compare-thumb" aria-hidden="true"></span>
         <button type="button" data-state="tight" aria-pressed="${state.compare === 'tight'}">${dict.tight}</button>
         <button type="button" data-state="balanced" aria-pressed="${state.compare === 'balanced'}">${dict.balanced}</button>
       </div>`
    : '';

  el.detail.innerHTML = `
    <article class="vocab-card" aria-live="polite">
      <div class="vocab-canvas">
        <div class="vocab-canvas-bar">${toggle}</div>
        <div class="vocab-canvas-viewport${animate ? ' is-entering' : ''}">${buildStage(term)}</div>
        <div class="vocab-canvas-foot"><span class="vocab-caption">${captionFor(term)}</span></div>
      </div>
      <div class="vocab-copy${animate ? ' is-entering' : ''}">
        <h2 class="vocab-detail-title">${localized.name}</h2>
        <p class="vocab-detail-summary">${localized.summary}</p>
        <div class="vocab-prompt-row">
          <div class="vocab-prompt-body">
            <span class="vocab-detail-label">${dict.sayToAI}</span>
            <p class="vocab-prompt-text">${localized.prompt}</p>
          </div>
          <button type="button" class="vocab-copy-btn" aria-label="${dict.copy}" title="${dict.copy}">
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

  if (showToggle) {
    el.detail.querySelectorAll('.vocab-compare-toggle button').forEach((btn) => {
      btn.addEventListener('click', () => setCompare(btn.dataset.state));
    });
    updateToggleThumb();
  }

  el.detail.querySelector('.vocab-copy-btn')?.addEventListener('click', copyPrompt);
}

function setCompare(next) {
  if (state.compare === next) return;
  state.compare = next;
  const pad = next === 'tight' ? 8 : 20;
  const stage = el.detail.querySelector('.demo-stage');
  if (stage) stage.style.setProperty('--pad', `${pad}px`);
  const label = el.detail.querySelector('.demo-measure-label');
  if (label) label.textContent = `padding: ${pad}px`;
  const caption = el.detail.querySelector('.vocab-caption');
  if (caption) caption.textContent = `padding: ${pad}px`;
  el.detail.querySelectorAll('.vocab-compare-toggle button').forEach((btn) => {
    btn.setAttribute('aria-pressed', String(btn.dataset.state === next));
  });
  updateToggleThumb();
}

function updateToggleThumb() {
  const toggle = el.detail.querySelector('.vocab-compare-toggle');
  if (!toggle) return;
  const thumb = toggle.querySelector('.vocab-compare-thumb');
  const active = toggle.querySelector('button[aria-pressed="true"]');
  if (!thumb || !active) return;
  thumb.style.width = `${active.offsetWidth}px`;
  thumb.style.transform = `translate3d(${active.offsetLeft - 2}px, 0, 0)`;
}

async function copyPrompt() {
  const term = getTerm(state.term);
  const prompt = localize(term).prompt;
  try {
    await navigator.clipboard.writeText(prompt);
  } catch {
    const ta = document.createElement('textarea');
    ta.value = prompt;
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
  if (state.term === name) return;
  state.term = name;
  state.compare = 'balanced';
  const url = new URL(window.location.href);
  url.searchParams.set('term', slugify(name));
  history.replaceState(null, '', url);
  renderIndex(false);
  renderDetail(true);
  if (fromIndex) centerSelectedItem();
}

/* --------------------------------------------------------------- i18n */

function applyLanguage(animate = true) {
  const dict = tr();
  document.documentElement.lang = state.lang === 'zh' ? 'zh-CN' : 'en';
  document.querySelectorAll('[data-i18n]').forEach((node) => {
    const key = node.dataset.i18n;
    if (dict[key] != null) node.textContent = dict[key];
  });
  el.searchInput.placeholder = dict.filter;
  el.langSwitch.textContent = dict.langText;
  el.langSwitch.title = dict.langAria;
  el.langSwitch.setAttribute('aria-label', dict.langAria);
  document.title = `${dict.title} — Topinspo`;
  renderFeels();
  renderIndex(false);
  renderDetail(animate);
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
  renderDetail(true);

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
    applyLanguage(true);
  });

  showPromo(0);
  startPromo();
  updateFades();
}

init();
