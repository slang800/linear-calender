var moment=require("../../moment");exports["lang:de"]={setUp:function(e){moment.lang("de"),e()},tearDown:function(e){moment.lang("en"),e()},parse:function(e){function a(a,n,t){e.equal(moment(a,n).month(),t,a+" should be month "+(t+1))}e.expect(96);var n,t="Januar Jan._Februar Febr._März Mrz._April Apr._Mai Mai_Juni Jun._Juli Jul._August Aug._September Sept._Oktober Okt._November Nov._Dezember Dez.".split("_");for(n=0;12>n;n++)t[n]=t[n].split(" "),a(t[n][0],"MMM",n),a(t[n][1],"MMM",n),a(t[n][0],"MMMM",n),a(t[n][1],"MMMM",n),a(t[n][0].toLocaleLowerCase(),"MMMM",n),a(t[n][1].toLocaleLowerCase(),"MMMM",n),a(t[n][0].toLocaleUpperCase(),"MMMM",n),a(t[n][1].toLocaleUpperCase(),"MMMM",n);e.done()},format:function(e){e.expect(22);var a,n=[["dddd, Do MMMM YYYY, h:mm:ss a","Sonntag, 14. Februar 2010, 3:25:50 pm"],["ddd, hA","So., 3PM"],["M Mo MM MMMM MMM","2 2. 02 Februar Febr."],["YYYY YY","2010 10"],["D Do DD","14 14. 14"],["d do dddd ddd dd","0 0. Sonntag So. So"],["DDD DDDo DDDD","45 45. 045"],["w wo ww","6 6. 06"],["h hh","3 03"],["H HH","15 15"],["m mm","25 25"],["s ss","50 50"],["a A","pm PM"],["t\\he DDDo \\d\\ay of t\\he ye\\ar","the 45. day of the year"],["L","14.02.2010"],["LL","14. Februar 2010"],["LLL","14. Februar 2010 15:25 Uhr"],["LLLL","Sonntag, 14. Februar 2010 15:25 Uhr"],["l","14.2.2010"],["ll","14. Febr. 2010"],["lll","14. Febr. 2010 15:25 Uhr"],["llll","So., 14. Febr. 2010 15:25 Uhr"]],t=moment(new Date(2010,1,14,15,25,50,125));for(a=0;n.length>a;a++)e.equal(t.format(n[a][0]),n[a][1],n[a][0]+" ---> "+n[a][1]);e.done()},"format ordinal":function(e){e.expect(31),e.equal(moment([2011,0,1]).format("DDDo"),"1.","1."),e.equal(moment([2011,0,2]).format("DDDo"),"2.","2."),e.equal(moment([2011,0,3]).format("DDDo"),"3.","3."),e.equal(moment([2011,0,4]).format("DDDo"),"4.","4."),e.equal(moment([2011,0,5]).format("DDDo"),"5.","5."),e.equal(moment([2011,0,6]).format("DDDo"),"6.","6."),e.equal(moment([2011,0,7]).format("DDDo"),"7.","7."),e.equal(moment([2011,0,8]).format("DDDo"),"8.","8."),e.equal(moment([2011,0,9]).format("DDDo"),"9.","9."),e.equal(moment([2011,0,10]).format("DDDo"),"10.","10."),e.equal(moment([2011,0,11]).format("DDDo"),"11.","11."),e.equal(moment([2011,0,12]).format("DDDo"),"12.","12."),e.equal(moment([2011,0,13]).format("DDDo"),"13.","13."),e.equal(moment([2011,0,14]).format("DDDo"),"14.","14."),e.equal(moment([2011,0,15]).format("DDDo"),"15.","15."),e.equal(moment([2011,0,16]).format("DDDo"),"16.","16."),e.equal(moment([2011,0,17]).format("DDDo"),"17.","17."),e.equal(moment([2011,0,18]).format("DDDo"),"18.","18."),e.equal(moment([2011,0,19]).format("DDDo"),"19.","19."),e.equal(moment([2011,0,20]).format("DDDo"),"20.","20."),e.equal(moment([2011,0,21]).format("DDDo"),"21.","21."),e.equal(moment([2011,0,22]).format("DDDo"),"22.","22."),e.equal(moment([2011,0,23]).format("DDDo"),"23.","23."),e.equal(moment([2011,0,24]).format("DDDo"),"24.","24."),e.equal(moment([2011,0,25]).format("DDDo"),"25.","25."),e.equal(moment([2011,0,26]).format("DDDo"),"26.","26."),e.equal(moment([2011,0,27]).format("DDDo"),"27.","27."),e.equal(moment([2011,0,28]).format("DDDo"),"28.","28."),e.equal(moment([2011,0,29]).format("DDDo"),"29.","29."),e.equal(moment([2011,0,30]).format("DDDo"),"30.","30."),e.equal(moment([2011,0,31]).format("DDDo"),"31.","31."),e.done()},"format month":function(e){e.expect(12);var a,n="Januar Jan._Februar Febr._März Mrz._April Apr._Mai Mai_Juni Jun._Juli Jul._August Aug._September Sept._Oktober Okt._November Nov._Dezember Dez.".split("_");for(a=0;n.length>a;a++)e.equal(moment([2011,a,1]).format("MMMM MMM"),n[a],n[a]);e.done()},"format week":function(e){e.expect(7);var a,n="Sonntag So. So_Montag Mo. Mo_Dienstag Di. Di_Mittwoch Mi. Mi_Donnerstag Do. Do_Freitag Fr. Fr_Samstag Sa. Sa".split("_");for(a=0;n.length>a;a++)e.equal(moment([2011,0,2+a]).format("dddd ddd dd"),n[a],n[a]);e.done()},from:function(e){e.expect(30);var a=moment([2007,1,28]);e.equal(a.from(moment([2007,1,28]).add({s:44}),!0),"ein paar Sekunden","44 seconds = a few seconds"),e.equal(a.from(moment([2007,1,28]).add({s:45}),!0),"einer Minute","45 seconds = a minute"),e.equal(a.from(moment([2007,1,28]).add({s:89}),!0),"einer Minute","89 seconds = a minute"),e.equal(a.from(moment([2007,1,28]).add({s:90}),!0),"2 Minuten","90 seconds = 2 minutes"),e.equal(a.from(moment([2007,1,28]).add({m:44}),!0),"44 Minuten","44 minutes = 44 minutes"),e.equal(a.from(moment([2007,1,28]).add({m:45}),!0),"einer Stunde","45 minutes = an hour"),e.equal(a.from(moment([2007,1,28]).add({m:89}),!0),"einer Stunde","89 minutes = an hour"),e.equal(a.from(moment([2007,1,28]).add({m:90}),!0),"2 Stunden","90 minutes = 2 hours"),e.equal(a.from(moment([2007,1,28]).add({h:5}),!0),"5 Stunden","5 hours = 5 hours"),e.equal(a.from(moment([2007,1,28]).add({h:21}),!0),"21 Stunden","21 hours = 21 hours"),e.equal(a.from(moment([2007,1,28]).add({h:22}),!0),"einem Tag","22 hours = a day"),e.equal(a.from(moment([2007,1,28]).add({h:35}),!0),"einem Tag","35 hours = a day"),e.equal(a.from(moment([2007,1,28]).add({h:36}),!0),"2 Tagen","36 hours = 2 days"),e.equal(a.from(moment([2007,1,28]).add({d:1}),!0),"einem Tag","1 day = a day"),e.equal(a.from(moment([2007,1,28]).add({d:5}),!0),"5 Tagen","5 days = 5 days"),e.equal(a.from(moment([2007,1,28]).add({d:25}),!0),"25 Tagen","25 days = 25 days"),e.equal(a.from(moment([2007,1,28]).add({d:26}),!0),"einem Monat","26 days = a month"),e.equal(a.from(moment([2007,1,28]).add({d:30}),!0),"einem Monat","30 days = a month"),e.equal(a.from(moment([2007,1,28]).add({d:45}),!0),"einem Monat","45 days = a month"),e.equal(a.from(moment([2007,1,28]).add({d:46}),!0),"2 Monaten","46 days = 2 months"),e.equal(a.from(moment([2007,1,28]).add({d:74}),!0),"2 Monaten","75 days = 2 months"),e.equal(a.from(moment([2007,1,28]).add({d:76}),!0),"3 Monaten","76 days = 3 months"),e.equal(a.from(moment([2007,1,28]).add({M:1}),!0),"einem Monat","1 month = a month"),e.equal(a.from(moment([2007,1,28]).add({M:5}),!0),"5 Monaten","5 months = 5 months"),e.equal(a.from(moment([2007,1,28]).add({d:344}),!0),"11 Monaten","344 days = 11 months"),e.equal(a.from(moment([2007,1,28]).add({d:345}),!0),"einem Jahr","345 days = a year"),e.equal(a.from(moment([2007,1,28]).add({d:547}),!0),"einem Jahr","547 days = a year"),e.equal(a.from(moment([2007,1,28]).add({d:548}),!0),"2 Jahren","548 days = 2 years"),e.equal(a.from(moment([2007,1,28]).add({y:1}),!0),"einem Jahr","1 year = a year"),e.equal(a.from(moment([2007,1,28]).add({y:5}),!0),"5 Jahren","5 years = 5 years"),e.done()},suffix:function(e){e.expect(2),e.equal(moment(3e4).from(0),"in ein paar Sekunden","prefix"),e.equal(moment(0).from(3e4),"vor ein paar Sekunden","suffix"),e.done()},fromNow:function(e){e.expect(2),e.equal(moment().add({s:30}).fromNow(),"in ein paar Sekunden","in a few seconds"),e.equal(moment().add({d:5}).fromNow(),"in 5 Tagen","in 5 days"),e.done()},"calendar day":function(e){e.expect(6);var a=moment().hours(2).minutes(0).seconds(0);e.equal(moment(a).calendar(),"Heute um 2:00 Uhr","today at the same time"),e.equal(moment(a).add({m:25}).calendar(),"Heute um 2:25 Uhr","Now plus 25 min"),e.equal(moment(a).add({h:1}).calendar(),"Heute um 3:00 Uhr","Now plus 1 hour"),e.equal(moment(a).add({d:1}).calendar(),"Morgen um 2:00 Uhr","tomorrow at the same time"),e.equal(moment(a).subtract({h:1}).calendar(),"Heute um 1:00 Uhr","Now minus 1 hour"),e.equal(moment(a).subtract({d:1}).calendar(),"Gestern um 2:00 Uhr","yesterday at the same time"),e.done()},"calendar next week":function(e){e.expect(15);var a,n;for(a=2;7>a;a++)n=moment().add({d:a}),e.equal(n.calendar(),n.format("dddd [um] LT"),"Today + "+a+" days current time"),n.hours(0).minutes(0).seconds(0).milliseconds(0),e.equal(n.calendar(),n.format("dddd [um] LT"),"Today + "+a+" days beginning of day"),n.hours(23).minutes(59).seconds(59).milliseconds(999),e.equal(n.calendar(),n.format("dddd [um] LT"),"Today + "+a+" days end of day");e.done()},"calendar last week":function(e){for(e.expect(15),i=2;7>i;i++)m=moment().subtract({d:i}),e.equal(m.calendar(),m.format("[letzten] dddd [um] LT"),"Today + "+i+" days current time"),m.hours(0).minutes(0).seconds(0).milliseconds(0),e.equal(m.calendar(),m.format("[letzten] dddd [um] LT"),"Today + "+i+" days beginning of day"),m.hours(23).minutes(59).seconds(59).milliseconds(999),e.equal(m.calendar(),m.format("[letzten] dddd [um] LT"),"Today + "+i+" days end of day");e.done()},"calendar all else":function(e){e.expect(4);var a=moment().subtract({w:1}),n=moment().add({w:1});e.equal(a.calendar(),a.format("L"),"1 week ago"),e.equal(n.calendar(),n.format("L"),"in 1 week"),a=moment().subtract({w:2}),n=moment().add({w:2}),e.equal(a.calendar(),a.format("L"),"2 weeks ago"),e.equal(n.calendar(),n.format("L"),"in 2 weeks"),e.done()},"weeks year starting sunday":function(e){e.expect(5),e.equal(moment([2012,0,1]).week(),52,"Jan  1 2012 should be week 52"),e.equal(moment([2012,0,2]).week(),1,"Jan  2 2012 should be week 1"),e.equal(moment([2012,0,8]).week(),1,"Jan  8 2012 should be week 1"),e.equal(moment([2012,0,9]).week(),2,"Jan  9 2012 should be week 2"),e.equal(moment([2012,0,15]).week(),2,"Jan 15 2012 should be week 2"),e.done()},"weeks year starting monday":function(e){e.expect(5),e.equal(moment([2007,0,1]).week(),1,"Jan  1 2007 should be week 1"),e.equal(moment([2007,0,7]).week(),1,"Jan  7 2007 should be week 1"),e.equal(moment([2007,0,8]).week(),2,"Jan  8 2007 should be week 2"),e.equal(moment([2007,0,14]).week(),2,"Jan 14 2007 should be week 2"),e.equal(moment([2007,0,15]).week(),3,"Jan 15 2007 should be week 3"),e.done()},"weeks year starting tuesday":function(e){e.expect(6),e.equal(moment([2007,11,31]).week(),1,"Dec 31 2007 should be week 1"),e.equal(moment([2008,0,1]).week(),1,"Jan  1 2008 should be week 1"),e.equal(moment([2008,0,6]).week(),1,"Jan  6 2008 should be week 1"),e.equal(moment([2008,0,7]).week(),2,"Jan  7 2008 should be week 2"),e.equal(moment([2008,0,13]).week(),2,"Jan 13 2008 should be week 2"),e.equal(moment([2008,0,14]).week(),3,"Jan 14 2008 should be week 3"),e.done()},"weeks year starting wednesday":function(e){e.expect(6),e.equal(moment([2002,11,30]).week(),1,"Dec 30 2002 should be week 1"),e.equal(moment([2003,0,1]).week(),1,"Jan  1 2003 should be week 1"),e.equal(moment([2003,0,5]).week(),1,"Jan  5 2003 should be week 1"),e.equal(moment([2003,0,6]).week(),2,"Jan  6 2003 should be week 2"),e.equal(moment([2003,0,12]).week(),2,"Jan 12 2003 should be week 2"),e.equal(moment([2003,0,13]).week(),3,"Jan 13 2003 should be week 3"),e.done()},"weeks year starting thursday":function(e){e.expect(6),e.equal(moment([2008,11,29]).week(),1,"Dec 29 2008 should be week 1"),e.equal(moment([2009,0,1]).week(),1,"Jan  1 2009 should be week 1"),e.equal(moment([2009,0,4]).week(),1,"Jan  4 2009 should be week 1"),e.equal(moment([2009,0,5]).week(),2,"Jan  5 2009 should be week 2"),e.equal(moment([2009,0,11]).week(),2,"Jan 11 2009 should be week 2"),e.equal(moment([2009,0,13]).week(),3,"Jan 12 2009 should be week 3"),e.done()},"weeks year starting friday":function(e){e.expect(6),e.equal(moment([2009,11,28]).week(),53,"Dec 28 2009 should be week 53"),e.equal(moment([2010,0,1]).week(),53,"Jan  1 2010 should be week 53"),e.equal(moment([2010,0,3]).week(),53,"Jan  3 2010 should be week 53"),e.equal(moment([2010,0,4]).week(),1,"Jan  4 2010 should be week 1"),e.equal(moment([2010,0,10]).week(),1,"Jan 10 2010 should be week 1"),e.equal(moment([2010,0,11]).week(),2,"Jan 11 2010 should be week 2"),e.done()},"weeks year starting saturday":function(e){e.expect(6),e.equal(moment([2010,11,27]).week(),52,"Dec 27 2010 should be week 52"),e.equal(moment([2011,0,1]).week(),52,"Jan  1 2011 should be week 52"),e.equal(moment([2011,0,2]).week(),52,"Jan  2 2011 should be week 52"),e.equal(moment([2011,0,3]).week(),1,"Jan  3 2011 should be week 1"),e.equal(moment([2011,0,9]).week(),1,"Jan  9 2011 should be week 1"),e.equal(moment([2011,0,10]).week(),2,"Jan 10 2011 should be week 2"),e.done()},"weeks year starting sunday formatted":function(e){e.expect(5),e.equal(moment([2012,0,1]).format("w ww wo"),"52 52 52.","Jan  1 2012 should be week 52"),e.equal(moment([2012,0,2]).format("w ww wo"),"1 01 1.","Jan  2 2012 should be week 1"),e.equal(moment([2012,0,8]).format("w ww wo"),"1 01 1.","Jan  8 2012 should be week 1"),e.equal(moment([2012,0,9]).format("w ww wo"),"2 02 2.","Jan  9 2012 should be week 2"),e.equal(moment([2012,0,15]).format("w ww wo"),"2 02 2.","Jan 15 2012 should be week 2"),e.done()}};