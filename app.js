const translations = {
  zh: {
    tagline: "你的随身数学工具", eyebrow: "为香港高中数学而设", heroTitle: "忘了带科学计算机？<br /><em>照样解得到。</em>", heroBody: "方程、坐标图、三角形与组合数学，一站算清。答案连步骤，温习也方便。",
    tabEquation: "方程", tabTriangle: "三角形", tabGraphs: "图形", tabCombi: "组合", quadraticTitle: "一元二次方程", cubicTitle: "一元三次方程", simultaneousTitle: "二元一次联立方程", heronTitle: "希罗公式", cosineTitle: "余弦定理", triangleCentersTitle: "三点求四心", parabolaLineTitle: "抛物线与直线交点", circleLineTitle: "圆与直线交点", combiTitle: "排列与组合",
    quadraticHint: "输入系数 a、b 和常数 c。", cubicHint: "输入系数 a、b、c 和常数 d，答案以小数显示。", simultaneousHint: "输入两条一次方程，求 x 和 y。", heronHint: "已知三边，求三角形面积。", cosineHint: "选择求边长或角度。", centersHint: "输入三点坐标，求重心、外心、内心和垂心。", combiHint: "输入非负整数，获得完整精确答案。",
    exact: "根式", decimal: "小数", vertexForm: "顶点式", showExact: "以根号表示", showDecimal: "小数表示", defaultPositive: "默认：正数", toggleSign: "改变正负", coefficientA: "系数 a", coefficientB: "系数 b", coefficientC: "系数 c", constantC: "常数 c", constantD: "常数 d", solve: "计算答案", decimalRoots: "小数根", exactInteger: "精确整数",
    sideA: "边 a", sideB: "边 b", sideC: "边 c", angleC: "角 C（度）", findArea: "求面积", findSide: "求边 c", findAngle: "求角 C", calculate: "计算", calculateBoth: "计算 nCr 与 nPr", equation1: "方程 1", equation2: "方程 2", xCoefficient: "x 系数", yCoefficient: "y 系数", systemConstant: "常数", solveSystem: "解联立方程",
    coordinateGeometry: "坐标几何", pointA: "点 A", pointB: "点 B", pointC: "点 C", findCenters: "计算四心与圆", centroid: "重心 G", circumcenter: "外心 O", incenter: "内心 I", orthocenter: "垂心 H", circumcircle: "外接圆", incircle: "内切圆", radius: "半径", showGraph: "显示坐标图", vertex: "顶点", axisOfSymmetry: "对称轴", triangleDiagramCaption: "边 a、b、c 分别位于角 A、B、C 的对面",
    parabolaLineHint: "输入抛物线，并选择直线的斜截式或一般式。", circleLineHint: "选择圆心与半径或圆的一般式，再输入直线求交点。", parabola: "抛物线", straightLine: "直线", circle: "圆", slopeIntercept: "斜截式", generalForm: "一般式", centerRadius: "圆心＋半径", circleGeneralForm: "圆的一般式", slopeM: "斜率 m", interceptK: "截距 k", centerH: "圆心 h", centerK: "圆心 k", radiusR: "半径 r", circleD: "系数 D", circleE: "系数 E", circleF: "常数 F", lineA: "系数 A", lineB: "系数 B", lineC: "常数 C", findIntersections: "求交点", intersection: "交点", intersections: "交点", tangentPoint: "切点", noRealIntersections: "没有实数交点。", invalidLine: "直线的 A 和 B 不能同时为 0。", invalidRadius: "半径必须大于 0。", invalidCircleGeneral: "这个一般式不能构成半径大于 0 的实圆。", derivedCenter: "换算圆心",
    footerText: "计算结果仅供学习与核对，请记得写出步骤。", answer: "答案", copy: "复制", copyNumber: "复制纯数值", copied: "已复制", steps: "步骤", discriminant: "判别式", noLinear: "a 不能是 0；否则这不是二次方程。", noCubic: "a 不能是 0；否则这不是三次方程。", invalidNumber: "请填写所有数字。", noSolution: "此联立方程无解。", infiniteSolutions: "此联立方程有无限多个解。", invalidPoints: "三个点必须互不共线，才能构成三角形。", triangleError: "三边必须大于 0，并满足任意两边之和大于第三边。", cosineError: "请输入有效的正边长；角 C 必须在 0° 与 180° 之间。", combiError: "n 与 r 必须是非负整数，而且 r ≤ n。", area: "面积", semiperimeter: "半周长", permutation: "排列", combination: "组合", complex: "复数根"
  },
  en: {
    tagline: "Maths in your pocket", eyebrow: "Made for Hong Kong secondary maths", heroTitle: "Forgot your scientific calculator?<br /><em>Keep solving.</em>", heroBody: "Equations, coordinate graphs, triangles and combinatorics in one place—with working steps that make revision easier.",
    tabEquation: "Equations", tabTriangle: "Triangles", tabGraphs: "Graphs", tabCombi: "nCr / nPr", quadraticTitle: "Quadratic equation", cubicTitle: "Cubic equation", simultaneousTitle: "Simultaneous linear equations", heronTitle: "Heron's formula", cosineTitle: "Cosine rule", triangleCentersTitle: "Four triangle centres", parabolaLineTitle: "Parabola–line intersections", circleLineTitle: "Circle–line intersections", combiTitle: "Permutations & combinations",
    quadraticHint: "Enter coefficients a, b and constant c.", cubicHint: "Enter coefficients a, b, c and constant d. Roots are shown as decimals.", simultaneousHint: "Enter two linear equations to find x and y.", heronHint: "Find a triangle's area from three sides.", cosineHint: "Choose whether to find a side or an angle.", centersHint: "Enter three coordinates to find the centroid, circumcenter, incenter and orthocenter.", combiHint: "Enter non-negative integers for a complete exact answer.",
    exact: "Exact", decimal: "Decimal", vertexForm: "Vertex form", showExact: "Show exact roots", showDecimal: "Show decimals", defaultPositive: "Default: positive", toggleSign: "Change sign", coefficientA: "Coefficient a", coefficientB: "Coefficient b", coefficientC: "Coefficient c", constantC: "Constant c", constantD: "Constant d", solve: "Solve", decimalRoots: "Decimal roots", exactInteger: "Exact integer",
    sideA: "Side a", sideB: "Side b", sideC: "Side c", angleC: "Angle C (degrees)", findArea: "Find area", findSide: "Find side c", findAngle: "Find angle C", calculate: "Calculate", calculateBoth: "Calculate nCr & nPr", equation1: "Equation 1", equation2: "Equation 2", xCoefficient: "x coefficient", yCoefficient: "y coefficient", systemConstant: "Constant", solveSystem: "Solve equations",
    coordinateGeometry: "Coordinate geometry", pointA: "Point A", pointB: "Point B", pointC: "Point C", findCenters: "Find centres & circles", centroid: "Centroid G", circumcenter: "Circumcenter O", incenter: "Incenter I", orthocenter: "Orthocenter H", circumcircle: "Circumcircle", incircle: "Incircle", radius: "Radius", showGraph: "Show coordinate graph", vertex: "Vertex", axisOfSymmetry: "Axis of symmetry", triangleDiagramCaption: "Sides a, b and c lie opposite angles A, B and C respectively",
    parabolaLineHint: "Enter a parabola, then choose slope-intercept or general form for the line.", circleLineHint: "Choose centre and radius or the circle's general form, then enter a line.", parabola: "Parabola", straightLine: "Line", circle: "Circle", slopeIntercept: "Slope-intercept", generalForm: "General form", centerRadius: "Centre & radius", circleGeneralForm: "Circle general form", slopeM: "Slope m", interceptK: "Intercept k", centerH: "Centre h", centerK: "Centre k", radiusR: "Radius r", circleD: "Coefficient D", circleE: "Coefficient E", circleF: "Constant F", lineA: "Coefficient A", lineB: "Coefficient B", lineC: "Constant C", findIntersections: "Find intersections", intersection: "Intersection", intersections: "Intersections", tangentPoint: "Tangent point", noRealIntersections: "There are no real intersections.", invalidLine: "Line coefficients A and B cannot both be 0.", invalidRadius: "The radius must be greater than 0.", invalidCircleGeneral: "This general form does not define a real circle with radius greater than 0.", derivedCenter: "Derived centre",
    footerText: "Use results to learn and check your work—remember to show your steps.", answer: "Answer", copy: "Copy", copyNumber: "Copy numeric value", copied: "Copied", steps: "Working", discriminant: "Discriminant", noLinear: "a cannot be 0; otherwise this is not a quadratic equation.", noCubic: "a cannot be 0; otherwise this is not a cubic equation.", invalidNumber: "Please enter every number.", noSolution: "This system has no solution.", infiniteSolutions: "This system has infinitely many solutions.", invalidPoints: "The three points must be non-collinear to form a triangle.", triangleError: "All sides must be positive and any two sides must add to more than the third.", cosineError: "Enter valid positive side lengths; angle C must be between 0° and 180°.", combiError: "n and r must be non-negative integers, with r ≤ n.", area: "Area", semiperimeter: "Semi-perimeter", permutation: "Permutation", combination: "Combination", complex: "Complex roots"
  }
};

