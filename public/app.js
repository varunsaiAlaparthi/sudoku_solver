let a=[0];
const form=document.querySelector('#myform');
num= document.querySelectorAll('.a');
form.addEventListener('submit',onsubmit);
document.getElementById("pre").addEventListener("click",generate);


function generate()
{
    var n=(document.getElementById('pass').value);
    n1=parseInt(n);
    b=[];
    l='abcdefghijklmnopqrstuvwxyz';
    k='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    n='0123456789@#$%&*()';
    b[0]=l;
    b[1]=k;
    b[2]=n;
    l1='';
    for(i=0;i<n1;i++)
    {
        j=(Math.floor(Math.random()*100))%3;
        if(j==2)
        {
            l1=l1+n[(Math.floor(Math.random()*100))%18];
        }
        else{
            l1=l1+b[j][(Math.floor(Math.random()*100))%26];
        }
    }

    document.getElementById('pass').value=l1;
    return ;
}
function check(a,i,j,k)
{
    for(let l=0;l<9;l++)
    {
        if(a[9*i+l]==k)
        {
            if(l==j)
            return -1;
            else
            return 0;
           
        }

    }
    for(let l=0;l<9;l++)
    {
        if(a[9*l+j]==k){
            if(l==i)
            return -1;
            else
            return 0;
            
        }
    }
    m=i;
    n=j;
    i=Math.floor(i/3);
    j=Math.floor(j/3);
    i=i*3;
    j=j*3;
    for(let l=i;l<(i+3);l++)
    {
        for(let w=j;w<(j+3);w++)
        {
            
            if(a[9*l+w]==k){
                if(l==m&&w==n)
                return -1;
                else
                return 0;
             
            }
        }
    }
    return 1;

}
function fit(a,c,d){

let b=[];
re=0;

for(let i=0;i<9;i++)
{
    for(let j=0;j<9;j++)
    {
        
        if(a[9*i+j]==0){


            b=[];
            b1=[];
            b1.push(i);
            b1.push(j);
            for(let k=1;k<=9;k++)
            {
                l=check(a,i,j,k);
                
                if(l==1){

                    b.push(k);  
                
                }
            }
            
            d.push(b1);
            
            if(b.length==1)
        {
            a[9*i+j]=b[0];            
            
        }
        else{

            c.push(b);

        }
        
        
        }
        
    }
}

}
function backtrack(a,c,d,k){
    if(k==c.length){
        l1=1;
        return ;
    }

    var j,l;
    l1=0;


        for(j=0;j<c[k].length;j++)
    {
        
        l=check(a,d[k][0],d[k][1],c[k][j]);

        if(l==1){

            a[9*(d[k][0])+d[k][1]]=c[k][j];
            backtrack(a,c,d,(k+1));
            

        }
        if(l1==1){
            return ;
        }

    }
    
    
    
        a[9*(d[k][0])+d[k][1]]=0;
        return ;
    
    }



function onsubmit(e){
let i=0;
let c=[];
e.preventDefault();
    num.forEach((item)=>{
        if(item.value){
            a[i]=parseInt(item.value);
            i++;
        }
        else{
            a[i]=0;
            i++;
        }
    });
    for(i=0;i<9;i++)
    {
        for(j=0;j<9;j++)
        {
            if(!Number.isInteger(a[9*i+j]))
            {
                window.alert("Invalid input");
                    return ;
            }
            if(a[9*i+j]!=0){
                k1=a[9*i+j];
                a[9*i+j]=0;
                yu=check(a,i,j,k1);
                if(yu==0)
                {
                    
                    window.alert("Invalid input");
                    return ;
                }
                a[9*i+j]=k1;
            }
        }
        
    }
    
  
    for(i=0;i<20;i++)
    {
        c=[];
        d=[];
        st=fit(a,c,d);
        
        
    }
   
    backtrack(a,c,d,0);
    for(let r=0;r<81;r++){
        num[r].value=String(a[r]);
    }
}

