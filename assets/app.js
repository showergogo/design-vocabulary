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
  T('Line Height', 'The vertical rhythm between lines of text.', 'Increase the body line height to 1.6 so longer paragraphs stay comfortable to read.', ['Cramped'], 'type', 'line-height: 1.75'),
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

/* GitHub repos, sorted by current star count (fetched from the GitHub API) */
const SKILLS = [
  {
    repo: 'excalidraw/excalidraw',
    stars: 136269,
    lang: 'TypeScript',
    color: '#3178c6',
    license: 'MIT',
    homepage: 'https://excalidraw.com',
    install: 'npm install @excalidraw/excalidraw',
    desc: 'Virtual whiteboard for sketching hand-drawn like diagrams.',
    zh: '手绘风格的虚拟白板，用于快速画图和协作。',
    summary:
      'An open-source virtual whiteboard with a hand-drawn look. The editor ships as an embeddable React component as well as a full standalone app.',
    summaryZh:
      '开源手绘风虚拟白板。编辑器既可作为 React 组件嵌入任意产品，也提供完整独立应用。',
    points: [
      'Canvas rendering engine with a hand-drawn sketch style',
      'Local-first collaboration over end-to-end encrypted rooms',
      'Drop-in <Excalidraw /> React component under MIT',
    ],
    pointsZh: [
      'Canvas 渲染引擎，呈现自然的手绘笔触',
      '基于端到端加密房间的本地优先协作',
      'MIT 协议，可直接嵌入 <Excalidraw /> 组件',
    ],
  },
  {
    repo: 'shadcn-ui/ui',
    stars: 129011,
    lang: 'TypeScript',
    color: '#3178c6',
    license: 'MIT',
    homepage: 'https://ui.shadcn.com',
    install: 'npx shadcn@latest init',
    desc: 'Composable, accessible components you can copy, customize and own.',
    zh: '可组合、可无障碍使用的组件，直接复制进项目并按需定制。',
    summary:
      'Not a dependency but a source registry: the CLI copies accessible React components into your repo so you own and edit every line.',
    summaryZh:
      '它不是依赖包，而是源码注册表：CLI 把无障碍 React 组件复制进你的仓库，每一行代码都由你掌控。',
    points: [
      'Copy-in source instead of a locked runtime package',
      'Built on Radix primitives and Tailwind design tokens',
      'CLI adds components, blocks and themes on demand',
    ],
    pointsZh: [
      '源码复制模式，不受运行时依赖锁定',
      '基于 Radix 原语与 Tailwind 设计令牌',
      'CLI 按需添加组件、区块与主题',
    ],
  },
  {
    repo: 'ant-design/ant-design',
    stars: 100368,
    lang: 'TypeScript',
    color: '#3178c6',
    license: 'MIT',
    homepage: 'https://ant.design',
    install: 'npm install antd',
    desc: 'An enterprise-class UI design language and React component library.',
    zh: '企业级 UI 设计语言与 React 组件库。',
    summary:
      'An enterprise React UI library with 60+ components, a design token system and mature patterns for data-heavy products.',
    summaryZh:
      '企业级 React UI 库，提供 60+ 组件、设计令牌体系，以及面向重数据产品的成熟模式。',
    points: [
      '60+ production-ready components and layouts',
      'Design tokens with dark theme and compact density',
      'Battle-tested Form, Table and enterprise flows',
    ],
    pointsZh: [
      '60+ 生产级组件与典型布局',
      '设计令牌，内置暗色主题与紧凑密度',
      '久经考验的 Form、Table 与企业级流程',
    ],
  },
  {
    repo: 'mui/material-ui',
    stars: 99392,
    lang: 'JavaScript',
    color: '#f1e05a',
    license: 'MIT',
    homepage: 'https://mui.com/material-ui/',
    install: 'npm install @mui/material @emotion/react @emotion/styled',
    desc: 'Comprehensive React component library implementing Material Design.',
    zh: '完整实现 Material Design 的 React 组件库。',
    summary:
      'The React implementation of Material Design, extended by MUI X for advanced data grids, charts and date pickers.',
    summaryZh:
      'Material Design 的 React 实现，并通过 MUI X 扩展出高级数据表格、图表与日期选择器。',
    points: [
      'Complete Material Design component set',
      'Theme provider with tokens and style overrides',
      'MUI X adds data grid, charts and date pickers',
    ],
    pointsZh: [
      '完整的 Material Design 组件集',
      'Theme provider 提供令牌与样式覆盖能力',
      'MUI X 提供数据网格、图表与日期组件',
    ],
  },
  {
    repo: 'tailwindlabs/tailwindcss',
    stars: 98780,
    lang: 'TypeScript',
    color: '#3178c6',
    license: 'MIT',
    homepage: 'https://tailwindcss.com/',
    install: 'npm install tailwindcss @tailwindcss/vite',
    desc: 'A utility-first CSS framework for rapid UI development.',
    zh: '原子化 CSS 框架，用工具类快速搭建界面。',
    summary:
      'A utility-first CSS framework. Version 4 moves configuration into CSS and ships a Rust-powered engine that only generates what you use.',
    summaryZh:
      '原子化 CSS 框架。v4 把配置直接放进 CSS，并用 Rust 引擎按需生成实际用到的样式。',
    points: [
      'Utilities composed directly in markup',
      'CSS-first theme configuration in v4',
      'JIT engine with near-zero unused CSS',
    ],
    pointsZh: [
      '在标记中直接组合工具类',
      'v4 采用 CSS 优先的主题配置',
      'JIT 引擎，几乎不产生冗余 CSS',
    ],
  },
  {
    repo: 'storybookjs/storybook',
    stars: 91714,
    lang: 'TypeScript',
    color: '#3178c6',
    license: 'MIT',
    homepage: 'https://storybook.js.org',
    install: 'npx storybook@latest init',
    desc: 'The workshop for building, documenting and testing UI components in isolation.',
    zh: '在隔离环境中开发、记录与测试 UI 组件的工作台。',
    summary:
      'The industry-standard workshop for UI components: stories double as documentation, interaction tests and visual review surfaces.',
    summaryZh:
      '业界标准的 UI 组件工作台：stories 同时承担文档、交互测试与视觉评审的职责。',
    points: [
      'Stories as living documentation and tests',
      'Addon ecosystem for a11y, interactions and visual diffs',
      'Works with React, Vue, Svelte, Angular and web components',
    ],
    pointsZh: [
      'Stories 即可运行的文档与测试',
      '插件生态覆盖无障碍、交互与视觉差异',
      '支持 React、Vue、Svelte、Angular 与 Web Components',
    ],
  },
  {
    repo: 'penpot/penpot',
    stars: 62712,
    lang: 'Clojure',
    color: '#db5855',
    license: 'MPL-2.0',
    homepage: 'https://penpot.app',
    install: 'docker compose -f docker-compose.yaml up -d',
    desc: 'Open-source design platform for product teams that need scalable collaboration.',
    zh: '面向产品团队的开源设计协作平台。',
    summary:
      'An open-source design and prototyping platform built on open standards, designed for real-time collaboration between designers and developers.',
    summaryZh:
      '基于开放标准的开源设计与原型平台，让设计师和开发者能实时协同。',
    points: [
      'Open standards: SVG, CSS and design tokens',
      'Real-time multiplayer design and comments',
      'Self-hostable under MPL-2.0',
    ],
    pointsZh: [
      '拥抱 SVG、CSS 与设计令牌等开放标准',
      '实时多人设计与评论',
      'MPL-2.0 协议，可自托管',
    ],
  },
  {
    repo: 'tldraw/tldraw',
    stars: 51577,
    lang: 'TypeScript',
    color: '#3178c6',
    license: 'Custom',
    homepage: 'https://tldraw.dev',
    install: 'npm install tldraw',
    desc: 'Build infinite canvas apps in React with a tiny, fast SDK.',
    zh: '用 React 构建无限画布应用的轻量 SDK。',
    summary:
      'A React SDK for infinite canvas products: shapes, camera, tools and multiplayer sync behind a polished default editor.',
    summaryZh:
      '用于构建无限画布产品的 React SDK：图形、相机、工具与多人同步都封装在精致的默认编辑器中。',
    points: [
      'Infinite canvas engine built for React',
      'Multiplayer sync primitives and presence',
      'Custom shapes, tools and UI overrides',
    ],
    pointsZh: [
      '为 React 打造的无限画布引擎',
      '多人同步原语与在线状态',
      '支持自定义图形、工具与界面覆盖',
    ],
  },
  {
    repo: 'chakra-ui/chakra-ui',
    stars: 40747,
    lang: 'TypeScript',
    color: '#3178c6',
    license: 'MIT',
    homepage: 'https://chakra-ui.com',
    install: 'npm install @chakra-ui/react',
    desc: 'A component system for building SaaS products with speed.',
    zh: '快速构建 SaaS 产品的组件系统。',
    summary:
      'A component system for SaaS: accessible primitives, semantic tokens and first-class dark mode without writing CSS files.',
    summaryZh:
      '面向 SaaS 的组件系统：无障碍原语、语义化令牌和开箱即用的暗色模式，几乎不用写 CSS 文件。',
    points: [
      'Accessible components built on Ark UI',
      'Semantic tokens and color modes',
      'Composable style props instead of CSS files',
    ],
    pointsZh: [
      '基于 Ark UI 的无障碍组件',
      '语义化令牌与颜色模式',
      '以组合式 style props 替代 CSS 文件',
    ],
  },
  {
    repo: 'motiondivision/motion',
    stars: 35536,
    lang: 'TypeScript',
    color: '#3178c6',
    license: 'MIT',
    homepage: 'https://motion.dev',
    install: 'npm install motion',
    desc: 'A modern animation library for React and JavaScript.',
    zh: '面向 React 与 JavaScript 的现代动画库。',
    summary:
      'A modern animation library for React and vanilla JS, covering springs, gestures, layout transitions and scroll-linked effects.',
    summaryZh:
      '面向 React 与原生 JS 的现代动画库，覆盖弹簧动画、手势、布局过渡与滚动联动效果。',
    points: [
      'Spring and tween animation primitives',
      'Layout and shared-element transitions',
      'Gestures, drag and scroll-linked motion',
    ],
    pointsZh: [
      '弹簧与补间动画原语',
      '布局动画与共享元素过渡',
      '手势、拖拽与滚动联动动画',
    ],
  },
];