let lang = "zh";
let answerFormat = "decimal";
let cosineMode = "side";
let parabolaLineMode = "slope";
let circleInputMode = "center";
const t = (key) => translations[lang][key] || key;
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

function setLanguage(next) {
  lang = next;
  document.documentElement.lang = next === "zh" ? "zh-HK" : "en";
  $$('[data-t]').forEach((el) => {
    const value = t(el.dataset.t);
    if (value.includes("<")) el.innerHTML = value; else el.textContent = value;
  });
  $$('[data-lang-option]').forEach((el) => el.classList.toggle("active", el.dataset.langOption === lang));
  updateCosineLabel();
  recalculateVisible();
}

$("#languageSwitch").addEventListener("click", () => setLanguage(lang === "zh" ? "en" : "zh"));

function showTool(group) {
  $$('[data-group]').forEach((el) => el.classList.toggle("hidden", el.dataset.group !== group));
  $$('.tool-tab').forEach((el) => el.classList.toggle("active", el.dataset.tool === group));
  const first = $(`[data-group="${group}"]`);
  if (first) showPanel(first.dataset.panel);
}

function showPanel(name) {
  $$('.calculator-panel').forEach((el) => el.classList.toggle("active", el.id === `panel-${name}`));
  $$('.subnav-item').forEach((el) => el.classList.toggle("active", el.dataset.panel === name));
  recalculateVisible();
}

$$('.tool-tab').forEach((el) => el.addEventListener("click", () => showTool(el.dataset.tool)));
$$('.subnav-item').forEach((el) => el.addEventListener("click", () => showPanel(el.dataset.panel)));

$$('[data-cos-mode]').forEach((button) => button.addEventListener("click", () => {
  cosineMode = button.dataset.cosMode;
  $$('[data-cos-mode]').forEach((el) => el.classList.toggle("active", el === button));
  updateCosineLabel();
  solveCosine();
}));

function setParabolaLineMode(mode) {
  parabolaLineMode = mode;
  $$('[data-pl-line-mode]').forEach((button) => button.classList.toggle('active', button.dataset.plLineMode === mode));
  $('#parabolaSlopeLine').classList.toggle('hidden', mode !== 'slope');
  $('#parabolaGeneralLine').classList.toggle('hidden', mode !== 'general');
  $('#parabolaSlopeLine').querySelectorAll('input').forEach((input) => { input.disabled = mode !== 'slope'; });
  $('#parabolaGeneralLine').querySelectorAll('input').forEach((input) => { input.disabled = mode !== 'general'; });
  solveParabolaLine();
}

function setCircleInputMode(mode) {
  circleInputMode = mode;
  $$('[data-circle-input-mode]').forEach((button) => button.classList.toggle('active', button.dataset.circleInputMode === mode));
  $('#circleCenterInput').classList.toggle('hidden', mode !== 'center');
  $('#circleGeneralInput').classList.toggle('hidden', mode !== 'general');
  $('#circleCenterInput').querySelectorAll('input').forEach((input) => { input.disabled = mode !== 'center'; });
  $('#circleGeneralInput').querySelectorAll('input').forEach((input) => { input.disabled = mode !== 'general'; });
  solveCircleLine();
}

$$('[data-pl-line-mode]').forEach((button) => button.addEventListener('click', () => setParabolaLineMode(button.dataset.plLineMode)));
$$('[data-circle-input-mode]').forEach((button) => button.addEventListener('click', () => setCircleInputMode(button.dataset.circleInputMode)));

function updateCosineLabel() {
  const span = $('#cosThirdLabel span');
  span.textContent = cosineMode === "side" ? t("angleC") : t("sideC");
  const input = $('#cox');
  input.value = cosineMode === "side" ? (input.dataset.angleValue || 60) : (input.dataset.sideValue || 8);
}

