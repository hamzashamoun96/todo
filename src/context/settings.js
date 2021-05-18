import React, {useState} from 'react';

export const SettingsCon = React.createContext();
function SettingsProv(props){
    const [list , setList] = useState([]);
    const [page , setPage] = useState(3);
    const [sNum , setSnum] = useState(3);
    
    const state ={
        list : list.sort((a,b)=>a?.difficulty - b?.difficulty),
        setList,
        page,
        setPage,
        sNum,
        setSnum,
        pages: list.slice(page-sNum,page),
        num:gg()
    }
    function gg (){
        let numArr = [];
        for(let i = 0 ; i < Math.ceil(list.length/sNum); i++){
            numArr.push( i + 1 )
        }
        return numArr;
    }
    return(
        <SettingsCon.Provider value = {state}>
            {props.children}
        </SettingsCon.Provider>
    );
}
export default SettingsProv;