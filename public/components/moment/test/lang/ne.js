var moment=require("../../moment");exports["lang:ne"]={setUp:function(e){moment.lang("ne"),e()},tearDown:function(e){moment.lang("en"),e()},parse:function(e){function a(a,n,t){e.equal(moment(a,n).month(),t,a+" should be month "+(t+1))}e.expect(96);var n,t="जनवरी जन._फेब्रुवरी फेब्रु._मार्च मार्च_अप्रिल अप्रि._मई मई_जुन जुन_जुलाई जुलाई._अगष्ट अग._सेप्टेम्बर सेप्ट._अक्टोबर अक्टो._नोभेम्बर नोभे._डिसेम्बर डिसे.".split("_");for(n=0;12>n;n++)t[n]=t[n].split(" "),a(t[n][0],"MMM",n),a(t[n][1],"MMM",n),a(t[n][0],"MMMM",n),a(t[n][1],"MMMM",n),a(t[n][0].toLocaleLowerCase(),"MMMM",n),a(t[n][1].toLocaleLowerCase(),"MMMM",n),a(t[n][0].toLocaleUpperCase(),"MMMM",n),a(t[n][1].toLocaleUpperCase(),"MMMM",n);e.done()},format:function(e){e.expect(21);var a,n=[["dddd, Do MMMM YYYY, aको h:mm:ss बजे","आइतबार, १४ फेब्रुवरी २०१०, बेलुकाको ३:२५:५० बजे"],["ddd, aको h बजे","आइत., बेलुकाको ३ बजे"],["M Mo MM MMMM MMM","२ २ ०२ फेब्रुवरी फेब्रु."],["YYYY YY","२०१० १०"],["D Do DD","१४ १४ १४"],["d do dddd ddd dd","० ० आइतबार आइत. आइ."],["DDD DDDo DDDD","४५ ४५ ०४५"],["w wo ww","७ ७ ०७"],["h hh","३ ०३"],["H HH","१५ १५"],["m mm","२५ २५"],["s ss","५० ५०"],["a A","बेलुका बेलुका"],["L","१४/०२/२०१०"],["LL","१४ फेब्रुवरी २०१०"],["LLL","१४ फेब्रुवरी २०१०, बेलुकाको ३:२५ बजे"],["LLLL","आइतबार, १४ फेब्रुवरी २०१०, बेलुकाको ३:२५ बजे"],["l","१४/२/२०१०"],["ll","१४ फेब्रु. २०१०"],["lll","१४ फेब्रु. २०१०, बेलुकाको ३:२५ बजे"],["llll","आइत., १४ फेब्रु. २०१०, बेलुकाको ३:२५ बजे"]],t=moment(new Date(2010,1,14,15,25,50,125));for(a=0;n.length>a;a++)e.equal(t.format(n[a][0]),n[a][1],n[a][0]+" ---> "+n[a][1]);e.done()},"format ordinal":function(e){e.expect(31),e.equal(moment([2011,0,1]).format("DDDo"),"१","१"),e.equal(moment([2011,0,2]).format("DDDo"),"२","२"),e.equal(moment([2011,0,3]).format("DDDo"),"३","३"),e.equal(moment([2011,0,4]).format("DDDo"),"४","४"),e.equal(moment([2011,0,5]).format("DDDo"),"५","५"),e.equal(moment([2011,0,6]).format("DDDo"),"६","६"),e.equal(moment([2011,0,7]).format("DDDo"),"७","७"),e.equal(moment([2011,0,8]).format("DDDo"),"८","८"),e.equal(moment([2011,0,9]).format("DDDo"),"९","९"),e.equal(moment([2011,0,10]).format("DDDo"),"१०","१०"),e.equal(moment([2011,0,11]).format("DDDo"),"११","११"),e.equal(moment([2011,0,12]).format("DDDo"),"१२","१२"),e.equal(moment([2011,0,13]).format("DDDo"),"१३","१३"),e.equal(moment([2011,0,14]).format("DDDo"),"१४","१४"),e.equal(moment([2011,0,15]).format("DDDo"),"१५","१५"),e.equal(moment([2011,0,16]).format("DDDo"),"१६","१६"),e.equal(moment([2011,0,17]).format("DDDo"),"१७","१७"),e.equal(moment([2011,0,18]).format("DDDo"),"१८","१८"),e.equal(moment([2011,0,19]).format("DDDo"),"१९","१९"),e.equal(moment([2011,0,20]).format("DDDo"),"२०","२०"),e.equal(moment([2011,0,21]).format("DDDo"),"२१","२१"),e.equal(moment([2011,0,22]).format("DDDo"),"२२","२२"),e.equal(moment([2011,0,23]).format("DDDo"),"२३","२३"),e.equal(moment([2011,0,24]).format("DDDo"),"२४","२४"),e.equal(moment([2011,0,25]).format("DDDo"),"२५","२५"),e.equal(moment([2011,0,26]).format("DDDo"),"२६","२६"),e.equal(moment([2011,0,27]).format("DDDo"),"२७","२७"),e.equal(moment([2011,0,28]).format("DDDo"),"२८","२८"),e.equal(moment([2011,0,29]).format("DDDo"),"२९","२९"),e.equal(moment([2011,0,30]).format("DDDo"),"३०","३०"),e.equal(moment([2011,0,31]).format("DDDo"),"३१","३१"),e.done()},"format month":function(e){e.expect(12);var a,n="जनवरी जन._फेब्रुवरी फेब्रु._मार्च मार्च_अप्रिल अप्रि._मई मई_जुन जुन_जुलाई जुलाई._अगष्ट अग._सेप्टेम्बर सेप्ट._अक्टोबर अक्टो._नोभेम्बर नोभे._डिसेम्बर डिसे.".split("_");for(a=0;n.length>a;a++)e.equal(moment([2011,a,1]).format("MMMM MMM"),n[a],n[a]);e.done()},"format week":function(e){e.expect(7);var a,n="आइतबार आइत. आइ._सोमबार सोम. सो._मङ्गलबार मङ्गल. मङ्_बुधबार बुध. बु._बिहिबार बिहि. बि._शुक्रबार शुक्र. शु._शनिबार शनि. श.".split("_");for(a=0;n.length>a;a++)e.equal(moment([2011,0,2+a]).format("dddd ddd dd"),n[a],n[a]);e.done()},from:function(e){e.expect(30);var a=moment([2007,1,28]);e.equal(a.from(moment([2007,1,28]).add({s:44}),!0),"केही समय","44 seconds = a few seconds"),e.equal(a.from(moment([2007,1,28]).add({s:45}),!0),"एक मिनेट","45 seconds = a minute"),e.equal(a.from(moment([2007,1,28]).add({s:89}),!0),"एक मिनेट","89 seconds = a minute"),e.equal(a.from(moment([2007,1,28]).add({s:90}),!0),"२ मिनेट","90 seconds = 2 minutes"),e.equal(a.from(moment([2007,1,28]).add({m:44}),!0),"४४ मिनेट","44 minutes = 44 minutes"),e.equal(a.from(moment([2007,1,28]).add({m:45}),!0),"एक घण्टा","45 minutes = an hour"),e.equal(a.from(moment([2007,1,28]).add({m:89}),!0),"एक घण्टा","89 minutes = an hour"),e.equal(a.from(moment([2007,1,28]).add({m:90}),!0),"२ घण्टा","90 minutes = 2 hours"),e.equal(a.from(moment([2007,1,28]).add({h:5}),!0),"५ घण्टा","5 hours = 5 hours"),e.equal(a.from(moment([2007,1,28]).add({h:21}),!0),"२१ घण्टा","21 hours = 21 hours"),e.equal(a.from(moment([2007,1,28]).add({h:22}),!0),"एक दिन","22 hours = a day"),e.equal(a.from(moment([2007,1,28]).add({h:35}),!0),"एक दिन","35 hours = a day"),e.equal(a.from(moment([2007,1,28]).add({h:36}),!0),"२ दिन","36 hours = 2 days"),e.equal(a.from(moment([2007,1,28]).add({d:1}),!0),"एक दिन","1 day = a day"),e.equal(a.from(moment([2007,1,28]).add({d:5}),!0),"५ दिन","5 days = 5 days"),e.equal(a.from(moment([2007,1,28]).add({d:25}),!0),"२५ दिन","25 days = 25 days"),e.equal(a.from(moment([2007,1,28]).add({d:26}),!0),"एक महिना","26 days = a month"),e.equal(a.from(moment([2007,1,28]).add({d:30}),!0),"एक महिना","30 days = a month"),e.equal(a.from(moment([2007,1,28]).add({d:45}),!0),"एक महिना","45 days = a month"),e.equal(a.from(moment([2007,1,28]).add({d:46}),!0),"२ महिना","46 days = 2 months"),e.equal(a.from(moment([2007,1,28]).add({d:74}),!0),"२ महिना","75 days = 2 months"),e.equal(a.from(moment([2007,1,28]).add({d:76}),!0),"३ महिना","76 days = 3 months"),e.equal(a.from(moment([2007,1,28]).add({M:1}),!0),"एक महिना","1 month = a month"),e.equal(a.from(moment([2007,1,28]).add({M:5}),!0),"५ महिना","5 months = 5 months"),e.equal(a.from(moment([2007,1,28]).add({d:344}),!0),"११ महिना","344 days = 11 months"),e.equal(a.from(moment([2007,1,28]).add({d:345}),!0),"एक बर्ष","345 days = a year"),e.equal(a.from(moment([2007,1,28]).add({d:547}),!0),"एक बर्ष","547 days = a year"),e.equal(a.from(moment([2007,1,28]).add({d:548}),!0),"२ बर्ष","548 days = 2 years"),e.equal(a.from(moment([2007,1,28]).add({y:1}),!0),"एक बर्ष","1 year = a year"),e.equal(a.from(moment([2007,1,28]).add({y:5}),!0),"५ बर्ष","5 years = 5 years"),e.done()},suffix:function(e){e.expect(2),e.equal(moment(3e4).from(0),"केही समयमा","prefix"),e.equal(moment(0).from(3e4),"केही समय अगाडी","suffix"),e.done()},"now from now":function(e){e.expect(1),e.equal(moment().fromNow(),"केही समय अगाडी","now from now should display as in the past"),e.done()},fromNow:function(e){e.expect(2),e.equal(moment().add({s:30}).fromNow(),"केही समयमा","केही समयमा"),e.equal(moment().add({d:5}).fromNow(),"५ दिनमा","५ दिनमा"),e.done()},"calendar day":function(e){e.expect(6);var a=moment().hours(2).minutes(0).seconds(0);e.equal(moment(a).calendar(),"आज रातीको २:०० बजे","today at the same time"),e.equal(moment(a).add({m:25}).calendar(),"आज रातीको २:२५ बजे","Now plus 25 min"),e.equal(moment(a).add({h:1}).calendar(),"आज बिहानको ३:०० बजे","Now plus 1 hour"),e.equal(moment(a).add({d:1}).calendar(),"भोली रातीको २:०० बजे","tomorrow at the same time"),e.equal(moment(a).subtract({h:1}).calendar(),"आज रातीको १:०० बजे","Now minus 1 hour"),e.equal(moment(a).subtract({d:1}).calendar(),"हिजो रातीको २:०० बजे","yesterday at the same time"),e.done()},"calendar next week":function(e){e.expect(15);var a,n;for(a=2;7>a;a++)n=moment().add({d:a}),e.equal(n.calendar(),n.format("[आउँदो] dddd[,] LT"),"Today + "+a+" days current time"),n.hours(0).minutes(0).seconds(0).milliseconds(0),e.equal(n.calendar(),n.format("[आउँदो] dddd[,] LT"),"Today + "+a+" days beginning of day"),n.hours(23).minutes(59).seconds(59).milliseconds(999),e.equal(n.calendar(),n.format("[आउँदो] dddd[,] LT"),"Today + "+a+" days end of day");e.done()},"calendar last week":function(e){e.expect(15);var a,n;for(a=2;7>a;a++)n=moment().subtract({d:a}),e.equal(n.calendar(),n.format("[गएको] dddd[,] LT"),"Today - "+a+" days current time"),n.hours(0).minutes(0).seconds(0).milliseconds(0),e.equal(n.calendar(),n.format("[गएको] dddd[,] LT"),"Today - "+a+" days beginning of day"),n.hours(23).minutes(59).seconds(59).milliseconds(999),e.equal(n.calendar(),n.format("[गएको] dddd[,] LT"),"Today - "+a+" days end of day");e.done()},"calendar all else":function(e){e.expect(4);var a=moment().subtract({w:1}),n=moment().add({w:1});e.equal(a.calendar(),a.format("L"),"1 week ago"),e.equal(n.calendar(),n.format("L"),"in 1 week"),a=moment().subtract({w:2}),n=moment().add({w:2}),e.equal(a.calendar(),a.format("L"),"2 weeks ago"),e.equal(n.calendar(),n.format("L"),"in 2 weeks"),e.done()},meridiem:function(e){e.expect(12),e.equal(moment([2011,2,23,2,30]).format("a"),"राती","before dawn"),e.equal(moment([2011,2,23,9,30]).format("a"),"बिहान","morning"),e.equal(moment([2011,2,23,14,30]).format("a"),"दिउँसो","during day"),e.equal(moment([2011,2,23,17,30]).format("a"),"बेलुका","evening"),e.equal(moment([2011,2,23,19,30]).format("a"),"साँझ","late evening"),e.equal(moment([2011,2,23,21,20]).format("a"),"राती","night"),e.equal(moment([2011,2,23,2,30]).format("A"),"राती","before dawn"),e.equal(moment([2011,2,23,9,30]).format("A"),"बिहान","morning"),e.equal(moment([2011,2,23,14,30]).format("A"),"दिउँसो","during day"),e.equal(moment([2011,2,23,17,30]).format("A"),"बेलुका","evening"),e.equal(moment([2011,2,23,19,30]).format("A"),"साँझ","late evening"),e.equal(moment([2011,2,23,21,20]).format("A"),"राती","night"),e.done()},"weeks year starting sunday":function(e){e.expect(5),e.equal(moment([2011,11,26]).week(),1,"Dec 26 2011 should be week 1"),e.equal(moment([2012,0,1]).week(),1,"Jan  1 2012 should be week 1"),e.equal(moment([2012,0,2]).week(),2,"Jan  2 2012 should be week 2"),e.equal(moment([2012,0,8]).week(),2,"Jan  8 2012 should be week 2"),e.equal(moment([2012,0,9]).week(),3,"Jan  9 2012 should be week 3"),e.done()},"weeks year starting monday":function(e){e.expect(5),e.equal(moment([2007,0,1]).week(),1,"Jan  1 2007 should be week 1"),e.equal(moment([2007,0,7]).week(),1,"Jan  7 2007 should be week 1"),e.equal(moment([2007,0,8]).week(),2,"Jan  8 2007 should be week 2"),e.equal(moment([2007,0,14]).week(),2,"Jan 14 2007 should be week 2"),e.equal(moment([2007,0,15]).week(),3,"Jan 15 2007 should be week 3"),e.done()},"weeks year starting tuesday":function(e){e.expect(6),e.equal(moment([2007,11,31]).week(),1,"Dec 31 2007 should be week 1"),e.equal(moment([2008,0,1]).week(),1,"Jan  1 2008 should be week 1"),e.equal(moment([2008,0,6]).week(),1,"Jan  6 2008 should be week 1"),e.equal(moment([2008,0,7]).week(),2,"Jan  7 2008 should be week 2"),e.equal(moment([2008,0,13]).week(),2,"Jan 13 2008 should be week 2"),e.equal(moment([2008,0,14]).week(),3,"Jan 14 2008 should be week 3"),e.done()},"weeks year starting wednesday":function(e){e.expect(6),e.equal(moment([2002,11,30]).week(),1,"Dec 30 2002 should be week 1"),e.equal(moment([2003,0,1]).week(),1,"Jan  1 2003 should be week 1"),e.equal(moment([2003,0,5]).week(),1,"Jan  5 2003 should be week 1"),e.equal(moment([2003,0,6]).week(),2,"Jan  6 2003 should be week 2"),e.equal(moment([2003,0,12]).week(),2,"Jan 12 2003 should be week 2"),e.equal(moment([2003,0,13]).week(),3,"Jan 13 2003 should be week 3"),e.done()},"weeks year starting thursday":function(e){e.expect(6),e.equal(moment([2008,11,29]).week(),1,"Dec 29 2008 should be week 1"),e.equal(moment([2009,0,1]).week(),1,"Jan  1 2009 should be week 1"),e.equal(moment([2009,0,4]).week(),1,"Jan  4 2009 should be week 1"),e.equal(moment([2009,0,5]).week(),2,"Jan  5 2009 should be week 2"),e.equal(moment([2009,0,11]).week(),2,"Jan 11 2009 should be week 2"),e.equal(moment([2009,0,12]).week(),3,"Jan 12 2009 should be week 3"),e.done()},"weeks year starting friday":function(e){e.expect(6),e.equal(moment([2009,11,28]).week(),1,"Dec 28 2009 should be week 1"),e.equal(moment([2010,0,1]).week(),1,"Jan  1 2010 should be week 1"),e.equal(moment([2010,0,3]).week(),1,"Jan  3 2010 should be week 1"),e.equal(moment([2010,0,4]).week(),2,"Jan  4 2010 should be week 2"),e.equal(moment([2010,0,10]).week(),2,"Jan 10 2010 should be week 2"),e.equal(moment([2010,0,11]).week(),3,"Jan 11 2010 should be week 3"),e.done()},"weeks year starting saturday":function(e){e.expect(6),e.equal(moment([2010,11,27]).week(),1,"Dec 27 2010 should be week 1"),e.equal(moment([2011,0,1]).week(),1,"Jan  1 2011 should be week 1"),e.equal(moment([2011,0,2]).week(),1,"Jan  2 2011 should be week 1"),e.equal(moment([2011,0,3]).week(),2,"Jan  3 2011 should be week 2"),e.equal(moment([2011,0,9]).week(),2,"Jan  9 2011 should be week 2"),e.equal(moment([2011,0,10]).week(),3,"Jan 10 2011 should be week 3"),e.done()},"weeks year starting sunday formatted":function(e){e.expect(5),e.equal(moment([2011,11,26]).format("w ww wo"),"१ ०१ १","Dec 26 2011 should be week 1"),e.equal(moment([2012,0,1]).format("w ww wo"),"१ ०१ १","Jan  1 2012 should be week 1"),e.equal(moment([2012,0,2]).format("w ww wo"),"२ ०२ २","Jan  2 2012 should be week 2"),e.equal(moment([2012,0,8]).format("w ww wo"),"२ ०२ २","Jan  8 2012 should be week 2"),e.equal(moment([2012,0,9]).format("w ww wo"),"३ ०३ ३","Jan  9 2012 should be week 3"),e.done()}};