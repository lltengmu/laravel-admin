import _ from "lodash"
//这个工具函数是使用配置vite
export function parseEnv(env:Record<string,any>):ImportMetaEnv{
    let envs:any = _.cloneDeep(env);
    Object.entries(env).forEach(([key,value]) => {
        if(value === "true" || value ==="false")envs[key]=value==="true" ? true : false;
        else if(/^\d+$/.test(value))envs[key]=Number(value);
        else if (value === "null")envs[key] = null;
        else if (value === "undefined")envs[key] = undefined;
        else envs[key] === value;
    })
    return envs;
}