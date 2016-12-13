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
