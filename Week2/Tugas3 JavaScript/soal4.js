fetch ('https://jsonplaceholder.typicode.com/users')
.then (res => res.json())
.then((res)=>{
    const result = res
    result.map((item)=>{
        console.log(item.name)
    })
})
.catch((err)=>{
    console.log(err.message)
})