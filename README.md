# tt-edit
to edit timetable and save JSON

--------

route - path

#/cs/4 -> ['', 'cs', '4']  -> ['cs', '4']  -> 4, 'cs'
#/4/cs -> ['', '4', 'cs']  -> ['4', 'cs']  -> 4, 'cs'

#/4/3  -> ['', '4', '3']   -> ['4', '3']   -> 4, un
#/cs/me-> ['', 'cs', 'me'] -> ['cs', 'me'] -> un, 'cs'


#/cs -> ['', 'cs'] -> ['cs'] -> un, 'cs'
#/4  -> ['', '4']  -> ['4']  -> 4, un


route - hash

#cs/4  -> ['cs', '4']     -> 4, 'cs'
#4/cs  -> ['4', 'cs']     -> 4, 'cs'

#4/3   -> ['4', '3']      -> 4, un
#cs/me -> ['cs', 'me']    -> un, 'cs'


#cs -> ['cs'] -> un, 'cs'
#4  -> ['4']  -> 4, un


--------

TODO: when no change in data, deactivate 'save' button, show SAVED
TODO: in every row, store branch and sem
TODO: create test data buttons
TODO: batches - true, false - manage | without object swap | also show colors and shape around de/selected checkbox and label