function n(id) { return Number($(id).value); }
let activeSignedInput=null;
function setupSignPicker() {
  const picker=$('#signPicker');
  const inputs=$$('input[type="number"]:not([min])');
  const toggleButton=$('#signToggle');
  const update=() => {
    if (!activeSignedInput) return;
    const negative=activeSignedInput.dataset.pendingSign === 'negative' || Number(activeSignedInput.value) < 0;
    toggleButton.classList.toggle('active',negative);
    toggleButton.setAttribute('aria-pressed',negative ? 'true' : 'false');
  };
  const position=() => {
    if (!activeSignedInput || picker.classList.contains('hidden')) return;
    const rect=activeSignedInput.getBoundingClientRect();
    const viewport=window.visualViewport;
    const viewTop=viewport?.offsetTop || 0, viewBottom=viewTop+(viewport?.height || window.innerHeight);
    const width=picker.offsetWidth, height=picker.offsetHeight;
    const left=Math.max(10,Math.min(rect.left,window.innerWidth-width-10));
    let top=rect.bottom+8;
    if (top+height>viewBottom-8) top=rect.top-height-8;
    picker.style.left=`${left}px`; picker.style.top=`${Math.max(viewTop+8,top)}px`;
  };
  const open=(input) => {
    activeSignedInput=input;
    if (!input.dataset.pendingSign) input.dataset.pendingSign=Number(input.value)<0 ? 'negative' : 'positive';
    picker.classList.remove('hidden'); update(); position();
  };
  const close=() => { picker.classList.add('hidden'); activeSignedInput=null; };
  inputs.forEach((input) => {
    input.addEventListener('focus',() => open(input));
    input.addEventListener('pointerdown',() => open(input));
    input.addEventListener('input',() => {
      const value=Number(input.value);
      if (input.value === '') input.dataset.pendingSign='positive';
      else if (Number.isFinite(value)) {
        if (input.dataset.pendingSign === 'negative' && value>0) input.value=String(-value);
        else if (value<0) input.dataset.pendingSign='negative';
        else if (value>0) input.dataset.pendingSign='positive';
      }
      update(); position();
    });
  });
  toggleButton.addEventListener('pointerdown',(event) => event.preventDefault());
  toggleButton.addEventListener('click',() => {
    if (!activeSignedInput) return;
    const input=activeSignedInput;
    const negative=!(input.dataset.pendingSign === 'negative' || Number(input.value)<0);
    const value=Number(input.value);
    input.dataset.pendingSign=negative ? 'negative' : 'positive';
    if (input.value !== '' && Number.isFinite(value) && value!==0) input.value=String(negative ? -Math.abs(value) : Math.abs(value));
    input.dispatchEvent(new Event('change',{bubbles:true}));
    input.focus({preventScroll:true}); close();
  });
  document.addEventListener('focusin',(event) => {
    if (inputs.includes(event.target)) open(event.target);
    else if (!picker.contains(event.target)) close();
  });
  window.addEventListener('scroll',position,true);
  window.addEventListener('resize',position);
  window.visualViewport?.addEventListener('resize',position);
  window.visualViewport?.addEventListener('scroll',position);
}
function fmt(value, digits = 8) {
  if (Math.abs(value) < 1e-12) value = 0;
  return Number(value.toPrecision(digits)).toString();
}
function svgNode(name, attributes = {}, text = '') {
  const node = document.createElementNS('http://www.w3.org/2000/svg', name);
  Object.entries(attributes).forEach(([key, value]) => node.setAttribute(key, value));
  if (text !== '') node.textContent = text;
  return node;
}
function niceStep(raw) {
  const power = 10 ** Math.floor(Math.log10(Math.max(raw, 1e-9)));
  const scaled = raw / power;
  const factor = scaled <= 1 ? 1 : scaled <= 2 ? 2 : scaled <= 5 ? 5 : 10;
  return factor * power;
}
function graphBounds(xs, ys, minimumSpan = 6) {
  const safeX = xs.filter(Number.isFinite), safeY = ys.filter(Number.isFinite);
  let xMin = safeX.length ? Math.min(...safeX) : -3, xMax = safeX.length ? Math.max(...safeX) : 3;
  let yMin = safeY.length ? Math.min(...safeY) : -3, yMax = safeY.length ? Math.max(...safeY) : 3;
  if (xMax - xMin < minimumSpan) { const mid = (xMin + xMax) / 2; xMin = mid - minimumSpan / 2; xMax = mid + minimumSpan / 2; }
  if (yMax - yMin < minimumSpan) { const mid = (yMin + yMax) / 2; yMin = mid - minimumSpan / 2; yMax = mid + minimumSpan / 2; }
  const xPad = (xMax - xMin) * 0.1, yPad = (yMax - yMin) * 0.1;
  return { xMin: xMin - xPad, xMax: xMax + xPad, yMin: yMin - yPad, yMax: yMax + yPad };
}
function equaliseBounds(bounds, aspect = 1.82) {
  let { xMin, xMax, yMin, yMax } = bounds;
  const xSpan = xMax - xMin, ySpan = yMax - yMin;
  if (xSpan / ySpan < aspect) {
    const target = ySpan * aspect, mid = (xMin + xMax) / 2;
    xMin = mid - target / 2; xMax = mid + target / 2;
  } else {
    const target = xSpan / aspect, mid = (yMin + yMax) / 2;
    yMin = mid - target / 2; yMax = mid + target / 2;
  }
  return { xMin, xMax, yMin, yMax };
}
function renderCoordinateGraph(target, specification) {
  const host = $(target);
  if (!host) return;
  const toggle = specification.toggle ? $(specification.toggle) : null;
  host.classList.toggle('hidden', toggle && !toggle.checked);
  if (toggle && !toggle.checked) { host.innerHTML = ''; return; }
  host.innerHTML = '';
  const width = 720, height = 420, margin = { left: 54, right: 22, top: 22, bottom: 42 };
  const plotWidth = width - margin.left - margin.right, plotHeight = height - margin.top - margin.bottom;
  const bounds = specification.equalScale ? equaliseBounds(specification.bounds) : specification.bounds;
  const sx = (x) => margin.left + (x - bounds.xMin) / (bounds.xMax - bounds.xMin) * plotWidth;
  const sy = (y) => margin.top + (bounds.yMax - y) / (bounds.yMax - bounds.yMin) * plotHeight;
  const svg = svgNode('svg', { viewBox: `0 0 ${width} ${height}`, role: 'img', 'aria-label': host.dataset.graphTitle || 'Coordinate graph' });
  svg.append(svgNode('title', {}, host.dataset.graphTitle || 'Coordinate graph'));
  const defs = svgNode('defs');
  const clip = svgNode('clipPath', { id: `${host.id}-clip` });
  clip.append(svgNode('rect', { x: margin.left, y: margin.top, width: plotWidth, height: plotHeight, rx: 8 }));
  defs.append(clip); svg.append(defs);
  svg.append(svgNode('rect', { class: 'graph-background', x: margin.left, y: margin.top, width: plotWidth, height: plotHeight, rx: 8 }));
  const xStep = niceStep((bounds.xMax - bounds.xMin) / 8), yStep = niceStep((bounds.yMax - bounds.yMin) / 6);
  for (let x = Math.ceil(bounds.xMin / xStep) * xStep; x <= bounds.xMax + xStep * 0.001; x += xStep) {
    const axis = Math.abs(x) < xStep * 1e-8;
    svg.append(svgNode('line', { class: axis ? 'graph-axis' : 'graph-grid', x1: sx(x), y1: margin.top, x2: sx(x), y2: margin.top + plotHeight }));
    svg.append(svgNode('text', { class: 'graph-tick', x: sx(x), y: height - 18, 'text-anchor': 'middle' }, fmt(x, 5)));
  }
  for (let y = Math.ceil(bounds.yMin / yStep) * yStep; y <= bounds.yMax + yStep * 0.001; y += yStep) {
    const axis = Math.abs(y) < yStep * 1e-8;
    svg.append(svgNode('line', { class: axis ? 'graph-axis' : 'graph-grid', x1: margin.left, y1: sy(y), x2: margin.left + plotWidth, y2: sy(y) }));
    svg.append(svgNode('text', { class: 'graph-tick', x: margin.left - 9, y: sy(y) + 4, 'text-anchor': 'end' }, fmt(y, 5)));
  }
  svg.append(svgNode('text', { class: 'graph-axis-name', x: width - 15, y: sy(0) - 7 }, 'x'));
  svg.append(svgNode('text', { class: 'graph-axis-name', x: sx(0) + 8, y: 16 }, 'y'));
  const drawing = svgNode('g', { 'clip-path': `url(#${host.id}-clip)` });
  (specification.curves || []).forEach((curve) => {
    const valid = curve.points.filter((point) => Number.isFinite(point.x) && Number.isFinite(point.y));
    const d = valid.map((point, index) => `${index ? 'L' : 'M'} ${sx(point.x)} ${sy(point.y)}`).join(' ');
    drawing.append(svgNode('path', { class: 'graph-curve', d, stroke: curve.color || '#ff6b5f' }));
  });
  (specification.polygons || []).forEach((polygon) => {
    const d = polygon.points.map((point, index) => `${index ? 'L' : 'M'} ${sx(point.x)} ${sy(point.y)}`).join(' ') + ' Z';
    drawing.append(svgNode('path', { class: 'graph-polygon', d, stroke: polygon.color || '#112a46', fill: polygon.fill || 'rgba(200,244,61,.14)' }));
  });
  (specification.segments || []).forEach((segment) => {
    if (segment.points.length < 2) return;
    const d = segment.points.map((point, index) => `${index ? 'L' : 'M'} ${sx(point.x)} ${sy(point.y)}`).join(' ');
    drawing.append(svgNode('path', { class: 'graph-curve', d, stroke: segment.color || '#112a46' }));
  });
  (specification.circles || []).forEach((circle) => {
    drawing.append(svgNode('ellipse', { class: 'graph-circle', cx: sx(circle.center.x), cy: sy(circle.center.y), rx: Math.abs(sx(circle.center.x + circle.radius) - sx(circle.center.x)), ry: Math.abs(sy(circle.center.y + circle.radius) - sy(circle.center.y)), stroke: circle.color || '#4f7cff' }));
  });
  svg.append(drawing);
  (specification.points || []).forEach((point) => {
    svg.append(svgNode('circle', { class: 'graph-point', cx: sx(point.x), cy: sy(point.y), r: 5.5, fill: point.color || '#112a46' }));
    if (point.label) svg.append(svgNode('text', { class: 'graph-point-label', x: sx(point.x) + 9, y: sy(point.y) - 9 }, point.label));
  });
  if (specification.legend?.length) {
    const legend = svgNode('g', { class: 'graph-legend' });
    specification.legend.forEach((item, index) => {
      const x = margin.left + index * 160;
      legend.append(svgNode('line', { x1: x, y1: 12, x2: x + 22, y2: 12, stroke: item.color, 'stroke-width': 4, 'stroke-linecap': 'round' }));
      legend.append(svgNode('text', { x: x + 29, y: 16 }, item.label));
    });
    svg.append(legend);
  }
  host.append(svg);
}
function lineAcrossBounds(A, B, C, bounds) {
  const points = [];
  if (Math.abs(B) > 1e-12) {
    points.push({ x: bounds.xMin, y: (C - A * bounds.xMin) / B }, { x: bounds.xMax, y: (C - A * bounds.xMax) / B });
  } else if (Math.abs(A) > 1e-12) {
    const x = C / A; points.push({ x, y: bounds.yMin }, { x, y: bounds.yMax });
  }
  return points;
}
function signTerm(value) { return value < 0 ? ` − ${fmt(Math.abs(value))}` : value > 0 ? ` + ${fmt(value)}` : ''; }
function signedMonomial(value, variable = '') { return Math.abs(value) < 1e-12 ? '' : `${value < 0 ? ' − ' : ' + '}${fmt(Math.abs(value))}${variable}`; }
function shifted(variable, value) { return Math.abs(value) < 1e-12 ? variable : `(${variable} ${value < 0 ? '+' : '−'} ${fmt(Math.abs(value))})`; }
function vertexEquation(a, h, k) {
  const coefficient = a === 1 ? '' : a === -1 ? '−' : fmt(a);
  return `y = ${coefficient}${shifted('x', h)}²${signTerm(k)}`;
}
function gcd(a, b) { a = Math.abs(Math.round(a)); b = Math.abs(Math.round(b)); while (b) [a, b] = [b, a % b]; return a || 1; }
function gcd3(a, b, c) { return gcd(gcd(a, b), c); }
function squareFree(value) {
  let inside = Math.abs(Math.round(value)); let outside = 1;
  for (let i = 2; i * i <= inside; i++) while (inside % (i * i) === 0) { inside /= i * i; outside *= i; }
  return { outside, inside };
}
function integerCoefficients(values) {
  const decimals = values.map((v) => {
    const s = Math.abs(v).toString().toLowerCase();
    if (s.includes('e')) return Math.min(8, Math.max(0, Number(s.split('e')[1]) * -1 + (s.split('e')[0].split('.')[1] || '').length));
    return (s.split('.')[1] || '').length;
  });
  const scale = 10 ** Math.min(8, Math.max(...decimals));
  const ints = values.map((v) => Math.round(v * scale));
  const common = ints.reduce((g, v) => gcd(g, v), 0) || 1;
  return ints.map((v) => v / common);
}
function exactQuadratic(a, b, c) {
  let [A, B, C] = integerCoefficients([a, b, c]);
  if (A < 0) { A *= -1; B *= -1; C *= -1; }
  const D = B * B - 4 * A * C;
  const denominator = 2 * A;
  const { outside, inside } = squareFree(D);
  const common = gcd3(-B, outside, denominator);
  const base = -B / common, rad = outside / common, den = denominator / common;
  const sign = D < 0 ? 'i' : '';
  if (inside === 1) {
    if (D >= 0) {
      const x1n = -B + outside, x2n = -B - outside;
      const g1 = gcd(x1n, denominator), g2 = gcd(x2n, denominator);
      const r1 = denominator / g1 === 1 ? `${x1n / g1}` : `${x1n / g1}/${denominator / g1}`;
      const r2 = denominator / g2 === 1 ? `${x2n / g2}` : `${x2n / g2}/${denominator / g2}`;
      return { text: `x = ${r1}, ${r2}`, D };
    }
    const mid = base === 0 ? '' : `${base} `;
    const part = rad === 1 ? 'i' : `${rad}i`;
    return { text: den === 1 ? `x = ${mid}± ${part}` : `x = (${mid}± ${part})/${den}`, D };
  }
  const radical = `${rad === 1 ? '' : rad}${sign}√${inside}`;
  const numerator = base === 0 ? `± ${radical}` : `${base} ± ${radical}`;
  return { text: den === 1 ? `x = ${numerator}` : `x = (${numerator})/${den}`, D };
}
function decimalQuadratic(a, b, c) {
  const D = b * b - 4 * a * c;
  if (D >= 0) return { text: `x = ${fmt((-b + Math.sqrt(D))/(2*a))}, ${fmt((-b - Math.sqrt(D))/(2*a))}`, D };
  const real = -b/(2*a), imag = Math.sqrt(-D)/Math.abs(2*a);
  return { text: `x = ${fmt(real)} ± ${fmt(imag)}i`, D };
}
async function copyText(value) {
  if (navigator.clipboard?.writeText) {
    try { await navigator.clipboard.writeText(value); return true; } catch (_) {}
  }
  const field=document.createElement('textarea');
  field.value=value; field.setAttribute('readonly','');
  field.style.position='fixed'; field.style.opacity='0'; field.style.pointerEvents='none';
  document.body.append(field); field.select(); field.setSelectionRange(0,field.value.length);
  const copied=document.execCommand('copy'); field.remove();
  return copied;
}
function resultBox(target, answer, steps, error = false, dual = false, copyValue = null, action = null) {
  const box = $(target);
  box.className = `result-box visible${error ? ' error' : ''}`;
  if (error) { box.innerHTML = `<p class="result-answer">${answer}</p>`; return; }
  const answerHtml = dual ? answer : `<p class="result-answer">${answer}</p>`;
  const fallback = String(answer).replace(/<[^>]+>/g,' ').replace(/\s+/g,' ').trim();
  const numericCopy = copyValue === null ? fallback.trim() : String(copyValue).trim();
  const copyButton = numericCopy ? `<button class="copy-button" type="button">${t('copy')}</button>` : '';
  const actionButton = action ? `<button class="result-action-button" type="button">${action.label}</button>` : '';
  const controls = copyButton || actionButton ? `<div class="result-actions">${copyButton}${actionButton}</div>` : '';
  box.innerHTML = `<div class="result-top"><div><p class="result-label">${t('answer')}</p>${answerHtml}</div>${controls}</div>${steps ? `<div class="steps">${steps}</div>` : ''}`;
  box.dataset.copyValue = numericCopy;
  const copyControl=box.querySelector('.copy-button');
  copyControl?.setAttribute('aria-label',`${t('copyNumber')}: ${numericCopy.replace(/\n/g,'; ')}`);
  copyControl?.addEventListener('click', async (event) => {
    if (await copyText(box.dataset.copyValue)) { event.currentTarget.textContent = t('copied'); setTimeout(() => event.currentTarget.textContent = t('copy'), 2000); }
  });
  box.querySelector('.result-action-button')?.addEventListener('click', action?.onClick);
}