/* Two specimen states per term, mirroring the original "Compare specimen states" control. */
const COMPARE = {
  Padding: { a: 'Tight', b: 'Balanced', metricA: 'padding: 8px', metricB: 'padding: 20px' },
  Gap: { a: 'Bunched', b: 'Clear', metricA: 'gap: 0', metricB: 'gap: 12px' },
  'Line Height': { a: 'Dense', b: 'Readable', metricA: 'line-height: 1.15', metricB: 'line-height: 1.75' },
  Proximity: { a: 'Detached', b: 'Grouped', metricA: 'equal 12px gaps', metricB: '8px / 24px' },
  Whitespace: { a: 'Cramped', b: 'Airy', metricA: 'whitespace: 0', metricB: 'whitespace: 64px' },
  'Divider vs. Space': { a: 'Divider', b: 'Space', metricA: 'divider between rows', metricB: '16px of space' },
  Hierarchy: { a: 'Flat', b: 'Ranked', metricA: 'hierarchy: none', metricB: 'hierarchy: title → body' },
  'Font Weight': { a: 'Uniform', b: 'Contrasted', metricA: '400 / 400', metricB: '400 / 600' },
  Tracking: { a: 'Flat', b: 'Tracked', metricA: 'letter-spacing: 0', metricB: '-0.02em / 0.02em' },
  'Tabular Numbers': { a: 'Proportional', b: 'Tabular', metricA: 'proportional-nums', metricB: 'tabular-nums' },
  'Text Balance': { a: 'Ragged', b: 'Balanced', metricA: 'text-wrap: wrap', metricB: 'text-wrap: balance' },
  'Line Clamp': { a: 'One line', b: 'Two lines', metricA: 'line-clamp: 1', metricB: 'line-clamp: 2' },
  'Baseline Alignment': { a: 'Centered', b: 'Baseline', metricA: 'align-items: center', metricB: 'align-items: baseline' },
  'Shortcut Hint': { a: 'Hidden', b: 'Visible', metricA: 'no shortcut hint', metricB: '⌘K shown' },
  'Middle Truncation': { a: 'End', b: 'Middle', metricA: 'brand-identity-gu…', metricB: 'brand-identity…guidelines.png' },
  Accent: { a: 'Scattered', b: 'Focused', metricA: 'accent everywhere', metricB: 'one accent, used once' },
  Contrast: { a: 'Washed out', b: 'Crisp', metricA: 'contrast: 1.8 : 1', metricB: 'contrast: 4.6 : 1' },
  'Muted Text': { a: 'Flat', b: 'Three levels', metricA: 'text: 1 level', metricB: 'text: 3 levels' },
  'Semantic Color': { a: 'Ad hoc', b: 'Semantic', metricA: 'one-off colors', metricB: 'semantic tokens' },
  'Tint & Shade': { a: 'Flat', b: 'Tinted', metricA: 'one hue only', metricB: 'tint · shade' },
  'Border Radius': { a: 'Sharp', b: 'Rounded', metricA: 'border-radius: 2px', metricB: 'border-radius: 16px' },
  'Concentric Radius': { a: 'Mismatched', b: 'Concentric', metricA: 'inner: 16px', metricB: '12px − 8px' },
  'Nested Cards': { a: 'Heavy', b: 'Flat', metricA: 'border + shadow', metricB: 'border: 0.5px' },
  'Hairline Border': { a: 'Heavy', b: 'Hairline', metricA: 'border-width: 2px', metricB: 'border-width: 0.5px' },
  'Optical Alignment': { a: 'Geometric', b: 'Optical', metricA: 'offset: 0px', metricB: 'offset: 1px' },
  'Avatar Stack': { a: 'Spaced', b: 'Stacked', metricA: 'overlap: 0', metricB: 'overlap: −8px' },
  'Layered Shadow': { a: 'Single', b: 'Layered', metricA: 'box-shadow: 1 layer', metricB: 'box-shadow: 3 layers' },
  Scrim: { a: 'Clear', b: 'Dimmed', metricA: 'scrim: 0%', metricB: 'scrim: 40%' },
  'Edge Fade': { a: 'Hard cut', b: 'Faded', metricA: 'fade: 0px', metricB: 'fade: 24px' },
  'Sticky Header': { a: 'Scrolls', b: 'Sticky', metricA: 'position: static', metricB: 'position: sticky' },
  'Floating Bar': { a: 'Docked', b: 'Floating', metricA: 'offset: 0px', metricB: 'offset: 16px' },
  Easing: { a: 'Linear', b: 'Eased', metricA: 'linear', metricB: 'cubic-bezier(.32,.72,0,1)' },
  'Directional Motion': { a: 'Fade', b: 'Directional', metricA: 'fade in place', metricB: 'in right · out left' },
  Spring: { a: 'Ease out', b: 'Spring', metricA: 'ease-out', metricB: 'stiffness 260 · damping 24' },
  Stagger: { a: 'Together', b: 'Staggered', metricA: 'stagger: 0ms', metricB: 'stagger: 40ms' },
  'Press State': { a: 'None', b: 'Pressed', metricA: 'no feedback', metricB: 'press: scale(0.96)' },
  'Shared Element': { a: 'Cut', b: 'Shared', metricA: 'cut between states', metricB: 'shared element' },
  'Origin-Aware Motion': { a: 'Center', b: 'Origin', metricA: 'transform-origin: center', metricB: 'transform-origin: trigger' },
  'Hover Reveal': { a: 'Hidden', b: 'Revealed', metricA: 'actions hidden', metricB: 'hover reveal' },
  'Button Hierarchy': { a: 'Flat', b: 'Ranked', metricA: '3 filled buttons', metricB: 'one primary action' },
  'Touch Target': { a: '24 × 24', b: '44 × 44', metricA: 'target: 24px', metricB: 'target: 44px' },
  'Empty State': { a: 'Blank', b: 'Guided', metricA: 'no next step', metricB: 'one clear action' },
  'Inline Validation': { a: 'Deferred', b: 'Inline', metricA: 'error on submit', metricB: 'error at the field' },
  Skeleton: { a: 'Static', b: 'Shimmer', metricA: 'no motion', metricB: 'matching layout' },
  'Popover vs. Tooltip': { a: 'Tooltip', b: 'Popover', metricA: 'description only', metricB: 'actions inside' },
  'Modal vs. Drawer': { a: 'Modal', b: 'Drawer', metricA: 'blocks the page', metricB: 'keeps context' },
  'Tabs vs. Segmented': { a: 'Tabs', b: 'Segmented', metricA: 'separate views', metricB: 'one settings toggle' },
  'Switch vs. Checkbox': { a: 'Checkbox', b: 'Switch', metricA: 'staged + submit', metricB: 'applies instantly' },
  'Command Palette': { a: 'Buried', b: '⌘K', metricA: 'search in menus', metricB: 'one search box' },
  'Bento Grid': { a: 'Uniform', b: 'Bento', metricA: 'equal tiles', metricB: 'mixed tile sizes' },
  'Progressive Disclosure': { a: 'All at once', b: 'Progressive', metricA: '12 options visible', metricB: '3 hidden options' },
  Combobox: { a: 'Plain list', b: 'Combobox', metricA: 'select a value', metricB: 'filters as you type' },
  'Input Affix': { a: 'Plain', b: 'Affixed', metricA: 'units outside', metricB: 'prefix · suffix inside' },
  'Split Button': { a: 'Single', b: 'Split', metricA: 'one action', metricB: 'main action + variants' },
  'Prompt Composer': { a: 'Plain box', b: 'Composer', metricA: 'text only', metricB: 'attachments + model' },
  'Streaming Text': { a: 'Waiting', b: 'Streaming', metricA: 'full response at once', metricB: 'tokens as they arrive' },
  'Thinking Disclosure': { a: 'Collapsed', b: 'Expanded', metricA: 'reasoning hidden', metricB: 'reasoning on demand' },
  'Citation Pill': { a: 'Plain', b: 'Cited', metricA: 'no source', metricB: 'source pill' },
  'Slash Command': { a: 'Typed', b: 'Menu', metricA: 'remember the syntax', metricB: 'pick a command' },
  'Diff View': { a: 'After only', b: 'Diff', metricA: 'result only', metricB: 'before + after' },
  'Undo Toast': { a: 'Silent', b: 'Undo', metricA: 'action is final', metricB: '6s to undo' },
  'Suggested Prompts': { a: 'Blank', b: 'Suggested', metricA: 'empty input', metricB: '3 starters' },
  'Tool Call Steps': { a: 'Hidden', b: 'Steps', metricA: 'black box', metricB: 'tool call steps' },
  'Context Chips': { a: 'Hidden', b: 'Chips', metricA: 'context unseen', metricB: 'attached context' },
  'Approval Gate': { a: 'Auto', b: 'Approval', metricA: 'runs immediately', metricB: 'confirm first' },
};

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
    themeToDark: 'Switch to dark appearance',
    themeToLight: 'Switch to light appearance',
    empty: 'No terms match that filter.',
    tight: 'Tight',
    balanced: 'Balanced',
    navVocab: 'Design Vocabulary',
    navSkills: 'Design Skills',
    skillsTitle: 'Design Skills',
    skillsIntro: 'The most-starred design and UI engineering projects on GitHub right now.',
    skillsSort: 'Sorted by GitHub stars',
    modalLicense: 'License',
    modalHighlights: 'What it gives you',
    modalInstall: 'Install',
    modalCopy: 'Copy',
    modalCopied: 'Copied',
    modalView: 'View on GitHub',
    modalClose: 'Close',
    plan: 'Pro',
    badge: 'Popular',
    cardDesc: 'Unlimited boards, custom domains, and full version history.',
    cardCta: 'Upgrade to Pro',
    period: '/mo',
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
    themeToDark: '切换到深色外观',
    themeToLight: '切换到浅色外观',
    empty: '没有符合筛选条件的术语。',
    tight: '紧凑',
    balanced: '平衡',
    navVocab: '设计词汇',
    navSkills: '设计 Skill',
    skillsTitle: '设计 Skill',
    skillsIntro: 'GitHub 上当前 Star 数最高的设计与 UI 工程类项目。',
    skillsSort: '按 GitHub Star 排序',
    modalLicense: '许可证',
    modalHighlights: '能力要点',
    modalInstall: '安装',
    modalCopy: '复制',
    modalCopied: '已复制',
    modalView: '前往 GitHub',
    modalClose: '关闭',
    plan: '专业版',
    badge: '热门',
    cardDesc: '无限画板、自定义域名与完整版本历史。',
    cardCta: '升级到专业版',
    period: '/月',
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

