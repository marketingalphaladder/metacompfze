/* @ds-bundle: {"format":3,"namespace":"MetaCompDesignSystem_6c28c8","components":[],"sourceHashes":{"chip.jsx":"2371397877bc","radio-button.jsx":"a8e08bd91f7f","ui_kits/camp_admin/Components.jsx":"9dfc89d3f186"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.MetaCompDesignSystem_6c28c8 = window.MetaCompDesignSystem_6c28c8 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// chip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;

// Default leading & trailing glyphs — replaceable via props
const LeadingIcon = ({
  size = 16
}) => /*#__PURE__*/React.createElement("svg", {
  width: size,
  height: size,
  viewBox: "0 0 16 16",
  fill: "none",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M3 8.5l3 3 7-7",
  stroke: "currentColor",
  strokeWidth: "1.6",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}));
const TrailingIcon = ({
  size = 16
}) => /*#__PURE__*/React.createElement("svg", {
  width: size,
  height: size,
  viewBox: "0 0 16 16",
  fill: "none",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M4 4l8 8M12 4l-8 8",
  stroke: "currentColor",
  strokeWidth: "1.6",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}));
const chipStyles = {
  display: 'inline-flex',
  height: '32px',
  padding: '0 8px',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '6px',
  borderRadius: '8px',
  border: '1px solid var(--state-primary-outline, #CCC)',
  background: 'var(--surface, #FFF)',
  color: 'var(--text-primary, #1F2024)',
  fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
  fontSize: '14px',
  fontWeight: 500,
  lineHeight: 1,
  letterSpacing: '-0.005em',
  cursor: 'default',
  userSelect: 'none',
  whiteSpace: 'nowrap',
  boxSizing: 'border-box'
};
function Chip({
  label = 'Chip',
  leadingIcon = false,
  trailingIcon = false,
  Leading = LeadingIcon,
  Trailing = TrailingIcon,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      ...chipStyles,
      ...style
    }
  }, rest), leadingIcon && /*#__PURE__*/React.createElement(Leading, null), /*#__PURE__*/React.createElement("span", null, label), trailingIcon && /*#__PURE__*/React.createElement(Trailing, null));
}
Object.assign(window, {
  Chip,
  LeadingIcon,
  TrailingIcon
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "chip.jsx", error: String((e && e.message) || e) }); }

// radio-button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Radio Button — MetaComp / Camp App Design Library
// 48×48 frame, 8px padding, 24×24 control inside.

const radioFrameStyle = {
  width: 48,
  height: 48,
  padding: 8,
  boxSizing: 'border-box',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative'
};
const radioControlStyle = {
  position: 'relative',
  width: 24,
  height: 24,
  borderRadius: '50%',
  display: 'inline-block',
  boxSizing: 'border-box'
};

// Hover halo: 40×40 circle behind the control, #6750A4 @ 10% opacity
const hoverHaloStyle = {
  position: 'absolute',
  width: 40,
  height: 40,
  borderRadius: '50%',
  background: '#6750A4',
  opacity: 0.1,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  pointerEvents: 'none'
};

// Inner "hole" — 16px diameter (8px radius), no fill, sits centered.
// Implemented as transparent disc with an inset shadow that matches surface so
// it visually punches through the filled outer circle.
const innerHoleStyle = surface => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  width: 16,
  height: 16,
  borderRadius: '50%',
  transform: 'translate(-50%, -50%)',
  background: surface
});
function RadioButton({
  state = 'default',
  // 'default' | 'selected' | 'hover' | 'disabled' | 'disabled-selected'
  surface = '#FFFFFF',
  // background of the surface the radio sits on (used to "punch" the hole)
  ...rest
}) {
  const isSelected = state === 'selected' || state === 'disabled-selected';
  const isDisabled = state === 'disabled' || state === 'disabled-selected';
  const showHover = state === 'hover';
  const strokeColor = isDisabled ? '#B3B3B3' : '#381E72';
  const fillColor = isDisabled ? '#B3B3B3' : '#381E72';
  const control = isSelected ? {
    ...radioControlStyle,
    background: fillColor
  } : {
    ...radioControlStyle,
    boxShadow: `inset 0 0 0 2px ${strokeColor}`
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: radioFrameStyle,
    role: "radio",
    "aria-checked": isSelected,
    "aria-disabled": isDisabled || undefined
  }, rest), showHover && /*#__PURE__*/React.createElement("span", {
    style: hoverHaloStyle,
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("span", {
    style: control
  }, isSelected && /*#__PURE__*/React.createElement("span", {
    style: innerHoleStyle(surface),
    "aria-hidden": "true"
  })));
}
Object.assign(window, {
  RadioButton
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "radio-button.jsx", error: String((e && e.message) || e) }); }

