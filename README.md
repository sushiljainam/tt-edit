# tt-edit
to edit timetable and save JSON

--------

route - path

#/CS/4 -> ['', 'CS', '4']  -> ['CS', '4']  -> 4, 'CS'
#/4/CS -> ['', '4', 'CS']  -> ['4', 'CS']  -> 4, 'CS'

#/4/3  -> ['', '4', '3']   -> ['4', '3']   -> 4, un
#/CS/ME-> ['', 'CS', 'ME'] -> ['CS', 'ME'] -> un, 'CS'


#/CS -> ['', 'CS'] -> ['CS'] -> un, 'CS'
#/4  -> ['', '4']  -> ['4']  -> 4, un


route - hash

#CS/4  -> ['CS', '4']     -> 4, 'CS'
#4/CS  -> ['4', 'CS']     -> 4, 'CS'

#4/3   -> ['4', '3']      -> 4, un
#CS/ME -> ['CS', 'ME']    -> un, 'CS'


#CS -> ['CS'] -> un, 'CS'
#4  -> ['4']  -> 4, un


--------

TODO: when no change in data, deactivate 'save' button, show SAVED
TODO: in every row, store branch and sem - DONE
TODO: create test data buttons
TODO: batches - true, false - manage DONE | without object swap HMM | also show colors and shape around de/selected checkbox and label - DONE
TODO: for settings/configs - edit/add/modify - chat like minimize-able windows || manage in sideList overlay
TODO: number to array - for ng-repeat - DONE
TODO: check for all batch true
TODO: super idea: for switch view - matrix view - period and duration
    p: 3, d:2 -> pX: [3,4]
    p: 3, d:1 -> pX: [3]
    p: 2, d:3 -> pX: [2,3,4]
    p: 1, d:3 -> pX: [1,2,3]
    fun: same duration: period-- -> [i--,...]
    fun: same duration: period++ -> [i++,...]
    fun: same period: duration++ -> [...].push(lastI+1)
    fun: same period: duration-- -> [...].length-- or delete lastI

TODO: super idea v2: for switch view - matrix view - period and duration
    p: 3, d:2 -> pXY: [3,4]
    p: 3, d:1 -> pXY: [3]
    p: 2, d:3 -> pXY: [2,4]
    p: 1, d:3 -> pXY: [1,3]
    fun: same duration: period-- -> [i--,...]
    fun: same duration: period++ -> [i++,...]
    fun: same period: duration++ -> lastI++
    fun: same period: duration-- -> lastI--

    compare: v2 is not good enough
    reason: 1. we need good access of all periods, also the middles.(as in v1)
            2. in v2 operations are costly.

TODO: <select multiple> for teachers with on off
TODO: if all batches are selected/empty - do it same


----------
process:
get data to show {acc to filters}
-{confX.periods}//with startTime,endTime
-{confX.days}
-{confX.durations}
-conf.userTypes
-conf.userTypes.rooms
-conf.userTypes.teachers
-conf.userTypes.studentCourses
-conf.userTypes.studentCourseYears
-conf.userTypes.studentCourseSemesters
-conf.userTypes.studentCourseBranches
-conf.userTypes.studentCourseBranchBatchCount
-conf.subjects | conf.userTypes.studentCourseSemesterAndBranchSubjects
-//sub<-(branch,sem); branch<-(course); year<-(course); sem<-(course); batchCount<-(branch,sem)
-rows

upsert data to POST



dataFormats
-rows {Day,Period,Duration,Batches:('sem'+'branch'+'batchSeq'?)+,Room,Teacher,Subject}          //
-rows {{Day,Period,Duration},Batches:('sem'+'branch'+'batchSeq'?)+,Room,Teacher,Subject}        //label:II
-rows {{Day,Period,Duration},{Batches:('sem'+'branch'+'batchSeq'?)+,Room,Teacher,Subject}}      //{matrixInfo},{visibleInfo}
-rows {{Day,Period,Duration},{{Batches:('sem'+'branch'+'batchSeq'?)+,Room,Teacher},Subject}}    //becoz subject cannot be input, and one of other 3 must be present in input - sem,branch,batch? | room | teacher
-rows {matrixInfo,rest..all..individual}

--matrixInfo {Day,Period,Duration}                                                              //Monday,3,2   Tuesday,3,3
--matrixInfo {Day,PeriodStart,PeriodEnd}                                                        //Monday,3,4   Tuesday,3,5
--matrixInfo {Day,PeriodsArray}                                                                 //Monday,[3,4] Tuesday,[3,4,5]  label:pA


