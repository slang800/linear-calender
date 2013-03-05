function translate(e,t,a,n){var r="";switch(a){case"s":return n?"muutaman sekunnin":"muutama sekunti";case"m":return n?"minuutin":"minuutti";case"mm":r=n?"minuutin":"minuuttia";break;case"h":return n?"tunnin":"tunti";case"hh":r=n?"tunnin":"tuntia";break;case"d":return n?"päivän":"päivä";case"dd":r=n?"päivän":"päivää";break;case"M":return n?"kuukauden":"kuukausi";case"MM":r=n?"kuukauden":"kuukautta";break;case"y":return n?"vuoden":"vuosi";case"yy":r=n?"vuoden":"vuotta"}return r=verbal_number(e,n)+" "+r}function verbal_number(e,t){return 10>e?t?numbers_future[e]:numbers_past[e]:e}var numbers_past="nolla yksi kaksi kolme neljä viisi kuusi seitsemän kahdeksan yhdeksän".split(" "),numbers_future=["nolla","yhden","kahden","kolmen","neljän","viiden","kuuden",numbers_past[7],numbers_past[8],numbers_past[9]];require("../moment").lang("fi",{months:"tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu".split("_"),monthsShort:"tam_hel_maa_huh_tou_kes_hei_elo_syy_lok_mar_jou".split("_"),weekdays:"sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai".split("_"),weekdaysShort:"su_ma_ti_ke_to_pe_la".split("_"),weekdaysMin:"su_ma_ti_ke_to_pe_la".split("_"),longDateFormat:{LT:"HH.mm",L:"DD.MM.YYYY",LL:"Do MMMM[ta] YYYY",LLL:"Do MMMM[ta] YYYY, [klo] LT",LLLL:"dddd, Do MMMM[ta] YYYY, [klo] LT",l:"D.M.YYYY",ll:"Do MMM YYYY",lll:"Do MMM YYYY, [klo] LT",llll:"ddd, Do MMM YYYY, [klo] LT"},calendar:{sameDay:"[tänään] [klo] LT",nextDay:"[huomenna] [klo] LT",nextWeek:"dddd [klo] LT",lastDay:"[eilen] [klo] LT",lastWeek:"[viime] dddd[na] [klo] LT",sameElse:"L"},relativeTime:{future:"%s päästä",past:"%s sitten",s:translate,m:translate,mm:translate,h:translate,hh:translate,d:translate,dd:translate,M:translate,MM:translate,y:translate,yy:translate},ordinal:"%d.",week:{dow:1,doy:4}});