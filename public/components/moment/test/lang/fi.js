var moment=require("../../moment");exports["lang:fi"]={setUp:function(e){moment.lang("fi"),e()},tearDown:function(e){moment.lang("en"),e()},parse:function(e){function a(a,n,o){e.equal(moment(a,n).month(),o,a+" should be month "+(o+1))}e.expect(96);var n,o="tammikuu tam_helmikuu hel_maaliskuu maa_huhtikuu huh_toukokuu tou_kesäkuu kes_heinäkuu hei_elokuu elo_syyskuu syys_lokakuu lok_marraskuu mar_joulukuu jou".split("_");for(n=0;12>n;n++)o[n]=o[n].split(" "),a(o[n][0],"MMM",n),a(o[n][1],"MMM",n),a(o[n][0],"MMMM",n),a(o[n][1],"MMMM",n),a(o[n][0].toLocaleLowerCase(),"MMMM",n),a(o[n][1].toLocaleLowerCase(),"MMMM",n),a(o[n][0].toLocaleUpperCase(),"MMMM",n),a(o[n][1].toLocaleUpperCase(),"MMMM",n);e.done()},format:function(e){e.expect(22);var a,n=[["dddd, MMMM Do YYYY, h:mm:ss a","sunnuntai, helmikuu 14. 2010, 3:25:50 pm"],["ddd, hA","su, 3PM"],["M Mo MM MMMM MMM","2 2. 02 helmikuu hel"],["YYYY YY","2010 10"],["D Do DD","14 14. 14"],["d do dddd ddd dd","0 0. sunnuntai su su"],["DDD DDDo DDDD","45 45. 045"],["w wo ww","6 6. 06"],["h hh","3 03"],["H HH","15 15"],["m mm","25 25"],["s ss","50 50"],["a A","pm PM"],["vuo\\den DDDo päivä","vuoden 45. päivä"],["L","14.02.2010"],["LL","14. helmikuuta 2010"],["LLL","14. helmikuuta 2010, klo 15.25"],["LLLL","sunnuntai, 14. helmikuuta 2010, klo 15.25"],["l","14.2.2010"],["ll","14. hel 2010"],["lll","14. hel 2010, klo 15.25"],["llll","su, 14. hel 2010, klo 15.25"]],o=moment(new Date(2010,1,14,15,25,50,125));for(a=0;n.length>a;a++)e.equal(o.format(n[a][0]),n[a][1],n[a][0]+" ---> "+n[a][1]);e.done()},"format ordinal":function(e){e.expect(31),e.equal(moment([2011,0,1]).format("DDDo"),"1.","1st"),e.equal(moment([2011,0,2]).format("DDDo"),"2.","2nd"),e.equal(moment([2011,0,3]).format("DDDo"),"3.","3rd"),e.equal(moment([2011,0,4]).format("DDDo"),"4.","4th"),e.equal(moment([2011,0,5]).format("DDDo"),"5.","5th"),e.equal(moment([2011,0,6]).format("DDDo"),"6.","6th"),e.equal(moment([2011,0,7]).format("DDDo"),"7.","7th"),e.equal(moment([2011,0,8]).format("DDDo"),"8.","8th"),e.equal(moment([2011,0,9]).format("DDDo"),"9.","9th"),e.equal(moment([2011,0,10]).format("DDDo"),"10.","10th"),e.equal(moment([2011,0,11]).format("DDDo"),"11.","11th"),e.equal(moment([2011,0,12]).format("DDDo"),"12.","12th"),e.equal(moment([2011,0,13]).format("DDDo"),"13.","13th"),e.equal(moment([2011,0,14]).format("DDDo"),"14.","14th"),e.equal(moment([2011,0,15]).format("DDDo"),"15.","15th"),e.equal(moment([2011,0,16]).format("DDDo"),"16.","16th"),e.equal(moment([2011,0,17]).format("DDDo"),"17.","17th"),e.equal(moment([2011,0,18]).format("DDDo"),"18.","18th"),e.equal(moment([2011,0,19]).format("DDDo"),"19.","19th"),e.equal(moment([2011,0,20]).format("DDDo"),"20.","20th"),e.equal(moment([2011,0,21]).format("DDDo"),"21.","21st"),e.equal(moment([2011,0,22]).format("DDDo"),"22.","22nd"),e.equal(moment([2011,0,23]).format("DDDo"),"23.","23rd"),e.equal(moment([2011,0,24]).format("DDDo"),"24.","24th"),e.equal(moment([2011,0,25]).format("DDDo"),"25.","25th"),e.equal(moment([2011,0,26]).format("DDDo"),"26.","26th"),e.equal(moment([2011,0,27]).format("DDDo"),"27.","27th"),e.equal(moment([2011,0,28]).format("DDDo"),"28.","28th"),e.equal(moment([2011,0,29]).format("DDDo"),"29.","29th"),e.equal(moment([2011,0,30]).format("DDDo"),"30.","30th"),e.equal(moment([2011,0,31]).format("DDDo"),"31.","31st"),e.done()},"format month":function(e){e.expect(12);var a,n="tammikuu tam_helmikuu hel_maaliskuu maa_huhtikuu huh_toukokuu tou_kesäkuu kes_heinäkuu hei_elokuu elo_syyskuu syy_lokakuu lok_marraskuu mar_joulukuu jou".split("_");for(a=0;n.length>a;a++)e.equal(moment([2011,a,1]).format("MMMM MMM"),n[a],n[a]);e.done()},"format week":function(e){e.expect(7);var a,n="sunnuntai su su_maanantai ma ma_tiistai ti ti_keskiviikko ke ke_torstai to to_perjantai pe pe_lauantai la la".split("_");for(a=0;n.length>a;a++)e.equal(moment([2011,0,2+a]).format("dddd ddd dd"),n[a],n[a]);e.done()},from:function(e){e.expect(30);var a=moment([2007,1,28]);e.equal(a.from(moment([2007,1,28]).add({s:44}),!0),"muutama sekunti","44 seconds = few seconds"),e.equal(a.from(moment([2007,1,28]).add({s:45}),!0),"minuutti","45 seconds = a minute"),e.equal(a.from(moment([2007,1,28]).add({s:89}),!0),"minuutti","89 seconds = a minute"),e.equal(a.from(moment([2007,1,28]).add({s:90}),!0),"kaksi minuuttia","90 seconds = 2 minutes"),e.equal(a.from(moment([2007,1,28]).add({m:44}),!0),"44 minuuttia","44 minutes = 44 minutes"),e.equal(a.from(moment([2007,1,28]).add({m:45}),!0),"tunti","45 minutes = an hour"),e.equal(a.from(moment([2007,1,28]).add({m:89}),!0),"tunti","89 minutes = an hour"),e.equal(a.from(moment([2007,1,28]).add({m:90}),!0),"kaksi tuntia","90 minutes = 2 hours"),e.equal(a.from(moment([2007,1,28]).add({h:5}),!0),"viisi tuntia","5 hours = 5 hours"),e.equal(a.from(moment([2007,1,28]).add({h:21}),!0),"21 tuntia","21 hours = 21 hours"),e.equal(a.from(moment([2007,1,28]).add({h:22}),!0),"päivä","22 hours = a day"),e.equal(a.from(moment([2007,1,28]).add({h:35}),!0),"päivä","35 hours = a day"),e.equal(a.from(moment([2007,1,28]).add({h:36}),!0),"kaksi päivää","36 hours = 2 days"),e.equal(a.from(moment([2007,1,28]).add({d:1}),!0),"päivä","1 day = a day"),e.equal(a.from(moment([2007,1,28]).add({d:5}),!0),"viisi päivää","5 days = 5 days"),e.equal(a.from(moment([2007,1,28]).add({d:25}),!0),"25 päivää","25 days = 25 days"),e.equal(a.from(moment([2007,1,28]).add({d:26}),!0),"kuukausi","26 days = a month"),e.equal(a.from(moment([2007,1,28]).add({d:30}),!0),"kuukausi","30 days = a month"),e.equal(a.from(moment([2007,1,28]).add({d:45}),!0),"kuukausi","45 days = a month"),e.equal(a.from(moment([2007,1,28]).add({d:46}),!0),"kaksi kuukautta","46 days = 2 months"),e.equal(a.from(moment([2007,1,28]).add({d:74}),!0),"kaksi kuukautta","75 days = 2 months"),e.equal(a.from(moment([2007,1,28]).add({d:76}),!0),"kolme kuukautta","76 days = 3 months"),e.equal(a.from(moment([2007,1,28]).add({M:1}),!0),"kuukausi","1 month = a month"),e.equal(a.from(moment([2007,1,28]).add({M:5}),!0),"viisi kuukautta","5 months = 5 months"),e.equal(a.from(moment([2007,1,28]).add({d:344}),!0),"11 kuukautta","344 days = 11 months"),e.equal(a.from(moment([2007,1,28]).add({d:345}),!0),"vuosi","345 days = a year"),e.equal(a.from(moment([2007,1,28]).add({d:547}),!0),"vuosi","547 days = a year"),e.equal(a.from(moment([2007,1,28]).add({d:548}),!0),"kaksi vuotta","548 days = 2 years"),e.equal(a.from(moment([2007,1,28]).add({y:1}),!0),"vuosi","1 year = a year"),e.equal(a.from(moment([2007,1,28]).add({y:5}),!0),"viisi vuotta","5 years = 5 years"),e.done()},suffix:function(e){e.expect(2),e.equal(moment(3e4).from(0),"muutaman sekunnin päästä","prefix"),e.equal(moment(0).from(3e4),"muutama sekunti sitten","suffix"),e.done()},"now from now":function(e){e.expect(1),e.equal(moment().fromNow(),"muutama sekunti sitten","now from now should display as in the past"),e.done()},fromNow:function(e){e.expect(2),e.equal(moment().add({s:30}).fromNow(),"muutaman sekunnin päästä","in a few seconds"),e.equal(moment().add({d:5}).fromNow(),"viiden päivän päästä","in 5 days"),e.done()},"calendar day":function(e){e.expect(6);var a=moment().hours(2).minutes(0).seconds(0);e.equal(moment(a).calendar(),"tänään klo 02.00","today at the same time"),e.equal(moment(a).add({m:25}).calendar(),"tänään klo 02.25","Now plus 25 min"),e.equal(moment(a).add({h:1}).calendar(),"tänään klo 03.00","Now plus 1 hour"),e.equal(moment(a).add({d:1}).calendar(),"huomenna klo 02.00","tomorrow at the same time"),e.equal(moment(a).subtract({h:1}).calendar(),"tänään klo 01.00","Now minus 1 hour"),e.equal(moment(a).subtract({d:1}).calendar(),"eilen klo 02.00","yesterday at the same time"),e.done()},"calendar next week":function(e){e.expect(15);var a,n;for(a=2;7>a;a++)n=moment().add({d:a}),e.equal(n.calendar(),n.format("dddd [klo] LT"),"today + "+a+" days current time"),n.hours(0).minutes(0).seconds(0).milliseconds(0),e.equal(n.calendar(),n.format("dddd [klo] LT"),"today + "+a+" days beginning of day"),n.hours(23).minutes(59).seconds(59).milliseconds(999),e.equal(n.calendar(),n.format("dddd [klo] LT"),"today + "+a+" days end of day");e.done()},"calendar last week":function(e){e.expect(15);for(var a,n,a=2;7>a;a++){var n=moment().subtract({d:a});e.equal(n.calendar(),n.format("[viime] dddd[na] [klo] LT"),"today - "+a+" days current time"),n.hours(0).minutes(0).seconds(0).milliseconds(0),e.equal(n.calendar(),n.format("[viime] dddd[na] [klo] LT"),"today - "+a+" days beginning of day"),n.hours(23).minutes(59).seconds(59).milliseconds(999),e.equal(n.calendar(),n.format("[viime] dddd[na] [klo] LT"),"today - "+a+" days end of day")}e.done()},"calendar all else":function(e){e.expect(4);var a=moment().subtract({w:1}),n=moment().add({w:1});e.equal(a.calendar(),a.format("L"),"yksi viikko sitten"),e.equal(n.calendar(),n.format("L"),"yhden viikon päästä"),a=moment().subtract({w:2}),n=moment().add({w:2}),e.equal(a.calendar(),a.format("L"),"kaksi viikkoa sitten"),e.equal(n.calendar(),n.format("L"),"kaden viikon päästä"),e.done()},"weeks year starting sunday":function(e){e.expect(5),e.equal(moment([2012,0,1]).week(),52,"Jan  1 2012 should be week 52"),e.equal(moment([2012,0,2]).week(),1,"Jan  2 2012 should be week 1"),e.equal(moment([2012,0,8]).week(),1,"Jan  8 2012 should be week 1"),e.equal(moment([2012,0,9]).week(),2,"Jan  9 2012 should be week 2"),e.equal(moment([2012,0,15]).week(),2,"Jan 15 2012 should be week 2"),e.done()},"weeks year starting monday":function(e){e.expect(5),e.equal(moment([2007,0,1]).week(),1,"Jan  1 2007 should be week 1"),e.equal(moment([2007,0,7]).week(),1,"Jan  7 2007 should be week 1"),e.equal(moment([2007,0,8]).week(),2,"Jan  8 2007 should be week 2"),e.equal(moment([2007,0,14]).week(),2,"Jan 14 2007 should be week 2"),e.equal(moment([2007,0,15]).week(),3,"Jan 15 2007 should be week 3"),e.done()},"weeks year starting tuesday":function(e){e.expect(6),e.equal(moment([2007,11,31]).week(),1,"Dec 31 2007 should be week 1"),e.equal(moment([2008,0,1]).week(),1,"Jan  1 2008 should be week 1"),e.equal(moment([2008,0,6]).week(),1,"Jan  6 2008 should be week 1"),e.equal(moment([2008,0,7]).week(),2,"Jan  7 2008 should be week 2"),e.equal(moment([2008,0,13]).week(),2,"Jan 13 2008 should be week 2"),e.equal(moment([2008,0,14]).week(),3,"Jan 14 2008 should be week 3"),e.done()},"weeks year starting wednesday":function(e){e.expect(6),e.equal(moment([2002,11,30]).week(),1,"Dec 30 2002 should be week 1"),e.equal(moment([2003,0,1]).week(),1,"Jan  1 2003 should be week 1"),e.equal(moment([2003,0,5]).week(),1,"Jan  5 2003 should be week 1"),e.equal(moment([2003,0,6]).week(),2,"Jan  6 2003 should be week 2"),e.equal(moment([2003,0,12]).week(),2,"Jan 12 2003 should be week 2"),e.equal(moment([2003,0,13]).week(),3,"Jan 13 2003 should be week 3"),e.done()},"weeks year starting thursday":function(e){e.expect(6),e.equal(moment([2008,11,29]).week(),1,"Dec 29 2008 should be week 1"),e.equal(moment([2009,0,1]).week(),1,"Jan  1 2009 should be week 1"),e.equal(moment([2009,0,4]).week(),1,"Jan  4 2009 should be week 1"),e.equal(moment([2009,0,5]).week(),2,"Jan  5 2009 should be week 2"),e.equal(moment([2009,0,11]).week(),2,"Jan 11 2009 should be week 2"),e.equal(moment([2009,0,13]).week(),3,"Jan 12 2009 should be week 3"),e.done()},"weeks year starting friday":function(e){e.expect(6),e.equal(moment([2009,11,28]).week(),53,"Dec 28 2009 should be week 53"),e.equal(moment([2010,0,1]).week(),53,"Jan  1 2010 should be week 53"),e.equal(moment([2010,0,3]).week(),53,"Jan  3 2010 should be week 53"),e.equal(moment([2010,0,4]).week(),1,"Jan  4 2010 should be week 1"),e.equal(moment([2010,0,10]).week(),1,"Jan 10 2010 should be week 1"),e.equal(moment([2010,0,11]).week(),2,"Jan 11 2010 should be week 2"),e.done()},"weeks year starting saturday":function(e){e.expect(6),e.equal(moment([2010,11,27]).week(),52,"Dec 27 2010 should be week 52"),e.equal(moment([2011,0,1]).week(),52,"Jan  1 2011 should be week 52"),e.equal(moment([2011,0,2]).week(),52,"Jan  2 2011 should be week 52"),e.equal(moment([2011,0,3]).week(),1,"Jan  3 2011 should be week 1"),e.equal(moment([2011,0,9]).week(),1,"Jan  9 2011 should be week 1"),e.equal(moment([2011,0,10]).week(),2,"Jan 10 2011 should be week 2"),e.done()},"weeks year starting sunday formatted":function(e){e.expect(5),e.equal(moment([2012,0,1]).format("w ww wo"),"52 52 52.","Jan  1 2012 should be week 52"),e.equal(moment([2012,0,2]).format("w ww wo"),"1 01 1.","Jan  2 2012 should be week 1"),e.equal(moment([2012,0,8]).format("w ww wo"),"1 01 1.","Jan  8 2012 should be week 1"),e.equal(moment([2012,0,9]).format("w ww wo"),"2 02 2.","Jan  9 2012 should be week 2"),e.equal(moment([2012,0,15]).format("w ww wo"),"2 02 2.","Jan 15 2012 should be week 2"),e.done()}};