function solveQuadratic(event) {
  event?.preventDefault(); const a=n('#qa'), b=n('#qb'), c=n('#qc');
  if (![a,b,c].every(Number.isFinite)) { $('#quadraticGraph').innerHTML = ''; return resultBox('#quadraticResult', t('invalidNumber'), '', true); }
  if (a === 0) { $('#quadraticGraph').innerHTML = ''; return resultBox('#quadraticResult', t('noLinear'), '', true); }
  const h=-b/(2*a), k=a*h*h+b*h+c, D=b*b-4*a*c;
  const vertexForm=vertexEquation(a,h,k);
  const r = answerFormat === 'exact' ? exactQuadratic(a,b,c) : decimalQuadratic(a,b,c);
  const steps = `${t('discriminant')} Δ = b² − 4ac = ${fmt(r.D)}<br>x = (−b ± √Δ) / 2a<br>${vertexForm}`;
  const formatAction = {
    label: answerFormat === 'decimal' ? t('showExact') : t('showDecimal'),
    onClick: () => { answerFormat = answerFormat === 'decimal' ? 'exact' : 'decimal'; solveQuadratic(); }
  };
  resultBox('#quadraticResult', r.text, steps, false, false, r.text.replace(/^x\s*=\s*/,''), formatAction);
  const roots = D >= 0 ? [(-b-Math.sqrt(D))/(2*a),(-b+Math.sqrt(D))/(2*a)] : [];
  const xCandidates=[h-4,h+4,h,...roots];
  const xMin=Math.min(...xCandidates)-1, xMax=Math.max(...xCandidates)+1;
  const curve=Array.from({length:181},(_,index)=>{ const x=xMin+(xMax-xMin)*index/180; return {x,y:a*x*x+b*x+c}; });
  const points=[{x:h,y:k,label:'V',color:'#ff6b5f'},...roots.map((x,index)=>({x,y:0,label:`x${index+1}`,color:'#112a46'}))];
  renderCoordinateGraph('#quadraticGraph',{toggle:'#quadraticGraphToggle',bounds:graphBounds(curve.map(p=>p.x),curve.map(p=>p.y)),curves:[{points:curve,color:'#ff6b5f'}],points,legend:[{color:'#ff6b5f',label:'y = ax² + bx + c'}]});
}

