/*! For license information please see component---src-pages-index-js-323dcfeb43dd33538905.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{RXBc:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return s}));var a=n("q1tI"),i=n.n(a),r=n("tc9R");function s(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(r.a,null,"Dashboard"))}},jVdC:function(e,t,n){!function(e){"use strict";var t="styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_"),n="stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_"),a=[/^sty/i,/^lut/i,/^mar/i,/^kwi/i,/^maj/i,/^cze/i,/^lip/i,/^sie/i,/^wrz/i,/^paź/i,/^lis/i,/^gru/i];function i(e){return e%10<5&&e%10>1&&~~(e/10)%10!=1}function r(e,t,n){var a=e+" ";switch(n){case"ss":return a+(i(e)?"sekundy":"sekund");case"m":return t?"minuta":"minutę";case"mm":return a+(i(e)?"minuty":"minut");case"h":return t?"godzina":"godzinę";case"hh":return a+(i(e)?"godziny":"godzin");case"ww":return a+(i(e)?"tygodnie":"tygodni");case"MM":return a+(i(e)?"miesiące":"miesięcy");case"yy":return a+(i(e)?"lata":"lat")}}e.defineLocale("pl",{months:function(e,a){return e?/D MMMM/.test(a)?n[e.month()]:t[e.month()]:t},monthsShort:"sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"),monthsParse:a,longMonthsParse:a,shortMonthsParse:a,weekdays:"niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"),weekdaysShort:"ndz_pon_wt_śr_czw_pt_sob".split("_"),weekdaysMin:"Nd_Pn_Wt_Śr_Cz_Pt_So".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Dziś o] LT",nextDay:"[Jutro o] LT",nextWeek:function(){switch(this.day()){case 0:return"[W niedzielę o] LT";case 2:return"[We wtorek o] LT";case 3:return"[W środę o] LT";case 6:return"[W sobotę o] LT";default:return"[W] dddd [o] LT"}},lastDay:"[Wczoraj o] LT",lastWeek:function(){switch(this.day()){case 0:return"[W zeszłą niedzielę o] LT";case 3:return"[W zeszłą środę o] LT";case 6:return"[W zeszłą sobotę o] LT";default:return"[W zeszły] dddd [o] LT"}},sameElse:"L"},relativeTime:{future:"za %s",past:"%s temu",s:"kilka sekund",ss:r,m:r,mm:r,h:r,hh:r,d:"1 dzień",dd:"%d dni",w:"tydzień",ww:r,M:"miesiąc",MM:r,y:"rok",yy:r},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})}(n("wd/R"))},tc9R:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var a=n("q1tI"),i=n.n(a),r=n("vOnD"),s=n("wd/R"),o=n.n(s),d=n("jVdC"),c=n.n(d),u=n("uF5k"),l=r.b.header.withConfig({displayName:"Heading__HeadingStyles",componentId:"sc-1xvfuln-0"})(["position:fixed;top:0;left:0;display:grid;grid-template-columns:36px 1fr auto;align-items:center;background:var(--white);width:100%;height:60px;border-bottom:1px solid var(--grey);padding:",";transition:.3s linear;.back{font-size:clamp(16px,24px,32px);background:transparent;border:none;transition:all .3s;&:hover{transform:translateX(-6px);}}h1{padding:0 10px;font-size:clamp(16px,20px,32px);white-space:nowrap;font-weight:var(--medium);}.currentDate{display:none;font-weight:var(--light);font-size:clamp(8px,16px,24px);text-align:right;@media (min-width:477px){display:block;}}"],(function(e){return e.open?"0 30px 0 60px":"0 20px"}));function p(e){var t=e.children;return i.a.createElement(u.b.Consumer,null,(function(e){var n=e.open;return i.a.createElement(l,{open:n},i.a.createElement("button",{className:"back"},"🡠"),i.a.createElement("h1",null,t),i.a.createElement("p",{className:"currentDate"},o()(c.a).format("dddd"),", ",o()(c.a).format("DD MMMM YYYY")))}))}}}]);
//# sourceMappingURL=component---src-pages-index-js-323dcfeb43dd33538905.js.map