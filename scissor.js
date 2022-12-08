var cs=0
let count=0
let count1=0
var ps=0
document.getElementById('reload').style.display = 'none';
const button = document.querySelectorAll('input')
function computer()
{
    let a =['rock','paper','scissor']
    return a[Math.floor(Math.random()*a.length)]
}
function play(player)
{
    let cc=computer();
    let result=""
    let temp=""
    if((player=='rock'&&cc=='scissor')||(player=='scissor'&&cc=='paper')||(player=='paper'&&cc=='rock'))
    {
        if(player=='rock'&&cc=='scissor')
        {
            ps+=1
            temp+=('lets go!! you won. rock bluts scissors')
            count++
            if(ps!=5)
            document.getElementById('temp').innerHTML=temp
            if(ps==5)
            {
                result='you won the match'
            }
            count.toString();
        }
        else if(player=='scissor'&&cc=='paper')
        {
            ps+=1
            temp+=('lets go!! you won. scissor cuts paper')
            count++
            if(ps!=5)
            document.getElementById('temp').innerHTML=temp
            if(ps==5)
            {
                result='you won the match'
            }
            count.toString();
        }
        else if(player=='paper'&&cc=='rock')
        {
            ps+=1
            temp+=('lets go!! you won. paper wraps rock')
            count++
            if(ps!=5)
            document.getElementById('temp').innerHTML=temp
            if(ps==5)
            {
                result='you won the match'
            }
            count.toString();
        }
    }
    else if(player==cs)
    {
        temp+=("tie")
    }
    else
    {
        if(cc=='paper')
        temp+=('oh No!! you lost. paper wraps rock')
        else if(cc=='rock')
        temp+=('oh No!! you lost. rock bluts scissors')
        else if(cc=='scissor')
        temp+=('oh No!! you lost. scissors cut paper')
        cs+=1
        if(cs!=5)
        document.getElementById('temp').innerHTML=temp
        count1++
        if(cs==5)
        {
            result='system won the match'
        }
    }
    document.getElementById('count').innerHTML=count
    document.getElementById('count1').innerHTML=count1
    if(cs==5||ps==5)
    {
    document.getElementById('result').innerHTML=result
    document.getElementById('temp').remove();
    document.getElementById('count').remove();
    document.getElementById('count1').remove();
    document.getElementById('r').remove();
    //document.getElementById('ps').setAttribute();
    document.getElementById('reload').style.display = 'block';
    }
    return 
}
button.forEach(button=>{
    button.addEventListener('click',function(){
        play(button.value)
    })
})

function ref()
{
    window.location.reload();
}