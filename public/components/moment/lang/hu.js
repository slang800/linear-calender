function translate(e,t,a,n){var r=e;switch(a){case"s":return n||t?"néhány másodperc":"néhány másodperce";case"m":return"egy"+(n||t?" perc":" perce");case"mm":return r+(n||t?" perc":" perce");case"h":return"egy"+(n||t?" óra":" órája");case"hh":return r+(n||t?" óra":" órája");case"d":return"egy"+(n||t?" nap":" napja");case"dd":return r+(n||t?" nap":" napja");case"M":return"egy"+(n||t?" hónap":" hónapja");case"MM":return r+(n||t?" hónap":" hónapja");case"y":return"egy"+(n||t?" év":" éve");case"yy":return r+(n||t?" év":" éve")}return""}function week(e){return(e?"":"múlt ")+"["+weekEndings[this.day()]+"] LT[-kor]"}var weekEndings="vasárnap hétfőn kedden szerdán csütörtökön pénteken szombaton".split(" ");require("../moment").lang("hu",{months:"január_február_március_április_május_június_július_augusztus_szeptember_október_november_december".split("_"),monthsShort:"jan_feb_márc_ápr_máj_jún_júl_aug_szept_okt_nov_dec".split("_"),weekdays:"vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat".split("_"),weekdaysShort:"v_h_k_sze_cs_p_szo".split("_"),longDateFormat:{LT:"H:mm",L:"YYYY.MM.DD.",LL:"YYYY. MMMM D.",LLL:"YYYY. MMMM D., LT",LLLL:"YYYY. MMMM D., dddd LT"},calendar:{sameDay:"[ma] LT[-kor]",nextDay:"[holnap] LT[-kor]",nextWeek:function(){return week.call(this,!0)},lastDay:"[tegnap] LT[-kor]",lastWeek:function(){return week.call(this,!1)},sameElse:"L"},relativeTime:{future:"%s múlva",past:"%s",s:translate,m:translate,mm:translate,h:translate,hh:translate,d:translate,dd:translate,M:translate,MM:translate,y:translate,yy:translate},ordinal:"%d.",week:{dow:1,doy:7}});