const THEME_KEY = 'design-vocab-theme';

const state = {
  lang: 'en',
  term: 'Padding',
  feel: null,
  query: '',
  compare: 'b',
  theme: 'light',
  view: 'vocab',
};

const el = {
  index: document.getElementById('termIndex'),
  indexScroll: document.querySelector('.vocab-index'),
  detail: document.getElementById('detail'),
  searchInput: document.getElementById('searchInput'),
  searchBox: document.getElementById('searchBox'),
  feelsBar: document.querySelector('.vocab-feels-bar'),
  langSwitch: document.getElementById('langSwitch'),
  themeSwitch: document.getElementById('themeSwitch'),
  vocabView: document.getElementById('vocabView'),
  skillsView: document.getElementById('skillsView'),
  skillsList: document.getElementById('skillsList'),
  pageTitle: document.getElementById('pageTitle'),
  navVocab: document.getElementById('navVocab'),
  navSkills: document.getElementById('navSkills'),
  skillModal: document.getElementById('skillModal'),
  skillModalTitle: document.getElementById('skillModalTitle'),
  skillModalRepo: document.getElementById('skillModalRepo'),
  skillModalStars: document.getElementById('skillModalStars'),
  skillModalStats: document.getElementById('skillModalStats'),
  skillModalSummary: document.getElementById('skillModalSummary'),
  skillModalListLabel: document.getElementById('skillModalListLabel'),
  skillModalList: document.getElementById('skillModalList'),
  skillModalInstallLabel: document.getElementById('skillModalInstallLabel'),
  skillModalInstall: document.getElementById('skillModalInstall'),
  skillModalCopy: document.getElementById('skillModalCopy'),
  skillModalGithub: document.getElementById('skillModalGithub'),
  skillModalClose: document.getElementById('skillModalClose'),
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
  const scroller = el.indexScroll;
  const active = el.index.querySelector('.is-selected');
  if (!active) return;
  const target = active.offsetTop - (scroller.clientHeight - active.offsetHeight) / 2;
  scroller.scrollTo({ top: Math.max(0, target), behavior: 'smooth' });
}

