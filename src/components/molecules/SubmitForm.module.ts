export const is_correctTextInfo = (inputText:string, defaultText:string) => { 
    return (!inputText || inputText == defaultText) ?  true:false 
  }