function cbrt(x) { return Math.sign(x) * Math.pow(Math.abs(x), 1/3); }
function solveCubic(event) {
  event?.preventDefault(); const a=n('#ca'), b=n('#cb'), c=n('#cc'), d=n('#cd');
  if (![a,b,c,d].every(Number.isFinite)) return resultBox('#cubicResult', t('invalidNumber'), '', true);
  if (a === 0) return resultBox('#cubicResult', t('noCubic'), '', true);
  const A=b/a, B=c/a, C=d/a;
  const p=B-A*A/3, q=2*A*A*A/27-A*B/3+C;
  const disc=(q*q)/4+(p*p*p)/27;
  const eps=1e-12*Math.max(1,Math.abs(q*q/4),Math.abs(p*p*p/27));
  let roots=[];
  if (disc > eps) {
    const u=cbrt(-q/2+Math.sqrt(disc)), v=cbrt(-q/2-Math.sqrt(disc));
    const real=u+v-A/3, re=-(u+v)/2-A/3, im=Math.sqrt(3)*(u-v)/2;
    roots=[fmt(real), `${fmt(re)} + ${fmt(Math.abs(im))}i`, `${fmt(re)} − ${fmt(Math.abs(im))}i`];
  } else if (Math.abs(disc) <= eps) {
    const u=cbrt(-q/2); roots=[fmt(2*u-A/3), fmt(-u-A/3), fmt(-u-A/3)];
  } else {
    const radius=2*Math.sqrt(-p/3), theta=Math.acos((3*q/(2*p))*Math.sqrt(-3/p));
    roots=[0,1,2].map(k => radius*Math.cos((theta+2*Math.PI*k)/3)-A/3).sort((x,y)=>x-y).map(x=>fmt(x));
  }
  resultBox('#cubicResult', `x = ${roots.join(', ')}`, '', false, false, roots.join(', '));
}

