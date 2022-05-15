function add(a,b) 
{
    return a+b
}

function multiply(a,b)
{
    let y = 0
    for(let i = 0; i<b; i++)
    {
        y = add(y,a)
    }
    return y
}

function power(x,n)
{
    let y = 1
    for(let i = 1; i<=n; i++)
    {
        y = multiply(y,x)
    }
    return y
}

function factorial(f)
{
    let r = f
    for(let i = 1; i<f; i++)
    {
        r = multiply(r,f-i)

    }
    return r
}

function fibonacci(n)
{
    let m = 0
    let l = 1
    let p = 0
    for(let i = 1; i<=n; i++)
    {
        p = l
        l = add(m,l)
        m = p
    }
    return m
}

console.log()
