function plural(e){return e>1&&5>e&&1!==~~(e/10)}function translate(e,t,n,a){var r=e+" ";switch(n){case"s":return t||a?"pár vteřin":"pár vteřinami";case"m":return t?"minuta":a?"minutu":"minutou";case"mm":return t||a?r+(plural(e)?"minuty":"minut"):r+"minutami";case"h":return t?"hodina":a?"hodinu":"hodinou";case"hh":return t||a?r+(plural(e)?"hodiny":"hodin"):r+"hodinami";case"d":return t||a?"den":"dnem";case"dd":return t||a?r+(plural(e)?"dny":"dní"):r+"dny";case"M":return t||a?"měsíc":"měsícem";case"MM":return t||a?r+(plural(e)?"měsíce":"měsíců"):r+"měsíci";case"y":return t||a?"rok":"rokem";case"yy":return t||a?r+(plural(e)?"roky":"let"):r+"lety"}}var months="leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec".split("_"),monthsShort="led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro".split("_");require("../moment").lang("cs",{months:months,monthsShort:monthsShort,monthsParse:function(e,t){var n,a=[];for(n=0;12>n;n++)a[n]=RegExp("^"+e[n]+"$|^"+t[n]+"$","i");return a}(months,monthsShort),weekdays:"neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota".split("_"),weekdaysShort:"ne_po_út_st_čt_pá_so".split("_"),weekdaysMin:"ne_po_út_st_čt_pá_so".split("_"),longDateFormat:{LT:"H:mm",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY LT",LLLL:"dddd D. MMMM YYYY LT"},calendar:{sameDay:"[dnes v] LT",nextDay:"[zítra v] LT",nextWeek:function(){switch(this.day()){case 0:return"[v neděli v] LT";case 1:case 2:return"[v] dddd [v] LT";case 3:return"[ve středu v] LT";case 4:return"[ve čtvrtek v] LT";case 5:return"[v pátek v] LT";case 6:return"[v sobotu v] LT"}},lastDay:"[včera v] LT",lastWeek:function(){switch(this.day()){case 0:return"[minulou neděli v] LT";case 1:case 2:return"[minulé] dddd [v] LT";case 3:return"[minulou středu v] LT";case 4:case 5:return"[minulý] dddd [v] LT";case 6:return"[minulou sobotu v] LT"}},sameElse:"L"},relativeTime:{future:"za %s",past:"před %s",s:translate,m:translate,mm:translate,h:translate,hh:translate,d:translate,dd:translate,M:translate,MM:translate,y:translate,yy:translate},ordinal:"%d.",week:{dow:1,doy:4}});