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
