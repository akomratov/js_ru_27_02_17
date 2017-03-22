export default store => next => action => {
    console.log('>--', 'before logger: ', store.getState())
    next(action)
    console.log('<--', 'after logger:', store.getState())
//    next({...action, newField: 'some'})
}