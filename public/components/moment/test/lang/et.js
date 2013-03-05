var moment=require("../../moment");exports["lang:et"]={setUp:function(e){moment.lang("et"),e()},tearDown:function(e){moment.lang("en"),e()},parse:function(e){function a(a,n,o){e.equal(moment(a,n).month(),o,a+" peaks olema kuu "+(o+1))}e.expect(96);var n,o="jaanuar jaan_veebruar veebr_märts märts_aprill apr_mai mai_juuni juuni_juuli juuli_august aug_september sept_oktoober okt_november nov_detsember dets".split("_");for(n=0;12>n;n++)o[n]=o[n].split(" "),a(o[n][0],"MMM",n),a(o[n][1],"MMM",n),a(o[n][0],"MMMM",n),a(o[n][1],"MMMM",n),a(o[n][0].toLocaleLowerCase(),"MMMM",n),a(o[n][1].toLocaleLowerCase(),"MMMM",n),a(o[n][0].toLocaleUpperCase(),"MMMM",n),a(o[n][1].toLocaleUpperCase(),"MMMM",n);e.done()},format:function(e){e.expect(22);var a,n=[["dddd, Do MMMM YYYY, H:mm:ss","pühapäev, 14. veebruar 2010, 15:25:50"],["ddd, h","P, 3"],["M Mo MM MMMM MMM","2 2. 02 veebruar veebr"],["YYYY YY","2010 10"],["D Do DD","14 14. 14"],["d do dddd ddd dd","0 0. pühapäev P P"],["DDD DDDo DDDD","45 45. 045"],["w wo ww","6 6. 06"],["h hh","3 03"],["H HH","15 15"],["m mm","25 25"],["s ss","50 50"],["a A","pm PM"],["[aasta] DDDo [päev]","aasta 45. päev"],["L","14.02.2010"],["LL","14. veebruar 2010"],["LLL","14. veebruar 2010 15:25"],["LLLL","pühapäev, 14. veebruar 2010 15:25"],["l","14.2.2010"],["ll","14. veebr 2010"],["lll","14. veebr 2010 15:25"],["llll","P, 14. veebr 2010 15:25"]],o=moment(new Date(2010,1,14,15,25,50,125));for(a=0;n.length>a;a++)e.equal(o.format(n[a][0]),n[a][1],n[a][0]+" ---> "+n[a][1]);e.done()},"format ordinal":function(e){e.expect(31),e.equal(moment([2011,0,1]).format("DDDo"),"1.","1."),e.equal(moment([2011,0,2]).format("DDDo"),"2.","2."),e.equal(moment([2011,0,3]).format("DDDo"),"3.","3."),e.equal(moment([2011,0,4]).format("DDDo"),"4.","4."),e.equal(moment([2011,0,5]).format("DDDo"),"5.","5."),e.equal(moment([2011,0,6]).format("DDDo"),"6.","6."),e.equal(moment([2011,0,7]).format("DDDo"),"7.","7."),e.equal(moment([2011,0,8]).format("DDDo"),"8.","8."),e.equal(moment([2011,0,9]).format("DDDo"),"9.","9."),e.equal(moment([2011,0,10]).format("DDDo"),"10.","10."),e.equal(moment([2011,0,11]).format("DDDo"),"11.","11."),e.equal(moment([2011,0,12]).format("DDDo"),"12.","12."),e.equal(moment([2011,0,13]).format("DDDo"),"13.","13."),e.equal(moment([2011,0,14]).format("DDDo"),"14.","14."),e.equal(moment([2011,0,15]).format("DDDo"),"15.","15."),e.equal(moment([2011,0,16]).format("DDDo"),"16.","16."),e.equal(moment([2011,0,17]).format("DDDo"),"17.","17."),e.equal(moment([2011,0,18]).format("DDDo"),"18.","18."),e.equal(moment([2011,0,19]).format("DDDo"),"19.","19."),e.equal(moment([2011,0,20]).format("DDDo"),"20.","20."),e.equal(moment([2011,0,21]).format("DDDo"),"21.","21."),e.equal(moment([2011,0,22]).format("DDDo"),"22.","22."),e.equal(moment([2011,0,23]).format("DDDo"),"23.","23."),e.equal(moment([2011,0,24]).format("DDDo"),"24.","24."),e.equal(moment([2011,0,25]).format("DDDo"),"25.","25."),e.equal(moment([2011,0,26]).format("DDDo"),"26.","26."),e.equal(moment([2011,0,27]).format("DDDo"),"27.","27."),e.equal(moment([2011,0,28]).format("DDDo"),"28.","28."),e.equal(moment([2011,0,29]).format("DDDo"),"29.","29."),e.equal(moment([2011,0,30]).format("DDDo"),"30.","30."),e.equal(moment([2011,0,31]).format("DDDo"),"31.","31."),e.done()},"format month":function(e){e.expect(12);var a,n="jaanuar jaan_veebruar veebr_märts märts_aprill apr_mai mai_juuni juuni_juuli juuli_august aug_september sept_oktoober okt_november nov_detsember dets".split("_");for(a=0;n.length>a;a++)e.equal(moment([2011,a,1]).format("MMMM MMM"),n[a],n[a]);e.done()},"format week":function(e){e.expect(7);var a,n="pühapäev P P_esmaspäev E E_teisipäev T T_kolmapäev K K_neljapäev N N_reede R R_laupäev L L".split("_");for(a=0;n.length>a;a++)e.equal(moment([2011,0,2+a]).format("dddd ddd dd"),n[a],n[a]);e.done()},from:function(e){e.expect(30);var a=moment([2007,1,28]);e.equal(a.from(moment([2007,1,28]).add({s:44}),!0),"paari sekundi","44 seconds = paari sekundi"),e.equal(a.from(moment([2007,1,28]).add({s:45}),!0),"minut","45 seconds = minut"),e.equal(a.from(moment([2007,1,28]).add({s:89}),!0),"minut","89 seconds = minut"),e.equal(a.from(moment([2007,1,28]).add({s:90}),!0),"2 minutit","90 seconds = 2 minutit"),e.equal(a.from(moment([2007,1,28]).add({m:44}),!0),"44 minutit","44 minutes = 44 minutit"),e.equal(a.from(moment([2007,1,28]).add({m:45}),!0),"tund","45 minutes = tund"),e.equal(a.from(moment([2007,1,28]).add({m:89}),!0),"tund","89 minutes = tund"),e.equal(a.from(moment([2007,1,28]).add({m:90}),!0),"2 tundi","90 minutes = 2 tundi"),e.equal(a.from(moment([2007,1,28]).add({h:5}),!0),"5 tundi","5 hours = 5 tundi"),e.equal(a.from(moment([2007,1,28]).add({h:21}),!0),"21 tundi","21 hours = 21 tundi"),e.equal(a.from(moment([2007,1,28]).add({h:22}),!0),"päev","22 hours = päev"),e.equal(a.from(moment([2007,1,28]).add({h:35}),!0),"päev","35 hours = päev"),e.equal(a.from(moment([2007,1,28]).add({h:36}),!0),"2 päeva","36 hours = 2 päeva"),e.equal(a.from(moment([2007,1,28]).add({d:1}),!0),"päev","1 day = päev"),e.equal(a.from(moment([2007,1,28]).add({d:5}),!0),"5 päeva","5 days = 5 päeva"),e.equal(a.from(moment([2007,1,28]).add({d:25}),!0),"25 päeva","25 days = 25 päeva"),e.equal(a.from(moment([2007,1,28]).add({d:26}),!0),"kuu","26 days = kuu"),e.equal(a.from(moment([2007,1,28]).add({d:30}),!0),"kuu","30 days = kuu"),e.equal(a.from(moment([2007,1,28]).add({d:45}),!0),"kuu","45 days = kuu"),e.equal(a.from(moment([2007,1,28]).add({d:46}),!0),"2 kuud","46 days = 2 kuud"),e.equal(a.from(moment([2007,1,28]).add({d:74}),!0),"2 kuud","75 days = 2 kuud"),e.equal(a.from(moment([2007,1,28]).add({d:76}),!0),"3 kuud","76 days = 3 kuud"),e.equal(a.from(moment([2007,1,28]).add({M:1}),!0),"kuu","1 month = kuu"),e.equal(a.from(moment([2007,1,28]).add({M:5}),!0),"5 kuud","5 months = 5 kuud"),e.equal(a.from(moment([2007,1,28]).add({d:344}),!0),"11 kuud","344 days = 11 kuud"),e.equal(a.from(moment([2007,1,28]).add({d:345}),!0),"aasta","345 days = aasta"),e.equal(a.from(moment([2007,1,28]).add({d:547}),!0),"aasta","547 days = aasta"),e.equal(a.from(moment([2007,1,28]).add({d:548}),!0),"2 aastat","548 days = 2 aastat"),e.equal(a.from(moment([2007,1,28]).add({y:1}),!0),"aasta","1 year = aasta"),e.equal(a.from(moment([2007,1,28]).add({y:5}),!0),"5 aastat","5 years = 5 aastat"),e.done()},suffix:function(e){e.expect(2),e.equal(moment(3e4).from(0),"paari sekundi pärast","prefix"),e.equal(moment(0).from(3e4),"paar sekundit tagasi","suffix"),e.done()},"now from now":function(e){e.expect(1),e.equal(moment().fromNow(),"paar sekundit tagasi","now from now should display as in the past"),e.done()},fromNow:function(e){e.expect(2),e.equal(moment().add({s:30}).fromNow(),"paari sekundi pärast","paari sekundi pärast"),e.equal(moment().add({d:5}).fromNow(),"5 päeva pärast","5 päeva pärast"),e.done()},"calendar day":function(e){e.expect(6);var a=moment().hours(2).minutes(0).seconds(0);e.equal(moment(a).calendar(),"Täna, 2:00","today at the same time"),e.equal(moment(a).add({m:25}).calendar(),"Täna, 2:25","Now plus 25 min"),e.equal(moment(a).add({h:1}).calendar(),"Täna, 3:00","Now plus 1 hour"),e.equal(moment(a).add({d:1}).calendar(),"Homme, 2:00","tomorrow at the same time"),e.equal(moment(a).subtract({h:1}).calendar(),"Täna, 1:00","Now minus 1 hour"),e.equal(moment(a).subtract({d:1}).calendar(),"Eile, 2:00","yesterday at the same time"),e.done()},"calendar next week":function(e){e.expect(15);var a,n;for(a=2;7>a;a++)n=moment().add({d:a}),e.equal(n.calendar(),n.format("[Järgmine] dddd LT"),"Today + "+a+" days current time"),n.hours(0).minutes(0).seconds(0).milliseconds(0),e.equal(n.calendar(),n.format("[Järgmine] dddd LT"),"Today + "+a+" days beginning of day"),n.hours(23).minutes(59).seconds(59).milliseconds(999),e.equal(n.calendar(),n.format("[Järgmine] dddd LT"),"Today + "+a+" days end of day");e.done()},"calendar last week":function(e){e.expect(15);var a,n;for(a=2;7>a;a++)n=moment().subtract({d:a}),e.equal(n.calendar(),n.format("[Eelmine] dddd LT"),"Today - "+a+" days current time"),n.hours(0).minutes(0).seconds(0).milliseconds(0),e.equal(n.calendar(),n.format("[Eelmine] dddd LT"),"Today - "+a+" days beginning of day"),n.hours(23).minutes(59).seconds(59).milliseconds(999),e.equal(n.calendar(),n.format("[Eelmine] dddd LT"),"Today - "+a+" days end of day");e.done()},"calendar all else":function(e){e.expect(4);var a=moment().subtract({w:1}),n=moment().add({w:1});e.equal(a.calendar(),a.format("L"),"1 nädal tagasi"),e.equal(n.calendar(),n.format("L"),"1 nädala pärast"),a=moment().subtract({w:2}),n=moment().add({w:2}),e.equal(a.calendar(),a.format("L"),"2 nädalat tagasi"),e.equal(n.calendar(),n.format("L"),"2 nädala pärast"),e.done()},"weeks year starting sunday":function(e){e.expect(5),e.equal(moment([2012,0,1]).week(),52,"Jan  1 2012 should be week 52"),e.equal(moment([2012,0,2]).week(),1,"Jan  2 2012 should be week 1"),e.equal(moment([2012,0,8]).week(),1,"Jan  8 2012 should be week 1"),e.equal(moment([2012,0,9]).week(),2,"Jan  9 2012 should be week 2"),e.equal(moment([2012,0,15]).week(),2,"Jan 15 2012 should be week 2"),e.done()},"weeks year starting monday":function(e){e.expect(5),e.equal(moment([2007,0,1]).week(),1,"Jan  1 2007 should be week 1"),e.equal(moment([2007,0,7]).week(),1,"Jan  7 2007 should be week 1"),e.equal(moment([2007,0,8]).week(),2,"Jan  8 2007 should be week 2"),e.equal(moment([2007,0,14]).week(),2,"Jan 14 2007 should be week 2"),e.equal(moment([2007,0,15]).week(),3,"Jan 15 2007 should be week 3"),e.done()},"weeks year starting tuesday":function(e){e.expect(6),e.equal(moment([2007,11,31]).week(),1,"Dec 31 2007 should be week 1"),e.equal(moment([2008,0,1]).week(),1,"Jan  1 2008 should be week 1"),e.equal(moment([2008,0,6]).week(),1,"Jan  6 2008 should be week 1"),e.equal(moment([2008,0,7]).week(),2,"Jan  7 2008 should be week 2"),e.equal(moment([2008,0,13]).week(),2,"Jan 13 2008 should be week 2"),e.equal(moment([2008,0,14]).week(),3,"Jan 14 2008 should be week 3"),e.done()},"weeks year starting wednesday":function(e){e.expect(6),e.equal(moment([2002,11,30]).week(),1,"Dec 30 2002 should be week 1"),e.equal(moment([2003,0,1]).week(),1,"Jan  1 2003 should be week 1"),e.equal(moment([2003,0,5]).week(),1,"Jan  5 2003 should be week 1"),e.equal(moment([2003,0,6]).week(),2,"Jan  6 2003 should be week 2"),e.equal(moment([2003,0,12]).week(),2,"Jan 12 2003 should be week 2"),e.equal(moment([2003,0,13]).week(),3,"Jan 13 2003 should be week 3"),e.done()},"weeks year starting thursday":function(e){e.expect(6),e.equal(moment([2008,11,29]).week(),1,"Dec 29 2008 should be week 1"),e.equal(moment([2009,0,1]).week(),1,"Jan  1 2009 should be week 1"),e.equal(moment([2009,0,4]).week(),1,"Jan  4 2009 should be week 1"),e.equal(moment([2009,0,5]).week(),2,"Jan  5 2009 should be week 2"),e.equal(moment([2009,0,11]).week(),2,"Jan 11 2009 should be week 2"),e.equal(moment([2009,0,13]).week(),3,"Jan 12 2009 should be week 3"),e.done()},"weeks year starting friday":function(e){e.expect(6),e.equal(moment([2009,11,28]).week(),53,"Dec 28 2009 should be week 53"),e.equal(moment([2010,0,1]).week(),53,"Jan  1 2010 should be week 53"),e.equal(moment([2010,0,3]).week(),53,"Jan  3 2010 should be week 53"),e.equal(moment([2010,0,4]).week(),1,"Jan  4 2010 should be week 1"),e.equal(moment([2010,0,10]).week(),1,"Jan 10 2010 should be week 1"),e.equal(moment([2010,0,11]).week(),2,"Jan 11 2010 should be week 2"),e.done()},"weeks year starting saturday":function(e){e.expect(6),e.equal(moment([2010,11,27]).week(),52,"Dec 27 2010 should be week 52"),e.equal(moment([2011,0,1]).week(),52,"Jan  1 2011 should be week 52"),e.equal(moment([2011,0,2]).week(),52,"Jan  2 2011 should be week 52"),e.equal(moment([2011,0,3]).week(),1,"Jan  3 2011 should be week 1"),e.equal(moment([2011,0,9]).week(),1,"Jan  9 2011 should be week 1"),e.equal(moment([2011,0,10]).week(),2,"Jan 10 2011 should be week 2"),e.done()},"weeks year starting sunday formatted":function(e){e.expect(5),e.equal(moment([2012,0,1]).format("w ww wo"),"52 52 52.","Jan  1 2012 should be week 52"),e.equal(moment([2012,0,2]).format("w ww wo"),"1 01 1.","Jan  2 2012 should be week 1"),e.equal(moment([2012,0,8]).format("w ww wo"),"1 01 1.","Jan  8 2012 should be week 1"),e.equal(moment([2012,0,9]).format("w ww wo"),"2 02 2.","Jan  9 2012 should be week 2"),e.equal(moment([2012,0,15]).format("w ww wo"),"2 02 2.","Jan 15 2012 should be week 2"),e.done()}};