// ui_kits/camp_admin/Components.jsx
try { (() => {
// CAMP Admin · Components.jsx
// Reusable components for the CAMP Admin web app surface.

const TEAL = "#3FB9B5";
const TEAL_HOVER = "#379E9A";
const PURPLE_900 = "#211050";
const PURPLE_500 = "#301A6D";
const GRAY_100 = "#F7F7F7";
const GRAY_200 = "#E7E7E7";
const GRAY_500 = "#808080";
const GRAY_800 = "#222222";
function Logo({
  size = 28
}) {
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 64 64",
    width: size,
    height: size
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "32",
    cy: "32",
    r: "28",
    stroke: PURPLE_900,
    strokeWidth: "3",
    fill: "none"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M32 4 L36 32 L32 60 L28 32 Z",
    fill: PURPLE_900
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4 32 L32 28 L60 32 L32 36 Z",
    fill: TEAL
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "32",
    cy: "32",
    r: "4",
    fill: PURPLE_900
  }));
}
function Icon({
  name,
  size = 20,
  color = "currentColor"
}) {
  const paths = {
    dashboard: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
      x: "3",
      y: "3",
      width: "7",
      height: "9",
      rx: "1.5"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "14",
      y: "3",
      width: "7",
      height: "5",
      rx: "1.5"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "14",
      y: "12",
      width: "7",
      height: "9",
      rx: "1.5"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "3",
      y: "16",
      width: "7",
      height: "5",
      rx: "1.5"
    })),
    wallet: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M3 7c0-1.1.9-2 2-2h13a2 2 0 012 2v2H5a2 2 0 00-2 2V7z"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "3",
      y: "9",
      width: "18",
      height: "11",
      rx: "2"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "17",
      cy: "14.5",
      r: "1.5"
    })),
    transfer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M4 8h12M12 4l4 4-4 4M20 16H8M12 20l-4-4 4-4"
    })),
    users: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
      cx: "9",
      cy: "8",
      r: "3.5"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "17",
      cy: "9",
      r: "2.5"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M21 19c0-2-1.5-4-4-4"
    })),
    audit: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M5 4h11l4 4v12a1 1 0 01-1 1H5a1 1 0 01-1-1V5a1 1 0 011-1z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M8 10h8M8 14h8M8 18h5"
    })),
    settings: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "3"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M12 2v3M12 19v3M5 12H2M22 12h-3M6 6L4 4M20 20l-2-2M6 18l-2 2M20 4l-2 2"
    })),
    bell: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M5 16V11a7 7 0 1114 0v5l1 2H4l1-2zM10 19a2 2 0 004 0"
    })),
    search: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
      cx: "11",
      cy: "11",
      r: "6"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M20 20l-4-4"
    })),
    chevron: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M9 6l6 6-6 6"
    })),
    plus: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M12 5v14M5 12h14"
    })),
    check: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M5 12l5 5 9-11"
    })),
    x: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M6 6l12 12M18 6L6 18"
    })),
    upload: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M12 4v12M7 9l5-5 5 5M5 18h14"
    })),
    download: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M12 4v12M7 11l5 5 5-5M5 20h14"
    })),
    filter: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M3 5h18M6 12h12M10 19h4"
    })),
    eye: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M2 12s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7z"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "3"
    }))
  };
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "1.6",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, paths[name]);
}
function Button({
  variant = "primary",
  size = "md",
  icon,
  children,
  onClick,
  disabled
}) {
  const base = {
    fontFamily: "Poppins, sans-serif",
    fontWeight: 700,
    fontSize: size === "sm" ? 13 : 14,
    lineHeight: "20px",
    borderRadius: 4,
    padding: size === "sm" ? "6px 14px" : "10px 20px",
    border: "1px solid transparent",
    cursor: disabled ? "not-allowed" : "pointer",
    transition: "all 180ms cubic-bezier(.2,0,0,1)",
    display: "inline-flex",
    alignItems: "center",
    gap: 6
  };
  const variants = {
    primary: {
      background: disabled ? "#B0B0B0" : TEAL,
      color: "#fff"
    },
    secondary: {
      background: "#fff",
      color: disabled ? "#B0B0B0" : TEAL,
      borderColor: disabled ? "#D4D4D4" : TEAL
    },
    tertiary: {
      background: "transparent",
      color: disabled ? "#B0B0B0" : TEAL
    },
    danger: {
      background: "#fff",
      color: "#F53D3D",
      borderColor: "#F53D3D"
    }
  };
  return /*#__PURE__*/React.createElement("button", {
    style: {
      ...base,
      ...variants[variant]
    },
    onClick: onClick,
    disabled: disabled,
    onMouseOver: e => {
      if (!disabled && variant === "primary") e.currentTarget.style.background = TEAL_HOVER;
    },
    onMouseOut: e => {
      if (!disabled && variant === "primary") e.currentTarget.style.background = TEAL;
    }
  }, icon && /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 16
  }), children);
}
function Tag({
  tone = "neutral",
  children
}) {
  const tones = {
    success: {
      bg: "#EDF9EE",
      fg: "#23B12F",
      dot: "#23B12F"
    },
    pending: {
      bg: "#FFF9EE",
      fg: "#B07000",
      dot: "#FFBA30"
    },
    info: {
      bg: "#F1F5FE",
      fg: "#4B82F1",
      dot: "#4B82F1"
    },
    critical: {
      bg: "#FFF5EF",
      fg: "#FA7C37",
      dot: "#FA7C37"
    },
    warning: {
      bg: "#FEEFEF",
      fg: "#F53D3D",
      dot: "#F53D3D"
    },
    neutral: {
      bg: "#F7F7F7",
      fg: "#4D4D4D",
      dot: "#808080"
    },
    brand: {
      bg: "#E6DDFF",
      fg: "#462999",
      dot: "#462999"
    }
  };
  const t = tones[tone];
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      padding: "2px 10px",
      borderRadius: 4,
      background: t.bg,
      color: t.fg,
      font: "700 12px/18px Poppins"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: "50%",
      background: t.dot
    }
  }), children);
}
function Input({
  label,
  value,
  onChange,
  placeholder,
  required,
  error,
  help,
  disabled,
  prefix
}) {
  const [focused, setFocused] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    style: {
      font: "600 12px/18px Poppins",
      color: GRAY_800
    }
  }, label, " ", required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "#F53D3D"
    }
  }, "*")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      height: 36,
      border: `1px solid ${error ? "#F53D3D" : focused ? TEAL : "#D4D4D4"}`,
      borderRadius: 4,
      boxShadow: focused && !error ? "0 0 0 3px rgba(63,185,181,.18)" : "none",
      background: disabled ? GRAY_100 : "#fff",
      padding: "0 12px"
    }
  }, prefix && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "400 13px Poppins",
      color: GRAY_500,
      marginRight: 6
    }
  }, prefix), /*#__PURE__*/React.createElement("input", {
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    disabled: disabled,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
      flex: 1,
      border: 0,
      outline: 0,
      font: "400 14px/20px Poppins",
      color: disabled ? "#B0B0B0" : GRAY_800,
      background: "transparent"
    }
  })), error ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: "400 11px/14px Poppins",
      color: "#F53D3D"
    }
  }, error) : help && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "400 11px/14px Poppins",
      color: GRAY_500
    }
  }, help));
}
function Card({
  children,
  elevated,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#fff",
      border: `1px solid ${GRAY_200}`,
      borderRadius: 8,
      boxShadow: elevated ? "0 8px 24px rgba(4,20,124,.10)" : "none",
      ...style
    }
  }, children);
}
function StatCard({
  label,
  value,
  delta,
  sub
}) {
  return /*#__PURE__*/React.createElement(Card, {
    elevated: true,
    style: {
      padding: "18px 20px",
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "700 11px/16px Poppins",
      color: GRAY_500,
      letterSpacing: ".06em",
      textTransform: "uppercase",
      marginBottom: 6
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "700 28px/36px Poppins",
      color: GRAY_800,
      letterSpacing: "-0.5px"
    }
  }, value), delta && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "700 12px/18px Poppins",
      padding: "0 6px",
      borderRadius: 4,
      color: delta.startsWith("+") ? "#23B12F" : "#F53D3D",
      background: delta.startsWith("+") ? "#EDF9EE" : "#FEEFEF"
    }
  }, delta)), sub && /*#__PURE__*/React.createElement("div", {
    style: {
      font: "400 12px/18px Poppins",
      color: GRAY_500,
      marginTop: 4
    }
  }, sub));
}
function SideNav({
  active,
  onSelect
}) {
  const items = [{
    id: "dashboard",
    icon: "dashboard",
    label: "Dashboard"
  }, {
    id: "wallets",
    icon: "wallet",
    label: "Wallets"
  }, {
    id: "transfers",
    icon: "transfer",
    label: "Transfers"
  }, {
    id: "clients",
    icon: "users",
    label: "Clients"
  }, {
    id: "audit",
    icon: "audit",
    label: "Audit Trail"
  }, {
    id: "settings",
    icon: "settings",
    label: "Settings"
  }];
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 232,
      background: PURPLE_900,
      color: "#fff",
      display: "flex",
      flexDirection: "column",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "20px 20px 14px",
      display: "flex",
      alignItems: "center",
      gap: 10,
      borderBottom: "1px solid rgba(255,255,255,.08)"
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    size: 28
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "700 14px/18px Poppins",
      letterSpacing: ".02em"
    }
  }, "CAMP"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "400 10px/14px Poppins",
      color: TEAL,
      letterSpacing: ".06em",
      textTransform: "uppercase"
    }
  }, "Admin \xB7 v3.0"))), /*#__PURE__*/React.createElement("nav", {
    style: {
      padding: "12px 10px",
      display: "flex",
      flexDirection: "column",
      gap: 2
    }
  }, items.map(it => {
    const isActive = active === it.id;
    return /*#__PURE__*/React.createElement("button", {
      key: it.id,
      onClick: () => onSelect(it.id),
      style: {
        display: "flex",
        alignItems: "center",
        gap: 12,
        padding: "10px 12px",
        borderRadius: 6,
        border: 0,
        cursor: "pointer",
        background: isActive ? "rgba(63,185,181,.16)" : "transparent",
        color: isActive ? TEAL : "rgba(255,255,255,.78)",
        font: "600 14px/20px Poppins",
        textAlign: "left",
        transition: "all 120ms"
      },
      onMouseOver: e => {
        if (!isActive) e.currentTarget.style.background = "rgba(255,255,255,.06)";
      },
      onMouseOut: e => {
        if (!isActive) e.currentTarget.style.background = "transparent";
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: it.icon,
      size: 18,
      color: isActive ? TEAL : "rgba(255,255,255,.78)"
    }), it.label);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "auto",
      padding: "16px 18px",
      borderTop: "1px solid rgba(255,255,255,.08)",
      font: "400 11px/16px Poppins",
      color: "rgba(255,255,255,.55)"
    }
  }, "Powered by", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "#fff",
      fontWeight: 600
    }
  }, "Alpha Ladder"), " ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: TEAL
    }
  }, "| MetaComp")));
}
function TopBar({
  title,
  breadcrumb
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      height: 64,
      borderBottom: `1px solid ${GRAY_200}`,
      background: "#fff",
      display: "flex",
      alignItems: "center",
      padding: "0 28px",
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, breadcrumb && /*#__PURE__*/React.createElement("div", {
    style: {
      font: "400 11px/14px Poppins",
      color: GRAY_500,
      marginBottom: 2
    }
  }, breadcrumb), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "700 18px/24px Poppins",
      color: GRAY_800
    }
  }, title)), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 280,
      height: 36,
      border: `1px solid ${GRAY_200}`,
      borderRadius: 4,
      display: "flex",
      alignItems: "center",
      padding: "0 12px",
      gap: 8,
      background: GRAY_100
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "search",
    size: 16,
    color: GRAY_500
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "400 13px Poppins",
      color: GRAY_500
    }
  }, "Search clients, refs, wallets\u2026")), /*#__PURE__*/React.createElement("button", {
    style: {
      width: 36,
      height: 36,
      borderRadius: 6,
      border: `1px solid ${GRAY_200}`,
      background: "#fff",
      display: "grid",
      placeItems: "center",
      position: "relative",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "bell",
    size: 18,
    color: GRAY_800
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: 6,
      right: 6,
      width: 8,
      height: 8,
      borderRadius: "50%",
      background: "#F53D3D",
      border: "1.5px solid #fff"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      borderRadius: "50%",
      background: PURPLE_500,
      color: "#fff",
      display: "grid",
      placeItems: "center",
      font: "700 13px Poppins"
    }
  }, "NL"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "600 13px/16px Poppins",
      color: GRAY_800
    }
  }, "Naomi Low"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "400 11px/14px Poppins",
      color: GRAY_500
    }
  }, "Compliance \xB7 Tier 1"))));
}
function Table({
  columns,
  rows
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      overflow: "hidden",
      border: `1px solid ${GRAY_200}`,
      borderRadius: 8,
      background: "#fff"
    }
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      width: "100%",
      borderCollapse: "collapse",
      fontFamily: "Poppins"
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    style: {
      background: GRAY_100
    }
  }, columns.map(c => /*#__PURE__*/React.createElement("th", {
    key: c.key,
    style: {
      textAlign: "left",
      padding: "12px 16px",
      font: "700 11px/16px Poppins",
      color: "#4D4D4D",
      letterSpacing: ".06em",
      textTransform: "uppercase",
      borderBottom: `1px solid ${GRAY_200}`
    }
  }, c.label)))), /*#__PURE__*/React.createElement("tbody", null, rows.map((r, i) => /*#__PURE__*/React.createElement("tr", {
    key: i,
    style: {
      borderBottom: i === rows.length - 1 ? 0 : `1px solid ${GRAY_200}`
    }
  }, columns.map(c => /*#__PURE__*/React.createElement("td", {
    key: c.key,
    style: {
      padding: "14px 16px",
      font: "400 13px/18px Poppins",
      color: GRAY_800,
      verticalAlign: "middle"
    }
  }, c.render ? c.render(r[c.key], r) : r[c.key])))))));
}
window.MetaComp = {
  Logo,
  Icon,
  Button,
  Tag,
  Input,
  Card,
  StatCard,
  SideNav,
  TopBar,
  Table,
  TEAL,
  TEAL_HOVER,
  PURPLE_900,
  PURPLE_500,
  GRAY_100,
  GRAY_200,
  GRAY_500,
  GRAY_800
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/camp_admin/Components.jsx", error: String((e && e.message) || e) }); }

})();