^e.g. of II with pA; should we use Id for such optimizations as below?
cbId:#12:{'ItiMam','CC','A201','7CS'}
{Monday,[3],cbId:#12}
{Wednesday,[5],cbId:#12}
{Saturday,[1],cbId:#12}
should we use?: NO. *room may change. *teacher may change. *rest is too small to optimize.

------------
for noticeBoard view:
input:
rows=[{"dur":"2","p":"5","d":"Monday","s":"IR","t":"RKB","r":"B203","sem":"4","br":"IT","b":{}},..]
rows=[{"pX":[5,6],"d":"Monday","s":"IR","t":"RKB","r":"B203"(,"sem":"4","br":"IT")->(not directly useful, but to show batches labels),"b":{"0":true,"2":true}},..]

^e.g.1
//collect all (pX) for a #Day a[3],b[4],c[5,6],d[8,9,10],e[8,9,10]                            --INPUT
//count for every period for this [0,0,1,1,1,1,0,2,2,2]                                       --inLOCAL
//find its max: #2                                                                            --inLOCAL
//we need #this many rows for that #Day
rs=2; rs=2; rs=2; rs=2; rs=2,cs=2;  rs=2; cs=3;
                                          cs=3;

rs=2; rs=2; a:rs=2; b:rs=2; c:rs=2,cs=2;  rs=2; d:cs=3;
                                                e:cs=3;

cs=1,rs=2; |  cs=1,rs=2; |  a:cs=1,rs=2; |  b:cs=1,rs=2; |  c:cs=2,rs=2; |  cs=1,rs=2; |  d:cs=3,rs=1;
                                                                                       |  e:cs=3,rs=1;

[cs=1,rs=2; |  cs=1,rs=2; |  a:cs=1,rs=2; |  b:cs=1,rs=2; |  c:cs=2,rs=2; |  cs=1,rs=2; |  d:cs=3,rs=1;],[ e:cs=3,rs=1;] --OUTPUT

^e.g.2
//collect all (pX) for a #Day a[3],b[4],c[5],d[8,9],e[8,9,10],f[8,9,10]
//count for every period for this [0,0,1,1,1,0,0,3,3,2]
//find its max: #3
rs=3; rs=3; rs=3; rs=3; rs=3; rs=3; rs=3; rs=1,cs=2; empty;
                                          rs=1,cs=3;
                                          rs=1,cs=3;
rs=3; rs=3; a:rs=3; b:rs=3; c:rs=3; rs=3; rs=3; d:rs=1,cs=2; empty;
                                                e:rs=1,cs=3;
                                                f:rs=1,cs=3;


-------------------
examples explained here

a[3],b[4],c[5,6],d[8,9,10],e[8,9,10]

[cs=1,rs=2; |  cs=1,rs=2; |  a:cs=1,rs=2; |  b:cs=1,rs=2; |  c:cs=2,rs=2; |  cs=1,rs=2; |  d:cs=3,rs=1;],[ e:cs=3,rs=1;]



1-0,2-0,3-1,4-1,5-1,6-1,7-0,8-2,9-2,10-2

maxFreq: 2

//cs: length of arr | 1
//rs:       | maxFreq

1st line: 1-> cs=1 rs=2     0
1st line: 2-> cs=1 rs=2     0
1st line: 3-> cs=1 rs=2     a
1st line: 4-> cs=1 rs=2     b
1st line: 5-> cs=2 rs=2     c
//1st line: 6-> cs=2 rs=2
1st line: 7-> cs=1 rs=2     0
1st line: 8-> cs=3 rs=1     d

2nd line: 8-> cs=3 rs=1     e



-------------------------------------------------------------------


a[3,4],b[4],c[5,6],d[8,9,10],e[8,9,10],f[8,9,10]

[cs=1,rs=2; |  cs=1,rs=2; |  a:cs=1,rs=2; |  b:cs=1,rs=2; |  c:cs=2,rs=2; |  cs=1,rs=2; |  d:cs=3,rs=1;],[ e:cs=3,rs=1;]



1-0,2-0,3-1,4-2,5-1,6-1,7-0,8-3,9-3,10-3

a:2, b:2, c:1, d:3, e:3, f:3

maxFreq: 3

//cs: length of arr | 1
//rs: if(fr[i]>1) 1 | maxFreq

1st line: 1-> cs=1 rs=3     0
1st line: 2-> cs=1 rs=3     0
1st line: 3-> cs=2 rs=1     a
//1st line: 4-> cs=1 rs=3   
1st line: 5-> cs=2 rs=3     c
//1st line: 6-> cs=2 rs=2
1st line: 7-> cs=1 rs=3     0
1st line: 8-> cs=3 rs=1     d

2nd line: 3-> cs=1 rs=1     #
2nd line: 4-> cs=1 rs=1     b
2nd line: 8-> cs=3 rs=1     e

3rd line: 8-> cs=3 rs=1     f

-------------------------------------------------------------------


a[3,4],b[4,5],c[5,6],d[8,9,10],e[8,9,10],f[8,9,10]

[cs=1,rs=2; |  cs=1,rs=2; |  a:cs=1,rs=2; |  b:cs=1,rs=2; |  c:cs=2,rs=2; |  cs=1,rs=2; |  d:cs=3,rs=1;],[ e:cs=3,rs=1;]



1-0,2-0,3-1,4-2,5-2,6-1,7-0,8-3,9-3,10-3        tCS = 10    tFr = 18

a:2, b:2, c:2, d:3, e:3, f:3                    

maxFreq: 3                                      tm: 3 X 10 = 30 (rsXcs)

//cs: length of arr | 1
//rs: if(fr[i]>1) 1 | maxFreq

1st line: 1-> cs=1 rs=3     0
1st line: 2-> cs=1 rs=3     0
1st line: 3-> cs=2 rs=1     a
//1st line: 4-> cs=1 rs=3   
1st line: 5-> cs=2 rs=1     c
//1st line: 6-> cs=2 rs=2
1st line: 7-> cs=1 rs=3     0
1st line: 8-> cs=3 rs=1     d                   tCS=10:true | tm: 16

2nd line: 3-> cs=1 rs=1     #
2nd line: 4-> cs=2 rs=1     b
2nd line: 6-> cs=1 rs=1     #
2nd line: 8-> cs=3 rs=1     e                   tCS=7:7 (true) | tm: 7

3rd line: 8-> cs=3 rs=1     f                   tCS=3:          | tm: 3
->
3rd line: 3-> cs=1 rs=1     #                   tCS=4:          | tm: 4
3rd line: 4-> cs=1 rs=1     #                   tCS=5:          | tm: 5
3rd line: 5-> cs=1 rs=1     #                   tCS=6:          | tm: 6
3rd line: 6-> cs=1 rs=1     #                   tCS=7:7 (true)  | tm: 7 --- 7+7+14=30(true)