function solveSimultaneous(event) {
  event?.preventDefault();
  const a1=n('#sa1'), b1=n('#sb1'), c1=n('#sc1'), a2=n('#sa2'), b2=n('#sb2'), c2=n('#sc2');
  if (![a1,b1,c1,a2,b2,c2].every(Number.isFinite)) { $('#simultaneousGraph').innerHTML=''; return resultBox('#simultaneousResult', t('invalidNumber'), '', true); }
  const D=a1*b2-a2*b1, Dx=c1*b2-c2*b1, Dy=a1*c2-a2*c1;
  const scale=Math.max(1,Math.abs(a1),Math.abs(b1),Math.abs(c1),Math.abs(a2),Math.abs(b2),Math.abs(c2));
  const eps=1e-11*scale*scale;
  const unique=Math.abs(D)>eps, x=unique?Dx/D:0, y=unique?Dy/D:0;
  const bounds=equaliseBounds(graphBounds([x-5,x+5],[y-5,y+5]));
  renderCoordinateGraph('#simultaneousGraph',{toggle:'#simultaneousGraphToggle',bounds,segments:[{points:lineAcrossBounds(a1,b1,c1,bounds),color:'#ff6b5f'},{points:lineAcrossBounds(a2,b2,c2,bounds),color:'#4f7cff'}],points:unique?[{x,y,label:'P',color:'#112a46'}]:[],legend:[{color:'#ff6b5f',label:t('equation1')},{color:'#4f7cff',label:t('equation2')}]});
  if (Math.abs(D) <= eps) {
    const message=Math.abs(Dx)<=eps && Math.abs(Dy)<=eps ? t('infiniteSolutions') : t('noSolution');
    return resultBox('#simultaneousResult', message, '', true);
  }
  resultBox('#simultaneousResult', `x = ${fmt(x)}, y = ${fmt(y)}`, '', false, false, `${fmt(x)}, ${fmt(y)}`);
}

function validTriangle(a,b,c) { return [a,b,c].every(v=>Number.isFinite(v)&&v>0) && a+b>c && a+c>b && b+c>a; }
function solveHeron(event) {
  event?.preventDefault(); const a=n('#ha'), b=n('#hb'), c=n('#hc');
  if (!validTriangle(a,b,c)) return resultBox('#heronResult', t('triangleError'), '', true);
  const s=(a+b+c)/2, area=Math.sqrt(s*(s-a)*(s-b)*(s-c));
  resultBox('#heronResult', `${t('area')} = ${fmt(area)}`, `${t('semiperimeter')} s = (a + b + c) / 2 = ${fmt(s)}<br>A = √[${fmt(s)} × ${fmt(s-a)} × ${fmt(s-b)} × ${fmt(s-c)}]`, false, false, fmt(area));
}

function solveCosine(event) {
  event?.preventDefault(); const a=n('#coa'), b=n('#cob'), x=n('#cox');
  if (![a,b].every(v=>Number.isFinite(v)&&v>0)) return resultBox('#cosineResult', t('cosineError'), '', true);
  if (cosineMode === 'side') {
    $('#cox').dataset.angleValue = x;
    if (!(x>0&&x<180)) return resultBox('#cosineResult', t('cosineError'), '', true);
    const c=Math.sqrt(a*a+b*b-2*a*b*Math.cos(x*Math.PI/180));
    resultBox('#cosineResult', `c = ${fmt(c)}`, `c² = ${fmt(a*a)} + ${fmt(b*b)} − 2(${fmt(a)})(${fmt(b)}) cos ${fmt(x)}°`, false, false, fmt(c));
  } else {
    $('#cox').dataset.sideValue = x;
    if (!validTriangle(a,b,x)) return resultBox('#cosineResult', t('triangleError'), '', true);
    const cosC=Math.max(-1,Math.min(1,(a*a+b*b-x*x)/(2*a*b))), C=Math.acos(cosC)*180/Math.PI;
    resultBox('#cosineResult', `C = ${fmt(C)}°`, `cos C = (a² + b² − c²) / 2ab = ${fmt(cosC)}`, false, false, fmt(C));
  }
}