function updateFades() {
  const scroller = el.indexScroll;
  document.querySelector('.vocab-fade--top')?.classList.toggle('is-visible', scroller.scrollTop > 4);
  const max = scroller.scrollHeight - scroller.clientHeight;
  document.querySelector('.vocab-fade--bottom')?.classList.toggle('is-visible', max - scroller.scrollTop > 4);
}

/* ------------------------------------------------------------ demos */

/* ------------------------------------------------------------ demos */

const metric = (text) => `<span class="m-metric">${text}</span>`;
const stage = (inner) => `<div class="demo-stage"><div class="demo-inner">${inner}</div></div>`;
const avatar = (text, color) => `<span class="m-avatar" style="background:${color}">${text}</span>`;

const DEMOS = {
  Padding() {
    const pad = state.compare === 'a' ? 8 : 20;
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
                <span class="demo-period">${dict.period}</span>
              </div>
            </div>
            <p class="demo-desc">${dict.cardDesc}</p>
            <span class="demo-cta">${dict.cardCta}</span>
          </div>
        </div>
        <div class="demo-measure" aria-hidden="true">
          <div class="demo-measure-ring"></div>
          <span class="demo-measure-label">padding: ${pad}px</span>
        </div>
      </div>`;
  },

  Gap: () =>
    stage(`
      <div class="m-gap-row">
        <span class="m-tile">A</span><span class="m-band"></span>
        <span class="m-tile">B</span><span class="m-band"></span>
        <span class="m-tile">C</span>
      </div>
      ${metric('gap: 12px')}`),

  'Line Height': () =>
    stage(`
      <div class="m-lh-block">
        <p>Good interfaces disappear.</p>
        <p>What remains is rhythm.</p>
        <p>Space answers first.</p>
      </div>
      ${metric('line-height: 1.75')}`),

  Proximity: () =>
    stage(`
      <div class="m-form">
        <span class="m-label">Work email</span>
        <div class="m-input">you@studio.com</div>
        <span class="m-band-h"><em>24px</em></span>
        <span class="m-label">Password</span>
        <div class="m-input">••••••••</div>
      </div>`),

  Whitespace: () =>
    stage(`
      <span class="m-eyebrow">Section</span>
      <div class="m-ws-band"><span>64 px</span></div>
      <h4 class="m-title">Breathing room</h4>
      <p class="m-text">Content begins after the pause.</p>`),

  'Divider vs. Space': () =>
    stage(`
      <div class="m-list">
        <div class="m-list-row"><span>Design tokens</span><span class="m-muted">12</span></div>
        <div class="m-divider"></div>
        <div class="m-list-row"><span>Components</span><span class="m-muted">48</span></div>
        <div class="m-band-h m-band-h--tight"><em>16px of space</em></div>
        <div class="m-list-row"><span>Patterns</span><span class="m-muted">9</span></div>
      </div>`),

  Hierarchy: () =>
    stage(`
      <div class="m-hier">
        <div><span class="m-rank">1</span><h4 class="m-h1">A clear order</h4></div>
        <div><span class="m-rank">2</span><p class="m-body">Titles lead, descriptions follow.</p></div>
        <div><span class="m-rank">3</span><span class="m-meta">12 terms · 4 min read</span></div>
      </div>`),

  'Font Weight': () =>
    stage(`
      <div class="m-weight">
        <div><span class="m-w400">Aa</span><span class="m-label">400 · body</span></div>
        <span class="m-weight-div"></span>
        <div><span class="m-w600">Aa</span><span class="m-label">600 · title</span></div>
      </div>`),

  Tracking: () =>
    stage(`
      <div class="m-track-block">
        <span class="m-track m-track--tight">Display</span>
        <span class="m-label">-0.02em</span>
      </div>
      <div class="m-track-block">
        <span class="m-track m-track--loose">Display</span>
        <span class="m-label">0.02em</span>
      </div>`),

  'Tabular Numbers': () =>
    stage(`
      <div class="m-table">
        <div class="m-table-head"><span>Plan</span><span>Price</span></div>
        <div><span>Basic</span><strong>8.00</strong></div>
        <div><span>Pro</span><strong>12.00</strong></div>
        <div><span>Team</span><strong>48.00</strong></div>
      </div>
      ${metric('tabular-nums')}`),

  'Text Balance': () =>
    stage(`
      <div class="m-balance">
        <div><span class="m-label">Ragged</span><h4>Design that feels<br>inevitable</h4></div>
        <div><span class="m-label">Balanced</span><h4 class="m-balanced">Design that feels inevitable</h4></div>
      </div>`),

  'Line Clamp': () =>
    stage(`
      <p class="m-clamp">Good interfaces disappear. What remains is the pace of reading, the quiet rhythm of space, and a hierarchy that answers the next question before it is asked.</p>
      ${metric('-webkit-line-clamp: 2')}`),

  'Baseline Alignment': () =>
    stage(`
      <div class="m-baseline">
        <span class="m-price">$12</span><span class="m-period">/ month</span>
        <span class="m-baseline-rule"></span>
      </div>
      ${metric('align-items: baseline')}`),

  'Shortcut Hint': () =>
    stage(`
      <div class="m-input m-input--search">
        <span>Search actions…</span><kbd>⌘K</kbd>
      </div>
      ${metric('hint next to the action')}`),

  'Middle Truncation': () =>
    stage(`
      <div class="m-file">
        <span class="m-file-icon"></span>
        <span class="m-file-name m-file-end">brand-identity-guidelines…</span>
        <span class="m-file-name m-file-mid">brand-identity…guidelines.png</span>
      </div>
      ${metric('middle truncation')}`),

  Accent: () =>
    stage(`
      <div class="m-swatches">
        <i style="background:#f4f4f2"></i>
        <i style="background:#e4e4df"></i>
        <i style="background:#d3d3cb"></i>
        <i class="m-accent-swatch"></i>
        <i style="background:#171716"></i>
      </div>
      ${metric('one accent, used once')}`),

  Contrast() {
    const [a, b, c, d] = tr().contrastLabels;
    return stage(`
      <div class="m-contrast">
        <div><strong style="color:#171717">${a}</strong><span>4.6 : 1</span></div>
        <div><strong style="color:#525252">${b}</strong><span>3.2 : 1</span></div>
        <div><strong style="color:#a1a1aa">${c}</strong><span>1.8 : 1</span></div>
        <div><strong style="color:#5b6f00">${d}</strong><span>4.9 : 1</span></div>
      </div>`);
  },

  'Muted Text': () =>
    stage(`
      <div class="m-levels">
        <span class="m-lvl1">Title</span>
        <span class="m-lvl2">Description</span>
        <span class="m-lvl3">Metadata</span>
      </div>
      ${metric('3 levels of text')}`),

  'Semantic Color': () =>
    stage(`
      <div class="m-pill-row">
        <span class="m-pill m-pill--ok">Success</span>
        <span class="m-pill m-pill--warn">Warning</span>
        <span class="m-pill m-pill--danger">Danger</span>
        <span class="m-pill m-pill--info">Info</span>
      </div>`),

  'Tint & Shade': () =>
    stage(`
      <div class="m-swatches m-swatches--tint">
        <i style="background:#eef1d6"></i>
        <i style="background:#d3da9e"></i>
        <i style="background:#8a9a45"></i>
        <i style="background:#5b6f00"></i>
        <i style="background:#384500"></i>
      </div>
      ${metric('tint · shade')}`),

  'Border Radius': () =>
    stage(`
      <div class="m-radius-box"><span>16</span></div>
      ${metric('border-radius: 16px')}`),

  'Concentric Radius': () =>
    stage(`
      <div class="m-concentric">
        <div class="m-outer"><span class="m-inner-btn">Pay</span></div>
      </div>
      ${metric('inner = outer − inset')}`),

  'Nested Cards': () =>
    stage(`
      <div class="m-nested-outer">
        <span class="m-label">Workspace</span>
        <div class="m-nested-inner"><span>Inner card</span><span class="m-muted">hairline</span></div>
      </div>`),

  'Hairline Border': () =>
    stage(`
      <div class="m-hair-table">
        <div>Header</div><div>Value</div>
        <div>Row one</div><div>128</div>
        <div>Row two</div><div>96</div>
      </div>
      ${metric('border-width: 0.5px')}`),

  'Optical Alignment': () =>
    stage(`
      <div class="m-optical"><span class="m-play"></span></div>
      ${metric('nudge: +1px')}`),

  'Avatar Stack': () =>
    stage(`
      <div class="m-avatars">
        ${avatar('AL', '#c7b9a3')}${avatar('MK', '#a9b7c6')}${avatar('JS', '#c2b0c6')}${avatar('RT', '#b3c2ae')}${avatar('+8', '#d9d9d2')}
      </div>
      ${metric('overlap: −8px')}`),

  'Layered Shadow': () =>
    stage(`
      <div class="m-shadow-stack">
        <div class="m-shadow-card s1"></div>
        <div class="m-shadow-card s2"></div>
        <div class="m-shadow-card s3"><span>Elevation</span></div>
      </div>
      ${metric('3 layers')}`),

  Scrim: () =>
    stage(`
      <div class="m-scrim">
        <div class="m-scrim-page"><span></span><span></span><span></span></div>
        <div class="m-scrim-modal"><strong>Confirm changes</strong><span>scrim: 40%</span></div>
      </div>`),

  'Edge Fade': () =>
    stage(`
      <div class="m-edgefade">
        <div>Design tokens</div><div>Components</div><div>Patterns</div><div>Foundations</div><div>Playground</div>
      </div>`),

  'Sticky Header': () =>
    stage(`
      <div class="m-sticky">
        <div class="m-sticky-head"><span>Component</span><span>Status</span></div>
        <div class="m-sticky-body">
          <div><span>Button</span><span>Shipped</span></div>
          <div><span>Input</span><span>Shipped</span></div>
          <div><span>Table</span><span>Review</span></div>
          <div><span>Chart</span><span>Draft</span></div>
        </div>
      </div>`),

  'Floating Bar': () =>
    stage(`
      <div class="m-float">
        <div class="m-float-page"><span></span><span></span><span></span></div>
        <div class="m-float-bar"><i></i><i></i><i></i><i class="m-float-primary"></i></div>
      </div>`),

  Easing: () =>
    stage(`
      <div class="m-motion-track">
        <span class="m-motion-ghost"></span>
        <span class="m-motion-dot m-ease-out"></span>
      </div>
      ${metric('cubic-bezier(.32,.72,0,1)')}`),

  'Directional Motion': () =>
    stage(`
      <div class="m-slides">
        <div class="m-slide-card">A</div>
        <div class="m-slide-card">B</div>
      </div>
      ${metric('in from right · out to left')}`),

  Spring: () =>
    stage(`
      <div class="m-motion-track">
        <span class="m-motion-dot m-spring"></span>
      </div>
      ${metric('stiffness 260 · damping 24')}`),

  Stagger: () =>
    stage(`
      <div class="m-stagger"><i></i><i></i><i></i></div>
      ${metric('stagger: 40ms')}`),

  'Press State': () =>
    stage(`
      <span class="m-press-btn">Publish</span>
      ${metric('press: scale(0.98)')}`),

  'Shared Element': () =>
    stage(`
      <div class="m-morph"><span class="m-morph-thumb"></span></div>
      ${metric('shared element')}`),

  'Origin-Aware Motion': () =>
    stage(`
      <div class="m-origin">
        <span class="m-origin-trigger"></span>
        <div class="m-origin-menu"><i></i><i></i><i></i></div>
      </div>
      ${metric('transform-origin: trigger')}`),

  'Hover Reveal': () =>
    stage(`
      <div class="m-reveal-row">
        <span>brand-identity.fig</span>
        <span class="m-reveal-actions"><i></i><i></i></span>
      </div>
      ${metric('hover reveal')}`),

  'Button Hierarchy': () =>
    stage(`
      <div class="m-btn-row">
        <span class="m-btn">Publish</span>
        <span class="m-btn m-btn--ghost">Preview</span>
        <span class="m-btn m-btn--text">Cancel</span>
      </div>
      ${metric('one primary action')}`),

  'Touch Target': () =>
    stage(`
      <div class="m-target">
        <span class="m-target-area"></span>
        <span class="m-icon-btn">⌫</span>
      </div>
      ${metric('44 × 44px hit area')}`),

  'Empty State': () =>
    stage(`
      <div class="m-empty">
        <span class="m-empty-icon">◫</span>
        <strong>No boards yet</strong>
        <span class="m-muted">Create one to get started.</span>
        <span class="m-btn">New board</span>
      </div>`),

  'Inline Validation': () =>
    stage(`
      <div class="m-field">
        <span class="m-label">Email</span>
        <div class="m-input m-input--error">name@</div>
        <span class="m-error">Enter a valid email address</span>
      </div>`),

  Skeleton: () =>
    stage(`
      <div class="m-skeleton">
        <div class="m-sk-img"></div>
        <div class="m-sk-line w80"></div>
        <div class="m-sk-line w60"></div>
        <div class="m-sk-line w40"></div>
      </div>`),

  'Popover vs. Tooltip': () =>
    stage(`
      <div class="m-popover-demo">
        <span class="m-tooltip">Describes</span>
        <div class="m-pop">
          <strong>Filter</strong>
          <span class="m-check-row"><i class="m-check is-on"></i>Drafts</span>
          <span class="m-check-row"><i class="m-check"></i>Published</span>
        </div>
      </div>`),

  'Modal vs. Drawer': () =>
    stage(`
      <div class="m-drawer">
        <div class="m-drawer-page"><span></span><span></span><span></span><span></span></div>
        <div class="m-drawer-panel">
          <strong>Edit board</strong>
          <div class="m-input">Board name</div>
          <span class="m-btn">Save</span>
        </div>
      </div>`),

  'Tabs vs. Segmented': () =>
    stage(`
      <div class="m-seg"><span class="m-seg-thumb"></span><span class="is-active">Monthly</span><span>Yearly</span></div>
      ${metric('changing one setting')}`),

  'Switch vs. Checkbox': () =>
    stage(`
      <div class="m-settings">
        <div class="m-setting"><span>Notifications</span><span class="m-switch is-on"><i></i></span></div>
        <div class="m-setting"><span>Accept terms</span><span class="m-check is-on"></span></div>
      </div>
      ${metric('instant · staged')}`),

  'Command Palette': () =>
    stage(`
      <div class="m-cmd">
        <div class="m-cmd-input">Search actions…</div>
        <div class="m-cmd-row is-active">New board <kbd>N</kbd></div>
        <div class="m-cmd-row">Invite member <kbd>I</kbd></div>
        <div class="m-cmd-row">Export <kbd>E</kbd></div>
      </div>`),

  'Bento Grid': () =>
    stage(`
      <div class="m-bento">
        <div class="b1">Overview</div>
        <div>Stats</div>
        <div>Activity</div>
        <div class="b4">Notes</div>
      </div>`),

  'Progressive Disclosure': () =>
    stage(`
      <div class="m-disclose">
        <div class="m-disclose-head"><span>Advanced settings</span><span class="m-chev">›</span></div>
        <div class="m-disclose-hint">3 hidden options</div>
      </div>`),

  Combobox: () =>
    stage(`
      <div class="m-combo">
        <div class="m-input">Desi<span class="m-caret"></span></div>
        <div class="m-combo-list">
          <div class="is-active">Design system</div>
          <div>Design tokens</div>
          <div>Design review</div>
        </div>
      </div>`),

  'Input Affix': () =>
    stage(`
      <div class="m-affix"><span class="m-affix-pre">$</span><span class="m-affix-val">120</span><span class="m-affix-suf">USD</span></div>
      ${metric('prefix · suffix')}`),

  'Split Button': () =>
    stage(`
      <div class="m-split"><span class="m-btn">Publish</span><span class="m-split-caret">▾</span></div>
      ${metric('main action + variants')}`),

  'Prompt Composer': () =>
    stage(`
      <div class="m-composer">
        <div class="m-composer-input">Ask anything…</div>
        <div class="m-composer-foot">
          <span class="m-chip">@file</span>
          <span class="m-chip">Model 4</span>
          <span class="m-send">↑</span>
        </div>
      </div>`),

  'Streaming Text': () =>
    stage(`
      <div class="m-stream">
        <p>Design is the quiet agreement between what you see and what happens next<span class="m-caret"></span></p>
        <div class="m-stream-foot"><span class="m-live-dot"></span>Generating…</div>
      </div>`),

  'Thinking Disclosure': () =>
    stage(`
      <div class="m-think">
        <div class="m-think-head"><span>Thought for 6s</span><span class="m-chev">›</span></div>
        <p class="m-think-body">Checked spacing, contrast and hierarchy before replying…</p>
      </div>`),

  'Citation Pill': () =>
    stage(`
      <p class="m-cite">Good interfaces disappear.<span class="m-cite-pill">1</span></p>
      <div class="m-cite-src">1 · Nielsen Norman Group</div>`),

  'Slash Command': () =>
    stage(`
      <div class="m-slash">
        <div class="m-slash-input">/</div>
        <div class="m-slash-row is-active">/image <span>Generate</span></div>
        <div class="m-slash-row">/code <span>Write</span></div>
        <div class="m-slash-row">/web <span>Search</span></div>
      </div>`),

  'Diff View': () =>
    stage(`
      <div class="m-diff">
        <div class="m-diff-line m-del"><span>−</span><span>padding: 12px</span></div>
        <div class="m-diff-line m-ins"><span>+</span><span>padding: 20px</span></div>
        <div class="m-diff-line"><span> </span><span>border-radius: 12px</span></div>
      </div>`),

  'Undo Toast': () =>
    stage(`
      <div class="m-toast"><span>Board deleted</span><span class="m-toast-undo">Undo</span></div>
      ${metric('6s to undo')}`),

  'Suggested Prompts': () =>
    stage(`
      <div class="m-sugg">
        <span class="m-sugg-chip">Summarize this doc</span>
        <span class="m-sugg-chip">Find spacing issues</span>
        <span class="m-sugg-chip">Write release notes</span>
      </div>`),

  'Tool Call Steps': () =>
    stage(`
      <div class="m-steps">
        <div class="m-step"><i class="m-step-ico is-done">✓</i><span>Search files</span></div>
        <div class="m-step"><i class="m-step-ico is-done">✓</i><span>Read tokens.json</span></div>
        <div class="m-step"><i class="m-step-ico is-run"></i><span>Drafting answer</span></div>
      </div>`),

  'Context Chips': () =>
    stage(`
      <div class="m-context">
        <span class="m-ctx-chip">design-tokens.json ×</span>
        <span class="m-ctx-chip">styles.css ×</span>
        <span class="m-ctx-chip">Figma ↗</span>
      </div>`),

  'Approval Gate': () =>
    stage(`
      <div class="m-approval">
        <strong>Send this email?</strong>
        <span class="m-muted">To 24 customers</span>
        <div class="m-approval-actions">
          <span class="m-btn m-btn--ghost">Cancel</span>
          <span class="m-btn">Approve</span>
        </div>
      </div>`),
};

function buildStage(term) {
  const build = DEMOS[term.name];
  if (build) return build(term);
  return stage(`<div class="m-panel">${localize(term).name}</div>`);
}

function captionFor(term) {
  const cmp = COMPARE[term.name];
  if (!cmp) return term.caption || '';
  return state.compare === 'a' ? cmp.metricA : cmp.metricB || term.caption || '';
}

/* ------------------------------------------------------------- skills */

function fmtStars(n) {
  return n.toLocaleString('en-US');
}

function renderSkills() {
  el.skillsList.innerHTML = SKILLS.map((s, i) => {
    const desc = state.lang === 'zh' ? s.zh : s.desc;
    return `
      <a class="skill-item" href="https://github.com/${s.repo}" target="_blank" rel="noreferrer noopener" data-index="${i}" aria-haspopup="dialog">
        <div class="skill-head">
          <span class="skill-name">${s.repo.split('/')[1]}</span>
          <span class="skill-stars">
            <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M8 1.6l1.9 4 4.4.6-3.2 3.1.8 4.4L8 11.6l-3.9 2.1.8-4.4L1.7 6.2 6.1 5.6z" fill="currentColor"></path></svg>
            ${fmtStars(s.stars)}
          </span>
        </div>
        <p class="skill-desc">${desc}</p>
        <div class="skill-meta">
          <span class="skill-lang"><i style="background:${s.color}"></i>${s.lang}</span>
          <span class="skill-repo">${s.repo}</span>
        </div>
      </a>`;
  }).join('');
}

function updatePageTitle() {
  const dict = tr();
  const title = state.view === 'vocab' ? dict.title : dict.skillsTitle;
  el.pageTitle.textContent = title;
  document.title = `${title} — Topinspo`;
}

function setView(view) {
  state.view = view;
  const isVocab = view === 'vocab';
  el.vocabView.hidden = !isVocab;
  el.skillsView.hidden = isVocab;
  if (isVocab) el.navVocab.setAttribute('aria-current', 'page');
  else el.navVocab.removeAttribute('aria-current');
  if (isVocab) el.navSkills.removeAttribute('aria-current');
  else el.navSkills.setAttribute('aria-current', 'page');
  if (isVocab) closeSkillModal(false);
  else renderSkills();
  updatePageTitle();
}

/* --------------------------------------------------------------- skills modal */

let modalIndex = -1;
let modalReturnFocus = null;

function showSkillModal(index) {
  const s = SKILLS[index];
  if (!s) return;
  const dict = tr();
  modalIndex = index;
  if (el.skillModal.hidden) modalReturnFocus = document.activeElement;
  el.skillModalTitle.textContent = s.repo.split('/')[1];
  el.skillModalRepo.textContent = s.repo;
  el.skillModalStars.textContent = `★ ${fmtStars(s.stars)}`;
  el.skillModalStats.innerHTML = `
    <span class="skill-modal-stat"><i style="background:${s.color}"></i>${s.lang}</span>
    <span class="skill-modal-stat">${dict.modalLicense} · ${s.license}</span>
    <span class="skill-modal-stat">${s.homepage.replace(/^https?:\/\//, '')}</span>`;
  el.skillModalSummary.textContent = state.lang === 'zh' ? s.summaryZh : s.summary;
  el.skillModalListLabel.textContent = dict.modalHighlights;
  el.skillModalList.innerHTML = (state.lang === 'zh' ? s.pointsZh : s.points)
    .map((p) => `<li>${p}</li>`)
    .join('');
  el.skillModalInstallLabel.textContent = dict.modalInstall;
  el.skillModalInstall.textContent = s.install;
  el.skillModalCopy.textContent = dict.modalCopy;
  el.skillModalGithub.textContent = `${dict.modalView} ↗`;
  el.skillModalGithub.href = `https://github.com/${s.repo}`;
  el.skillModalClose.textContent = dict.modalClose;
  el.skillModal.querySelector('.skill-modal-close').setAttribute('aria-label', dict.modalClose);
  el.skillModal.hidden = false;
  el.skillModalClose.focus();
}

function closeSkillModal(restoreFocus = true) {
  if (el.skillModal.hidden) return;
  el.skillModal.hidden = true;
  modalIndex = -1;
  if (restoreFocus && modalReturnFocus) modalReturnFocus.focus();
  modalReturnFocus = null;
}

async function copyInstall() {
  const s = SKILLS[modalIndex];
  if (!s) return;
  const btn = el.skillModalCopy;
  try {
    await navigator.clipboard.writeText(s.install);
  } catch {
    const ta = document.createElement('textarea');
    ta.value = s.install;
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    ta.remove();
  }
  btn.textContent = tr().modalCopied;
  window.clearTimeout(copyInstall.timer);
  copyInstall.timer = window.setTimeout(() => {
    btn.textContent = tr().modalCopy;
  }, 1400);
}

/* ------------------------------------------------------------ detail */

function renderDetail(animate = true) {
  const term = getTerm(state.term);
  const dict = tr();
  const localized = localize(term);
  const cmp = COMPARE[term.name];
  const showToggle = !!cmp;
  const toggle = cmp
    ? `<div class="vocab-compare-toggle" role="group" aria-label="Compare specimen states">
         <span class="vocab-compare-thumb" aria-hidden="true"></span>
         <button type="button" data-state="a" aria-pressed="${state.compare === 'a'}">${cmp.a}</button>
         <button type="button" data-state="b" aria-pressed="${state.compare === 'b'}">${cmp.b}</button>
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

  applyCompareVisuals();

  if (showToggle) {
    el.detail.querySelectorAll('.vocab-compare-toggle button').forEach((btn) => {
      btn.addEventListener('click', () => setCompare(btn.dataset.state));
    });
    updateToggleThumb();
    requestAnimationFrame(updateToggleThumb);
    if (term.name === 'Padding') showMeasureFor();
  }

  el.detail.querySelector('.vocab-copy-btn')?.addEventListener('click', copyPrompt);
}

function applyCompareVisuals() {
  const stageEl = el.detail.querySelector('.demo-stage');
  if (!stageEl) return;
  stageEl.dataset.v = state.compare;
  stageEl.style.setProperty('--pad', `${state.compare === 'a' ? 8 : 20}px`);
}

let measureTimer = 0;

function showMeasureFor(ms = 3000) {
  const stageEl = el.detail.querySelector('.demo-stage');
  if (!stageEl) return;
  stageEl.classList.add('is-measuring');
  window.clearTimeout(measureTimer);
  measureTimer = window.setTimeout(() => stageEl.classList.remove('is-measuring'), ms);
}

function pulseCanvas() {
  const viewport = el.detail.querySelector('.vocab-canvas-viewport');
  if (!viewport) return;
  viewport.classList.remove('is-flashing');
  void viewport.offsetWidth;
  viewport.classList.add('is-flashing');
  window.clearTimeout(pulseCanvas.timer);
  pulseCanvas.timer = window.setTimeout(() => viewport.classList.remove('is-flashing'), 960);
}

function setCompare(next) {
  if (state.compare === next) return;
  state.compare = next;
  const term = getTerm(state.term);
  applyCompareVisuals();
  const label = el.detail.querySelector('.demo-measure-label');
  if (label) label.textContent = `padding: ${next === 'a' ? 8 : 20}px`;
  const caption = el.detail.querySelector('.vocab-caption');
  if (caption) caption.textContent = captionFor(term);
  el.detail.querySelectorAll('.vocab-compare-toggle button').forEach((btn) => {
    btn.setAttribute('aria-pressed', String(btn.dataset.state === next));
  });
  updateToggleThumb();
  pulseCanvas();
  if (term.name === 'Padding') showMeasureFor();
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
  state.compare = 'b';
  const url = new URL(window.location.href);
  url.searchParams.set('term', slugify(name));
  history.replaceState(null, '', url);
  renderIndex(false);
  renderDetail(true);
  if (fromIndex) centerSelectedItem();
}

/* --------------------------------------------------------------- theme */

function loadTheme() {
  try {
    return localStorage.getItem(THEME_KEY) === 'dark' ? 'dark' : 'light';
  } catch {
    return 'light';
  }
}

function updateThemeLabel() {
  const next = state.theme === 'dark' ? tr().themeToLight : tr().themeToDark;
  el.themeSwitch.title = next;
  el.themeSwitch.setAttribute('aria-label', next);
}

function applyTheme() {
  document.documentElement.dataset.theme = state.theme;
  updateThemeLabel();
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
  updateThemeLabel();
  updatePageTitle();
  if (state.view === 'vocab') {
    renderFeels();
    renderIndex(false);
    renderDetail(animate);
  } else {
    renderSkills();
    if (!el.skillModal.hidden && modalIndex >= 0) showSkillModal(modalIndex);
  }
}

/* ---------------------------------------------------------------- init */

function initFromUrl() {
  const termParam = new URLSearchParams(window.location.search).get('term');
  if (!termParam) return;
  const found = TERMS.find((t) => slugify(t.name) === termParam.toLowerCase());
  if (found) state.term = found.name;
}

function init() {
  initFromUrl();
  state.theme = loadTheme();
  applyTheme();
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
    if (!el.skillModal.hidden) {
      if (e.key === 'Escape') closeSkillModal();
      return;
    }
    if (state.view !== 'vocab') return;
    if (e.key === '/' && document.activeElement !== el.searchInput) {
      e.preventDefault();
      el.searchInput.focus();
    }
  });

  el.navVocab.addEventListener('click', () => setView('vocab'));
  el.navSkills.addEventListener('click', () => setView('skills'));

  el.skillsList.addEventListener('click', (e) => {
    const card = e.target.closest('.skill-item');
    if (!card) return;
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    e.preventDefault();
    showSkillModal(Number(card.dataset.index));
  });

  el.skillModal.querySelectorAll('[data-skill-close]').forEach((node) => {
    node.addEventListener('click', () => closeSkillModal());
  });
  el.skillModalCopy.addEventListener('click', copyInstall);

  el.indexScroll.addEventListener('scroll', updateFades, { passive: true });

  el.langSwitch.addEventListener('click', () => {
    state.lang = state.lang === 'en' ? 'zh' : 'en';
    applyLanguage(true);
  });

  el.themeSwitch.addEventListener('click', () => {
    state.theme = state.theme === 'dark' ? 'light' : 'dark';
    applyTheme();
    try {
      localStorage.setItem(THEME_KEY, state.theme);
    } catch {}
  });

  updateFades();
  requestAnimationFrame(updateFades);
  updatePageTitle();
}

init();
