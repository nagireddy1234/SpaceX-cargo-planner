import { htmlInput } from '../inputInterface';

export interface headerInterface {
    handleLoad: ()=> void,
    handleSave: ()=> void,
    handleSearch: (e: htmlInput)=> void
    searchValue: string
}