function distance(p, q) { return Math.hypot(p.x-q.x, p.y-q.y); }
function pointText(p) { return `(${fmt(p.x)}, ${fmt(p.y)})`; }
function circleFactor(variable, center) {
  if (Math.abs(center) < 1e-12) return variable;
  return `(${variable} ${center < 0 ? '+' : '−'} ${fmt(Math.abs(center))})`;
}
function circleEquation(center, radius) { return `${circleFactor('x',center.x)}² + ${circleFactor('y',center.y)}² = ${fmt(radius*radius)}`; }
function solveCenters(event) {
  event?.preventDefault();
  const A={x:n('#ax'),y:n('#ay')}, B={x:n('#bx'),y:n('#by')}, C={x:n('#cx'),y:n('#cy')};
  if (![A.x,A.y,B.x,B.y,C.x,C.y].every(Number.isFinite)) { $('#centersGraph').innerHTML=''; return resultBox('#centersResult', t('invalidNumber'), '', true); }
  const cross=(B.x-A.x)*(C.y-A.y)-(B.y-A.y)*(C.x-A.x);
  const coordScale=Math.max(1,Math.abs(A.x),Math.abs(A.y),Math.abs(B.x),Math.abs(B.y),Math.abs(C.x),Math.abs(C.y));
  if (Math.abs(cross) < 1e-11*coordScale*coordScale) { $('#centersGraph').innerHTML=''; return resultBox('#centersResult', t('invalidPoints'), '', true); }
  const a=distance(B,C), b=distance(C,A), c=distance(A,B), perimeter=a+b+c;
  const G={x:(A.x+B.x+C.x)/3,y:(A.y+B.y+C.y)/3};
  const denominator=2*(A.x*(B.y-C.y)+B.x*(C.y-A.y)+C.x*(A.y-B.y));
  const a2=A.x*A.x+A.y*A.y, b2=B.x*B.x+B.y*B.y, c2=C.x*C.x+C.y*C.y;
  const O={
    x:(a2*(B.y-C.y)+b2*(C.y-A.y)+c2*(A.y-B.y))/denominator,
    y:(a2*(C.x-B.x)+b2*(A.x-C.x)+c2*(B.x-A.x))/denominator
  };
  const I={x:(a*A.x+b*B.x+c*C.x)/perimeter,y:(a*A.y+b*B.y+c*C.y)/perimeter};
  const H={x:A.x+B.x+C.x-2*O.x,y:A.y+B.y+C.y-2*O.y};
  const R=distance(O,A), area=Math.abs(cross)/2, r=2*area/perimeter;
  const centers=`<div class="centers-results"><div class="center-item"><span>${t('centroid')}</span><b>${pointText(G)}</b></div><div class="center-item"><span>${t('circumcenter')}</span><b>${pointText(O)}</b></div><div class="center-item"><span>${t('incenter')}</span><b>${pointText(I)}</b></div><div class="center-item"><span>${t('orthocenter')}</span><b>${pointText(H)}</b></div></div>`;
  const circles=`<div class="circle-equations"><strong>${t('circumcircle')}</strong> · ${t('radius')} R = ${fmt(R)}<br>${circleEquation(O,R)}<br><strong>${t('incircle')}</strong> · ${t('radius')} r = ${fmt(r)}<br>${circleEquation(I,r)}</div>`;
  resultBox('#centersResult', centers, circles, false, true, [G,O,I,H].map(point=>`${fmt(point.x)}, ${fmt(point.y)}`).join('\n'));
  const xs=[A.x,B.x,C.x,G.x,O.x,I.x,H.x,O.x-R,O.x+R,I.x-r,I.x+r], ys=[A.y,B.y,C.y,G.y,O.y,I.y,H.y,O.y-R,O.y+R,I.y-r,I.y+r];
  renderCoordinateGraph('#centersGraph',{toggle:'#centersGraphToggle',equalScale:true,bounds:graphBounds(xs,ys),polygons:[{points:[A,B,C],color:'#112a46',fill:'rgba(200,244,61,.16)'}],circles:[{center:O,radius:R,color:'#4f7cff'},{center:I,radius:r,color:'#ff6b5f'}],points:[{...A,label:'A'},{...B,label:'B'},{...C,label:'C'},{...G,label:'G',color:'#6c7f00'},{...O,label:'O',color:'#4f7cff'},{...I,label:'I',color:'#ff6b5f'},{...H,label:'H',color:'#9b4dca'}],legend:[{color:'#4f7cff',label:t('circumcircle')},{color:'#ff6b5f',label:t('incircle')}]});
}

