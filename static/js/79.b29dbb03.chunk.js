"use strict";(self.webpackChunklk_elections=self.webpackChunklk_elections||[]).push([[79],{4079:(e,r,t)=>{t.r(r),t.d(r,{default:()=>p});var n=t(5043),a=t(579);function l(e){let{children:r}=e;return(0,a.jsx)("th",{className:"hidden",children:r})}var s=t(8298),c=t(7392);function o(e){let{handleToggleXY:r}=e;return(0,a.jsx)(c.A,{onClick:r,children:(0,a.jsx)(s.A,{sx:{fontSize:"80%",opacity:.25}})})}var d=t(6446),i=t(7158),S=t(6723);function x(e){let{xScalar:r,iX:t,setSortXScalar:n,scalarToOriginal:l}=e;const s=l[r];return(0,a.jsx)("th",{children:(0,a.jsxs)(d.A,{alignItems:"center",children:[i.A4.formatCellValue(s,!1)," ",(0,a.jsx)(c.A,{onClick:function(){n(r)},children:(0,a.jsx)(S.A.SortVertical,{sx:S.A.Style.Sort})})]})})}var u=t(7885);function h(e){let{idx:r,handleToggleXY:t,setSortXScalar:n,scalarToOriginal:s,showExpanded:c}=e,d=Object.keys(Object.values(r)[0]);return!c&&d.length>u.bQ.DEFAULT_DISPLAY_MAX_COLS&&(d=d.slice(0,u.bQ.DEFAULT_DISPLAY_MAX_COLS)),(0,a.jsxs)("tr",{children:[(0,a.jsx)(l,{children:(0,a.jsx)(o,{handleToggleXY:t})}),(0,a.jsx)(l,{}),d.map((function(e,r){return(0,a.jsx)(x,{xScalar:e,iX:r,setSortXScalar:n,scalarToOriginal:s},"header-"+r)}))]})}function A(e){let{idx:r,handleToggleXY:t,setSortXScalar:n,scalarToOriginal:l,showExpanded:s}=e;return(0,a.jsx)("thead",{children:(0,a.jsx)(h,{idx:r,handleToggleXY:t,setSortXScalar:n,scalarToOriginal:l,showExpanded:s})})}function O(e){let{setSortYScalarAndOrderInner:r,y:t}=e;return[(0,a.jsx)("td",{children:i.A4.formatCellValue(t)},"label"),(0,a.jsx)("th",{children:(0,a.jsx)(c.A,{onClick:r,children:(0,a.jsx)(S.A.SortHorizontal,{sx:S.A.Style.Sort})})},"button")]}function j(e){let{z:r}=e;return(0,a.jsx)("td",{children:i.A4.formatCellValue(r)})}function g(e){let{setSortYScalarAndOrder:r,yScalar:t,scalarToOriginal:n,iY:l,firstYXScalarList:s,xScalarToZ:c,showExpanded:o}=e;return!o&&s.length>=u.bQ.DEFAULT_DISPLAY_MAX_COLS&&(s=s.slice(0,u.bQ.DEFAULT_DISPLAY_MAX_COLS)),(0,a.jsxs)("tr",{children:[(0,a.jsx)(O,{setSortYScalarAndOrderInner:function(){r(t)},y:n[t]}),s.map((function(e,r){const t=c[e];return(0,a.jsx)(j,{z:t},"cell-"+r+"-"+l)}))]})}function X(e){let{idx:r,setSortYScalarAndOrder:t,scalarToOriginal:n,showExpanded:l}=e;const s=Object.keys(Object.values(r)[0]);let c=Object.entries(r);const o=c.length;return!l&&o>u.bQ.DEFAULT_DISPLAY_MAX_ROWS&&(c=c.slice(0,u.bQ.DEFAULT_DISPLAY_MAX_ROWS)),(0,a.jsx)("tbody",{children:c.map((function(e,r){let[c,o]=e;return(0,a.jsx)(g,{setSortYScalarAndOrder:t,yScalar:c,scalarToOriginal:n,iY:r,firstYXScalarList:s,xScalarToZ:o,showExpanded:l},"row-"+r)}))})}var Y=t(5865);function T(e){let{idx:r,handleToggleXY:t,setSortXScalarAndOrder:l,setSortYScalarAndOrder:s,scalarToOriginal:o,showExpanded:i=!1}=e;const[x,h]=n.useState(i),O=x?S.A.ExpandCollapse:S.A.ExpandExpand,j=Object.keys(r).length,g=Object.keys(Object.values(r)[0]).length,T=j>u.bQ.DEFAULT_DISPLAY_MAX_ROWS||g>u.bQ.DEFAULT_DISPLAY_MAX_COLS,f=x?"Collapse":"Expand (".concat(j," x ").concat(g,") cells");return(0,a.jsxs)(d.A,{children:[(0,a.jsxs)("table",{children:[(0,a.jsx)(A,{idx:r,handleToggleXY:t,setSortXScalar:l,scalarToOriginal:o,showExpanded:x}),(0,a.jsx)(X,{idx:r,setSortYScalarAndOrder:s,scalarToOriginal:o,showExpanded:x})]}),T?(0,a.jsxs)(d.A,{children:[(0,a.jsx)(c.A,{onClick:function(){h(!x)},children:(0,a.jsx)(O,{})}),(0,a.jsx)(Y.A,{variant:"caption",children:f})]}):null]})}function f(e,r){let[t,n]=e,[a,l]=r;return function(e){t===e?l(!a):(n(e),l(!1))}}function p(e){let{sparseMatrix:r,zKey:t,xKey:l,yKey:s,showExpanded:c}=e;const{xKeyInner:o,yKeyInner:d,handleToggleXY:i}=function(e,r){const[t,a]=(0,n.useState)(e),[l,s]=(0,n.useState)(r);return{xKeyInner:t,yKeyInner:l,handleToggleXY:function(){a(l),s(t)}}}(l,s),{sortXScalar:S,sortXReverse:x,sortYScalar:u,sortYReverse:h,setSortXScalarAndOrder:A,setSortYScalarAndOrder:O}=function(){const[e,r]=(0,n.useState)(null),[t,a]=(0,n.useState)(null),[l,s]=(0,n.useState)(!1),[c,o]=(0,n.useState)(!1);return{sortXScalar:e,sortXReverse:l,sortYScalar:t,sortYReverse:c,setSortXScalarAndOrder:f([e,r],[l,s]),setSortYScalarAndOrder:f([t,a],[c,o])}}();let j=r.getIdxOrdered([o,d,t],[S,x],[u,h]);return 0===Object.keys(j).length?null:(0,a.jsx)(T,{idx:j,handleToggleXY:i,setSortXScalarAndOrder:A,setSortYScalarAndOrder:O,scalarToOriginal:r.scalarToOriginal,showExpanded:c})}},8298:(e,r,t)=>{var n=t(4994);r.A=void 0;var a=n(t(39)),l=t(579);r.A=(0,a.default)((0,l.jsx)("path",{d:"M16.48 2.52c3.27 1.55 5.61 4.72 5.97 8.48h1.5C23.44 4.84 18.29 0 12 0l-.66.03 3.81 3.81zm-6.25-.77c-.59-.59-1.54-.59-2.12 0L1.75 8.11c-.59.59-.59 1.54 0 2.12l12.02 12.02c.59.59 1.54.59 2.12 0l6.36-6.36c.59-.59.59-1.54 0-2.12zm4.6 19.44L2.81 9.17l6.36-6.36 12.02 12.02zm-7.31.29C4.25 19.94 1.91 16.76 1.55 13H.05C.56 19.16 5.71 24 12 24l.66-.03-3.81-3.81z"}),"ScreenRotation")}}]);
//# sourceMappingURL=79.b29dbb03.chunk.js.map