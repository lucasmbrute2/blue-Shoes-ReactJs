export const Api = {
    baseUrl: "https://blueshoes-api.herokuapp.com/",

    authHeader: ()=>({
        Authorization : "Bearer "+ localStorage.getItem('JWT')
    }),

    getAll: (path,auth)=>fetch(Api.baseUrl+path,{
        method: "GET",
        headers: auth? new Headers(Api.authHeader()): undefined
    }),

    getById: (path,id,auth)=> fetch(`${Api.baseUrl}${path}/${id}`,{
        method :'GET',
        headers: auth? new Headers(Api.authHeader()): undefined
    }),
    
    post: (path,body,auth) => fetch(Api.baseUrl+path,{
        method: "POST",
        headers: new Headers({
            "Content-type": "application/json",
            ...(auth? Api.authHeader():{})
        }),
        body: JSON.stringify(body)
    }),
    
    update: (path,body,id,auth)=>{
        return fetch(Api.baseUrl+path+id,{
            method: "PUT",
            headers: new Headers({
                "Content-type": "application/json",
                ...(auth? Api.authHeader():{})
            }),
            body: JSON.stringify(body)
        })
    },

    deletE: (path,id,auth)=>{
        return fetch (Api.baseUrl+path+id,{
            method: "DELETE",
            headers: auth? new Headers(Api.authHeader()): undefined
        })
    }
}