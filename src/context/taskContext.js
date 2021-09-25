import {createContext, useContext} from 'react';

const TaskContext = createContext();

export const useTasks = () => {
    const context = useContext(TaskContext);
    return context;
}

export const TaskProvider = ({children}) => {
    let hello = 'word';
    return (
        <TaskContext.Provider value={{hello}}>
            {children}
        </TaskContext.Provider>
    )
}