function intersectionText(points) {
  if (!points.length) return t('noRealIntersections');
  return points.map((point,index)=>`P${points.length > 1 ? index + 1 : ''} = ${pointText(point)}`).join('<br>');
}
function solveParabolaLine(event) {
  event?.preventDefault();
  const a=n('#pla'), b=n('#plb'), c=n('#plc');
  let lineA, lineB, lineC, lineDescription;
  if (parabolaLineMode === 'slope') {
    const m=n('#plm'), k=n('#plk');
    if (![a,b,c,m,k].every(Number.isFinite)) { $('#parabolaLineGraph').innerHTML=''; return resultBox('#parabolaLineResult',t('invalidNumber'),'',true); }
    lineA=m; lineB=-1; lineC=-k;
    lineDescription=`y = ${fmt(m)}x${signTerm(k)}`;
  } else {
    const A=n('#plga'), B=n('#plgb'), C=n('#plgc');
    if (![a,b,c,A,B,C].every(Number.isFinite)) { $('#parabolaLineGraph').innerHTML=''; return resultBox('#parabolaLineResult',t('invalidNumber'),'',true); }
    lineA=A; lineB=B; lineC=-C;
    lineDescription=`${fmt(A)}x${signedMonomial(B,'y')}${signedMonomial(C)} = 0`;
  }
  if (a === 0) { $('#parabolaLineGraph').innerHTML=''; return resultBox('#parabolaLineResult',t('noLinear'),'',true); }
  if (Math.abs(lineA) < 1e-12 && Math.abs(lineB) < 1e-12) { $('#parabolaLineGraph').innerHTML=''; return resultBox('#parabolaLineResult',t('invalidLine'),'',true); }
  let points=[];
  let working;
  if (Math.abs(lineB) < 1e-12) {
    const x=lineC/lineA, y=a*x*x+b*x+c;
    points=[{x,y}];
    working=`${lineDescription}<br>x = ${fmt(x)}`;
  } else {
    const qa=lineB*a, qb=lineA+lineB*b, qc=lineB*c-lineC;
    const D=qb*qb-4*qa*qc, eps=1e-11*Math.max(1,Math.abs(qb*qb),Math.abs(4*qa*qc));
    if (D > eps) {
      const roots=[(-qb-Math.sqrt(D))/(2*qa),(-qb+Math.sqrt(D))/(2*qa)].sort((x,y)=>x-y);
      points=roots.map(x=>({x,y:a*x*x+b*x+c}));
    } else if (Math.abs(D) <= eps) {
      const x=-qb/(2*qa); points=[{x,y:a*x*x+b*x+c}];
    }
    working=`${lineDescription}<br>${t('discriminant')} Δ = ${fmt(D)}<br>${fmt(qa)}x²${signedMonomial(qb,'x')}${signedMonomial(qc)} = 0`;
  }
  const h=-b/(2*a), xCandidates=[h-4,h+4,h,...points.map(point=>point.x)];
  const xMin=Math.min(...xCandidates)-1, xMax=Math.max(...xCandidates)+1;
  const parabola=Array.from({length:181},(_,index)=>{const x=xMin+(xMax-xMin)*index/180;return{x,y:a*x*x+b*x+c};});
  const bounds=graphBounds([...parabola.map(p=>p.x),...points.map(p=>p.x)],[...parabola.map(p=>p.y),...points.map(p=>p.y)]);
  renderCoordinateGraph('#parabolaLineGraph',{toggle:'#parabolaLineGraphToggle',bounds,curves:[{points:parabola,color:'#ff6b5f'}],segments:[{points:lineAcrossBounds(lineA,lineB,lineC,bounds),color:'#4f7cff'}],points:points.map((point,index)=>({...point,label:`P${points.length>1?index+1:''}`})),legend:[{color:'#ff6b5f',label:t('parabola')},{color:'#4f7cff',label:t('straightLine')}]});
  resultBox('#parabolaLineResult',intersectionText(points),working, false, false, points.map(point=>`${fmt(point.x)}, ${fmt(point.y)}`).join('\n'));
}
function solveCircleLine(event) {
  event?.preventDefault();
  let h, k, r, circleWorking='';
  if (circleInputMode === 'center') {
    h=n('#clh'); k=n('#clk'); r=n('#clr');
    if (![h,k,r].every(Number.isFinite)) { $('#circleLineGraph').innerHTML=''; return resultBox('#circleLineResult',t('invalidNumber'),'',true); }
  } else {
    const D=n('#cld'), E=n('#cle'), F=n('#clf');
    if (![D,E,F].every(Number.isFinite)) { $('#circleLineGraph').innerHTML=''; return resultBox('#circleLineResult',t('invalidNumber'),'',true); }
    h=-D/2; k=-E/2;
    const radiusSquared=h*h+k*k-F;
    if (!(radiusSquared > 1e-12*Math.max(1,h*h,k*k,Math.abs(F)))) { $('#circleLineGraph').innerHTML=''; return resultBox('#circleLineResult',t('invalidCircleGeneral'),'',true); }
    r=Math.sqrt(radiusSquared);
    circleWorking=`x² + y²${signedMonomial(D,'x')}${signedMonomial(E,'y')}${signedMonomial(F)} = 0<br>${t('derivedCenter')} O = ${pointText({x:h,y:k})}`;
  }
  const A=n('#cla'), B=n('#clb'), C=n('#clc');
  if (![A,B,C].every(Number.isFinite)) { $('#circleLineGraph').innerHTML=''; return resultBox('#circleLineResult',t('invalidNumber'),'',true); }
  if (!(r>0)) { $('#circleLineGraph').innerHTML=''; return resultBox('#circleLineResult',t('invalidRadius'),'',true); }
  const norm2=A*A+B*B;
  if (norm2 < 1e-20) { $('#circleLineGraph').innerHTML=''; return resultBox('#circleLineResult',t('invalidLine'),'',true); }
  const signedDistance=(A*h+B*k-C)/Math.sqrt(norm2), distanceToLine=Math.abs(signedDistance);
  const factor=(A*h+B*k-C)/norm2, foot={x:h-A*factor,y:k-B*factor};
  const eps=1e-11*Math.max(1,r);
  let points=[];
  if (distanceToLine < r-eps) {
    const offset=Math.sqrt(Math.max(0,r*r-distanceToLine*distanceToLine)), norm=Math.sqrt(norm2);
    const dx=-B/norm*offset, dy=A/norm*offset;
    points=[{x:foot.x+dx,y:foot.y+dy},{x:foot.x-dx,y:foot.y-dy}];
  } else if (Math.abs(distanceToLine-r)<=eps) points=[foot];
  const bounds=equaliseBounds(graphBounds([h-r,h+r,...points.map(p=>p.x)],[k-r,k+r,...points.map(p=>p.y)]));
  renderCoordinateGraph('#circleLineGraph',{toggle:'#circleLineGraphToggle',equalScale:true,bounds,segments:[{points:lineAcrossBounds(A,B,C,bounds),color:'#ff6b5f'}],circles:[{center:{x:h,y:k},radius:r,color:'#4f7cff'}],points:[{x:h,y:k,label:'O',color:'#4f7cff'},...points.map((point,index)=>({...point,label:`P${points.length>1?index+1:''}`,color:'#112a46'}))],legend:[{color:'#4f7cff',label:t('circle')},{color:'#ff6b5f',label:t('straightLine')}]});
  const label=points.length===1?t('tangentPoint'):points.length>1?t('intersections'):t('noRealIntersections');
  const answer=points.length?`${label}<br>${intersectionText(points)}`:label;
  resultBox('#circleLineResult',answer,`${circleWorking ? `${circleWorking}<br>` : ''}${t('radius')} r = ${fmt(r)}<br>d(O, line) = ${fmt(distanceToLine)}`, false, false, points.map(point=>`${fmt(point.x)}, ${fmt(point.y)}`).join('\n'));
}

function combinations(n,r) { r=Math.min(r,n-r); let x=1n; for(let i=1n;i<=BigInt(r);i++) x=x*BigInt(n-r+Number(i))/i; return x; }
function permutations(n,r) { let x=1n; for(let i=0;i<r;i++) x*=BigInt(n-i); return x; }
function solveCombi(event) {
  event?.preventDefault(); const nValue=n('#cn'), rValue=n('#cr');
  if (![nValue,rValue].every(Number.isSafeInteger)||nValue<0||rValue<0||rValue>nValue) return resultBox('#combiResult', t('combiError'), '', true);
  const c=combinations(nValue,rValue), p=permutations(nValue,rValue);
  const dual=`<div class="dual-results"><div><span>${t('combination')} · nCr</span><b>${c.toLocaleString('en-US')}</b></div><div><span>${t('permutation')} · nPr</span><b>${p.toLocaleString('en-US')}</b></div></div>`;
  resultBox('#combiResult', dual, `nCr = n! / [r!(n−r)!]<br>nPr = n! / (n−r)!`, false, true, `${c.toString()}\n${p.toString()}`);
}

$('#quadraticForm').addEventListener('submit', solveQuadratic);
$('#cubicForm').addEventListener('submit', solveCubic);
$('#simultaneousForm').addEventListener('submit', solveSimultaneous);
$('#heronForm').addEventListener('submit', solveHeron);
$('#cosineForm').addEventListener('submit', solveCosine);
$('#centersForm').addEventListener('submit', solveCenters);
$('#parabolaLineForm').addEventListener('submit', solveParabolaLine);
$('#circleLineForm').addEventListener('submit', solveCircleLine);
$('#combiForm').addEventListener('submit', solveCombi);
[['#quadraticGraphToggle',solveQuadratic],['#simultaneousGraphToggle',solveSimultaneous],['#centersGraphToggle',solveCenters],['#parabolaLineGraphToggle',solveParabolaLine],['#circleLineGraphToggle',solveCircleLine]].forEach(([selector,solver])=>$(selector).addEventListener('change',solver));
function recalculateVisible() {
  const active=$('.calculator-panel.active');
  if (!active) return;
  ({'panel-quadratic':solveQuadratic,'panel-cubic':solveCubic,'panel-simultaneous':solveSimultaneous,'panel-heron':solveHeron,'panel-cosine':solveCosine,'panel-centers':solveCenters,'panel-parabola-line':solveParabolaLine,'panel-circle-line':solveCircleLine,'panel-combinatorics':solveCombi}[active.id] || (()=>{}))();
}
setupSignPicker();
solveQuadratic();
if ('serviceWorker' in navigator) window.addEventListener('load', () => navigator.serviceWorker.register('sw.js').catch(()=>{}));
